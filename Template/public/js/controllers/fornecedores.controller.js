(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("FornecedorListController", FornecedorListController);

        FornecedorListController.$inject = ["FornecedorService"];

    function FornecedorListController(FornecedorService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            FornecedorService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            FornecedorService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();