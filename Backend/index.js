const express=require("express");
const app=express();
const path = require('path');
const cors=require("cors");
const router=require("./route/streamingRoute")

const options={
    "origin":"http://localhost:3000",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "credentials":true
}
//Uing middleware
app.use(cors(options));
app.use(express.json());
app.use("/api/stream",router);
//It tells Express to serve static files (like images, videos, PDFs, etc.) from the files folder.

//when a web page make a request to another origin  browser block that request for security  to allow
//some kind of request we have to allow  using  Access-Control-Allow-Origin
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }, express.static("files"));

console.log(path.join(__dirname,"files"))
app.listen(4000,console.log(
    "Server is streaming"
))