// REQUIREMENTS //
var express = require('express');
var router = express.Router();
var Author = require('../models/authors.js');
var Book = require ('../models/books.js');

// INDEX // AS REDIRECT
router.get('/', function(req, res) {
	var data = Book
	res.render('index.ejs', data)
});




module.exports = router;