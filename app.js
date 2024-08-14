const express = require("express");
const app= express();
const morgan =require("morgan");
const mongoose = require("mongoose");

// database connection 

mongoose
    .connect("mongodb://127.0.0.1:27017/user")
    .then(()=>console.log('database connection establish successfully...'))
    .catch(err=>console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan(dev));

app.get("/",(req, res)=>{
    res.send("welcome to express server");
})

const productRoutes = require("./routes/product.routes")
const userRoutes = require("./routes/user.routes");

app.use("/api/product",productRoutes);
app.use("/api/user",userRoutes)


server.listen(1234, () => {
    console.log("server start http://localhost:1234");
})