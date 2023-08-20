const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const Player = require('./Player.js');
const path = require('path');
const config = require('../config.json');


function Core() {
    const app = express();
    const httpServer = http.createServer(app);
    const io = socketIO(httpServer);
    const player = new Player();

    app.use(express.static('./'))
    
    app.get('/', (req, res) => {
        res.sendFile(path.resolve('.', 'index.html'));
    });

    app.get('/audiofiles', (req, res) => {
        const index = req.query.n;
        if (index === null || index === undefined) {
            res.set('Content-Type', 'application/json');
            res.json({length: player.audioFiles.length});
        } else {
            if (player.audioFiles.length > index) {
                res.sendFile(player.audioFiles[index]);
            }
        }
    });


    // IO Connection
    const onConnection = function(stream) {
        stream.emit('ready', {config: config});
    }

    io.on('connection', onConnection);

    // Public functions
    return {
        async init() {
            httpServer.listen(8000, () => {
                console.log("Server is listening");
            });
        }
    };
}


module.exports = Core();
