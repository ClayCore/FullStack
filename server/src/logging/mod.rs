mod errors;

use chrono::Local;
use colored::*;
use env_logger::Builder;
use errors::LoggingError;
use log::LevelFilter;
use std::io::Write;

macro_rules! try_log {
    ($expr:expr) => {
        match $expr {
            ::std::result::Result::Ok(val) => val,
            ::std::result::Result::Err(err) => {
                log::error!("{}", err);
                return ::std::result::Result::Err(::std::convert::From::from(err));
            }
        }
    };
    ($expr:expr,) => {
        $crate::logging::try_log!($expr)
    };
}

pub fn init() -> Result<(), LoggingError> {
    dotenv::dotenv()?;

    Builder::new()
        .format(|buf, record| {
            let level = match record.level() {
                log::Level::Error => format!("{}", format!("{}", record.level()).bright_red()),
                log::Level::Debug => format!("{}", format!("{}", record.level()).bright_blue()),
                log::Level::Info => format!("{}", format!("{}", record.level()).bright_green()),
                log::Level::Trace => format!("{}", format!("{}", record.level()).bright_magenta()),
                log::Level::Warn => format!("{}", format!("{}", record.level()).bright_yellow()),
            };
            writeln!(
                buf,
                "[{} {} {}]: {}",
                Local::now().format("%Y/%m/%d | %H:%M:%S"),
                level,
                record.target(),
                record.args(),
            )
        })
        .filter(None, LevelFilter::Trace)
        .init();

    Ok(())
}
