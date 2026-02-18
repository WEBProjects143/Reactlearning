// worker_thread is a built in module build to  make nodejs multi threaded
//workerData is used to fetch data from the thread
// parentport used to manipulated thread
const {parentPort,workerData} =require("worker_threads");
 function fibo(workerData){
    return workerData.a + workerData.b
 } ;
 
const result =fibo(workerData);
parentPort.postMessage(result)
parentPort.on("message" ,(port)=>{
    port.on("message",(msg)=>{
        port.postMessage(`Received :${msg}`)
    })
});