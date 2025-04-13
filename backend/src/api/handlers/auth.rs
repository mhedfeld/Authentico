use actix_web::{web, HttpResponse, Responder};
use std::sync::Arc;
use uuid::Uuid;
use oauth2::basic::BasicClient;
use oauth2::{
    AuthUrl, ClientId, ClientSecret, RedirectUrl, TokenUrl,
    AuthorizationCode, CsrfToken, Scope, TokenResponse,
};

use crate::config::AppConfig;
use crate::errors::AppError;
use crate::models::user::{CreateUserDto, LoginDto};
use crate::models::token::RefreshTokenRequest;
use crate::services::AuthService;
use crate::repositories::{UserRepository, TokenRepository};

pub async fn register(
    data: web::Data<AuthService<impl UserRepository, impl TokenRepository>>,
    user_dto: web::Json<CreateUserDto>,
) -> Result<impl Responder, AppError> {
    let auth_response = data.register(user_dto.into_inner()).await?;
    
    Ok(HttpResponse::Created().json(auth_response))
}

pub async fn login(
    data: web::Data<AuthService<impl UserRepository, impl TokenRepository>>,
    login_dto: web::Json<LoginDto>,
) -> Result<impl Responder, AppError> {
    let auth_response = data.login(login_dto.into_inner()).await?;
    
    Ok(HttpResponse::Ok().json(auth_response))
}

pub async fn refresh(
    data: web::Data<AuthService<impl UserRepository, impl TokenRepository>>,
    refresh_req: web::Json<RefreshTokenRequest>,
) -> Result<impl Responder, AppError> {
    let auth_response = data.refresh_token(&refresh_req.refresh_token).await?;
    
    Ok(HttpResponse::Ok().json(auth_response))
}

pub async fn logout(
    data: web::Data<AuthService<impl UserRepository, impl TokenRepository>>,
    refresh_req: web::Json<RefreshTokenRequest>,
) -> Result<impl Responder, AppError> {
    data.logout(&refresh_req.refresh_token).await?;
    
    Ok(HttpResponse::NoContent().finish())
}

pub async fn google_auth(
    config: web::Data<Arc<AppConfig>>,
) -> impl Responder {
    // Create OAuth client
    let client = BasicClient::new(
        ClientId::new(config.oauth.google_client_id.clone()),
        Some(ClientSecret::new(config.oauth.google_client_secret.clone())),
        AuthUrl::new("https://accounts.google.com/o/oauth2/v2/auth".to_string()).unwrap(),
        Some(TokenUrl::new("https://oauth2.googleapis.com/token".to_string()).unwrap()),
    )
    .set_redirect_uri(RedirectUrl::new(config.oauth.google_redirect_url.clone()).unwrap());
    
    // Generate the authorization URL to which we'll redirect the user
    let (auth_url, _csrf_token) = client
        .authorize_url(CsrfToken::new_random)
        .add_scope(Scope::new("email".to_string()))
        .add_scope(Scope::new("profile".to_string()))
        .url();
    
    HttpResponse::TemporaryRedirect()
        .append_header(("Location", auth_url.to_string()))
        .finish()
}

pub async fn google_callback(
    config: web::Data<Arc<AppConfig>>,
    query: web::Query<std::collections::HashMap<String, String>>,
) -> impl Responder {
    // In a real implementation, you would:
    // 1. Get the authorization code from the query parameters
    // 2. Exchange it for an access token
    // 3. Use the access token to get user info from Google
    // 4. Create or update a user in your database
    // 5. Generate authentication tokens
    // 6. Redirect to frontend with tokens
    
    // This is just a placeholder
    let code = query.get("code").cloned().unwrap_or_default();
    
    // Redirect to frontend with a mock token (in a real app, generate proper tokens)
    let frontend_url = format!("{}?token=mock_token_for_demo", config.security.cors_allowed_origin);
    
    HttpResponse::TemporaryRedirect()
        .append_header(("Location", frontend_url))
        .finish()
}
