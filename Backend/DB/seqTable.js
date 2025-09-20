const sequalize=require("./sequalizedb");
const Sequelize=require("sequelize");

const  testDB= sequalize.define("seqtest",{
    name:{
        type:Sequelize.STRING,
        allowNull:true
    },
     email:{
        type:Sequelize.STRING,
        allowNull:true
    },
    myDate:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW
    },
    createAt:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW
    },
    updaatedAt:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW  
    }
});
module.exports=testDB
