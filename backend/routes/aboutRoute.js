const express=require("express");
const aboutRoute=express.Router();
const about=require("../models/About");
aboutRoute.get("/all",async(req,res)=>{
    try{
        const abouts=await about.find();
        if(!abouts || abouts.length==0 ){
           return res.json({'message':"About not found"});
        }
        res.json(abouts);

    }catch(e){
        res.status(500).json({"message":"about section invalid"})
    }
})
module.exports=aboutRoute;