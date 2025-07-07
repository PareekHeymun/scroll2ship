const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
/**
 * Schema: It helps to define the structure of the data in MongoDB Collections
 */
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ['admin', 'seller', 'buyer'],
        default: 'buyer'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
/**
 * Export the user collection using module.exports
 */

userSchema.pre('save', async function(next) {
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.checkPassword = async function (inputPassword){
    //we need to get the corresponding password for that 
    return bcrypt.compare(inputPassword, this.password);
};
module.exports = mongoose.model('user', userSchema);