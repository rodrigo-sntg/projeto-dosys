
ClienteController = function(clienteService){
	this.clienteService = clienteService;
	this.clientes = clienteService.getAll().then(function (response){
		console.log(response.data);
	});
	this.serverErrors = undefined;
	var vm = this;
};

ClienteController.prototype.insert = function(){
	var that = this;
	this.clienteService.insert(this.cliente).then(function (response){
		that.getAll();
	}).catch(function(erro){
		console.log(erro);
		this.serverErrors = erro;
	});

};

ClienteController.prototype.update = function(){
	var that = this;
	this.clienteService.update(this.cliente).then(function (response){
		that.getAll();
	}).catch(function(erro){
		console.log(erro);
	});

};

ClienteController.prototype.delete = function(){
	var that = this;
	this.clienteService.delete(this.cliente._id).then(function (response){
		that.cliente = response.data;
		that.getAll();
	}).catch(function(erro){
		console.log(erro);
	});

};



ClienteController.prototype.getAll = function(){
	var that = this;
	this.clienteService.getAll(this.cliente).then(function (response){
		that.clienteService.getAll().then(function (response){
			console.log(response.data);
		});
	});
};

ClienteController.prototype.getByCpf = function(){
	var that = this;
	this.clienteService.getByCpf(this.cliente).then(function (response){
			that.cliente = response.data;
			console.log(response.data);
		
	}).catch(function(erro){
		console.log(erro);
	});

};

angular.module("app").controller("clienteCtrl", ClienteController);