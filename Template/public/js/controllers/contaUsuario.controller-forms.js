(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("ContaUsuarioFormController", ContaUsuarioFormController);

    ContaUsuarioFormController.$inject = [
        "ContaUsuarioService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function ContaUsuarioFormController(
        ContaUsuarioService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Nova Conta Criada";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                ContaUsuarioService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Cadastro";
                });
            }
        }

        function salvar() {
            ContaUsuario.save(vm.cadastro).success(function () {
                $location.path("/cidade");
                alert("Conta cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();