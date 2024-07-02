require("dotenv").config();
const express = require("express");
const {connect} = require("mongoose");
const cors = require("cors");
const app = express();
const uri = process.env.URI;
const goodsRouter = require("./controllers/goods-controller")
const usersRouter = require("./controllers/users-controller")


app.use(express.json());
app.use(cors())

app.use("/goods", goodsRouter)
app.use("/users", usersRouter)


app.get("/", (req, res) => {
    console.log("hello world");
    res.send("Hello World");
});

connect(uri).then(res=>{
    console.log("connetion succesful");
}).catch(err=>{
    console.log("connection failed");
})

app.listen("7000", ()=>{
    console.log("App is running");
});





