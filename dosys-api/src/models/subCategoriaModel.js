'use strict';

const 
	mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	
	SubCategoriaSchema = new Schema({
		nome:String
	})

module.exports.SubCategoria = mongoose.model("SubCategoria", SubCategoriaSchema)