use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct Token {
    pub id: Uuid,
    pub user_id: Uuid,
    pub token: String,
    pub token_type: TokenType,
    pub expires_at: Option<DateTime<Utc>>,
    pub created_at: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize, PartialEq, Eq)]
pub enum TokenType {
    Access,
    Refresh,
    PasswordReset,
    EmailVerification,
}

impl std::fmt::Display for TokenType {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            TokenType::Access => write!(f, "access"),
            TokenType::Refresh => write!(f, "refresh"),
            TokenType::PasswordReset => write!(f, "password_reset"),
            TokenType::EmailVerification => write!(f, "email_verification"),
        }
    }
}

impl From<&str> for TokenType {
    fn from(s: &str) -> Self {
        match s {
            "access" => TokenType::Access,
            "refresh" => TokenType::Refresh,
            "password_reset" => TokenType::PasswordReset,
            "email_verification" => TokenType::EmailVerification,
            _ => TokenType::Access,
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TokenClaims {
    pub sub: String,  // Subject (user ID)
    pub exp: usize,   // Expiration time
    pub iat: usize,   // Issued at time
}

#[derive(Debug, Serialize)]
pub struct AuthResponse {
    pub access_token: String,
    pub refresh_token: String,
    pub token_type: String,
    pub expires_in: u64,
    pub user: crate::models::user::UserResponse,
}

#[derive(Debug, Deserialize)]
pub struct RefreshTokenRequest {
    pub refresh_token: String,
}
