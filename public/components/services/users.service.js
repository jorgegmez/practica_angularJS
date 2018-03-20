(() => {
    'use strict';

    angular
    .module('myApp')
    .service('userService', userService);

    userService.$inject = ['$log', '$http'];

    function userService($log, $http) {

    }
})();