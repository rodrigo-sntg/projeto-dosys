'use strict';

const 
	SubCategoria = require("../models/subCategoriaModel").SubCategoria,
	Categoria = require("../models/categoriaModel").Categoria;

class CategoriaService {
	
	* insert(categoria){

			console.log("entrou criação categoria")
			let subArr = [];
			let arr = categoria.subCategorias;
			for(var i = 0; i< categoria.subCategorias.length;i++){
				let sub = new SubCategoria(); 
				sub.nome = arr[i];
				console.log(sub.nome)
				let obj = yield SubCategoria.create(sub);
				subArr.push(obj._id);
			}

			categoria.subCategorias = subArr;
			return Categoria.create(categoria);

	}

	* update(categoria){
		let item = yield Categoria.findOne({'_id':categoria._id}).populate('subCategorias');
		for(var i=0; i < item.subCategorias.length; i++){
			console.log('removendo subs' + item.subCategorias[i]._id)
			yield SubCategoria.remove({'_id':item.subCategorias[i]._id});
		}
		

		console.log("entrou update categoria")
			let subArr = [];
			let arr = categoria.subCategorias;
			for(var i = 0; i< categoria.subCategorias.length;i++){
				let sub = new SubCategoria();
				sub.nome = arr[i];
				console.log(sub.nome)
				let obj = yield SubCategoria.create(sub);
				subArr.push(obj._id);
			}

			categoria.subCategorias = subArr;
			return  Categoria.update({_id:categoria._id}, categoria);

	}

	* delete(id){

		let item = yield Categoria.findOne({'_id':id});
		console.log('passou aqui:' + item._id);
		return yield Categoria.remove({'_id':id});
	}

	* getById(id){
		let categoria = yield Categoria.findOne({'_id':id}).populate("subCategorias");
		return categoria;
	}

	* getAll(){
		return yield Categoria.find().populate("subCategorias");
	}

	* getAllSub(){
		return yield SubCategoria.find();
	}
}

module.exports = new CategoriaService();