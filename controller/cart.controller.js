const Cart = require('../model/cart.model');
const productModel = require('../model/product.model');

exports.addtoCart = async (req, res) => {
    try {
        let userId = req.user._id;
        let cart = await Cart.findOne({
            user: userId,
            producId: req.body.producId,
            isDelete: false,
        });
        if (cart) {
            return res.json({ message: 'Already exits...' });
        }
    } catch (error) {
        console.log(err);
        res.status(500).json({ message: "server error" });
    }
};

exports.getAllCarts = async (req, res)=> {
    let carts = await Cart.find({user: req.user._id, isDelete: false});
    res.json(carts);
}