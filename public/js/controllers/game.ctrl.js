angular
  .module('gameFilter')
  .controller('gameController', gameController)

function gameController(Game) {
	var self = this;
	self.searchTerm = '';
	self.data = '';

	self.search = function () {
		// put self.searchTerm in body of request

		console.log(self.searchTerm);
		Game.search(self.searchTerm)
		  .then(function successCallback(response) {
			  // this callback will be called asynchronously
		      // when the response is available
			
			  self.data = JSON.parse(response.data).results
			  for (var i = 0; i < self.data.length; i++) {
			  	console.log(self.data[i]);
			  }
			}, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    console.log('maybe not...', response);
		  });
	}
}