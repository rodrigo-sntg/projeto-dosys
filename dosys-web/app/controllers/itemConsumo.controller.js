
class ItemConsumoController{
	constructor(itemConsumoService, unidadeMedidaService, itemEstoqueService, categoriaService, $stateParams){
		this.itemConsumoService = itemConsumoService;
		this.itemEstoqueService = itemEstoqueService;
		this.getAll ();
		this.unidadeMedidaService = unidadeMedidaService;
		this.serverErrors = undefined;
		this.$stateParams = $stateParams;
		let that = this;
		this.categoria;
		this.subCategoria;

		this.itemEstoqueService.getAll().then(function (response){
			that.itensEstoque = response.data;
		});

		this.unidadeMedidaService.getAll().then(function (response){
			that.unidadeMedidas = response.data;
		});

		if(this.$stateParams.id){
			this.getById(this.$stateParams.id);
		}


		this.categoriaService = categoriaService;

		this.categoriaService.getAll().then(function (response){
			that.categorias = response.data;
		});

		this.data;

		// $http({
		// 		method: 'GET',
		// 		url: '/categorias/'
  //           }).success(function (result) {
  //               $scope.categorias = result;
  //           });
	}

	atualizaSubCategorias(){
		var that = this;
		this.categoriaService.getById(this.categoria._id)

		this.categoriaService.getById(this.categoria._id).then(function (response){
			that.categoria = response.data;
			that.subCategorias = response.data.subCategorias;
		})

		this.subCategorias = that.categoria.subCategorias;
	}

	insert (){
		var that = this;
		this.itemConsumoService.insert(this.itemConsumo).then(function (response){
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
			this.serverErrors = erro;
		});
	};

	update (){
		var that = this;
		this.itemConsumoService.update(this.itemConsumo).then(function (response){
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
		});
	};

	delete (id){
		var that = this;
		this.itemConsumoService.delete(id).then(function (response){
			that.itemConsumo = response.data;
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
		});
	};

	getAll (){
		var that = this;
		this.itemConsumoService.getAll().then(function (response){
			that.itemConsumoService.getAll().then(function (response){
				console.log(response.data);
				that.itemConsumos = response.data;	
			});
		});
	};

	getAllCategorias (){
		var that = this;
		this.itemConsumoService.getAll(this.itemConsumo).then(function (response){
			that.itemConsumoService.getAll().then(function (response){
				console.log(response.data);
				that.categorias = response.data;	
			});
		});
	};

	getAllMedidas (){
		var that = this;
		this.itemConsumoService.getAll(this.itemConsumo).then(function (response){
			that.itemConsumoService.getAll().then(function (response){
				console.log(response.data);
				that.medidas = response.data;	
			});
		});
	};
	getAllItensEstoque (){
		var that = this;
		this.itemConsumoService.getAll(this.itemConsumo).then(function (response){
			that.itemConsumoService.getAll().then(function (response){
				console.log(response.data);
				that.itensEstoque = response.data;	
			});
		});
	};

	getById (id){
		var that = this;
		this.itemConsumoService.getById(id).then(function (response){
				that.itemConsumo = response.data;
			
		}).catch(function(erro){
			console.log(erro);
		});
	};

	// limparMascaras(){
		// this.itemConsumo.cpf = this.itemConsumo.cpf.replace(/\D/g,"");
		// this.itemConsumo.telefone = this.itemConsumo.telefone.replace(/\D/g,"")
		// this.itemConsumo.rg = this.itemConsumo.rg.replace(/\D/g,"")
	// }
};



angular.module("app").controller("itemConsumoCtrl", ItemConsumoController);