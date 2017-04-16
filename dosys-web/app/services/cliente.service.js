function ClienteService($http){
	this.http = $http;
}

ClienteService.prototype.insert = function(cliente){
	return this.http({
		method:'POST',
		url:'http://localhost:9000/api/clientes',
		params:cliente
	})
}

ClienteService.prototype.update = function(cliente){
	return this.http({
		method:'PUT',
		url:'http://localhost:9000/api/clientes',
		params:cliente
	})
}

ClienteService.prototype.delete = function(id){
	return this.http({
		method:'POST',
		url:'http://localhost:9000/api/clientes/' + id
	})
}

ClienteService.prototype.getAll = function(cliente){
	return this.http({
		method:'GET',
		url:'http://localhost:9000/api/clientes'
	})
}

ClienteService.prototype.getByCpf = function(cliente){
	return this.http({
		method:'GET',
		url:'http://localhost:9000/api/clientes/cpf/'+ cliente.cpf,
		params:cliente
	})
}

angular.module("app").service("clienteService", ClienteService);