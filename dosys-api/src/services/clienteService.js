'use strict';

const 
	Cliente = require("../models/clienteModel").Cliente,
	Endereco = require("../models/enderecoModel").Endereco;

class ClienteService {
	
	* insert(cliente){

		let clienteDuplicado = yield this.getByCpf(cliente.cpf);
		if(clienteDuplicado == null){
			cliente.endereco = JSON.parse(cliente.endereco);
			let end = yield Endereco.create(cliente.endereco);
			cliente.endereco = end._id;
			return Cliente.create(cliente);
		}else{
			return "cliente duplicado";
		}
	}

	* update(cliente){
		cliente.endereco = JSON.parse(cliente.endereco);
		console.log(cliente)
		let end;
		console.log("ID ENDERECO - " + cliente.endereco._id);
		if(cliente.endereco._id == undefined){
			console.log("ENDERECO SEM ID - CRIAR - OBJETO -");
			console.log(cliente.endereco);
			let teste = new Endereco(cliente.endereco);
			console.log(teste);
			end = yield Endereco.create(teste);
			console.log(end._id + " --- ID CRIADO");
			cliente.endereco = end._id;
			console.log("ENDERECO CRIADO");
			console.log(cliente.endereco);
		} else{
			console.log("ENDERECO COM ID - ALTERAR - OBJETO - ");
			console.log(cliente.endereco);
			let teste = new Endereco(cliente.endereco);
			console.log(teste);
			end = yield Endereco.update({_id: teste._id}, teste);
		}

		let cli = Cliente.update({_id:cliente._id}, cliente);
		cliente = cli;
		return cliente;
	}

	* delete(id){

		let cli = yield Cliente.findOne({'_id':id});
		console.log('passou aqui:' + cli._id);
		cli.status = false;
		yield Cliente.update({_id:cli._id}, cli);
		return yield Cliente.findOne({'_id':id}).populate('endereco');
	}

	* getByCpf(cpf){
		let cliente = yield Cliente.findOne({'cpf':cpf}, function(err, result){
			if (err) { /* handle err */ }
				console.log(err);
				return err;
		    if (result) {
		        return result;
		    } else {
		        return null;
		    }
		}).populate('endereco');
		return cliente;
	}

	* getAll(){
		/*return yield Cliente.find({nome:new RegExp('teste')},{'nome':-1}).populate('endereco', 'rua complemento');*/
		return yield Cliente.find().populate();
	}
}

module.exports = new ClienteService();