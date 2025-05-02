const {createUser}=require("../controller/sequalizeController")
const express=require("express");
const router=express.Router();

router.route("/sequser").post(createUser);
module.exports=router