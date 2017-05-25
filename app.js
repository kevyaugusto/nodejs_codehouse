var express = require('./config/express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set("webSocketIO", io); //define variable 'webSocketIO' to be accessed globally

//var productRoutes = require('./app/routes/products')(app);

var port = 3000;
http.listen(port, function(){
	console.log('Server running...');
});
