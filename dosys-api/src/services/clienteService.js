'use strict';

const 
	Cliente = require("../models/clienteModel").Cliente,
	Endereco = require("../models/enderecoModel").Endereco;

class ClienteService {
	
	* insert(cliente){
		
		cliente.endereco = JSON.parse(cliente.endereco);
		let end = yield Endereco.create(cliente.endereco);
		cliente.endereco = end._id;
		return Cliente.create(cliente);
	}

	* update(cliente){
		cliente.endereco = JSON.parse(cliente.endereco);
		let end = yield Endereco.update(cliente.endereco);
		cliente.endereco = end._id;
		return Cliente.update(cliente);
	}

	* delete(id){
		return yield Cliente.remove({_id:id});
	}

	* getByCpf(cliente){
		cliente = yield Cliente.findOne({'cpf':cliente.cpf}).populate('endereco');
		return cliente;
	}

	* getAll(){
		/*return yield Cliente.find({nome:new RegExp('teste')},{'nome':-1}).populate('endereco', 'rua complemento');*/
		return yield Cliente.find().populate();
	}
}

module.exports = new ClienteService();