const { timeStamp } = require('console');
const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'active', // Default status is 'active'
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // expires: '5m', // OTP will expire after 5 minutes
    },
    expiresAt: {
        type: Date,
        required: true,
    }
},{timestamps: true}, { versionKey: false });

const OTPModel = mongoose.model('otps', dbSchema);
module.exports = OTPModel;