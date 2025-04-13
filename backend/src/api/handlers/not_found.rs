use actix_web::{HttpResponse, HttpRequest};
use crate::errors::AppError;

pub async fn not_found_handler(req: HttpRequest) -> Result<HttpResponse, AppError> {
    log::debug!("No route found for {}", req.path());
    
    Ok(HttpResponse::NotFound().json(serde_json::json!({
        "status": "error",
        "message": format!("Route not found: {}", req.path())
    })))
}
