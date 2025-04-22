const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
const AuthMiddleware = require('../middleware/AuthMiddleware');
const TaskController = require('../controller/TaskController');






router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/verifyEmail/:email', userController.verifyEmail);
router.get('/verifyOTP/:email/:otp', userController.verifyOTP);

// after login
router.get('/profileDetails',AuthMiddleware, userController.profileDetails);
router.post('/profileUpdate',AuthMiddleware, userController.profileUpdate);
router.get('/resetPassword/:email/:otp/:password',AuthMiddleware, userController.resetPassword);

//Task
router.post('/createTask',AuthMiddleware, TaskController.createTask);
router.post('/updateTask/:id',AuthMiddleware, TaskController.updateTask);
router.get('/readTask',AuthMiddleware, TaskController.readTask);
router.delete('/deleteTask',AuthMiddleware, TaskController.deleteTask);

//Logout
//router.get('/logout',AuthMiddleware, userController.logout);


module.exports = router;