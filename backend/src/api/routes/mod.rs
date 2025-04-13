pub mod auth;
pub mod health;
pub mod users;

use actix_web::web;

// Function to configure all routes that can be called from server.rs
pub fn configure_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .service(web::scope("/v1")
                // Configure each module's routes
                .configure(health::configure_routes)
                .configure(auth::configure_routes)
                .configure(users::configure_routes)
            )
    );
}
