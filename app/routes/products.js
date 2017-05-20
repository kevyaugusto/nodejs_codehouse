//var connectionFactory = require('../infrastructure/connectionFactory');

module.exports = function(app) {

	console.log('Loading route products...');

	//routes
	app.get('/products', function(request, response) {

		console.log('Listing products...');

		var connection = app.infrastructure.connectionFactory();
		var productsDb = new app.infrastructure.ProductsDAO(connection); //new = create a new scope of this object

		productsDb.list(function(err, results) {
			if (err) {
				console.log(err);
			}
			response.render('products/list', {results: results});
			//response.send(results); //send the JSON to the page
		});
		connection.end();
		//response.render('products/list'); //
		//response.end('<html><body><h1>Product List</h1></body></html>');
	});

	app.get('/products/create', function(request, response){
		console.log('Creating product...');
		response.render('products/form');

	});

	app.get('/products/remove', function() {
		console.log('Removing product...');
		
		var connection = app.infrastructure.connectionFactory();
		var productsDb = new app.infrastructure.ProductsDAO(connection); //new = create a new scope of this object
		
		var product = productsDb.loadById(id, successCallback);

		if (product) {
			productsDb.remove(id, successCallback);
		}
	});
}