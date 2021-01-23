#[macro_use]
mod logging;
mod arg_parse;
mod server;
use server::Server;

fn main() -> anyhow::Result<()> {
    logging::init()?;

    let (origin, port) = arg_parse::init()?;

    let server = Server::new(&origin, port);

    server.run()?;

    Ok(())
}
