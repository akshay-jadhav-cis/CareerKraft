const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const aboutSchema = new Schema({
icon:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
title:{
    type:String,
    required:true
}
});
const about = mongoose.model("About", aboutSchema);
module.exports=about;