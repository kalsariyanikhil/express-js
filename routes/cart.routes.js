const express = require("express");
const cartRoutes = express.Router();
const {
    addtoCart,
    getAllCarts
} = require("../controller/cart.controller");
const { verifyToken } = require('../helpers/tokenVerify');

cartRoutes.post("/",verifyToken, addtoCart);
cartRoutes.get("/",verifyToken, getAllCarts);

module.exports = cartRoutes;