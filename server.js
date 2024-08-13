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

// crud 

// add new product - create 
server.post("/product", (req, res) => {
    // console.log(req.body);
    products.push(req.body);
    res.json({ product: req.body, Message: 'product added sucess' });
});

// get all products - read 
server.get("/product", (req, res) => {
    res.json(products);
});

// get single products - read 
server.get("/product/:id", (req, res) => {
    let id = +req.params.id;
    let item = products.find((product) => product.id === id);
    res.json(item);
});

server.listen(1234, () => {
    console.log("server start");

})