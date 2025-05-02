const express = require("express");
const helmet = require("helmet");
const app = express();
const path = require("path");
const cors = require("cors");
const router = require("./route/streamingRoute");
const seqRouter=require("./route/sequalizeRoute")
const seqDB=require("./DB/sequalizedb")

const { Server } = require("socket.io");
const { createServer } = require("http");
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  },
});

//Uing middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": ["'self'"],
        "style-src": null,
      },
    },
  })
);
app.use(cors());
app .use(express.json());
app.use("/api/stream", router);
app.use("/api/user", seqRouter);
app.use("/api/test",(req,res)=>{
    console.log("testing stream......")
    res.status(200).json({msg:"hello there"})
});

//It tells Express to serve static files (like images, videos, PDFs, etc.) from the files folder.

//when a web page make a request to another origin  browser block that request for security  to allow
//some kind of request we have to allow  using  Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/files", express.static(path.join(__dirname, "files")));

console.log(path.join(__dirname, "files"));

io.on("connection", (socket) => {
  console.log("server side socket is connected");

  socket.on("chat message", (msg) => {
    console.log("Received message: " + msg);
    io.emit("chat message", msg);
  });
});

//Database create in sequalizing
const seqDb=require("./DB/sequalizedb");
server.listen(4000,async()=>{console.log("Server is streaming")

    try {  
        await seqDb.authenticate();//check your sequilze database connect or not
        await seqDb.sync({force:true})//Create db if not existed
        console.log("sequalize database connected....")
    } catch (error) {
        
    }
});
