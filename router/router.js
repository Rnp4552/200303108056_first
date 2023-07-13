const express = require("express");
require("../db/conn");
const usermodel = require("../db/user");
const router = express.Router();
const cookieparser = require("cookie-parser");
const auth = require("../middleware/auth");

router.use(express.json());
router.use(express.urlencoded({
    extended : false
}));
var usertoken;
router.post("/train/register",async(req,res)=>{
    try{
        const getdata = new usermodel(req.body);

        const checkdat = await usermodel.findOne({rollNo : getdata.rollNo});
        usertoken = await getdata.getusertoken();
        res.cookie("jwt",usertoken,{
            expires : new Date(Date.now() + 80000)
        })
        
        console.log(usertoken);
        if(checkdat){
            res.status(400).json({
                msg : "already registered!!"
            })
        }
        else{
            const savdat = await getdata.save();
            res.status(200).send(getdata)
        }

        

    }
    catch(e){
        console.log(e);
    }
});

router.post("/train/auth",async(req,res)=>{
    try{
        const trdata = {
            usertoken : usertoken,
            expires_in : 54664
        }
         res.send(usertoken)

    }
    catch(e){

    }
})

module.exports = router;