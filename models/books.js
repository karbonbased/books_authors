// REQUIREMENTS //
var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
	title: String,
	image: String
})

var Book = mongoose.model('Book', bookSchema);

module.exports = Book