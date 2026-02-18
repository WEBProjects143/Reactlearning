
const seqUser=require("../model/SequalizeModel");
const {response} =require("../utils/responseHandler");
const bcrypt=require("bcrypt");
const {Token,refreshToken}=require("../utils/tokenGenerator");
const testDB =require("../DB/seqTable");
// const session= require("express-session");

// const usrAuth=require("../controller/userAuhentication");
const createUser=async(req,res)=>{
try {
    const {name,email,password}=req.body;
    const data=await seqUser.findOne({where:{email:email}})
    if(!data){
        const result=await seqUser.create({ name:name, email:email, password:password})
        res.status(200).json({
            msg:"new User Created....",
            result
        })}
        res.status(500).json({
            msg:"User already exist "
})} catch (error) {
    res.status(401).json({
    msg:"somthing went wrong",
    error
})
}
}

const updateUser=async(req,res)=>{
    try {
        const {name,email}=req.body
        const data=await testDB.findOne({where:{email:email}});
        if(data){
            const result=await testDB.update({name:name},{where:{email:email}})
            res.status(200).json({msg:"data got updated...",result})
        }else{
        res.status(404).json({msg:"data not exist"})}
        
    } catch (error) {
        console.log(error)
    }
    
}

const getAlluser=async(req,res)=>{
    try {
        console.log("session:  "+ JSON.stringify(req.session))
        const data=await testDB.findAll();
        response(res,200,"All data fetched",data)
    } catch (error) {
        console.log(error)
    };    
} 

const getUserByID=async(req,res)=>{
    const {id}=req.url
    const data= await testDB.findOne({email})
    if(!data){
        res.status().json({
            success:"false",
            msg:"user not found"
        })
    }else[
        res.status(200).json({
            success:"true",
            msg:"User exist",
            data
        })
    ]
}

const userlogin=async(req,res)=>{
const {email,password}=req.body;
const user=await seqUser.findOne({where:{email:email}});
console.log("users"+user.id)
if(user){
    const MatchPassword=await bcrypt.compare(password,user.password)
    if(MatchPassword){
    req.session.userID =user.id //create session   
    const token=await Token(user.id); //create access token 

    const RefreshToken=await refreshToken(user.id);// generate RefreshToken
        
    // Storing refresh token in the cookie 
    res.cookie("RefreshToken",RefreshToken,{
        httpOnly:true,
        secure:true,
        sameSite:"strict",
        maxAge:7*24*60*60*1000,

    });
    res.status(200).json({
    _id:user._id,
    name:user.name,
    email:user.email,
    token
    })}else{
        res.status(401).json("Wrong  email or password")
    }
    }else{
        res.status(500).json({msg:"User not found"})
    }
}

module.exports = {updateUser,createUser,getAlluser,userlogin,getUserByID}

