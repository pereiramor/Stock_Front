(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.movimentacaoPage = movimentacaoPage;
        vm.clientePage = clientePage;
        vm.estoquePage = estoquePage;
        vm.mercadoriaPage = mercadoriaPage;

        activate();

        function activate() {
        }

        function clientePage() {
            $location.path("/cliente");
        }
        function estoquePage() {
            $location.path("/estoque");
        }
        function mercadoriaPage() {
            $location.path("/mercadoria");
        }
    }
})();