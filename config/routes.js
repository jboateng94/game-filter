var express = require('express');
var router = express.Router();
var gamesController = require('../controllers/games');

router.get('/' , gameController.index);