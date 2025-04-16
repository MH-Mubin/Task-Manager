const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');






router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/profileUpdate', userController.profileUpdate);
router.get('/verifyEmail/:email', userController.verifyEmail);
router.get('/verifyOTP/:email/:otp', userController.verifyOTP);
router.get('/resetPassword/:email/:otp/:password', userController.resetPassword);




module.exports = router;