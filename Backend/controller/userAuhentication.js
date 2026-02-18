
const jwt =require("jsonwebtoken");
const usrAuth=async(password)=>{
const pass =await bcrypt.hash(password,10)
return pass
}
module.exports=usrAuth;