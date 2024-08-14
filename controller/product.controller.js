const user = require("../Model/user.model");

exports.addNewUser = async (req, res)=>{
    try {
        // console.log(req.body);
        const user = await user.create({...req.body});
        user.save();
        res.status(201).json({user, message:"user added"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"internal server error"});
    }
};