const { required } = require("joi");
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    class:{
        type:String,
        enum:["FE","SE","TE","B.E"],
        required:true
    },
    college:{
        type:String,
        required:true,
        enum:["ADYPSOE","ADYPSOET","ADYPSOE(PRIVATE)","SEAMEDU"],
    },
    university:{
        type:String,
        default:"Ajeenkya Dy Patil University",
    }
},{timestamps:true});
const users=mongoose.model("users",UserSchema);
module.exports=users;