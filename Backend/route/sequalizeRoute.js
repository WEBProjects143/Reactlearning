const {updateUser,createUser,getAlluser}=require("../controller/sequalizeController")
const express=require("express");
const router=express.Router();

router.route("/sequser").post(createUser);
router.route("/updateuser").post(updateUser);
router.route("/getAlluser").get(getAlluser);
module.exports=router