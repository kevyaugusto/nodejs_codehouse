var mysql = require('mysql');

var createDbConnection = function () {

	console.log('Executing createDbConnection...');

	if (!process.env.NODE_ENV) {
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'root',
			database: 'codehouse_nodejs'
		});
	}

	if (process.env.NODE_ENV == "test") {
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'root',
			database: 'codehouse_nodejs_test'
		});
	}	
}

//wrapper (embrulho) pattern
module.exports = function() {
	console.log('Loading Connection Factory wrapper...');
	return createDbConnection;
}