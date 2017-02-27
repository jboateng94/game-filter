var express = require('express');
var app = express();
var routes = require('./config/routes');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/posts');

// used to access external files
app.use(express.static('public'));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// method override
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

// tell express to use ejs for rendering templates
app.set('view engine' , 'ejs');

// add the router last
app.use(routes);

app.listen(3000 , function(){
  console.log('listening on port 3000');
});