use actix_web::web;
use crate::api::handlers::users;
use crate::middleware::Authentication;

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/users")
            .wrap(Authentication::new())
            .route("/me", web::get().to(users::get_current_user))
            .route("/me", web::put().to(users::update_current_user))
            .route("/me", web::delete().to(users::delete_current_user))
    );
}
