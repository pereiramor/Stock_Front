angular
    .module("MyApp", ["ngRoute", "satellizer"])
    .config(function($routeProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "partials/home.html",
            })
            .when("/home", {
                templateUrl: "partials/home.html",
            })
            .when("/cidade", {
                templateUrl: "partials/cidade.html",
            })
            .when("/cidade/:id", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/cidade/new", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/cliente", {
                templateUrl: "partials/clientes.html",
            })
            .when("/cliente/:id", {
                templateUrl: "partials/clientes-form.html",
            })
            .when("/cliente/new", {
                templateUrl: "partials/clientes-form.html",
            })
            .when("/movimentacao", {
                templateUrl: "partials/movimentacao.html",
            })
            .when("/movimentacao/:id", {
                templateUrl: "partials/movimentacao-form.html",
            })
            .when("/movimentacao/new", {
                templateUrl: "partials/movimentacao-form.html",
            })
            .when("/mercadoria", {
                templateUrl: "partials/mercadorias.html",
            })
            .when("/mercadoria/:id", {
                templateUrl: "partials/mercadorias-form.html",
            })
            .when("/mercadoria/new", {
                templateUrl: "partials/mercadorias-form.html",
            })
            .when("/estoque", {
                templateUrl: "partials/estoque.html",
            })
            .when("/estoque/:id", {
                templateUrl: "partials/estoque-form.html",
            })
            .when("/estoque/new", {
                templateUrl: "partials/estoque-form.html",
            })
            .when("/endereco", {
                templateUrl: "partials/enderecos.html",
            })
            .when("/endereco/:id", {
                templateUrl: "partials/enderecos-form.html",
            })
            .when("/endereco/new", {
                templateUrl: "partials/enderecos-form.html",
            })
            .when("/estado", {
                templateUrl: "partials/estados.html",
            })
            .when("/estado/:id", {
                templateUrl: "partials/estados-form.html",
            })
            .when("/estado/new", {
                templateUrl: "partials/estados-form.html",
            })
            .otherwise({
                templateUrl: "partials/404.html",
            });
    })
    .run(function($rootScope, $window) {
        
    })
    .directive("ngConfirmClick", [
        function() {
            return {
                link: function(scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind("click", function(event) {
                        if (window.confirm(msg)) {
                            scope.$eval(clickAction);
                        }
                    });
                },
            };
        },
    ]);