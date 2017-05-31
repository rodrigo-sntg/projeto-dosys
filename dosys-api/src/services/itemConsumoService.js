'use strict';

const 
	ItemConsumo = require("../models/itemConsumoModel").ItemConsumo,
	SubCategoria = require("../models/subCategoriaModel").SubCategoria,
	ItemConsumoEstoque = require("../models/itemEstoqueModel").ItemConsumoEstoque;

class ItemConsumoService {
	
	* insert(itemConsumo){
			console.log("entrou criação");
			console.log(itemConsumo)
			return ItemConsumo.create(itemConsumo);
	}

	* update(itemConsumo){
		return  ItemConsumo.update({_id:itemConsumo._id}, itemConsumo);
	}

	* delete(id){

		let item = yield ItemConsumo.findOne({'_id':id});
		console.log('passou aqui:' + cli._id);
		item.status = false;
		yield ItemConsumo.update({_id:cli._id}, item);
		return yield ItemConsumo.findOne({'_id':id}).populate('subCategoria');
	}

	* getById(id){
		let ItemConsumo = yield ItemConsumo.findById(id, function(err, result){
			if (err) { /* handle err */ }
				console.log(err);
				return err;
		    if (result) {
		        return result;
		    } else {
		        return null;
		    }
		}).populate('subCategoria');
		return ItemConsumo;
	}

	* getAll(){
		return yield ItemConsumo.find().populate();
	}
}

module.exports = new ItemConsumoService();