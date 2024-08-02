const mongoose = require('mongoose');
const AddressSchema = new mongoose.Schema({
    firstName: {
        typeof: String,
        required: true,
    },
    lastName: {
        typeof: String,
        required: true,
    }, streetAddress: {
        typeof: String,
        required: true,
    },
    city: {
        typeof: String,
        required: true,
    },
    state: {
        typeof: String,
        required: true,
    },
    zipCode: {
        typeof: String,
        required: true,
        
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref:"users"
    },
    mobile: {
        type: String,
        required: true,
    }

})
const Address = mongoose.model("addresses", AddressSchema);
module.exports = Address;