(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("DocumentoListController", DocumentoListController);

        DocumentoListController.$inject = ["DocumentoService"];

    function DocumentoListController(DocumentoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            DocumentoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            DocumentoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();