const TaskModel = require('../model/TaskModel');//importing the TaskModel

exports.createTask = async (req, res) => {
    try{
        let email = req.headers['email'];//getting the email from the header
        let reqBody = req.body;//getting the request body
        reqBody['email'] = email;//adding the email to the request body
        let task = await TaskModel.create(reqBody);//creating the task in the database

        res.json({status:"success", message: "Task Created successfully", data: task});//sending the user data as response
    }catch (error) {
        // console.error('Error during profileDetails:', error); // get the error message
        res.json({ status: "fail", message: "Internal server error" });
    }
}

exports.updateTask = async (req, res) => {
    try{
        let email = req.headers['email'];//getting the email from the header
        let result = await UserModel.find({email: email});//getting the user from the database

        res.json({status:"success", message: "User Found", data: result});//sending the user data as response
    }catch (error) {
        console.error('Error during profileDetails:', error); // get the error message
        res.json({ status: "fail", message: "Internal server error" });
    }
}


exports.readTask = async (req, res) => {
    try{
        let email = req.headers['email'];//getting the email from the header
        let result = await UserModel.find({email: email});//getting the user from the database

        res.json({status:"success", message: "User Found", data: result});//sending the user data as response
    }catch (error) {
        console.error('Error during profileDetails:', error); // get the error message
        res.json({ status: "fail", message: "Internal server error" });
    }
}


exports.deleteTask = async (req, res) => {
    try{
        let email = req.headers['email'];//getting the email from the header
        let result = await UserModel.find({email: email});//getting the user from the database

        res.json({status:"success", message: "User Found", data: result});//sending the user data as response
    }catch (error) {
        console.error('Error during profileDetails:', error); // get the error message
        res.json({ status: "fail", message: "Internal server error" });
    }
}
