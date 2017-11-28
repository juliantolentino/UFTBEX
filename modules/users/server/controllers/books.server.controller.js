'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	path = require('path'),
	mongoose = require('mongoose'),
	Books = mongoose.model('Books'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

	
exports.create = function(req, res) {
	var books = new Books(req.body);
	books.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(books);
		}
	});
};
exports.read = function(req, res) {
	res.jsonp(req.books);
};
exports.update = function(req, res) {
	var books = req.books ;
	books.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(books);
		}
	});
};
	
	
exports.delete = function(req, res) {
	var books = req.books ;

	books.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(books);
		}
	});
};

exports.list = function(req, res) {
	if(req.query.title){
	Books.findOne().
		where('title').equals(req.query.title).
		exec(function(err, books) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				var myArr = [];
				myArr.push(books);
				console.log(myArr);
				res.jsonp(myArr);
			}
		});
	}
  else if(req.query.county){
	Books.find().
		where('county').equals(req.query.county).
		exec(function(err, books) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			console.log(books);
			res.jsonp(books);
		}
	});
  }
  else{
		if(req.query.course){
			Books.find().
				where('course').equals(req.query.course).
				exec(function(err, books){
					if (err) {
						return res.status(400).send({
							message: errorHandler.getErrorMessage(err)
						});
					} else {
						res.jsonp(books);
					}
				});
		}
		else{
			Books.find().
				exec(function(err, books) {
				if (err) {
					return res.status(400).send({
						message: errorHandler.getErrorMessage(err)
					});
				} else {
					res.jsonp(books);
				}
			});
		}
  }
  
};	


exports.booksByID = function(req, res, next, id) {
  Books.findById(id).exec(function(err, books) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.books = books;
      next();
    }
  });
};