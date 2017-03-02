angular
    .module('gameFilter')
    .factory('Game', gameFactory)

// create function to make http request
function gameFactory($http) {
   return {
   	search: function (searchTerm) {
   		return $http.get('/search/' + searchTerm)
   	},
   	show: function (name) {
   		return $http.get('/game/' + name)
   	}
   }
}