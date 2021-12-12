angular.module('MyApp')
    .controller('HeaderCtrl', function($scope, $location, $window, $auth, $rootScope) {
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
        $scope.isAuthenticated = function() {
            return $window.localStorage.autenticado;
        };

        $scope.logout = function() {
            delete $window.localStorage.autenticado;
            $location.path('/login');
        };


        $scope.navigate = function() {
            if($window.localStorage.autenticado){
                $location.path('/home');
            }else{
                $location.path('/login');
            }    
        };
    });