use structopt::StructOpt;

mod errors;
use errors::ParseError;

#[derive(Debug, StructOpt)]
pub struct Opt {
    /// Origin of our host url.
    #[structopt(short = "o", long = "origin")]
    origin: String,

    /// Port for hosting
    #[structopt(short = "p", long = "port", default_value = "7777")]
    port: u16,
}

pub fn init() -> Result<(String, u16), ParseError> {
    let opt = Opt::from_args();
    Ok((opt.origin, opt.port))
}
