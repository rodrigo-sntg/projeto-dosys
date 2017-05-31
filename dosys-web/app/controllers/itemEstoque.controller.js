
class ItemEstoqueController{
	constructor(itemEstoqueService, unidadeMedidaService, $stateParams){
		this.itemEstoqueService = itemEstoqueService;
		this.unidadeMedidaService = unidadeMedidaService;
		this.getAll ();
		this.serverErrors = undefined;
		let that = this;

		this.unidadeMedidaService.getAll().then(function (response){
			that.unidadeMedidas = response.data;
		});

		console.log(this.unidadeMedidas)

		this.$stateParams = $stateParams;
		console.log(this.$stateParams.cpf);
		this.data;

		// $http({
		// 		method: 'GET',
		// 		url: '/categorias/'
  //           }).success(function (result) {
  //               $scope.categorias = result;
  //           });
	}

	insert (){
		var that = this;
		this.itemEstoqueService.insert(this.itemEstoque).then(function (response){
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
			this.serverErrors = erro;
		});
	};

	update (){
		var that = this;
		this.itemEstoqueService.update(this.itemEstoque).then(function (response){
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
		});
	};

	delete (){
		var that = this;
		this.itemEstoqueService.delete(this.itemEstoque._id).then(function (response){
			that.itemEstoque = response.data;
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
		});
	};

	getAll (){
		var that = this;
		this.itemEstoqueService.getAll(this.itemEstoque).then(function (response){
			that.itemEstoqueService.getAll().then(function (response){
				console.log(response.data);
				that.itensEstoque = response.data;	
			});
		});
	};



	getById (){
		var that = this;
		this.itemEstoqueService.getById(this.itemEstoque).then(function (response){
				that.itemEstoque = response.data;
			
		}).catch(function(erro){
			console.log(erro);
		});
	};

	// limparMascaras(){
		// this.itemEstoque.cpf = this.itemEstoque.cpf.replace(/\D/g,"");
		// this.itemEstoque.telefone = this.itemEstoque.telefone.replace(/\D/g,"")
		// this.itemEstoque.rg = this.itemEstoque.rg.replace(/\D/g,"")
	// }
};



angular.module("app").controller("itemEstoqueCtrl", ItemEstoqueController);