
module.exports=(err,req,res,next)=>{
    console.log(err.stack)
    res.status(err.statusCode).json({msg:err.message})
    next()
}