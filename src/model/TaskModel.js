const mongoose = require('mongoose');
const { title } = require('process');

const dbSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        // default: 'active', // Default status is 'active'
    },
},{timestamps: false},{ versionKey: false });

const TaskModel = mongoose.model('tasks', dbSchema);
module.exports = TaskModel;