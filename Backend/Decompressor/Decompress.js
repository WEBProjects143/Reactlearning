const  {Duplex } =require("stream")
const fs=require("fs");
//duplex stream

class duplexStream extends Duplex {
    constructor(options){
        super(options)
        this.internaldata=''
    }
    _read(){
        this.push(this.internaldata)
        this.push(null) // to end streeam
    }
    _write(chunk,encoding,callback){
        this.internaldata +=chunk.toString();
        callback()//callbacks tell the nodejs that writeable stream is completed end the stream.
    }
}
const streamDuplex=new duplexStream();
// streamDuplex.write("my name is khan Im not a terrorist")
streamDuplex.on("data",(chunk)=>{console.log(chunk.toString())})

//readable stream
const readableStream=fs.createReadStream("example.txt","utf-8");
readableStream.on("data",(chunk)=>{

})
readableStream.on("end",(chunk)=>{
    console.log("streams end..")
})

readableStream.on("error",(chunk)=>{
    console.log("stream error" + error)
})
// writeable stream s
const writeableStream=fs.createWriteStream("example.txt","utf-8");
writeableStream.write("Hello bhupendra good morning\n")
writeableStream.write("stream testing started")
writeableStream.on("end",(chunk)=>{
    console.log("streams end..")
})

writeableStream.on("error",(chunk)=>{
    console.log("stream error" + error)
})