use async_trait::async_trait;
use diesel::prelude::*;
use diesel::result::Error as DieselError;
use chrono::Utc;
use uuid::Uuid;

use crate::db::{DbPool, DbConnection};
use crate::errors::AppError;
use crate::models::user::{User, CreateUserDto, UpdateUserDto};

#[async_trait]
pub trait UserRepository: Send + Sync {
    async fn find_by_id(&self, id: Uuid) -> Result<User, AppError>;
    async fn find_by_email(&self, email: &str) -> Result<Option<User>, AppError>;
    async fn find_by_username(&self, username: &str) -> Result<Option<User>, AppError>;
    async fn create(&self, data: CreateUserDto, password_hash: Option<String>) -> Result<User, AppError>;
    async fn update(&self, id: Uuid, data: UpdateUserDto) -> Result<User, AppError>;
    async fn delete(&self, id: Uuid) -> Result<(), AppError>;
}

pub struct DieselUserRepository {
    pool: DbPool,
}

impl DieselUserRepository {
    pub fn new(pool: DbPool) -> Self {
        Self { pool }
    }

    fn get_connection(&self) -> Result<DbConnection, DieselError> {
        self.pool.get().map_err(|_| DieselError::NotFound)
    }
}

#[async_trait]
impl UserRepository for DieselUserRepository {
    async fn find_by_id(&self, id: Uuid) -> Result<User, AppError> {
        use crate::db::schema::users::dsl::*;

        let mut conn = self.get_connection()?;
        
        let user = users
            .find(id)
            .first::<User>(&mut conn)
            .map_err(|e| match e {
                DieselError::NotFound => AppError::NotFoundError(format!("User with ID {} not found", id)),
                _ => AppError::DatabaseError(e)
            })?;
            
        Ok(user)
    }
    
    async fn find_by_email(&self, email_value: &str) -> Result<Option<User>, AppError> {
        use crate::db::schema::users::dsl::*;

        let mut conn = self.get_connection()?;
        
        let user = users
            .filter(email.eq(email_value))
            .first::<User>(&mut conn)
            .optional()
            .map_err(AppError::DatabaseError)?;
            
        Ok(user)
    }
    
    async fn find_by_username(&self, username_value: &str) -> Result<Option<User>, AppError> {
        use crate::db::schema::users::dsl::*;

        let mut conn = self.get_connection()?;
        
        let user = users
            .filter(username.eq(username_value))
            .first::<User>(&mut conn)
            .optional()
            .map_err(AppError::DatabaseError)?;
            
        Ok(user)
    }
    
    async fn create(&self, data: CreateUserDto, password_hash: Option<String>) -> Result<User, AppError> {
        use crate::db::schema::users::dsl::*;

        // Check if user with same email or username already exists
        if let Some(_) = self.find_by_email(&data.email).await? {
            return Err(AppError::ConflictError(format!("User with email {} already exists", data.email)));
        }
        
        if let Some(_) = self.find_by_username(&data.username).await? {
            return Err(AppError::ConflictError(format!("User with username {} already exists", data.username)));
        }
        
        let new_user = NewUser {
            id: Uuid::new_v4(),
            username: data.username,
            email: data.email,
            password_hash,
            full_name: data.full_name,
            bio: data.bio,
            profile_image_url: None,
            is_verified: false,
            oauth_provider: None,
            oauth_id: None,
            created_at: Utc::now(),
            updated_at: Utc::now(),
        };
        
        let mut conn = self.get_connection()?;
        
        let user = diesel::insert_into(users)
            .values(&new_user)
            .get_result::<User>(&mut conn)
            .map_err(AppError::DatabaseError)?;
            
        Ok(user)
    }
    
    async fn update(&self, id: Uuid, data: UpdateUserDto) -> Result<User, AppError> {
        use crate::db::schema::users::dsl::*;

        // Get current user
        let current_user = self.find_by_id(id).await?;
        
        // Check if new email already exists for another user
        if let Some(email_value) = &data.email {
            if email_value != &current_user.email {
                if let Some(_) = self.find_by_email(email_value).await? {
                    return Err(AppError::ConflictError(
                        format!("User with email {} already exists", email_value)
                    ));
                }
            }
        }
        
        // Check if new username already exists for another user
        if let Some(username_value) = &data.username {
            if username_value != &current_user.username {
                if let Some(_) = self.find_by_username(username_value).await? {
                    return Err(AppError::ConflictError(
                        format!("User with username {} already exists", username_value)
                    ));
                }
            }
        }
        
        let update_user = UpdateUserDb {
            username: data.username,
            email: data.email,
            full_name: data.full_name,
            bio: data.bio,
            profile_image_url: data.profile_image_url,
            updated_at: Some(Utc::now()),
        };
        
        let mut conn = self.get_connection()?;
        
        let updated_user = diesel::update(users.find(id))
            .set(update_user)
            .get_result::<User>(&mut conn)
            .map_err(|e| match e {
                DieselError::NotFound => AppError::NotFoundError(format!("User with ID {} not found", id)),
                _ => AppError::DatabaseError(e),
            })?;
            
        Ok(updated_user)
    }
    
    async fn delete(&self, id: Uuid) -> Result<(), AppError> {
        use crate::db::schema::users::dsl::*;

        let mut conn = self.get_connection()?;
        
        let num_deleted = diesel::delete(users.find(id))
            .execute(&mut conn)
            .map_err(AppError::DatabaseError)?;
            
        if num_deleted == 0 {
            return Err(AppError::NotFoundError(format!("User with ID {} not found", id)));
        }
        
        Ok(())
    }
}

// Additional structs needed for Diesel
use crate::db::schema::users;

#[derive(Insertable)]
#[diesel(table_name = users)]
struct NewUser {
    pub id: Uuid,
    pub username: String,
    pub email: String,
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

#[derive(AsChangeset)]
#[diesel(table_name = users)]
struct UpdateUserDb {
    pub username: Option<String>,
    pub email: Option<String>,
    pub full_name: Option<String>,
    pub bio: Option<String>,
    pub profile_image_url: Option<String>,
    pub updated_at: Option<DateTime<Utc>>,
}
