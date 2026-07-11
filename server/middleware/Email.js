const transporter = require("./Emailconfig");

const sendOTPEmail = async(email, otp) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "masofthub@gmail.com",
        subject: "ParkFlow OTP",
        html: `<h2>Your OTP is ${otp}</h2>`
    });
}

module.exports = sendOTPEmail();