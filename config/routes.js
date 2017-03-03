var express = require('express');
var router = express.Router();
var gamesController = require('../controllers/games');
var userController = require('../controllers/users');

router
	.get('/' , gamesController.index);

router.route('/users')
	.post(userController.create)

router.route('/users/like/:id')
	.patch(userController.like)

router
	.get('/search/:searchTerm', gamesController.search)
	.get('/game/:name', gamesController.show)



module.exports = router;