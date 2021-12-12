(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("FornecedorFormController", FornecedorFormController);

    FornecedorFormController.$inject = [
        "FornecedorService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function FornecedorFormController(
        FornecedorService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Fornecedor";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                FornecedorService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Fornecedor";
                });
            }
        }

        function salvar() {
            FornecedorService.save(vm.cadastro).success(function () {
                $location.path("/fornecedor");
                alert("Fornecedor cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();