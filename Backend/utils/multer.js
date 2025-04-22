const multer =require("multer");
const path=require('path');
const {v4 : uuidv4} = require('uuid')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"files")
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        console.log(ext)
        const name = path.basename(file.originalname, ext);
        console.log(name)
        const uniqueName = `${Date.now()}_${uuidv4()}_${name}${ext}`;
        cb(null, uniqueName);
      }
});

const upload=multer({
    storage,
    fileFilter:(req,file,cb)=>{
        cb(null,true)
    }
})
module.exports = upload;