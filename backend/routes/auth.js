const express = require('express');
const router = express.Router(); //express router is just for auth routes
const user = require('../models/user.model.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//signup is the same as registering a user
router.post('/signup', async function (req, res){
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
//first we will hash password and save that hash
//next we will hash the username also and save it as a hash

router.post('/signin', async function(req, res){
    console.log(req.body);
    const {email, password} = req.body; //username and password then check for forgot email and forgot password

    try
    {
        const getUser = await user.findOne({email}); //sanitize bro
        if(!getUser){
            res.status(400).json({msg: 'User not found, please signup to register as a user'});
        }

        const isMatch = await getUser.checkPassword(password);
        if(!isMatch){
            return res.status(400).json({msg: 'Incorrect email or password'}); //confuse the user whether his username is incorrect or password :)
        }
        const payload_object = {
            id: user.name,
            role: user.role
        }
        const secret_key = process.env.JWT_SECRET;
        const options_object = {expiresIn : '1h'};

        const GET_TOKEN = jwt.sign(payload_object, secret_key, options_object);
        
        return res.status(200).json({msg: 'Login Success', token: GET_TOKEN});
    }
    catch(err){
        console.log(err); //don't show error otherwise attacker can know which attack to use lol
        return res.status(500).send('Server error'); //we need to send server error message on our side, so please keep this in logs
    }

})

module.exports = router;