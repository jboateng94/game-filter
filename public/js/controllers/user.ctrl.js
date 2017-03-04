angular
  .module('gameFilter')
  .controller('userController', userController)

function userController($state, User, $stateParams) {
	var self = this;

	self.userGames = [];

	// self.getGames = function(){
	// 	var uid = Auth.$getAuth().uid
 //        User.getGames(uid)
	//         .then(function(res) {
	//             console.log(res)
	//             self.all = res.data
	//         })
	//         .catch(function (err) {
	//             console.log(err)
	//         })
	// }
}