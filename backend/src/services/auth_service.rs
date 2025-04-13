use std::sync::Arc;
use uuid::Uuid;
use chrono::{Duration, Utc};

use crate::config::AppConfig;
use crate::errors::AppError;
use crate::models::user::{CreateUserDto, LoginDto, User, UserResponse};
use crate::models::token::{AuthResponse, TokenType};
use crate::repositories::{UserRepository, TokenRepository};
use crate::utils::{password, jwt};

pub struct AuthService<UR, TR> {
    user_repository: Arc<UR>,
    token_repository: Arc<TR>,
    config: Arc<AppConfig>,
}

impl<UR, TR> AuthService<UR, TR>
where
    UR: UserRepository + 'static,
    TR: TokenRepository + 'static,
{
    pub fn new(
        user_repository: Arc<UR>,
        token_repository: Arc<TR>,
        config: Arc<AppConfig>,
    ) -> Self {
        Self {
            user_repository,
            token_repository,
            config,
        }
    }
    
    pub async fn register(&self, dto: CreateUserDto) -> Result<AuthResponse, AppError> {
        // Validate that user with this email or username doesn't exist
        if let Some(_) = self.user_repository.find_by_email(&dto.email).await? {
            return Err(AppError::ConflictError(format!("User with email {} already exists", dto.email)));
        }
        
        if let Some(_) = self.user_repository.find_by_username(&dto.username).await? {
            return Err(AppError::ConflictError(format!("User with username {} already exists", dto.username)));
        }
        
        // Hash password
        let hashed_password = password::hash_password(&dto.password)?;
        
        // Create user
        let user = self.user_repository.create(dto, Some(hashed_password)).await?;
        
        // Generate tokens
        let access_token = jwt::generate_jwt(
            user.id, 
            &self.config, 
            Some(self.config.auth.jwt_expiration as i64 / 3600)  // Convert seconds to hours
        )?;
        
        let refresh_token = self.create_refresh_token(user.id).await?;
        
        // Return auth response
        Ok(AuthResponse {
            access_token,
            refresh_token,
            token_type: "Bearer".to_string(),
            expires_in: self.config.auth.jwt_expiration,
            user: UserResponse::from(user),
        })
    }
    
    pub async fn login(&self, dto: LoginDto) -> Result<AuthResponse, AppError> {
        // Find user by email
        let user = match self.user_repository.find_by_email(&dto.email).await? {
            Some(user) => user,
            None => return Err(AppError::AuthError("Invalid email or password".to_string())),
        };
        
        // Verify password
        let password_hash = user.password_hash.clone().unwrap_or_default();
        let is_valid = password::verify_password(&dto.password, &password_hash)?;
        
        if !is_valid {
            return Err(AppError::AuthError("Invalid email or password".to_string()));
        }
        
        // Generate tokens
        let access_token = jwt::generate_jwt(
            user.id, 
            &self.config, 
            Some(self.config.auth.jwt_expiration as i64 / 3600)  // Convert seconds to hours
        )?;
        
        let refresh_token = self.create_refresh_token(user.id).await?;
        
        // Return auth response
        Ok(AuthResponse {
            access_token,
            refresh_token,
            token_type: "Bearer".to_string(),
            expires_in: self.config.auth.jwt_expiration,
            user: UserResponse::from(user),
        })
    }
    
    pub async fn refresh_token(&self, refresh_token: &str) -> Result<AuthResponse, AppError> {
        // Find token in database
        let token = match self.token_repository.find_by_value(refresh_token).await? {
            Some(token) => token,
            None => return Err(AppError::AuthError("Invalid refresh token".to_string())),
        };
        
        // Check if token is expired
        if let Some(expires_at) = token.expires_at {
            if expires_at < Utc::now() {
                // Delete the expired token
                let _ = self.token_repository.delete_token(refresh_token).await;
                return Err(AppError::AuthError("Refresh token expired".to_string()));
            }
        }
        
        // Check token type
        if token.token_type != TokenType::Refresh.to_string() {
            return Err(AppError::AuthError("Invalid token type".to_string()));
        }
        
        // Find user
        let user = self.user_repository.find_by_id(token.user_id).await?;
        
        // Generate new access token
        let access_token = jwt::generate_jwt(
            user.id, 
            &self.config, 
            Some(self.config.auth.jwt_expiration as i64 / 3600)  // Convert seconds to hours
        )?;
        
        // Generate new refresh token and delete the old one
        let _ = self.token_repository.delete_token(refresh_token).await;
        let new_refresh_token = self.create_refresh_token(user.id).await?;
        
        // Return auth response
        Ok(AuthResponse {
            access_token,
            refresh_token: new_refresh_token,
            token_type: "Bearer".to_string(),
            expires_in: self.config.auth.jwt_expiration,
            user: UserResponse::from(user),
        })
    }
    
    pub async fn logout(&self, refresh_token: &str) -> Result<(), AppError> {
        // Delete the refresh token
        self.token_repository.delete_token(refresh_token).await
    }
    
    // Helper method to create refresh tokens
    async fn create_refresh_token(&self, user_id: Uuid) -> Result<String, AppError> {
        // Set expiration date
        let expires_at = Utc::now() + Duration::seconds(self.config.auth.refresh_token_expiration as i64);
        
