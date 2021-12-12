(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.movimentacaoPage = movimentacaoPage;
        vm.clientePage = clientePage;
        vm.fornecedorPage = fornecedorPage;
        vm.mercadoriaPage = mercadoriaPage;
        

        activate();

        function activate() {
        }
        
        function clientePage() {
            $location.path("/cliente");
        }
        function fornecedorPage() {
            $location.path("/fornecedor");
        }
        function mercadoriaPage() {
            $location.path("/mercadoria");
        }
        function movimentacaoPage() {
            $location.path("/movimentacao");
        }
    }
})();