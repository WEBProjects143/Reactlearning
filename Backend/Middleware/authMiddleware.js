require("dotenv").config();
const jwt= require("jsonwebtoken");
const UserModel=require("../model/SequalizeModel");

const auth=async(req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(' ')[1];
         if (!token) return res.status(401).json({ message: 'No token provided' });

         const decoder=await jwt.verify(token,process.env.JWT_SECERT_KEY);
        console.log("decoder")
         console.log(decoder.payload)
         const user=await UserModel.findByPk(decoder.payload);
         if (!user) return res.status(401).json({ message: 'Invalid token' });
         req.user=user
         next ();
        res.json(
        {msg:"Token is valid",
        user
        });

       
    } catch (error) {

        res.status(401).json({ message: 'Unauthorized' });
    }
}
module.exports=auth;