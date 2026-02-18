require('dotenv').config();
const jwt= require("jsonwebtoken");

const Token=async(payload)=>{
 const data= await jwt.sign({payload},process.env.JWT_SECERT_KEY,{
    expiresIn: process.env.JWT_EXPIRES
 })
 return data;
}

const refreshToken=async(payload)=>{
 const data= await jwt.sign({payload},process.env.JWT_SECERT_KEY,{
    expiresIn:"7d"
 })
 return data;
}
module.exports={Token,refreshToken};
