(function() {
    'use strict';

    angular
        .module('eureka')
        .config(mainConfig);

    mainConfig.$inject = ['$stateProvider'];

    function mainConfig($stateProvider) {
        $stateProvider
            .state('main.content1', {
                url: '/content1',
                templateUrl: 'app/content1/content1.html',
                controller: 'Content1Controller',
                controllerAs: 'vm'
            })
        ;
    }
})();
