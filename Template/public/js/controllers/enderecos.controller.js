(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("EnderecoListController", EnderecoListController);

        EnderecoListController.$inject = ["EnderecoService"];

    function EnderecoListController(EnderecoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            EnderecoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            EnderecoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();