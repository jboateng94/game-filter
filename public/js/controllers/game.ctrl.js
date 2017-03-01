angular
  .module('gameFilter')
  .controller('gameController', gameController)

function gameController(Game) {
	var self = this;
	self.title = 'Wap';
	self.searchTerm = ''

	self.search = function () {

		console.log(self.searchTerm)
		Game.search(self.searchTerm);
		// create function to make http request 
		// put self.searchTerm in body of request

	}
}