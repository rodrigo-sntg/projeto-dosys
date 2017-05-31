'use strict';

const 
	ItemEstoque = require("../models/itemEstoqueModel").ItemEstoque,
	Medida = require("../models/medidaModel").Medida,
	SubCategoria = require("../models/subCategoriaModel").SubCategoria;

class ItemEstoqueService {
	
	* insert(itemEstoque){
			console.log("entrou criação estoque");
			itemEstoque.medida = JSON.parse(itemEstoque.medida);
			let medidaObj = new Medida(itemEstoque.medida);
			let medida = yield Medida.create(medidaObj);
			itemEstoque.medida = medida._id;

			return ItemEstoque.create(itemEstoque).populate();
	}

	* update(itemEstoque){

		itemEstoque.medida = JSON.parse(itemEstoque.medida);
		console.log(itemEstoque)
		let medida;
		console.log("ID ENDERECO - " + itemEstoque.medida._id);
		if(itemEstoque.medida._id == undefined){
			let medidaObj = new Medida(itemEstoque.medida);
			medida = yield Medida.create(medidaObj);
			ItemEstoque.medida = medida._id;
		} else{

			let medidaObj = new Medida(itemEstoque.medida);
			medida = yield Medida.update({_id: medidaObj._id}, medidaObj);
		}

		let item = ItemEstoque.update({_id:itemEstoque._id}, itemEstoque);
		itemEstoque = item;
		return itemEstoque;
	}

	* delete(id){
		// let item = yield ItemEstoque.findOne({'_id':id});
		// console.log('deletado:' + item._id);
		// return yield ItemEstoque.remove({'_id':id});

		let item = yield ItemEstoque.findOne({'_id':id});
		console.log('passou aqui:' + item._id);
		item.status = false;
		yield ItemEstoque.update({_id:item._id}, item);
		return yield ItemEstoque.findOne({'_id':id}).populate();
	}

	* getById(itemEstoque){
		console.log(itemEstoque);
		let item = yield ItemEstoque.findOne({'_id':itemEstoque}).populate('medida');
		return item;
	}

	* getAll(){
		return yield ItemEstoque.find().populate("medida");
	}
}

module.exports = new ItemEstoqueService();