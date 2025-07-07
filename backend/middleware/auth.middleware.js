const jwt = require('jsonwebtoken');
require('dotenv').config();

const authFunction =  function(req, res, next){
    const token = req.header('Authorization')?.replace('Bearer ',''); //?. is optional chaining operator in Javascript

    if(!token) {
        return  res.status(400).send('Invalid Authentication');
    }
    try{
        const decoded_verification_status = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded_verification_status;
        console.log('User decoding success', req.user);
        next();
    }catch(err){
        console.log(err);
        return res.status(400).send(err.message);
    }
}

module.exports = authFunction;