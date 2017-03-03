angular
    .module('gameFilter')
    .factory('User', userFactory)

function userFactory($http) {

    return {
    	create: function (user) {
    		return $http.post('/users', user)
    	},
    	like: function (id, name) {
    		return $http.patch('/users/like/' + id, { gameName: name })
    	}
    }
}