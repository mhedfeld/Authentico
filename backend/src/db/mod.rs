use diesel::pg::PgConnection;
use diesel::r2d2::{self, ConnectionManager};
use std::sync::Arc;

use crate::config::Config;

pub mod schema;
pub mod migrations;

pub type Pool = r2d2::Pool<ConnectionManager<PgConnection>>;
pub type DbConnection = r2d2::PooledConnection<ConnectionManager<PgConnection>>;

pub fn establish_connection_pool(config: &Arc<Config>) -> Pool {
    let manager = ConnectionManager::<PgConnection>::new(&config.database.url);
    
    r2d2::Pool::builder()
        .max_size(config.database.max_connections)
        .build(manager)
        .expect("Failed to create database connection pool")
}
