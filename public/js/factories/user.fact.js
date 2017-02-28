angular
    .module('gameFilter')
    .factory('User', userFactory)

function userFactory($resource) {
    return $resource('/users/:id', { id: '@id' }, { 
        'getAll': { method: 'GET', isArray: false },
        'get': { method: 'GET' },
        'create': { method: 'POST'},
        'delete': { method: 'DELETE'},
        'update': { method: 'PATCH'}
    })
}