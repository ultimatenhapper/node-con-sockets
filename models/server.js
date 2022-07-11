const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer( this.app );

        this.io = socketio( this.server );
    }

    configuraSockets() {
        console.log('Configurando sockets...');
        new Sockets( this.io );
    }

    middlewares() {
        this.app.use( express.static( path.resolve( __dirname , '../public' ) ) );
    }

    execute() {
        this.middlewares();
        this.configuraSockets();
        this.server.listen( this.port, () => {
            console.log( 'Server está corriendo en el puerto:', this.port );
        })
    }
}

module.exports = Server;
