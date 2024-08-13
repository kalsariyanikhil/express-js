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

//replace Data - Put

server.put('/products/:id', (req, res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    // console.log(productIndex);
    products.splice(productIndex, 1, { ...product, ...req.body });
    res.json({ message: "Product Replace Success" })
});

// Update Data - Patch

server.patch("/product/:id", (req, res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    //  console.log(productIndex);
    const product = products[productIndex];
    // console.log(product);
    products[productIndex] = { ...products[productIndex], ...req.body };
    res.json({ message: "Product Updated Success" })
});

// Delete Data - Delete

server.delete("/products/:id", (req, res) => {
    let id = +req.params.id;
    let productIndex = products.findIndex((product) => product.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1);
    res.json({ product, message: "Product Delete Success" })
});



server.listen(1234, () => {
    console.log("server start");

})