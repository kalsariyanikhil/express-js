const express = require('express');
const server = express();
const morgan = require('morgan');
const products = require('./product.json');

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'));

server.get("/", (req, res) => {
    res.send('welcome to express server');
})

const productRoutes =require("./routes/product.routes");
const userRoutes = require("")


server.listen(1234, () => {
    console.log("server start");

})