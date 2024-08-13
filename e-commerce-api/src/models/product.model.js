const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountedPrice: {
        type: Number,
    },
    discountedPercent: {  // corrected the typo from 'discountedPresent' to 'discountedPercent'
        type: Number,
    },
    quantity: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
    },
    color: {
        type: String,
    },
    sizes: [{
        name: { type: String },
        quantity: { type: Number },
    }],
    imageUrl: {
        type: String,
    },
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating',  // Ensure this matches the Rating model name
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',  // Ensure this matches the Review model name
    }],
    numRatings: {
        type: Number,
        default: 0,
    },
    category: {  // changed 'Category' to 'category'
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',  // Ensure this matches the Category model name
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
