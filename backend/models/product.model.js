const mongoose = require('mongoose');
/**
 * Schema: It helps to define the structure of the data in MongoDB Collections
 */
const Schema = mongoose.Schema;

//enum restricts to only a specific number of categories
const category_enum = 
            ['electronics', 'toys', 'books'];

const productSchema = new Schema({
    name: { type: String, required: true, index: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: String, enum: category_enum },
    stock: { type: Number, default: 0 },
    images: [String],
    createdAt: { type: Date, default: Date.now }
});
/**
 * Export the user collection using module.exports
 */

module.exports = mongoose.model('product', productSchema);