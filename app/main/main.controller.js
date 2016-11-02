(function() {
    'use strict';

    angular
        .module('eureka')
        .controller('MainController', MainController);

    MainController.$inject = ['apis'];

    function MainController(apis) {
        console.log('MainController.')
        var vm = this;

        IPC.on('main-controller-reply', function(event, arg) {
            new Notification('Notification()', { body: arg, sound: true });

            NOTIFIER.notify({
                title: 'node-notifier',
                message: arg,
                wait: true,
                sound: true
            });
            console.log(arg) // prints "pong"
        });
        IPC.send('main-controller-message', 'ping');
    }
})();
