pub mod routes;
pub mod handlers;

use actix_web::web;

pub fn configure_api(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .configure(routes::auth::configure)
            .configure(routes::users::configure)
            .configure(routes::health::configure)
    );
}
