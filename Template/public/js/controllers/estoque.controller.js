(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("EstoqueListController", EstoqueListController);

        EstoqueListController.$inject = ["EstoqueService"];

    function EstoqueListController(EstoqueService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            EstoqueService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            EstoqueService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();