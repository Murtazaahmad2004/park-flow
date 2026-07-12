const transporter = require("./Emailconfig");
const { Verification_Email_Template } = require("../lib/EmailTemplate");

const sendOTPEmail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "ParkFlow OTP Verification",
    html: Verification_Email_Template.replace(
      "{verificationCode}",
      otp
    ),
  });
};

module.exports = sendOTPEmail;