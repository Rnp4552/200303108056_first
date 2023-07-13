const mongoose = require("mongoose");

mongoose.set("strictQuery",true);

mongoose.connect("mongodb://127.0.0.1:27017/traindata")
.then(()=>{
    console.log("Db is connected successfully!!");
}).catch((e)=>{
    console.log(e);
})