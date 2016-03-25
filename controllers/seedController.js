// REQUIREMENTS //
var express = require('express');
var router = express.Router();
var Author = require('../models/authors.js');
var Book = require ('../models/books.js');

var newAuthors = [
	{firstName: "Thomas",
	lastName: "Pynchon",
	alive: true,
	image: "http://assets.vice.com/content-images/contentimage/190859/thomas-pynchon.jpg",
	books: [
			// {title:"The Crying of Lot 49",
			// image: 'http://4.bp.blogspot.com/_yRJ-asPhiP4/SxOmKmQge3I/AAAAAAAAAEw/OYJ9WvGtH_A/s640/image0-26.jpg',
			// author: "Pynchon"},
			// {title:"Bleeding Edge"
			// image:"http://www.staythirstymedia.com/201404-084/images-monthly/fox-bn-bleeding-edge.jpg",
			// author: "Pynchon"
			// },
			// {title:"Vineland"
			// image:"http://www.anthony-smith-books.com/pictures/236.jpg",
			// author: "Pynchon"
			// }	
			]
	},
	{firstName: "Kurt",
	lastName: "Vonnegut",
	alive: false,
	image: "http://www.jamesaltucher.com/wp-content/uploads/2015/08/vonnegut.jpg",
	books: [
			// {title:"Slaughterhouse Five",
			// image: 'http://7summitsproject.com/wp-content/uploads/2015/06/Slaughterhouse-Five.jpg',
			// author: "Vonnegut"},
			// {title: "Cat's Cradle",
			// image: "http://ecx.images-amazon.com/images/I/51pj5jRGyuL.jpg",
			// author: "Vonnegut"
			// }	
			]
	},
	{firstName: "Haruki",
	lastName: "Murakami",
	alive: true,
	image: "https://flavorwire.files.wordpress.com/2014/08/haruki-murakami-1.jpg",
	books: [
			// {title:"1Q84",
			// image: 'http://www.michaeljohngrist.com/wp-content/uploads/2012/02/1Q84.jpg',
			// author: "Murakami"	},
			// {title:"Norwegian Wood"
			// image:"http://www.exorcising-ghosts.co.uk/images/HM-NorwegianWood(UK)Paper.jpg",
			// author: "Murakami"
			// }	
			]
	}

];


router.get('/', function(req, res) {
    Author.create(newAuthors, function(err) {
        if (err) {
            console.log(err);
            res.send('Error seeding database');
        } else {
            console.log('TASK SEED EXECUTED');
            res.redirect('/')
        }
    });
});

 module.exports = router;