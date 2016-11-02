(function() {
    'use strict';

    angular
        .module('eureka')
        .config(loginConfig);

    loginConfig.$inject = ['$stateProvider'];

    function loginConfig($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
        ;
    }
})();
