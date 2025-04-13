use std::sync::Arc;
use std::future::{ready, Ready};
use std::task::{Context, Poll};
use std::time::Duration;

use actix_web::{
    dev::{Service, ServiceRequest, ServiceResponse, Transform},
    error::ErrorTooManyRequests,
    http::header,
    Error,
};
use futures_util::future::LocalBoxFuture;
use governor::{Quota, RateLimiter, clock::DefaultClock};
use governor::state::{NotKeyed, InMemoryState};
use std::num::NonZeroU32;

use crate::config::AppConfig;

pub struct RateLimitMiddleware {
    limiter: Arc<RateLimiter<NotKeyed, InMemoryState, DefaultClock>>,
}

impl RateLimitMiddleware {
    pub fn new(config: &Arc<AppConfig>) -> Self {
        let quota = Quota::per_minute(NonZeroU32::new(config.security.rate_limit_requests as u32).unwrap());
        let limiter = Arc::new(RateLimiter::direct(quota));
        
        Self { limiter }
    }
}

impl<S, B> Transform<S, ServiceRequest> for RateLimitMiddleware
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error> + 'static,
    B: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type Transform = RateLimitMiddlewareService<S>;
    type InitError = ();
    type Future = Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        ready(Ok(RateLimitMiddlewareService {
            service,
            limiter: self.limiter.clone(),
        }))
    }
}

pub struct RateLimitMiddlewareService<S> {
    service: S,
    limiter: Arc<RateLimiter<NotKeyed, InMemoryState, DefaultClock>>,
}

impl<S, B> Service<ServiceRequest> for RateLimitMiddlewareService<S>
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error> + 'static,
    B: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type Future = LocalBoxFuture<'static, Result<Self::Response, Self::Error>>;

    fn poll_ready(&self, cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
        self.service.poll_ready(cx)
    }

    fn call(&self, req: ServiceRequest) -> Self::Future {
        // Check if request is allowed by rate limiter
        match self.limiter.check() {
            Ok(_) => {
                // Request is allowed, continue with the service chain
                let fut = self.service.call(req);
                Box::pin(async move {
                    let res = fut.await?;
                    Ok(res)
                })
            }
            Err(negative) => {
                // Request is rate limited
                // Calculate wait time for the client
                let wait_time = negative.wait_time_from(DefaultClock::default().now());
                
                Box::pin(async move {
                    // Return 429 Too Many Requests with Retry-After header
                    Err(ErrorTooManyRequests(format!("Rate limit exceeded. Try again in {} seconds", wait_time.as_secs())))
                })
            }
        }
    }
}
