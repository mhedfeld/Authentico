use actix_cors::Cors;
use actix_web::{
    middleware,
    web::{self, Data},
    App, HttpServer,
};
use dotenv::dotenv;
use std::env;

mod api;
mod config;
mod db;
mod errors;
mod middleware;

use crate::api::routes;
use crate::api::handlers::not_found;
use crate::config::app_state::AppState;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Load environment variables from .env file
    dotenv().ok();

    // Initialize logger
    env_logger::init_from_env(env_logger::Env::new().default_filter_or("info"));

    // Get server address from environment or use default
    let host = env::var("HOST").unwrap_or_else(|_| "127.0.0.1".to_string());
    let port = env::var("PORT").unwrap_or_else(|_| "8080".to_string());
    let server_addr = format!("{}:{}", host, port);
    
    // Log startup information
    log::info!("Starting server at http://{}", server_addr);

    // Initialize application state
    let app_state = Data::new(AppState::new().await);

    // Start HTTP server
    HttpServer::new(move || {
        // Configure CORS
        let cors = Cors::default()
            .allow_any_origin()
            .allow_any_method()
            .allow_any_header()
            .max_age(3600);

        // Build application with middleware and routes
        App::new()
            .wrap(middleware::Logger::default())
            .wrap(middleware::Compress::default())
            .wrap(middleware::NormalizePath::new(
                middleware::TrailingSlash::Trim,
            ))
            .wrap(cors)
            .app_data(app_state.clone())
            // Register routes using the configure_routes function from the routes module
            .configure(routes::configure_routes)
            // Default handler for 404 responses
            .default_service(web::route().to(not_found::not_found_handler))
    })
    .bind(server_addr)?
    .workers(num_cpus::get()) // Use number of CPU cores for worker threads
    .run()
    .await
}
