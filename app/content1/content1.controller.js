(function() {
    'use strict';

    angular
        .module('eureka')
        .controller('Content1Controller', Content1Controller);

    Content1Controller.$inject = ['apis'];

    function Content1Controller(apis) {
        console.log('Content1Controller.')
        var vm = this;
        vm.items = ['Pen', 'Ruler', 'Pencil', 'Eraser', 'Spoon', 'Fork', 'Chopsticks', 'Book', 'Notebook', 'Plate', 'Bowl'];
    }
})();
