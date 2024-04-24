const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const router=require("./mainRouter")

//*SERVER INITIALIZATION
const server=express()

//*MIDDLEWARES

server.use(cors())
server.use(morgan("dev"))
server.use(express.json())

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
    next();
});

//*ADD ROUTES IN SERVER
server.use(router)

module.exports=server