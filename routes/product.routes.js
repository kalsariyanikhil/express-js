const express = require('express');
const {addNewuser} = require ('../controller/product.controller');
const userRoutes = express.Router();

productRoutes.post("/",addNewuser);

module.exports= productRoutes;