const express = require("express");
const helmet = require("helmet");
const app = express();
const session=require("express-session");
const path = require("path");
const cors = require("cors");
const router = require("./route/streamingRoute");
const seqRouter=require("./route/sequalizeRoute")
const seqDB=require("./DB/sequalizedb");
const CustomeError=require("./ErrorHandler/customErrorHandler");
const UtilError=require("./utils/utilError");
const cookie=require("cookie-parser");

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

app.use(session({
  secret:"sonu",
  saveUninitialized:true,//this configuration  will not save session after every request and it will not send cokkies unless the session is used
  resave:true, //false means it only save session when the session requested by the same user and it modified
  cookie: {
    maxAge: 1000 * 60 * 30 // 30 minutes
  }
}));


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
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}));
app .use(express.json());
app .use(cookie()); // To use cookies in the and manipulate cookie in the system
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


io.on("connection", (socket) => {
  console.log("server side socket is connected");

  socket.on("chat message", (msg) => {
    console.log("Received message: " + msg);
    io.emit("chat message", msg);
  });
});

//adding cluster
const cluster=require("cluster");
const os =require("os");

const TotalCPU=os.cpus().length

//Database create in sequalizing
const seqDb=require("./DB/sequalizedb");


if(cluster.isPrimary){
  for(let i=0;i<=TotalCPU;i++){
    cluster.fork()
  }
}else{
  app.use("/",(err,req,res)=>{
   throw new CustomeError("this is a custom error",404)
});
//sequelize db
// const testDB=require("./DB/seqTable")
const seqUser=require("./model/SequalizeModel")
app.use(UtilError);
  const PORT=4000
  server.listen(PORT,async()=>{console.log("Server is streaming")
  seqUser.sequelize.sync().then(()=>
    console.log("testdb is created...")
  ).catch((err)=>{
    console.log("Sequelize err  " +err)
  })
  });
}
