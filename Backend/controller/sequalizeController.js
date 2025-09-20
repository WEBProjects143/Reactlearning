const testDB =require("../DB/seqTable");
const {response} =require("../utils/responseHandler");
const createUser=async(req,res)=>{
try {
const {name,email}=req.body;
const data=await testDB.findOne({where:{email:email}})
if(!data){
    const result=await testDB.create({ name:name, email: email1 })
    res.status(200).json({
        msg:"Data inserted...",
        result
    })}
     res.status(500).json({
        msg:"Data  already exist"
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
        const data=await testDB.findAll();
        response(res,200,"All data fetched",data)
    } catch (error) {
        console.log(error)
    };    
}   
module.exports = {updateUser,createUser,getAlluser}

