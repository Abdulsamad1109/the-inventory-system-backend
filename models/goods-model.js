const {Schema,model} = require("mongoose");

const goodsSchema = new Schema({
    name: String,
    price: Number,
    qty: Number
})

const goods = model("good", goodsSchema)

module.exports = goods