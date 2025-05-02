const {Sequelize, Model}=require("sequelize");


const seqDb=new Sequelize("bhupendra", "root","1234",{
    host:"localhost",
    dialect:'mysql'
})

module.exports=seqDb;