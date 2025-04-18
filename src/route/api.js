const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
const AuthMiddleware = require('../middleware/AuthMiddleware');






router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/verifyEmail/:email', userController.verifyEmail);
router.get('/verifyOTP/:email/:otp', userController.verifyOTP);

// after login
router.get('/profileDetails',AuthMiddleware, userController.profileDetails);
router.post('/profileUpdate',AuthMiddleware, userController.profileUpdate);
router.get('/resetPassword/:email/:otp/:password',AuthMiddleware, userController.resetPassword);




module.exports = router;