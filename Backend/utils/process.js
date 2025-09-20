const {spawn} =require("child_process")

const ls = spawn('cmd', ['/c','dir']);

ls.stdout.on("data",(data)=>{
    console.log("stdout" + data)
})
ls.stderr.on("error",(error)=>{
    console.log("stderr" + error)
})
ls.on("close",(code)=>{
    console.log(`Child process exited with code ${code}`)
})
ls.on("error",(error)=>{
    console.log(`Error on ${error}`)
})