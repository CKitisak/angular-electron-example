(function() {
    'use strict';

    angular
        .module('eureka')
        .controller('Content2Controller', Content2Controller);

    Content2Controller.$inject = ['apis'];

    function Content2Controller(apis) {
        console.log('Content2Controller.')
        var vm = this;

    }
})();
