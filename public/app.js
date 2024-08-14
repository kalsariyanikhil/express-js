const express = require("express");
const app= express();
const morgan =require("morgan");
const productroutes = require('./routes/product.routes');

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(morgan("dev"));

app.get("/",(req, res)=>{
    res.send("welcome to express server");
})
app.use("/api/product",productroutes);


server.listen(1234, () => {
    console.log("server start");
})