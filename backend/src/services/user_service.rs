use std::sync::Arc;
use uuid::Uuid;

use crate::config::AppConfig;
use crate::errors::AppError;
use crate::models::user::{User, UpdateUserDto, UserResponse};
use crate::repositories::UserRepository;

pub struct UserService<UR> {
    config: Arc<AppConfig>,
    user_repository: UR,
}

impl<UR> UserService<UR>
where
    UR: UserRepository,
{
    pub fn new(config: Arc<AppConfig>, user_repository: UR) -> Self {
        Self {
            config,
            user_repository,
        }
    }
    
    pub async fn get_user(&self, id: Uuid) -> Result<UserResponse, AppError> {
        let user = self.user_repository.find_by_id(id).await?;
        Ok(UserResponse::from(user))
    }
    
    pub async fn update_user(&self, id: Uuid, data: UpdateUserDto) -> Result<UserResponse, AppError> {
        let user = self.user_repository.update(id, data).await?;
        Ok(UserResponse::from(user))
    }
    
    pub async fn delete_user(&self, id: Uuid) -> Result<(), AppError> {
        self.user_repository.delete(id).await
    }
}
