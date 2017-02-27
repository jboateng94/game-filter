angular
	.module('gameFilter', ['ui.router']) // ,'firebase'
	.config(MainRouter)

function MainRouter ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
	      url: '/',
	      templateUrl: '/states/index.html',
	    })
	    .state('signup', {
	      url: '/signup',
	      templateUrl: '/states/signup.html',
	    })
	    .state('login', {
	      url: '/login',
	      templateUrl: '/states/login.html',
	    })
}
