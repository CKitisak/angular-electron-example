(function() {
    'use strict';

    angular
        .module('eureka')
        .config(mainConfig);

    mainConfig.$inject = ['$stateProvider'];

    function mainConfig($stateProvider) {
        $stateProvider
            .state('main.content2', {
                url: '/content2',
                templateUrl: 'app/content2/content2.html',
                controller: 'Content2Controller',
                controllerAs: 'vm'
            })
        ;
    }
})();
