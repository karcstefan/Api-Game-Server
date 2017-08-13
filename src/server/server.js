var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;


io.on('connection', function(socket){
	console.log(socket);
});

http.listen(port, function(){
	console.log('listening on *:' + port);
});