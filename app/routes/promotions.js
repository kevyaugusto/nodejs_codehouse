module.exports = function(app) {
	app.get("/promotions/form", function(request, response) {

		var connection = app.infrastructure.connectionFactory();
		var productsDAO = new app.infrastructure.ProductsDAO(connection);

		productsDAO.list(function(errors, results) {
			if (errors) {
				console.log(errors);
				return;
			}

			response.render("promotions/form", 
				{products: results});
		});
		connection.end();
	});

	app.post("/promotions", function(request, response) {
		var promotionPosted = request.body;
		console.log(promotionPosted);
		response.redirect("promotions/form"); //always redirect in a POST method!!!! avoid user press f5 and post n times the same data
	});
};