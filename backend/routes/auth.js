const express = require('express');
const router = express.Router(); //express router is just for auth routes
const user = require('../models/user.model.js');
const rateLimit = require('express-rate-limit');

// Rate limiter for the signup route: max 10 requests per minute
const signupLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 10, // Limit each IP to 10 requests per `window` (here, per minute)
    message: { msg: 'Too many signup attempts from this IP, please try again after a minute' },
});

router.post('/signup', signupLimiter, async function (req, res){
    console.log(req.body);
    try{
        const {name, email, password} = req.body; //this request body should contain name, email and password
        if(!name || !email || !password){
            return res.status(400).json({msg: 'Please enter all the fields'});
        }

        const existingUser = await user.findOne({ email });
        if(existingUser){
            return res.status(400).json({msg: 'User already exists'});
        }
        const new_user = new user({name, email, password});

        //either the promise is resolved or it is rejected
        try{
            await new_user.save();
            return res.status(201).send('User registered successfully');
        }
        catch(err){console.log(err.message);}


    }
    catch(err){
        console.log(err.message);
        // console.log(err);
        return res.status(500).send('Server Error');
    }
})

module.exports = router;