// REQUIREMENTS //
var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
	title: {type: String, required: true},
	image: type: String,
	author: type: String
})

var Book = mongoose.model('Book', bookSchema);

module.exports = Book