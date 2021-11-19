(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("CidadeFormController", CidadeFormController);

    CidadeFormController.$inject = [
        "CidadeService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function CidadeFormController(
        CidadeService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Nova Cidade";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                CidadeService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Cidade";
                });
            }
        }

        function salvar() {
            CidadeService.save(vm.cadastro).success(function () {
                $location.path("/cidade");
                alert("Cidade cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();