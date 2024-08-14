const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: string,
    lastName: {
        type: string,
    },
    email: {
        type: string
    },
    age: {
        type: Number
    },
    hobbies: [{
        type: string
    }],
    address: {
        line1: string,
        line2: string,
        pincode: number
    }
});

module.exports = mongoose.model('users',userSchema)