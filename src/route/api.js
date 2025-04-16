const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
const AuthMiddleware = require('../middleware/AuthMiddleware');






router.post('/registration', userController.registration);
router.post('/login', userController.login);

// after login
router.get('/profileDetails',AuthMiddleware, userController.profileDetails);

router.post('/profileUpdate', userController.profileUpdate);
router.get('/verifyEmail/:email', userController.verifyEmail);
router.get('/verifyOTP/:email/:otp', userController.verifyOTP);
router.get('/resetPassword/:email/:otp/:password', userController.resetPassword);




module.exports = router;