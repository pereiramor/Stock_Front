(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("MercadoriaFormController", MercadoriaFormController);

    MercadoriaFormController.$inject = [
        "MercadoriaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function MercadoriaFormController(
        MercadoriaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Nova Mercadoria";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                MercadoriaService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Mercadoria";
                });
            }
        }

        function salvar() {
            MercadoriaService.save(vm.cadastro).success(function () {
                $location.path("/mercadoria");
                alert("Mercadoria cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();