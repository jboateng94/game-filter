

angular
	.module('gameFilter')
	.controller('authController', authController)

function authController(Auth, User, $state) {
	var self = this;

	self.psn = '';
	self.xbl = '';
	self.psn = '';

	self.createUser = function() {
		console.log('create user');
		Auth.$createUserWithEmailAndPassword(self.email, self.password)
			.then(function (user) {

				User.create({
					uid: user.uid,
					psn: self.psn,
					xbl: self.xbl,
					steam: self.steam
				}).then(function(user) {
					resetCredentials();
				}).catch(function (err) {
					self.err = err.err;
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
				resetCredentials();
				$state.go('home');
			}).catch(function(error) {
				self.error = error;
				resetCredentials();
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