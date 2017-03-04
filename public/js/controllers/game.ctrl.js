angular
  .module('gameFilter')
  .controller('gameController', gameController)


function gameController(Game, $state, $stateParams, User, Auth) {
	var self = this;
	self.searchTerm = '';
	self.data = '';
	self.game = {};
	self.games = [];

	self.search = function () {
		// put self.searchTerm in body of request
		Game.search(self.searchTerm)
		  .then(function successCallback(response) {
			// this callback will be called asynchronously
		    // when the response is available
			
			self.data = JSON.parse(response.data).results
			  
			 
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    console.log('maybe not...', response);
		  });
	}

	self.show = function () {
		// put self.searchTerm in body of request

		// console.log($stateParams.name);
		Game.show($stateParams.name)
		  .then(function(response) {
		  	
			// this callback will be called asynchronously
		    // when the response is available
			self.game = JSON.parse(response.data).results[0]
			$state.go('game');
		}) 
	}

	self.favourite = function() {
		// console.log(self.game);
		var user = Auth.$getAuth()
		User.like(user.uid, self.game.name)
			.then(function (res) {
				
				// console.log(res)
			}).catch(function (err) {
				// if (err) console.log(err)
			})
	}

	self.getGames = function() {
		
		var user = Auth.$getAuth()
		User.getGames(user.uid)
			.then(function (res) {
				
				// console.log(res)
				for (var i = 0; i < res.data.length; i++) {
					
					Game.show(res.data[i])
					  .then(function(response) {
					  	
						// this callback will be called asynchronously
					    // when the response is available
						self.games.push(JSON.parse(response.data).results[0]);
					  })
				}
				console.log(self.games);
				//$state.go('users');
			}).catch(function (err) {
				console.log(err)
			})
	}
}