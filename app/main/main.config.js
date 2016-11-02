(function() {
    'use strict';

    angular
        .module('eureka')
        .config(mainConfig);

    mainConfig.$inject = ['$stateProvider'];

    function mainConfig($stateProvider) {
        $stateProvider
            .state('main', {
                abstract: true,
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
        ;
    }
})();
