const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { ApiError } = require('../utils/ApiError.util');
const { asyncHandler } = require('../utils/asyncHandler.util');

const signup = asyncHandler(async function (req, res){
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        throw new ApiError(400, 'Missing required fields');
    }
    const existingUser = await userModel.findOne({ email });
    if(existingUser){
        throw new ApiError(400, 'User with this email already exists');
    }
    const new_user = new userModel({name, email, password});
    await new_user.save();
    res.status(201).json({msg: 'User registered successfully'});
});

const signin = asyncHandler(async function(req, res){
    const {email, password} = req.body;
    const getUser = await userModel.findOne({email});
    if(!getUser){
        throw new ApiError(400, 'User not found');
    }
    const isMatch = await getUser.checkPassword(password);
    if(!isMatch){
        throw new ApiError(400, 'Incorrect email or password');
    }
    const payload_object = {
        id: getUser._id.toString(),
        role: getUser.role.toString(),
        name: getUser.name.toString(),
        email: getUser.email.toString()
    }
    const secret_key = process.env.JWT_SECRET;
    const options_object = {expiresIn : '1h'};
    const GET_TOKEN = jwt.sign(payload_object, secret_key, options_object);
    res.status(200).json({msg: 'Login successful', token: GET_TOKEN});
});

const logout = asyncHandler(async (req, res) => {
    res.status(200).json({msg: 'Logout successful'});
});

const profile = asyncHandler(async (req, res) => {
    if(!req.user.id){
        throw new ApiError(404, 'User not found for provided token');
    }
    res.status(200).json({msg: 'Profile fetched successfully', user: req.user});
});

module.exports = {signup, signin, logout, profile};