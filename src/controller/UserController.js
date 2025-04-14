exports.registration = async (req, res) => {
    try {
        const { email } = req.body;
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // OTP valid for 5 minutes

        const otpData = new OTPModel({ email, otp, expiresAt });
        await otpData.save();

        // Send OTP to user's email (implement your email sending logic here)
        console.log(`OTP for ${email}: ${otp}`);

        res.status(200).json({ message: 'OTP sent to your email' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.login = async (req, res) => {

};

exports.profileUpdate = async (req, res) => {
    try {
        const { email, name } = req.body;
        const userId = req.user._id; // Assuming you have user ID from authentication middleware

        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            { email, name },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.profileDetails = async (req, res) => {

}

exports.verifyEmail = async (req, res) => {

}
exports.verifyOTP = async (req, res) => {
    
}
exports.resetPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        const userId = req.user._id; // Assuming you have user ID from authentication middleware

        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            { password: newPassword },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Password reset successfully', user: updatedUser });
    } catch (error) {
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