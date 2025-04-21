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
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending',
    },
},{timestamps: true},{ versionKey: false });

const TaskModel = mongoose.model('tasks', dbSchema);
module.exports = TaskModel;