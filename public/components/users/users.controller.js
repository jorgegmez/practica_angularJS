(() => {
    'use strict';

    angular
    .module('myApp')
    .config('userController', userController);

    userController.$inject = ['$stateParams', '$state', 'userService'];

    function userController($stateParams, $state, userService) {
        let vm = this;
    }
})();