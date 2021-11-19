(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("EscolaridadeFormController", EscolaridadeFormController);

    EscolaridadeFormController.$inject = [
        "EscolaridadeService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function EscolaridadeFormController(
        EscolaridadeService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Nova Escolaridade";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                EscolaridadeService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Escolaridade";
                });
            }
        }

        function salvar() {
            EscolaridadeService.save(vm.cadastro).success(function () {
                $location.path("/escolaridade");
                alert("Escolaridade cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();