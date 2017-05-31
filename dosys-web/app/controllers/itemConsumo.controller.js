
class ItemConsumoController{
	constructor(itemConsumoService, $stateParams){
		this.itemConsumoService = itemConsumoService;
		this.getAll ();
		this.serverErrors = undefined;
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

	delete (){
		var that = this;
		this.itemConsumoService.delete(this.itemConsumo._id).then(function (response){
			that.itemConsumo = response.data;
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
		});
	};

	getAll (){
		var that = this;
		this.itemConsumoService.getAll(this.itemConsumo).then(function (response){
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




	getById (){
		var that = this;
		this.itemConsumoService.getByCpf(this.itemConsumo).then(function (response){
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