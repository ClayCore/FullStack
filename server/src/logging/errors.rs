use thiserror::Error;

#[derive(Debug, Error)]
pub enum LoggingError {
    #[error("Environment variables couldn't be loaded through `dotenv`.")]
    DotEnv(#[from] dotenv::Error),

    #[error("Logging interface failed.")]
    Interface(#[from] log::SetLoggerError),

    #[error("I/O process failed.")]
    IOError(#[from] std::io::Error),
}
