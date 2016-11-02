(function() {
    'use strict';

    angular
        .module('eureka')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$state', '$window'];

    function appRun($rootScope, $state, $window) {
        console.log('app run.')
        $rootScope.state = $state;

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            event.preventDefault();
            var token = $window.localStorage.getItem('token');
            if (token) {
                $state.go(toState.name, toParams);
            } else {
                $state.go('login');
            }
        });
    }
})();
