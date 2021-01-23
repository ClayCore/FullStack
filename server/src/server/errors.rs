use thiserror::Error;

#[derive(Debug, Error)]
pub enum ServerError {
    #[error("Port number reserved. {0}")]
    ReservedPort(u16),

    #[error("Failed I/O process.")]
    IOProcess(#[from] std::io::Error),
}
