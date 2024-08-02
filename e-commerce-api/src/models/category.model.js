const mongoose = require('mongoose');
const categorySchema = new mongoose.Category.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        
        ref: 'categories',
    },
    level: {
        type: Number,
        required: true,

    },

});
const Category = mongoose.model('Categories', CategorySchema);
module.exports = Category;