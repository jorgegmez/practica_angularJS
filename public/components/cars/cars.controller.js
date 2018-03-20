(() => {
    'use strict';

    angular
    .module('myApp')
    .config('carController', carController);

    carController.$inject = ['$stateParams', '$state', 'carService'];

    function carController($stateParams, $state, carService) {
        let carCtrl = this;
    }
})();