var express = require('express');
var app = express();
var layouts = require('express-ejs-layouts');
var routes = require('./config/routes');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/posts');