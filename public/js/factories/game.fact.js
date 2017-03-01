angular
    .module('gameFilter')
    .factory('Game', gameFactory)

function gameFactory($resource, $http, API) {
   return{
   	search: function(searchTerm){
   		return $http({
		  method: 'GET',
		  url: '/search'
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    console.log('it went through:'+response)
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    console.log('maybe not...'+response);
		  });
   	}
   }
}