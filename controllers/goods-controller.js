const express = require("express")
const router = express.Router()
const goods = require("../models/goods-model")

router.post("/addGoods", (req, res) => {
    let {name,price,qty} = req.body
    let goods_to_DB = goods({name,price,qty})
    goods_to_DB.save()

    console.log(req.body);
    res.send("goods added sucessfully");    
});

router.get("/see-goods", async(req,res)=>{
    try {
        let allGoods = await goods.find({})
        console.log(allGoods);
        res.json({allGoods})
    } catch (error) {
        console.log("fetching failed", error)
    }
})

module.exports = router