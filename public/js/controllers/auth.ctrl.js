

angular.module('gameFilter')
	.controller('authController', authController)

function authController(Auth, User, $state) {
	var self = this;

	self.createUser = function() {
		console.log('create user');
		Auth.$createUserWithEmailAndPassword(self.email, self.password)
			.then(function (user) {

				User.create({
					uid: user.uid
				}, function(user, err) {
					self.err = err.err;
					resetCredentials();
				})

				$state.go('home')
			}).catch(function(error) {
				self.error = error;
			})
	}

	self.signOut = function () {
		Auth.$signOut();
		$state.go('login');
	}

	self.logIn = function () {
		Auth.$signInWithEmailAndPassword(self.email, self.password)
			.then(function (user) {
				$state.go('home');
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