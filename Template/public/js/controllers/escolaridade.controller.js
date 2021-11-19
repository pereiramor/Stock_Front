(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("EscolaridadeListController", EscolaridadeListController);

        EscolaridadeListController.$inject = ["EscolaridadeService"];

    function EscolaridadeListController(EscolaridadeService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            EscolaridadeService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            EscolaridadeService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();