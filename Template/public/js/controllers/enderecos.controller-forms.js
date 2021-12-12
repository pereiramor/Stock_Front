(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("EnderecoFormController", EnderecoFormController);

    EnderecoFormController.$inject = [
        "EnderecoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function EnderecoFormController(
        EnderecoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Endereço";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                EnderecoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando endereço";
                });
            }
        }

        function salvar() {
            EnderecoService.save(vm.cadastro).success(function () {
                $location.path("/endereco");
                alert("Endereço cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();