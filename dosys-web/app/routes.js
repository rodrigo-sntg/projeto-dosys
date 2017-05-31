RoutesConfig = function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/login");

	$stateProvider.state({
		name:"login",
		url:"/login",
		controller:"loginCtrl as vm",
		templateUrl:"app/views/login.html"
	});

	$stateProvider.state({
		name:"home",
		url:"/home",
		templateUrl:"app/views/home.html"
	});

	$stateProvider.state({
		name:"cadastroCliente",
		url:"/cadastroCliente/:cpf",
		controller:"clienteCtrl as vm",
		templateUrl:"app/views/cadastroCliente.html"
	});

	$stateProvider.state({
		name:"listaCliente",
		url:"/listaCliente",
		controller:"clienteCtrl as vm",
		templateUrl:"app/views/listaCliente.html"
	});

	$stateProvider.state({
		name:"cadastroProduto",
		url:"/cadastroProduto",
		controller:"itemConsumoCtrl as vm",
		templateUrl:"app/views/cadastroProduto.html"
	});

	$stateProvider.state({
		name:"listaProduto",
		url:"/listaProduto",
		controller:"itemConsumoCtrl as vm",
		templateUrl:"app/views/listaProduto.html"
	});

	$stateProvider.state({
		name:"cadastroEstoque",
		url:"/cadastroEstoque",
		controller:"itemEstoqueCtrl as vm",
		templateUrl:"app/views/cadastroEstoque.html"
	});

	$stateProvider.state({
		name:"listaEstoque",
		url:"/listaEstoque",
		controller:"itemEstoqueCtrl as vm",
		templateUrl:"app/views/listaEstoque.html"
	});

	$stateProvider.state({
		name:"cadastroUnidadeMedida",
		url:"/cadastroUnidadeMedida",
		controller:"unidadeMedidaCtrl as vm",
		templateUrl:"app/views/cadastroUnidadeMedida.html"
	});

	$stateProvider.state({
		name:"listaUnidadeMedida",
		url:"/listaUnidadeMedida",
		controller:"unidadeMedidaCtrl as vm",
		templateUrl:"app/views/listaUnidadeMedida.html"
	});


	// $stateProvider.state({
	// 	name:"cadastroCategoria",
	// 	url:"/cadastroCategoria",
	// 	controller:"categoriaCtrl as vm",
	// 	templateUrl:"app/views/cadastroCategoria.html"
	// });

	$stateProvider.state({
		name:"cadastroCategoria",
		url:"/cadastroCategoria/:id",
		controller:"categoriaCtrl as vm",
		templateUrl:"app/views/cadastroCategoria.html"
	});

	$stateProvider.state({
		name:"listaCategoria",
		url:"/listaCategoria",
		controller:"categoriaCtrl as vm",
		templateUrl:"app/views/listaCategoria.html"
	});


	

}

angular.module("app").config(RoutesConfig);