angular
	.module('gameFilter', ['ui.router','firebase']) // 
	.config(MainRouter)
	.run(AuthCatcher)

function AuthCatcher($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function (even, toState, toParams, fromState, fromParams, error) {
    if(error === 'AUTH_REQUIRED') $state.go('authRequired')
  })
}

function MainRouter ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	var authRequired = {
		currentAuth: function(Auth){
		  return Auth.$requireSignIn();
		}
	}

	$stateProvider
		.state('home', {
	      url: '/',
	      templateUrl: '/states/index.html',
	      resolve: authRequired
	    })
	    .state('signup', {
	      url: '/signup',
	      templateUrl: '/states/signup.html'
	    })
	    .state('login', {
	      url: '/login',
	      templateUrl: '/states/login.html'
	    })
	    .state('authRequired', {
	      url: '/auth-required',
	      templateUrl: '/states/authRequired.html'
	    })
}
