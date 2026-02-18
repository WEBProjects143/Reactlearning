
const {Worker,MessageChannel} =require("worker_threads");
const runfibo=(n)=>{
    return new Promise((resolve,reject)=>{
        const  worker= new Worker("./test.js",{
            workerData:{a:2,b:4},
        })
        const { port1, port2 } = new MessageChannel();
        worker.postMessage({port:port2},[port2]);
        port1.on("message",msg=>{
            console.log("from worker" ,msg)
        })
        
    port1.postMessage("Hello worker");
        worker.on("message",resolve);
        worker.on("error",reject);
        worker.on("exit",(code)=>{
            if(code!=0)
                reject(new Error(`Worker stopped with exit code ${code}`))
        })
    })

}



(async () => {
  console.time('fibonacci');
  const result = await runfibo(40);
  console.timeEnd('fibonacci');
  console.log(`Fibonacci(40) = ${result}`);
})();