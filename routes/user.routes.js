const express = require('express');
const userRoutes = express.Router();
const {
    registerUser,
    loginUser,
    userProfile,
    updateProfile
} = require("../controller/user.controller");
const {verifyToken} = require("../helpers/tokenVerify")

userRoutes.post("/register",registerUser);
userRoutes.post("/login",loginUser);


module.exports = userRoutes;