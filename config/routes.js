var express = require('express');
var router = express.Router();
var gamesController = require('../controllers/games');

router
	.get('/' , gamesController.index);

router
	.get('/search/:searchTerm', gamesController.search)



module.exports = router;