//File created to configure and send data formatted to an Android Device.
//In rest, it is called Content Negotiation.

var http = require('http');

var configurations = {
	hostname: 'localhost',
	port: 3000,
	path: '/products',
	headers: {
		'Accept': 'application/json'
	}
};

http.get(configurations, function(response){

	//console.log(response);
	console.log(response.statusCode);

	response.on('data', function(body) {
		console.log('Body: ' + body);
	});
	/*
	response.on('error', function(error){
		console.log('Error:', + error)
	});*/

});