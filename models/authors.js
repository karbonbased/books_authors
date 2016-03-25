// REQUIREMENTS //
var mongoose = require('mongoose');
var BookSchema = require('./books').schema;

var authorSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	alive: Boolean,
	image: String,
	books: [BookSchema],
	dateCreated: { type:Date, default:Date.now }
});

var Author = mongoose.model('Author', authorSchema);

module.exports = Author;
