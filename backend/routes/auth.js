const express = require('express');
const router = express.Router(); 

const auth_middleware = require('../middleware/auth.middleware.js');
const { body } = require('express-validator');
const authController = require('../controller/auth.controller.js');

router.post('/signup',
  [
    body('name').trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }).trim().escape(),
    body('role').optional().isIn(['buyer', 'seller']).withMessage('Role must be either "buyer" or "seller"')
  ],
  authController.signup
);

router.post('/signin',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }).trim().escape()
  ],
  authController.signin
);

router.post('/logout', auth_middleware, authController.logout);
router.get('/profile', auth_middleware, authController.profile);

module.exports = router;