let mongoose = require("mongoose")

// creating a user category schema


const categorySchema = new mongoose.Schema({
	categoryName:{
		type: String,
		required: true,
	},
	description:{
		type:String,

	},
	is_enable:{
		type: String,
	},},

	{timestamps:true}

);

//creating a model 
module.exports = mongoose.model("category", categorySchema)