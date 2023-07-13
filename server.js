require("dotenv").config({
    path : "./config/config.env"
})
const express = require("express");
const app = express();
const router = require("./router/router");
require("./db/conn");
const usermodel = require("./db/user");


const port = process.env.port || 3000;

app.use("/",router);


app.listen(port,()=>{
    console.log(`Server is running on ${port} port number`);
})