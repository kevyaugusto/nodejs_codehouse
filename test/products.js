var express = require('../config/express')();
var httpRequest = require('supertest')(express);

describe('#ProductsController', function () {
	it('#json list', function (asyncExecutionsDone) {

		console.log('checking json list test.');

		var route = '/products';
		httpRequest.get(route)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/) //assertion
			.expect(200, asyncExecutionsDone); //assertion
	});
});