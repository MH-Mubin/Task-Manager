const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        default: "https://www.w3schools.com/howto/img_avatar.png",
    }
},{versionKey: false});

const UserModel = mongoose.model("User", dbSchema);
module.exports = UserModel;