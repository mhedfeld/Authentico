use async_trait::async_trait;
use diesel::prelude::*;
use chrono::{DateTime, Utc};
use uuid::Uuid;

use crate::db::{DbPool, DbConnection};
use crate::errors::AppError;
use crate::models::token::{Token, TokenType};

#[async_trait]
pub trait TokenRepository: Send + Sync {
    async fn create_token(&self, user_id: Uuid, token_type: TokenType, expires_at: Option<DateTime<Utc>>) -> Result<Token, AppError>;
    async fn find_by_value(&self, token_value: &str) -> Result<Option<Token>, AppError>;
    async fn find_by_user_and_type(&self, user_id: Uuid, token_type: TokenType) -> Result<Vec<Token>, AppError>;
    async fn delete_token(&self, token_value: &str) -> Result<(), AppError>;
    async fn delete_user_tokens(&self, user_id: Uuid, token_type: Option<TokenType>) -> Result<(), AppError>;
}

pub struct DieselTokenRepository {
    pool: DbPool,
}

impl DieselTokenRepository {
    pub fn new(pool: DbPool) -> Self {
        Self { pool }
    }

    fn get_connection(&self) -> Result<DbConnection, diesel::result::Error> {
        self.pool.get().map_err(|_| diesel::result::Error::NotFound)
    }
}

#[async_trait]
impl TokenRepository for DieselTokenRepository {
    async fn create_token(&self, user_id: Uuid, token_type: TokenType, expires_at: Option<DateTime<Utc>>) -> Result<Token, AppError> {
        use crate::db::schema::tokens::dsl::*;
        
        let token_value = Uuid::new_v4().to_string();
        
        let new_token = NewToken {
            id: Uuid::new_v4(),
            user_id,
            token_value: token_value.clone(),
            token_type: token_type.to_string(),
            expires_at,
            created_at: Utc::now(),
        };
        
        let mut conn = self.get_connection()?;
        
        let token = diesel::insert_into(tokens)
            .values(&new_token)
            .get_result::<Token>(&mut conn)
            .map_err(AppError::DatabaseError)?;
            
        Ok(token)
    }
    
    async fn find_by_value(&self, token_value_param: &str) -> Result<Option<Token>, AppError> {
        use crate::db::schema::tokens::dsl::*;
        
        let mut conn = self.get_connection()?;
        
        let token = tokens
            .filter(token_value.eq(token_value_param))
            .first::<Token>(&mut conn)
            .optional()
            .map_err(AppError::DatabaseError)?;
            
        Ok(token)
    }
    
    async fn find_by_user_and_type(&self, user_id_param: Uuid, token_type_param: TokenType) -> Result<Vec<Token>, AppError> {
        use crate::db::schema::tokens::dsl::*;
        
        let mut conn = self.get_connection()?;
        
        let results = tokens
            .filter(user_id.eq(user_id_param))
            .filter(token_type.eq(token_type_param.to_string()))
            .load::<Token>(&mut conn)
            .map_err(AppError::DatabaseError)?;
            
        Ok(results)
    }
    
    async fn delete_token(&self, token_value_param: &str) -> Result<(), AppError> {
        use crate::db::schema::tokens::dsl::*;
        
        let mut conn = self.get_connection()?;
        
        let num_deleted = diesel::delete(tokens.filter(token_value.eq(token_value_param)))
            .execute(&mut conn)
            .map_err(AppError::DatabaseError)?;
            
        if num_deleted == 0 {
            return Err(AppError::NotFoundError("Token not found".to_string()));
        }
        
        Ok(())
    }
    
    async fn delete_user_tokens(&self, user_id_param: Uuid, token_type_param: Option<TokenType>) -> Result<(), AppError> {
        use crate::db::schema::tokens::dsl::*;
        
        let mut conn = self.get_connection()?;
        
        let mut query = diesel::delete(tokens).into_boxed();
        
        query = query.filter(user_id.eq(user_id_param));
        
        if let Some(tt) = token_type_param {
            query = query.filter(token_type.eq(tt.to_string()));
        }
        
        query.execute(&mut conn).map_err(AppError::DatabaseError)?;
        
        Ok(())
    }
}

// Additional struct needed for Diesel
use crate::db::schema::tokens;

#[derive(Insertable)]
#[diesel(table_name = tokens)]
struct NewToken {
    pub id: Uuid,
    pub user_id: Uuid,
    pub token_value: String,
    pub token_type: String,
    pub expires_at: Option<DateTime<Utc>>,
    pub created_at: DateTime<Utc>,
}
