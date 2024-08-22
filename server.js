require("dotenv").config();
const express = require('express');
const server = express();
const morgan = require('morgan');
const mongoose = require("mongoose");
// const products = require('./product.json');
const port = (process.env.PORT)

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));


   

server.get("/", (req, res) => {
    res.send('welcome to express server');
})

const productRoutes =require("./routes/user.routes");
const userRoutes = require("./routes/user.routes");
server.use("/api/user",userRoutes)
// const userRoutes = require("./routes/")


server.listen(port, () => {
    
// Database connecion
    mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log(`Database connected...`))
    .catch(err=>console.log(err))
    console.log(`server start http://:localhost:${port}`);

})