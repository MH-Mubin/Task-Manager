const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');






router.post('/register', userController.registration);
router.post('/login', userController.login);
router.post('/profileUpdate', userController.profileUpdate);
router.get('/recoverVerifyEmail', userController.verifyEmail);
router.post('/recoverVerifyOTP', userController.verifyOTP);
router.post('/recoverResetPass', userController.resetPassword);




module.exports = router;