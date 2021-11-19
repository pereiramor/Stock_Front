(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("DocumentosFormController", DocumentosFormController);

    DocumentosFormController.$inject = [
        "DocumentosService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function DocumentosFormController(
        DocumentosService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Documento";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                DocumentoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando documento";
                });
            }
        }

        function salvar() {
            DocumentoService.save(vm.cadastro).success(function () {
                $location.path("/documento");
                alert("Documento cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();