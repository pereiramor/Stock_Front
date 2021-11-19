(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("MovimentacaoListController", MovimentacaoListController);

        MovimentacaoListController.$inject = ["MovimentacaoService"];

    function MovimentacaoListController(MovimentacaoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            MovimentacaoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            MovimentacaoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();