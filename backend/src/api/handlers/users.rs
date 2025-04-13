use actix_web::{web, HttpResponse, Responder};
use uuid::Uuid;

use crate::errors::AppError;
use crate::models::user::UpdateUserDto;
use crate::services::UserService;
use crate::repositories::UserRepository;

pub async fn get_current_user(
    user_id: web::ReqData<Uuid>,
    service: web::Data<UserService<impl UserRepository>>,
) -> Result<impl Responder, AppError> {
    let user = service.get_user(*user_id).await?;
    
    Ok(HttpResponse::Ok().json(user))
}

pub async fn update_current_user(
    user_id: web::ReqData<Uuid>,
    update_dto: web::Json<UpdateUserDto>,
    service: web::Data<UserService<impl UserRepository>>,
) -> Result<impl Responder, AppError> {
    let updated_user = service.update_user(*user_id, update_dto.into_inner()).await?;
    
    Ok(HttpResponse::Ok().json(updated_user))
}

pub async fn delete_current_user(
    user_id: web::ReqData<Uuid>,
    service: web::Data<UserService<impl UserRepository>>,
) -> Result<impl Responder, AppError> {
    service.delete_user(*user_id).await?;
    
    Ok(HttpResponse::NoContent().finish())
}
