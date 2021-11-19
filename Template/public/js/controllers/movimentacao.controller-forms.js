(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("MovimentacaoeFormController", MovimentacaoFormController);

    MovimentacaoFormController.$inject = [
        "MovimentacaoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function MovimentacaoFormController(
        MovimentacaoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Nova Movimentaçao";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                MovimentacaoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Movimentaçao";
                });
            }
        }

        function salvar() {
            MovimentacaoService.save(vm.cadastro).success(function () {
                $location.path("/movimentacao");
                alert("Movimentaçao cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();