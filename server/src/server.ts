import app from './app';

const server = app.listen(app.get('server_port'), () => {
    console.log(
        `\tApp is running at port ${app.get('server_port')} in (${app.get(
            'env'
        )}) mod`
    );

    console.log('\tPress CTRL-C to stop\n');
});

export default server;
