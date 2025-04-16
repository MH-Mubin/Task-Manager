const nodemailer = require('nodemailer');

const sendEmailUtility = async(emailTo, emailText, emailSubject) => {
    let transporter = nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port:25,
        secure: false, // true for 25, false for other ports
        auth:{
            user: "info@teamrabbil.com",
            pass: '~sR4[bhaC[Qs'
        }, tls: {
            rejectUnauthorized: false
        },
    });

    let mailOptions = {
        from: 'Task Manager MERN <info@teamrabbil.com>',
        to: emailTo,
        subject: emailSubject,
        text: emailText,
    };
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });



}