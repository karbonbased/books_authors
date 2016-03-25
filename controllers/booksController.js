// REQUIREMENTS //
var express = require('express');
var router = express.Router();
var Author = require('../models/authors.js');
var Book = require ('../models/books.js');

// Index //
router.get('/', function(req, res) {
	Book.find({}, function(err, books) {
	res.render('books/index.ejs', {books: books });
})
});



// // JSON //
// router.get('/json', function(req, res) {
//     Book.find({}, function(err, json) {
// res.send(json)
//     })
// });


// // SHOW //
// router.get('/:id', function(req, res) {
//     Book.findById(req.params.id, function(err, books) {
//     res.render('books/show.ejs', {books: books});
//     });
// });


// UPDATE //
// router.put('/:id', isLoggedIn, function(req, res) {
//     User.findById(req.user.id, function(err, user) {
//         console.log(user)
//     Task.findById(req.params.id, function(err, tasks) {
//         user.tasks.push(tasks);
//         user.save(function(err, data) {
//             res.redirect('/tasks')
//         })
//         })
//     })
// })



module.exports = router;