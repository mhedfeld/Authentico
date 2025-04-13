use dotenv::dotenv;
use serde::Deserialize;
use std::env;
use std::time::Duration;

#[derive(Debug, Clone, Deserialize)]
pub struct ServerConfig {
    pub host: String,
    pub port: u16,
}

#[derive(Debug, Clone, Deserialize)]
pub struct DatabaseConfig {
    pub url: String,
    pub max_connections: u32,
}

#[derive(Debug, Clone, Deserialize)]
pub struct AuthConfig {
    pub jwt_secret: String,
    pub jwt_expiration: u64,
}

#[derive(Debug, Clone, Deserialize)]
pub struct OAuthConfig {
    pub google_client_id: String,
    pub google_client_secret: String,
    pub google_redirect_url: String,
}

#[derive(Debug, Clone, Deserialize)]
pub struct CorsConfig {
    pub allowed_origin: String,
}

#[derive(Debug, Clone, Deserialize)]
pub struct RateLimitConfig {
    pub requests: u64,
    pub duration: u64,
}

#[derive(Debug, Clone)]
pub struct Config {
    pub server: ServerConfig,
    pub database: DatabaseConfig,
    pub auth: AuthConfig,
    pub oauth: OAuthConfig,
    pub cors: CorsConfig,
    pub rate_limit: RateLimitConfig,
}

impl Config {
    pub fn from_env() -> Result<Self, env::VarError> {
        dotenv().ok();

        let server = ServerConfig {
            host: env::var("SERVER_HOST").unwrap_or_else(|_| "127.0.0.1".to_string()),
            port: env::var("SERVER_PORT")
                .unwrap_or_else(|_| "8080".to_string())
                .parse()
                .expect("SERVER_PORT must be a number"),
        };

        let database = DatabaseConfig {
            url: env::var("DATABASE_URL")?,
            max_connections: env::var("DATABASE_MAX_CONNECTIONS")
                .unwrap_or_else(|_| "10".to_string())
                .parse()
                .expect("DATABASE_MAX_CONNECTIONS must be a number"),
        };

        let auth = AuthConfig {
            jwt_secret: env::var("JWT_SECRET")?,
            jwt_expiration: env::var("JWT_EXPIRATION")
                .unwrap_or_else(|_| "86400".to_string())
                .parse()
                .expect("JWT_EXPIRATION must be a number"),
        };

        let oauth = OAuthConfig {
            google_client_id: env::var("GOOGLE_CLIENT_ID")?,
            google_client_secret: env::var("GOOGLE_CLIENT_SECRET")?,
            google_redirect_url: env::var("GOOGLE_REDIRECT_URL")?,
        };

        let cors = CorsConfig {
            allowed_origin: env::var("CORS_ALLOWED_ORIGIN")
                .unwrap_or_else(|_| "http://localhost:3000".to_string()),
        };

        let rate_limit = RateLimitConfig {
            requests: env::var("RATE_LIMIT_REQUESTS")
                .unwrap_or_else(|_| "100".to_string())
                .parse()
                .expect("RATE_LIMIT_REQUESTS must be a number"),
            duration: env::var("RATE_LIMIT_DURATION")
                .unwrap_or_else(|_| "60".to_string())
                .parse()
                .expect("RATE_LIMIT_DURATION must be a number"),
        };

        Ok(Config {
            server,
            database,
            auth,
            oauth,
            cors,
            rate_limit,
        })
    }
}
