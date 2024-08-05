
const moongoose = require('mongoose');
const { Schema } = mongoose;
const ratingSchema = new Schema({
    user: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    product: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,

    },
    rating: {
        type: Number,
        required:true,
    },
    createdAt: {
        type: Date,
        default:Date.now(),
    },
});
const Rating = moongoose.model('ratings', ratingSchema);
module.exports = Rating;