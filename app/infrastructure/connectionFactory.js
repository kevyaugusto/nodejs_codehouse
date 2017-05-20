var mysql = require('mysql');

function createDbConnection() {

	console.log('Executing createDbConnection...');

	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'codehouse_nodejs'
	});
}

//wrapper (embrulho) pattern
module.exports = function() {
	console.log('Loading Connection Factory wrapper...');
	return createDbConnection;
}