//integration tests for the application
/*
	this test is calling all application routes, accessing database, 
	getting return status and so forth, that is why is called integration test.
*/

//unitTest = check specific logic in the system. E.g.: calculate product discount  

var express = require('../config/express')();
var httpRequest = require('supertest')(express);

describe('#ProductsController', function () {
	
	//beforeEach is a pre-defined function from MOCHA
	//executed before each test defined below it1, it2, itn....

	beforeEach(function(asyncExecutionsDone) {

		//node-database-cleaner LIB - if too many tables, use this LIB to clean all tables

		var connection = express.infrastructure.connectionFactory();
		connection.query("delete from products", function (exceptions, results){
			if (!exceptions) {
				asyncExecutionsDone();
			}
		});
	});

	it('#json list', function (asyncExecutionsDone) {

		console.log('checking json list test.');

		var route = '/products';
		httpRequest.get(route)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/) //assertion
			.expect(200, asyncExecutionsDone); //assertion
	});

	it('#insert new product with invalid data', function(asyncExecutionsDone) {
		var route = '/products';
		httpRequest.post(route)
			.set('Accept', 'application/json')
			.send({name: "", description: "new book test"})
			.expect(400, asyncExecutionsDone);
	});

	it('#insert new product with valid data', function(asyncExecutionsDone) {
		var route = '/products';
		httpRequest.post(route)
			.set('Accept', 'application/json')
			.send({name: "test with valid", price: 21.5, description: "new book test"})
			.expect(302, asyncExecutionsDone);
	});

});