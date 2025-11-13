const { required } = require("joi");
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const userSchema = new mongoose.Schema({
  googleId: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },

  password: { type: String, required: false },

  class: { type: String, required: false },
  college: { type: String, required: false },

  avatar: String,
   twoFactorEnabled: { type: Boolean, default: false },
  twoFactorSecret: { type: String, default: "" },
});

const users=mongoose.model("users",userSchema);
module.exports=users;