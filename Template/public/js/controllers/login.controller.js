angular.module('MyApp')
    .controller('LoginCtrl', function($scope, $rootScope, $location, $window, $auth) {
        $scope.login = function() {
            $location.path('/home');
            $window.localStorage.autenticado = true;
        };
    });
 

