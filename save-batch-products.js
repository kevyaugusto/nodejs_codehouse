var http = require('http');

var configurations = {
	hostname: 'localhost',
	port: 3000,
	path: '/products',
	method: 'post',
	headers: {
		'Accept': 'application/json', //receive data from server as JSON format
		'Content-Type': 'application/json' //send data to server as JSON format
	}
};

//create object request of NodeJS and store it in clientHttp variable
var clientHttp = http.request(configurations, function(response) {
	console.log(response.statusCode);
	
	response.on('data', function(body) {
		console.log('Body', + body);
	});
});

var productSample = {
	Name: 'Product test batch',
	Price: 183,
	Description: 'Product to save batch products tsestes test 22'
};

//call the request
clientHttp.end(JSON.stringify(productSample));
