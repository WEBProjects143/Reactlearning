export const response=(res,statusCode,msg,data=null)=>{
    return res.status(statusCode).json({msg:msg,data})
}