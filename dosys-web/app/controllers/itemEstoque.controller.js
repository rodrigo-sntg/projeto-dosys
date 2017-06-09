
class ItemEstoqueController{
	constructor(itemEstoqueService, unidadeMedidaService, categoriaService, $stateParams){
		this.itemEstoqueService = itemEstoqueService;
		this.unidadeMedidaService = unidadeMedidaService;
		this.categoriaService = categoriaService;
		this.getAll ();
		this.serverErrors = undefined;
		let that = this;

		this.unidadeMedidaService.getAll().then(function (response){
			that.unidadeMedidas = response.data;
		});

		this.categoriaService.getAll().then(function (response){
			that.categorias = response.data;
			console.log(that.categorias);
		});


		console.log(this.unidadeMedidas)

		this.$stateParams = $stateParams;

		if(this.$stateParams.id){
			this.getById(this.$stateParams.id);
		}

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

	delete (id){
		var that = this;
		this.itemEstoqueService.delete(id).then(function (response){
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



	getById (id){
		var that = this;
		this.itemEstoqueService.getById(id).then(function (response){
				that.itemEstoque = response.data;
			
		}).catch(function(erro){
			console.log(erro);
		});
	};

	novo(){
		this.itemEstoque = "";
	}

	// limparMascaras(){
		// this.itemEstoque.cpf = this.itemEstoque.cpf.replace(/\D/g,"");
		// this.itemEstoque.telefone = this.itemEstoque.telefone.replace(/\D/g,"")
		// this.itemEstoque.rg = this.itemEstoque.rg.replace(/\D/g,"")
	// }
};



angular.module("app").controller("itemEstoqueCtrl", ItemEstoqueController);