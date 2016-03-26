// REQUIREMENTS //
var express = require('express');
var router = express.Router();
var Author = require('../models/authors.js');
var Book = require ('../models/books.js');

// INDEX //
router.get('/', function(req, res) {
	Author.find({}, function(err, authors) {
	res.render('authors/index.ejs', {authors: authors });
	});
});

// SHOW //
router.get('/:id', function(req, res) {
	Author.findById(req.params.id, function(err, authors) {
	res.render('authors/show.ejs', {authors: authors});
	// res.send(users)
	})
})

// CREATE AUTHOR //
router.post('/', function(req,res) {
	var newAuthor = new Author(req.body);
	newAuthor.save(function(err, data) {
		console.log('new user has been saved');
		res.redirect('/authors');
	})
})

// CREATE BOOK //
router.post('/:id', function(req, res) {
	var newBook = new Book(req.body);
	newBook.save(function(err, book) {
		Author.findById(req.params.id, function(err, author) {
			author.books.push(book);
			author.save(function(err, data) {
				console.log("new book created and saved to author");
				res.redirect('/authors/' + req.params.id);
			})
		})
	})
})

// DELETE //
router.delete('/:id', function(req, res){
	Author.findByIdAndRemove(req.params.id, function(err, data){
		res.redirect('/authors')
	})
})

// EDIT ROUTE //
router.get('/:id/edit', function(req,res){
	Author.findById(req.params.id, function(err, authors) {
	res.render('authors/edit.ejs', {authors: authors})
	});
})

// UPDATE AUTHOR //
router.put('/:id', function(req,res) {
	// update the author document
	Author.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err,author) {
		console.log("author is " + author)
		console.log("UPDATED!")
		res.redirect('/authors')
	});
})


module.exports = router;