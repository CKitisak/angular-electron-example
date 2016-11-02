(function() {
    'use strict';

    angular
        .module('eureka')
        .factory('apis', apis);

    apis.$inject = ['$q', '$http', '$window'];

    function apis($q, $http, $window) {
        var service = {
            get: methodGet,
            post: methodPost,
            put: methodPut,
            delete: methodDelete
        };
        return service;

        ////////////////

        function methodGet(url, type) {
            var deferred = $q.defer();
            var reqData  = {
                method : 'GET',
                url : url,
                headers: {
                   'Content-Type': 'application/' + type,
                   'x-access-token': $window.sessionStorage.token
                }
            };

            $http(reqData).then(
                function(res) {
                    deferred.resolve(res.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            return deferred.promise;
        }

        function methodPost(url, type, data) {
            var deferred = $q.defer();
            var reqData  = {
                method : 'POST',
                url : url,
                headers: {
                   'Content-Type': 'application/' + type,
                   'x-access-token': $window.sessionStorage.token
                },
                data: data
            };

            $http(reqData).then(
                function(res) {
                    deferred.resolve(res.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            return deferred.promise;
        }

        function methodPut(url, type, data) {
            var deferred = $q.defer();
            var reqData  = {
                method : 'PUT',
                url : url,
                headers: {
                   'Content-Type': 'application/' + type,
                   'x-access-token': $window.sessionStorage.token
                },
                data: data
            };

            $http(reqData).then(
                function(res) {
                    deferred.resolve(res.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            return deferred.promise;
        }

        function methodDelete(url, type) {
            var deferred = $q.defer();
            var reqData  = {
                method : 'DELETE',
                url : url,
                headers: {
                   'Content-Type': 'application/' + type,
                   'x-access-token': $window.sessionStorage.token
                }
            };

            $http(reqData).then(
                function(res) {
                    deferred.resolve(res.data);
                },
                function(err) {
                    deferred.reject(err);
                }
            );

            return deferred.promise;
        }
    }
})();
