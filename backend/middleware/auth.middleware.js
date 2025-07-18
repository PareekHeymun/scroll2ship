const jwt = require('jsonwebtoken');
require('dotenv').config();
const { ApiError } = require('../utils/ApiError.util');

const authFunction = function(req, res, next){
    // Read token from HTTP-only cookie
    const token = req.cookies?.token;

    if(!token) {
        return next(new ApiError(400, 'Invalid Authentication'));
    }
    try{
        const decoded_verification_status = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded_verification_status;
        console.log('User decoding success', req.user);
        next();
    }catch(err){
        console.log(err);
        return next(new ApiError(400, 'Invalid or expired token'));
    }
}

module.exports = authFunction;