use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use validator::Validate;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct User {
    pub id: Uuid,
    pub username: String,
    pub email: String,
    #[serde(skip_serializing)]
    pub password_hash: Option<String>,
    pub full_name: Option<String>,
    pub bio: Option<String>,
    pub profile_image_url: Option<String>,
    pub is_verified: bool,
    pub oauth_provider: Option<String>,
    pub oauth_id: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Deserialize, Validate)]
pub struct CreateUserDto {
    #[validate(length(min = 3, max = 50, message = "Username must be between 3 and 50 characters"))]
    pub username: String,
    
    #[validate(email(message = "Email must be valid"))]
    pub email: String,
    
    #[validate(length(min = 8, message = "Password must be at least 8 characters"))]
    pub password: String,
    
    pub full_name: Option<String>,
    pub bio: Option<String>,
}

#[derive(Debug, Deserialize, Validate)]
pub struct LoginDto {
    #[validate(email(message = "Email must be valid"))]
    pub email: String,
    
    pub password: String,
}

#[derive(Debug, Deserialize, Validate)]
pub struct UpdateUserDto {
    #[validate(length(min = 3, max = 50, message = "Username must be between 3 and 50 characters"))]
    pub username: Option<String>,
    
    #[validate(email(message = "Email must be valid"))]
    pub email: Option<String>,
    
    pub full_name: Option<String>,
    pub bio: Option<String>,
    pub profile_image_url: Option<String>,
}

#[derive(Debug, Serialize)]
pub struct UserResponse {
    pub id: Uuid,
    pub username: String,
    pub email: String,
    pub full_name: Option<String>,
    pub bio: Option<String>,
    pub profile_image_url: Option<String>,
    pub is_verified: bool,
    pub created_at: DateTime<Utc>,
}

impl From<User> for UserResponse {
    fn from(user: User) -> Self {
        Self {
            id: user.id,
            username: user.username,
            email: user.email,
            full_name: user.full_name,
            bio: user.bio,
            profile_image_url: user.profile_image_url,
            is_verified: user.is_verified,
            created_at: user.created_at,
        }
    }
}
