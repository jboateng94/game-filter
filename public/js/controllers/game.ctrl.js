angular
  .module('myApp')
  .controller('gameController', gameController)

function gameController() {
	var self = this;
	self.title = 'Wap';
}