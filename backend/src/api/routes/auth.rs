use actix_web::web;
use crate::api::handlers::auth;

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/auth")
            .route("/register", web::post().to(auth::register))
            .route("/login", web::post().to(auth::login))
            .route("/refresh", web::post().to(auth::refresh))
            .route("/logout", web::post().to(auth::logout))
            .route("/google/callback", web::get().to(auth::google_callback))
            .route("/google", web::get().to(auth::google_auth))
    );
}
