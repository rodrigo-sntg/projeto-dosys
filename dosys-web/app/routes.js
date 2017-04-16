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
		url:"/cadastroCliente",
		controller:"clienteCtrl as vm",
		templateUrl:"app/views/cadastroCliente.html"
	});

	$stateProvider.state({
		name:"cadastroProduto",
		url:"/cadastroProduto",
		templateUrl:"app/views/cadastroProduto.html"
	});

	$stateProvider.state({
		name:"listaProduto",
		url:"/listaProduto",
		templateUrl:"app/views/listaProduto.html"
	});

	$stateProvider.state({
		name:"cadastroEstoque",
		url:"/cadastroEstoque",
		templateUrl:"app/views/cadastroEstoque.html"
	});

	$stateProvider.state({
		name:"listaEstoque",
		url:"/listaEstoque",
		templateUrl:"app/views/listaEstoque.html"
	});

	

}

angular.module("app").config(RoutesConfig);