var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
// var rsync = require('rsyncwrapper').rsync;
var app = express();
var server=http.createServer(app);
var io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname, 'public')));

io.sockets.on('connection',function(socket){
	io.sockets.emit('established',{code:200,id:socket.id});
});


app.get('/',function(req,res){
	res.render("index.html");
});

app.post('/chat',function(req,res){
	res.sendfile(__dirname + '/public/chat.html');
});

server.listen(3000);
module.exports=app;