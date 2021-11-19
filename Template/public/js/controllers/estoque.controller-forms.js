(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("EstoqueFormController", EstoqueFormController);

    EstoqueFormController.$inject = [
        "EstoqueService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function EstoqueFormController(
        EstoqueService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Estoque";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                EstoqueService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Estoque";
                });
            }
        }

        function salvar() {
            EstoqueService.save(vm.cadastro).success(function () {
                $location.path("/estoque");
                alert("Estoque cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();