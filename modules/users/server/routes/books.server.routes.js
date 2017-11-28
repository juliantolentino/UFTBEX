'use strict';

module.exports = function(app) {
	var books = require('../controllers/books.server.controller');


	//books routes (has county in it)
	app.route('/api/books').all()
		.get(books.list)
		.post(books.create);

	app.route('/api/books/:booksId').all()
		.get(books.read)
		.put(books.update)
		.delete(books.delete);
	
	
	

	// Finish by binding the Standard middleware
	app.param('booksId', books.booksByID);
};