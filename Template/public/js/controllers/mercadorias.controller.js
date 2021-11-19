(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("MercadoriaListController", MercadoriaListController);

        MercadoriaListController.$inject = ["MercadoriaService"];

    function MercadoriaListController(MercadoriaService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            MercadoriaService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            MercadoriaService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();