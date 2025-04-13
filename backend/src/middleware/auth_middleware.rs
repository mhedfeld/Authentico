use std::sync::Arc;
use std::future::{ready, Ready};
use std::pin::Pin;
use std::task::{Context, Poll};

use actix_web::{
    dev::{Service, ServiceRequest, ServiceResponse, Transform},
    error::ErrorUnauthorized,
    http::header,
    web::Data,
    Error, HttpMessage,
};
use futures_util::future::LocalBoxFuture;
use uuid::Uuid;

use crate::services::AuthService;
use crate::repositories::{UserRepository, TokenRepository};

pub struct Authentication;

impl Authentication {
    pub fn new() -> Self {
        Authentication
    }
}

impl<S, B> Transform<S, ServiceRequest> for Authentication
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error> + 'static,
    B: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type Transform = AuthenticationMiddleware<S>;
    type InitError = ();
    type Future = Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        ready(Ok(AuthenticationMiddleware { service }))
    }
}

pub struct AuthenticationMiddleware<S> {
    service: S,
}

impl<S, B> Service<ServiceRequest> for AuthenticationMiddleware<S>
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error> + 'static,
    B: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type Future = LocalBoxFuture<'static, Result<Self::Response, Self::Error>>;

    fn poll_ready(&self, cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
        self.service.poll_ready(cx)
    }

    fn call(&self, req: ServiceRequest) -> Self::Future {
        // Extract authorization header
        let auth_header = req.headers().get(header::AUTHORIZATION);
        
        if auth_header.is_none() {
            return Box::pin(async move {
                Err(ErrorUnauthorized("No authorization header found"))
            });
        }
        
        let auth_header = auth_header.unwrap().to_str().unwrap_or("");
        if !auth_header.starts_with("Bearer ") {
            return Box::pin(async move {
                Err(ErrorUnauthorized("Invalid authorization format"))
            });
        }
        
        // Extract the token
        let token = &auth_header[7..]; // Skip "Bearer "
        
        // Get auth service from app data
        let auth_service_data = match req.app_data::<Data<AuthService<dyn UserRepository, dyn TokenRepository>>>() {
            Some(service) => service.clone(),
            None => {
                return Box::pin(async move {
                    Err(ErrorUnauthorized("Authorization service not available"))
                });
            }
        };
        
        // Clone what we need for the async block
        let service = self.service.clone();
        let token = token.to_string();
        
        Box::pin(async move {
            // Validate token
            match auth_service_data.validate_token(&token).await {
                Ok(user_id) => {
                    // Add user_id to request extensions
                    req.extensions_mut().insert(user_id);
                    
                    // Continue with the request
                    service.call(req).await
                }
                Err(_) => Err(ErrorUnauthorized("Invalid or expired token")),
            }
        })
    }
}
