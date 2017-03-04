var User = require('../models/user')


function  create (rec, res) {
	var newUser = new User(rec.body)

	newUser.save(function (err)  {
		console.log(err)
	})
}

function like (req, res) {
	User.findOne({uid: req.params.id}, function (err, user) {
		if (err) {
			console.log(err)
			return res.status(500).json(err)
		}
		user.favourites.push(req.body.gameName)
		user.save(function (err){
			if (err) {
				console.log(err)
				return res.status(500).json(err)
			}
			res.json(user)
		})
	})
}

function games(req,res) {
	User.findOne({uid: req.params.id}, function (err, user) {
		if (err) {
			console.log(err)
			return res.status(500).json(err)
		}
		console.log(user.favourites)
		res.json(user.favourites)
	})
}

module.exports = {
	create: create,
	like: like,
	games: games
}