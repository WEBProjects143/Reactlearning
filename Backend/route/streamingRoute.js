const {streamCntrl}=require("../controller/StreamController");
const upload=require("../utils/multer");
const  express=require("express")
const router=express.Router();

router.route("/file").post(upload.single('video'),streamCntrl)
module.exports=router;