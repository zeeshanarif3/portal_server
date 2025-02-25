'use strict';
// const mongoose=require('mongoose')
require('@babel/register');
require('@babel/polyfill');
// mongoose.set('strictQuery', false);
const app = require('../app').default;
const http = require('http');
const https = require('https');
const fs = require("fs");
require('dotenv/config');
process.env.NODE_ENV = process.env.NODE_ENV || "staging"; //local
const config = require('../config/config.js').get(process.env.NODE_ENV);
// console.log(config, "congig");


const normalizePort = function (val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

const port = normalizePort(config.PORTS.API_PORT);


/**
 * Create HTTP server.
 */
const server = http.createServer(app);

// const options = {
//   key: fs.readFileSync("/home/ubuntu/SSL/pxalm.com.key"),
//   cert: fs.readFileSync("/home/ubuntu/SSL/79df2304d6b84a77.pem"),
// };

// const server = https.createServer(app,options);


/**

/* (server, {
    maxHttpBufferSize: 1e12,
    pingTimeout: 6000,
    cors: {
      origin: "*",
    },
  });

  app.set("io", io); */

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);

/**
 * Event listener for HTTP server "error" event.
 */
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? `Pipe ${port}`
        : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            // debug(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            // debug(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});

/**
 * Event listener for HTTP server "listening" event.
 */


// var io = require("socket.io")(server, {
//     maxHttpBufferSize: 1e12,
//     pingTimeout: 6000,
//     cors: {
//         origin: "*",
//     },
// });

// io.on("connection", (socket) => {
//     socket.on("join", (data) => {
//         socket.join(data._id);
//     });
// });


// app.set("io", io);
// require("../controllers/socketEvents")(io);



server.on('listening', () => {
    console.log(`Listening on ${port}`);
});

// const options = {
//      key: fs.readFileSync("/home/ubuntu/SSL/pxalm.com.key"),
//    cert: fs.readFileSync("/home/ubuntu/SSL/79df2304d6b84a77.pem"),
// //    /home/jenkins/SSL/mean.crt
// // /home/jenkins/SSL/mean.key
//  };
// https.createServer(options, app).listen(9192);
