const express = require('express');
const router = express.Router(); //express router is just for auth routes
const user = require('../models/user.model.js');

router.post('/signup', async function (req, res){
    console.log(req.body);
    try{
        const {name, email, password} = req.body; //this request body should contain name, email and password
        if(!name || !email || !password){
            return res.status(400).json({msg: 'Please enter all the fields'});
        }

        if (typeof email !== 'string' || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            return res.status(400).json({ msg: 'Invalid email format' });
        }
        const existingUser = await user.findOne({ email: { $eq: email } });
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