const Server = require('./models/server');
require('dotenv').config();

const server = new Server();

server.execute();
// const express = require('express');
// const app = express();

// const server = require('http').createServer(app);

// const io = require('socket.io')(server);

// app.use(express.static(__dirname + '/public'));

// io.on('connection', ( socket ) => { 
   
//     socket.on('mensaje-to-server', ( data ) => {
//         console.log(data);

//         io.emit('mensaje-from-server', data);
//     });
//  });


// server.listen(8080, () => {
//     console.log('Servidor corriendo en puerto 8080...');
// });