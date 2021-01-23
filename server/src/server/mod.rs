mod errors;
use errors::ServerError;

use log::info;
use std::io::prelude::*;
use std::net::{TcpListener, TcpStream};

#[derive(Debug)]
pub struct Server<'a> {
    origin: &'a str,
    port: u16,
}

impl<'a> Server<'a> {
    pub fn new(origin: &'a str, port: u16) -> Self {
        Self { origin, port }
    }

    // TODO: check if the origin and port are valid.
    pub fn check(&self) -> Result<(), ServerError> {
        if self.port < 1024 {
            return Err(ServerError::ReservedPort(self.port));
        }

        Ok(())
    }

    fn handle_connection(&self, mut stream: TcpStream) -> Result<(), ServerError> {
        let mut buffer = [0; 1024];

        stream.read(&mut buffer)?;

        println!("[Request]: {}", String::from_utf8_lossy(&buffer[..]));

        let response = "HTTP/1.1 200 OK\r\n\r\n";
        stream.write(response.as_bytes())?;
        stream.flush()?;

        Ok(())
    }

    pub fn run(&self) -> Result<(), ServerError> {
        self.check()?;

        let listener = try_log!(TcpListener::bind(format!("{}:{}", self.origin, self.port)));
        info!("Server is now running on [{}:{}]", self.origin, self.port);
        info!("Press CTRL-C to stop");
        info!("");

        for stream in listener.incoming() {
            let stream = stream?;
            info!("Connection estabilished.");

            self.handle_connection(stream)?;
        }

        Ok(())
    }
}
