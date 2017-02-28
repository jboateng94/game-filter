angular.module('myApp')
	.controller('authController', authController)

function authController(Auth, $state) {
	var self = this;

	self.createUser = function() {
		console.log('create user');
		Auth.$createUserWithEmailAndPassword(self.email, self.password)
			.then(function (user) {
				resetCredentials();
				$state.go('login')
			}).catch(function(error) {
				self.error = error;
			})
	}

	self.signOut = function () {
		Auth.$signOut();
		$state.go('home');
	}

	self.logIn = function () {
		Auth.$signInWithEmailAndPassword(self.email, self.password)
			.then(function (user) {
				$state.go('secret');
				resetCredentials();
			}).catch(function(error) {
				self.error = error;
			})
	}

	Auth.$onAuthStateChanged(function (user) {
		console.log(user);
		self.user = user;
	});

	function resetCredentials() {
		self.email = "";
		self.password = "";
	}
}