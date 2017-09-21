var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 5000;

var x = 0, y = 0;

app.use(express.static(__dirname + '/public'));
io.on('connection', function(socket){
	console.log(socket);

    socket.broadcast.emit('test', 'test');
});

http.listen(port, function(){
	console.log('listening on *:' + port);
	console.log(__dirname + '/public');
});
