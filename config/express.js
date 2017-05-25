var express = require('express');
var expressLoad = require('express-load'); //lib to help load dependencies into app
var bodyParser = require('body-parser');
var expressValidator = require('express-validator'); //lib to validate required fields

module.exports = function () {
	console.log('Loading express module...');

	var app = express();

	app.use(express.static('./app/public')); //allow files (CSS, JS, Imgs, etc) to be read in express when requesting the page
	app.set('view engine', 'ejs'); //ejs = embeddedjs
	app.set('views', './app/views'); //set the path where views will be placed

	//middlewares before request arrive into routes
	app.use(bodyParser.urlencoded(
		{extended:true} //accepts complex JSON structures {name: 'Book1', price:5, author:{name:Caxias}}
	));
	app.use(bodyParser.json());
	app.use(expressValidator());
	//end middlewares

	expressLoad('routes', {cwd: 'app'}) //find only inside the path app, to avoid scan in the whole project
		.then('infrastructure')
		.into(app);

	return app;
}