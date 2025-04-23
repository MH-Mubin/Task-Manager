const TaskModel = require('../model/TaskModel');//importing the TaskModel

exports.createTask = async (req, res) => {
    try{
        let email = req.headers['email'];//getting the email from the header
        let reqBody = req.body;//getting the request body
        reqBody['email'] = email;//adding the email to the request body
        let task = await TaskModel.create(reqBody);//creating the task in the database

        res.json({status:"success", message: "Task Created successfully", data: task});//sending the user data as response
    }catch (error) {
        res.json({ status: "fail", message: "Internal server error" });
    }
}

exports.updateTask = async (req, res) => {
    try{
        let email = req.headers.email;//getting the email from the header
        let {id}=req.params;//getting the id from the params
        let reqbody=req.body;//getting the request body
        await TaskModel.updateOne({email:email, _id:id},reqbody);//updating the task in the database
        res.json({status:"success", message: "Task Updated successfully"});//sending the user data as response
    }catch (error) {
        res.json({ status: "fail", message: "Internal server error" });
    }
}


exports.readTask = async (req, res) => {
    try{
        let email = req.headers.email;//getting the email from the header
        let reqbody=req.body;//getting the request body
        let data =await TaskModel.find({email:email},reqbody);//getting the task from the database
        res.json({status:"success", message: "Task Found successfully", data});//sending the user data as response
    }catch (error) {
        res.json({ status: "fail", message: "Internal server error" });
    }
}

exports.deleteTask = async (req, res) => {
    try{
        let email = req.headers.email;//getting the email from the header
        let {id}=req.params;//getting the id from the params
        await TaskModel.deleteOne({email:email, _id:id});//updating the task in the database
        res.json({status:"success", message: "Task Deleted successfully"});//sending the user data as response
    }catch (error) {
        res.json({ status: "fail", message: "Internal server error" });
    }
}