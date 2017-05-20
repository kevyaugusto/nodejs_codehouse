var express = require('./config/express');
var app = express();
//var productRoutes = require('./app/routes/products')(app);

var port = 3000;

app.listen(port, function(){
	console.log('Server running...');
});
