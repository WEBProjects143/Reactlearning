const {updateUser,createUser,getAlluser,userlogin,getUserByID}=require("../controller/sequalizeController")
const express=require("express");
const auth=require("../Middleware/authMiddleware");
const router=express.Router();

router.route("/sequser").post(createUser);
router.route("/updateuser").post(updateUser);
router.route("/getAlluser").get(getAlluser);
router.route("/getUserById").get(auth,getUserByID);
router.route("/usrAuth").post(getAlluser);
router.route("/login").post(userlogin);
module.exports=router   