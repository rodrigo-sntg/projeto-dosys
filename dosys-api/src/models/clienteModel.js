'use strict';

const 
	mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	
	ClienteSchema = new Schema({
		nome:String,
		dataNascimento:Date,
		cpf:String,
		status:Boolean,
		rg:String,
		telefone:String,
		endereco: {
			type:Schema.Types.ObjectId,
			ref:"Endereco"
		}
	})

module.exports.Cliente = mongoose.model("Cliente", ClienteSchema)