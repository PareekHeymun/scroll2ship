const express = require('express');
const router = express.Router(); 

const auth_middleware = require('../middleware/auth.middleware.js');
const authController = require('../controller/auth.controller.js');

router.post('/signup', authController.signup);

router.post('/signin', authController.signin);

router.post('/logout', auth_middleware, authController.logout);

router.get('/profile', auth_middleware, authController.profile);

module.exports = router;