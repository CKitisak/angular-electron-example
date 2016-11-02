(function() {
    'use strict';

    angular
        .module('eureka')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['apis', '$state', '$window'];

    function LoginController(apis, $state, $window) {
        console.log('LoginController.')
        var vm = this;

        vm.formData = {};

        vm.login = login;

        function login() {
            var data = { email: vm.formData.user, password: vm.formData.pass };
            console.log(data);
            apis.post('https://192.168.0.5/webservices/login', 'json', data).then(
                function(response) {
                    console.log(response)
                    if (response.status === 'success') {
                        $window.localStorage.setItem('token', response.token);
                        $state.go('main.content1');
                    }
                },
                function(error) {
                    console.log(error)
                }
            );
        }
    }
})();
