const {DataTypes}=require("sequelize")
const seqDb =require("../DB/sequalizedb");

const seqUser= seqDb.define("sequser",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        unique:true

    },
},{
    timestamps:true
});

module.exports=seqUser;