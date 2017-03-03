angular
  .module('gameFilter')
  .controller('gameController', gameController)


function gameController(Game, $state, $stateParams) {
	var self = this;
	self.searchTerm = '';
	self.data = '';
	self.show = '';

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

		console.log($stateParams.name);
		Game.show($stateParams.name)
		  .then(function(response) {
		  	
			  // this callback will be called asynchronously
		      // when the response is available
			  self.show = JSON.parse(response.data).results[0]
			  $state.go('game');
			  

			}) 
	}
}