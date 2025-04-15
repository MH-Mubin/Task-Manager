const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');






router.post('/register', userController.registration);
router.post('/login', userController.login);
router.post('/profileUpdate', userController.profileUpdate);
router.get('/recoverVerifyEmail/:email', userController.verifyEmail);
router.post('/recoverVerifyOTP/:email/:otp', userController.verifyOTP);
router.post('/recoverResetPass/:email/:otp/:password', userController.resetPassword);




module.exports = router;