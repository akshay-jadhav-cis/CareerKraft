const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const featureSchema=new Schema({
    icon:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
});
const feature=mongoose.model("feature",featureSchema);
module.exports=feature;