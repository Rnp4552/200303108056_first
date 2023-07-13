const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema=  new mongoose.Schema({
    companyName : {
        type : String
    },
    ownerName : {
        type : String
    },
    rollNo : {
        type : String,
        uniuqe : true
    },
    ownerEmail : {
        type : String
    },
    accessCode: {
        type : String
    },
    access_token : String

})

userSchema.methods.getusertoken = async function(){
    const token = jwt.sign({_id : this._id},process.env.SECRET_KEY,{
        expiresIn : 124587464
    });
    return token;
}

const usermodel = new mongoose.model("usermodel",userSchema);

module.exports = usermodel;