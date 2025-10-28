const bcrypt=require("bcrypt");
async function hashPassword(password){
    const saltRound=10;
   return  await bcrypt.hash(password,saltRound);
}
async function hashCompare(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
module.exports={hashCompare,hashPassword};