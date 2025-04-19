const UserModel = require('../model/UserModel');
const OTPModel = require('../model/OTPModel');
const sendEmailUtility = require('../utility/emailSend');
const jwt = require('jsonwebtoken');

exports.registration = async (req, res) => {
    try {
        let reqBody  = req.body;
        await UserModel.create(reqBody);
        res.json({status:"success", message: "Registration Successfull"});

    } catch (error) {
        console.error('Error during registration:', error); // get the error message
        res.json({ status: "fail", message: "Internal server error" });
    }
};

exports.login = async (req, res) => {
    try{
        let reqBody = req.body;
        let user = await UserModel.find(reqBody);
        if (user.length > 0){
            // JWT Token Generation
            let payload = {
                exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // 1 day expiry
                data: reqBody['email']
            };
            let token = jwt.sign(payload, "123-xyz");

            // Only one response!
            return res.json({
                status: "success",
                message: "Login successful",
                token: token,
                user: user[0]
            });  
        }else{
        res.status(401).json({message: "Invalid credentials"})
        }
} catch (error) {
    console.error('Error during login:', error); // get the error message
    res.json({ status: "fail", message: "Internal server error" });
}
};


exports.profileDetails = async (req, res) => {
    try{
        let email = req.headers['email'];//getting the email from the header
        let result = await UserModel.find({email: email});//getting the user from the database

        res.json({status:"success", message: "User Found", data: result});//sending the user data as response
    }catch (error) {
        console.error('Error during profileDetails:', error); // get the error message
        res.json({ status: "fail", message: "Internal server error" });
    }
}


exports.profileUpdate = async (req, res) => {
    try{
        let email = req.headers['email']; //getting the email from the header
        let reqBody = req.body; // Extracting request body
        await UserModel.updateOne({email: email}, reqBody); // Updating user data in the database
        res.json({status:"success", message: "Profile Updated Successfully"}); // Sending success response
    }catch (error) {
        console.error('Error during profileUpdate:', error); // get the error message
        res.json({ status: "fail", message: "Internal server error" });
    }
};


exports.verifyEmail = async (req, res) => {
    try {
        const { email } = req.params; // Extract email from request parameters
        let user = await UserModel.find({ email: email }); // Check if user exists in the database
        if (user.length> 0) {
            // Send Email with OTP
            let otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
            let expiresAt = new Date(Date.now() + 5 * 60 * 1000); // Set OTP expiration time (5 minutes from now)

            await sendEmailUtility(email, `Your OTP is ${otp}`, 'Email Verification OTP'); // Send OTP to user's email
            await OTPModel.create({ email: email, otp: otp, status: 'active', expiresAt: expiresAt }); // Store OTP in the database
            return res.json({ status: 'success', message: 'OTP sent to your email' }); // Send success response


        }else{
            return res.json({status:'fail', message: 'User not found' }); // User not found
        }

    } catch (error) {
        console.error('Error during email verification:', error); // get the error message
        res.status(500).json({ error: 'Internal server error' });
    }
}


    
exports.verifyOTP = async (req, res) => {
    try {
        const { email,otp } = req.params; // Extract email and otp from request parameters
        let otpValid = await OTPModel.find({ email: email, otp: otp, status: 'active' }); // Check if OTP is valid
 //       let user = await OTPModel.find({ email: email, otp: otp, status: 'active' }); // Check if user exists in the database
        
        if (otpValid.length === 0) {
            // OTP is invalid or expired
            console.log(email, otp, otpValid); // Log the email and OTP for debugging
            return res.json({status:'fail', message: 'Invalid OTP' }); // Invalid OTP
        }if (otpValid[0].expiresAt < new Date()) {
            return res.json({status:'fail', message: 'OTP expired' }); // OTP expired
        }
        await OTPModel.updateOne({ email: email, otp: otp, status: 'active' },{status: 'verified'}); // Update OTP status to verified
        return res.json({ status: 'success', message: 'OTP verification success' }); // Send success response

        // if (user.length> 0) {
        //     let currentTime = new Date(); // Get current time
            
        //     await OTPModel.updateOne({ email: email, otp: otp, status: 'verified'}); // Update OTP status to verified
        //     return res.json({ status: 'success', message: 'otp verification success' }); // Send success response

        // }else{
        //     return res.json({status:'fail', message: 'Invalid Code' }); // Invalid OTP
        // }

    } catch (error) {
        console.error('Error during otp verification:', error); // get the error message
        res.status(500).json({ error: 'Internal server error' });
    }    
}



exports.resetPassword = async (req, res) => {

    try {
        const { email,otp,password } = req.params; // Extract email from request parameters
        let user = await OTPModel.find({ email: email, otp: otp, status: 'verified' }); // Check if user exists in the database
        if (user.length> 0) {
            // Send Email with OTP
            let otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
            let expiresAt = new Date(Date.now() + 5 * 60 * 1000); // Set OTP expiration time (5 minutes from now)

            await sendEmailUtility(email, `Your OTP is ${otp}`, 'Email Verification OTP'); // Send OTP to user's email
            await OTPModel.create({ email: email, otp: otp, status: 'active', expiresAt: expiresAt }); // Store OTP in the database
            return res.json({ status: 'success', message: 'OTP sent to your email' }); // Send success response


        }else{
            return res.json({status:'fail', message: 'User not found' }); // User not found
        }

    } catch (error) {
        console.error('Error during email verification:', error); // get the error message
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.signOut = async (req, res) => {
    try {
        const userId = req.user._id; // Assuming you have user ID from authentication middleware

        // Invalidate the user's session or token here (implement your logout logic)

        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}