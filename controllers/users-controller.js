const express = require("express");
const router = express.Router();


let admins = []
router.post("/register", (req,res)=>{
    try {
        admins.push(req.body)
        // let salt = 
        let {password, ...rest} = req.body

        console.log(req.body);
    } catch (error) {
        res.send("cannot get info", error)
    }
})

router.get("/see-users",(req,res)=>{
    try {
        res.send("hello")
    } catch (error) {
        res.send("cannot get info", error)
    }
})

module.exports = router