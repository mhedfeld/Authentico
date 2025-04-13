use actix_web::web;
use crate::api::handlers::health;

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.route("/health", web::get().to(health::health_check));
}
