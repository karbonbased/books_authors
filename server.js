// requirements
var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/booksauthors';
var logger = require('morgan');

var booksController = require('./controllers/booksController.js');
var authorsController = require('./controllers/authorsController.js');

// MIDDLEWARE //
app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// ROUTING //
app.use('/authors', authorsController);
app.use('/books', booksController);

// CONNECTIONS //
mongoose.connect(mongoUri);

app.listen(port, function() {
	console.log('listening on port ' + port)
});