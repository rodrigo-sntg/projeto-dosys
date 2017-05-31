
class UnidadeMedidaController{
	constructor(unidadeMedidaService, $stateParams){
		this.unidadeMedidaService = unidadeMedidaService;
		this.getAll();
		this.serverErrors = undefined;
		this.$stateParams = $stateParams;
		this.data;

	}

	insert (){
		var that = this;
		this.unidadeMedidaService.insert(this.unidadeMedida).then(function (response){
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
			this.serverErrors = erro;
		});
	};

	update (){
		var that = this;
		this.unidadeMedidaService.update(this.unidadeMedida).then(function (response){
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
		});
	};

	delete (){
		var that = this;
		this.unidadeMedidaService.delete(this.unidadeMedida._id).then(function (response){
			that.unidadeMedida = response.data;
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
		});
	};

	delete (id){
		var that = this;
		this.unidadeMedidaService.delete(id).then(function (response){
			that.unidadeMedida = response.data;
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
		});
	};

	getAll (){
		var that = this;
		this.unidadeMedidaService.getAll(this.unidadeMedida).then(function (response){
			that.unidadeMedidaService.getAll().then(function (response){
				console.log(response.data);
				that.unidadeMedidas = response.data;	
			});
		});
	};

	getById (){
		var that = this;
		this.unidadeMedidaService.getByCpf(this.unidadeMedida).then(function (response){
				that.unidadeMedida = response.data;
			
		}).catch(function(erro){
			console.log(erro);
		});
	};


};



angular.module("app").controller("unidadeMedidaCtrl", UnidadeMedidaController);