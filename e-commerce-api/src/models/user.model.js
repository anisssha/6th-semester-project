const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        typeof: String,
        required: true,
    },
    lastName: {
        typeof: String,
        required: true,

    },
    password: {
        typeof: String,
        required: true,

    },
    email: {
        typeof: String,
        required: true,
    },
    role: {
        typeof: String,
        required: true,
        default: 'CUSTOMER',

    }, mobile: {
        typeof:String,
    },
    address: [{
        typeof: mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    paymentInformation: [
        {
            typeof: mongoose.Schema.Types.ObjectId,
            ref:"payment_information"
        }
    ],
    ratings: [{
        typeof: mongoose.Schema.Types.ObjectId,
        ref: "ratings"
    }],
    reviews: [{
        typeof: mongoose.Schema.Types.ObjectId,
        ref: "reviews"
    }],
    createAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model("Users", userSchema);
module.exports = User;