use chrono::{Duration, Utc};
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};
use uuid::Uuid;

use crate::config::AppConfig;
use crate::errors::AppError;
use crate::models::token::TokenClaims;

pub fn generate_jwt(
    user_id: Uuid, 
    config: &AppConfig, 
    expiration_hours: Option<i64>
) -> Result<String, AppError> {
    let expiration = Utc::now() + Duration::hours(expiration_hours.unwrap_or(24));
    
    let claims = TokenClaims {
        sub: user_id.to_string(),
        exp: expiration.timestamp() as usize,
        iat: Utc::now().timestamp() as usize,
    };
    
    encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(config.auth.jwt_secret.as_bytes()),
    )
    .map_err(|e| AppError::ServerError(format!("Failed to generate token: {}", e)))
}

pub fn verify_jwt(token: &str, config: &AppConfig) -> Result<TokenClaims, AppError> {
    let token_data = decode::<TokenClaims>(
        token,
        &DecodingKey::from_secret(config.auth.jwt_secret.as_bytes()),
        &Validation::default(),
    )
    .map_err(|_| AppError::AuthError("Invalid token".to_string()))?;
    
    Ok(token_data.claims)
}
