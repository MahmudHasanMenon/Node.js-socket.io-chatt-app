var express = require('express');
var socket = require('socket.io');

let port =  process.env.PORT || 4000;

var app = express();



var server = app.listen(port,function () {
    console.log('Listening to requests');
})

app.use(express.static('public'));

var io = socket(server);


io.on('connection', function (socket) {
    console.log('Made socket connectin');

    socket.on('chat', function (data) {
        io.sockets.emit('chat',data);
    })

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
})