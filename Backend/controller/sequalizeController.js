const seqUser=require("../model/SequalizeModel");
exports.createUser=async(req,res)=>{
    const {name,email}=req.body
    const user=await seqUser.create({name:name,email:email})
    res.status(200).json({
        success:true,
        user
    })
}