(() => {
    'use strict';

    angular
    .module('myApp')
    .config('repairController', repairController);

    repairController.$inject = ['$stateParams', '$state', 'repairService'];

    function repairController($stateParams, $state, repairService) {
        let repairCtrl = this;
    }

})();