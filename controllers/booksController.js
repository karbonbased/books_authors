// REQUIREMENTS //
var express = require('express');
var router = express.Router();
var Author = require('../models/authors.js');
var Book = require ('../models/books.js');

// Index //
router.get('/')