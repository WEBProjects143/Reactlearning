
const {DataTypes} =require("sequelize")
const seqDb =require("../DB/sequalizedb");
const bcrypt=require("bcrypt");

const seqUser= seqDb.define("sequsers",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        unique:true

    },
    password:{
        type:DataTypes.STRING

    },
},{
    timestamps:true
})
 seqUser.beforeCreate(async (seqUser,options)=>{
           if(seqUser.changed("password")){
            seqUser.password=await bcrypt.hash(seqUser.password,10)
            }
    })
module.exports=seqUser;