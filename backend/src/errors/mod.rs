use thiserror::Error;
use actix_web::{HttpResponse, ResponseError};
use diesel::result::Error as DieselError;
use std::fmt;

#[derive(Debug, Error)]
pub enum AppError {
    #[error("Database error: {0}")]
    DatabaseError(#[from] DieselError),
    
    #[error("Authentication error: {0}")]
    AuthError(String),
    
    #[error("Validation error: {0}")]
    ValidationError(String),
    
    #[error("Not found: {0}")]
    NotFoundError(String),
    
    #[error("Conflict: {0}")]
    ConflictError(String),
    
    #[error("Server error: {0}")]
    ServerError(String),
}

impl ResponseError for AppError {
    fn error_response(&self) -> HttpResponse {
        match self {
            AppError::DatabaseError(_) => {
                HttpResponse::InternalServerError().json("Internal server error")
            }
            AppError::AuthError(msg) => {
                HttpResponse::Unauthorized().json(msg)
            }
            AppError::ValidationError(msg) => {
                HttpResponse::BadRequest().json(msg)
            }
            AppError::NotFoundError(msg) => {
                HttpResponse::NotFound().json(msg)
            }
            AppError::ConflictError(msg) => {
                HttpResponse::Conflict().json(msg)
            }
            AppError::ServerError(_) => {
                HttpResponse::InternalServerError().json("Internal server error")
            }
        }
    }
}
