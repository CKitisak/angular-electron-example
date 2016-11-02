(function() {
    'use strict';

    angular
        .module('eureka')
        .config(appConfig);

    appConfig.$inject = ['$urlRouterProvider'];

    function appConfig($urlRouterProvider) {
        console.log('app config.')

        $urlRouterProvider.otherwise('login');
    }
})();
