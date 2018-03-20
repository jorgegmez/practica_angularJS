(() => {
    'use strict';

    angular
        .module('myApp', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
        .config(routing);
    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: './components/landing/landing.view.html',
                data:{
                    pageTitle: 'Inicio | Práctica de Arquitectura'
                }
            })

            .state('users', {
                url: '/users',
                templateUrl: './components/users/users.view.html',
                data:{
                    pageTitle: 'Registro de usuarios | Práctica de Arquitectura'
                },
                resolve:{
                    load:['$ocLazyLoad', ($oclazyLoad) => {
                        return $oclazyLoad.load('./components/users/users.controller.js')
                    }]
                },
                controller: 'userController',
                controllerAs: 'vm'
            })

            .state('cars', {
                url: '/cars',
                templateUrl: './components/cars/cars.view.html',
                data:{
                    pageTitle:'Registro de vehículos | Práctica de Arquitectura'
                },
                params:{
                    userObjTemp: ''
                },
                resolve:{
                    load: ['$ocLazyLoad', ($oclazyLoad) => {
                        return $oclazyLoad.load('./components/cars/cars.controller.js')
                    }]
                },
                controller: 'carController',
                controllerAs: 'carCtrl'
            })

            .state('works', {
                url: '/works',
                templateUrl: './components/repairs/repairs.view.html',
                data:{
                    pageTitle: 'Registro de reparaciones | Práctica de Arquitectura'
                },
                params: {
                    carObjTemp: ''
                },
                resolve:{
                    load: ['$ocLazyLoad',  ($oclazyLoad) => {
                        return $oclazyLoad.load('./components/repairs/repairs.controller.js')
                    }]
                },
                controller: 'repairController',
                controllerAs: 'repairCtrl'
            });
        $urlRouterProvider.otherwise('/');

    }
})();