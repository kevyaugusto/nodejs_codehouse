module.exports = function(app) {
	app.get('/', function(request, response) {

		var connection = app.infrastructure.connectionFactory();
		var productsDAO = new app.infrastructure.ProductsDAO(connection);
		
		productsDAO.list(function(errors, results) {
			response.render('home/index', {products: results});
		});

		connection.end();

	});
};