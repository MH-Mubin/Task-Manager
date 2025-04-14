const mongoose = require('mongoose');
const { title } = require('process');

const dbSchema = new mongoose.Schema({
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
},{ versionKey: false });

const TaskModel = mongoose.model('Task', dbSchema);
module.exports = TaskModel;