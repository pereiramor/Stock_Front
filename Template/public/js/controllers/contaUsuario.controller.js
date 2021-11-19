(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("ContaUsuarioListController", ContaUsuarioListController);

        ContaUsuarioListController.$inject = ["ContaUsuarioService"];

    function ContaUsuarioListController(ContaUsuarioService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            ContaUsuarioService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            ContaUsuarioService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();