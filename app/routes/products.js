//var connectionFactory = require('../infrastructure/connectionFactory');

module.exports = function(app) {

	console.log('Loading route products...');

	//routes
	app.get('/products', function(request, response) {

		console.log('Listing products...');

		var connection = app.infrastructure.connectionFactory();
		var productsDAO = new app.infrastructure.ProductsDAO(connection); //new = create a new scope of this object

		productsDAO.list(function(err, results) {
			if (err) {
				console.log(err);
			}

			response.format({
				//when request headers come with text/html, execute this function
				html: function() {
					response.render('products/list', {results: results});
				},
				//when request header = application/json, execute this function
				json: function() { 
					response.json(results); 
				}
			});

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

	app.post('/products', function(request, response){

		var product = request.body;

		console.log(product);
		console.log('POST create product');
		
		var connection = app.infrastructure.connectionFactory();
		var productsDAO = new app.infrastructure.ProductsDAO(connection);
		
		productsDAO.create(product, function(err, results){
			
			console.log(err);
			console.log(results);

			response.redirect('/products'); //always redirect after POST
		});		
		
	});

	app.get('/products/remove', function() {
		console.log('Removing product...');
		
		var connection = app.infrastructure.connectionFactory();
		var productsDAO = new app.infrastructure.ProductsDAO(connection); //new = create a new scope of this object
		
		var product = productsDAO.loadById(id, successCallback);

		if (product) {
			productsDAO.remove(id, successCallback);
		}
	});

	
}