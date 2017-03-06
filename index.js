var express = require('express');
var app = express();
var routes = require('./config/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ejs = require('ejs');

var mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/game'

// connect to the database
mongoose.connect(mongoUrl, function(err, db) {
	console.log(db);
  	if(!err) {
    	console.log("We are connected");
  	}
});

// used to access external files
app.use(express.static('public'));

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


// tell express to use ejs for rendering templates
app.set('view engine' , 'ejs');

// add the router last
app.use(routes);

app.listen(process.env.PORT || 3000 , function(){
  console.log('Server is running. listening on port 3000');
});