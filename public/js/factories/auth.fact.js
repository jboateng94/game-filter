
angular
	.module('gameFilter')
	.factory('Auth', AuthFactory)
	.run(function(){
		var config = {
		  apiKey: "AIzaSyCgeo7v3QniK7muB9EqsmBXPlu9vrFJKps",
		  authDomain: "game-filter.firebaseapp.com",
		  databaseURL: "https://game-filter.firebaseio.com",
		  storageBucket: "game-filter.appspot.com",
		  messagingSenderId: "235199797095"
		};
		firebase.initializeApp(config);
	}])

function AuthFactory($firebaseAuth) {
	return $firebaseAuth()
}

