//create a class to avoid create this object dynamically everytime its called
//design pattern: Data Access Object = object-oriented programming
function ProductsDAO(connection){
	//convention _ (underline) = in javascript means private attribute for this class
	this._connection = connection;
}

ProductsDAO.prototype.list = function(successCallback) {
	this._connection.query('select * from books', successCallback);
}; 

module.exports = function() {
	return ProductsDAO;
};