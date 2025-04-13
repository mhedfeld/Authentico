use actix_web::{web, HttpResponse};
use crate::services::app_state::AppState;

pub async fn health_check(app_state: web::Data<AppState>) -> HttpResponse {
    let counter = app_state.some_counter.lock().await;
    
    HttpResponse::Ok().json(serde_json::json!({
        "status": "ok",
        "message": "Service is running",
        "counter": *counter,
    }))
}
