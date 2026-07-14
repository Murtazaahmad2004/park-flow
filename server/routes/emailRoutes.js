const express = require("express");
const router = express.Router();

const sendOTPEmail = require("../middleware/Email");
const SignupModel = require("../models/signup");

// OTP temporary memory me store hoga
const OtpStore = {};

// ================= SEND OTP =================
router.post("/send-otp", async (req, res) => {
    try {
        const { email } = req.body;

        if(!email) {
            return res.json({
                status: "Please enter email",
            });
        }

    // Random 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Memory me save (5 minutes)
   OtpStore[email] = {
    otp,
    expires: Date.now() + 5 * 60 * 1000,
};

    // Email bhejo
    await sendOTPEmail(email, otp);
    res.json({
        status: "OTP sent successfully",
    });
    } catch (error) {
    console.error("SEND OTP ERROR:", error);

    res.status(500).json({
        status: "Server Error",
        message: error.message,
    });
}
});

// ================= VERIFY OTP =================
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  const data = OtpStore[email];

  if (!data) {
    return res.json({
      status: "OTP not found",
    });
  }

  if (Date.now() > data.expires) {
    delete OtpStore[email];

    return res.json({
      status: "OTP Expired",
    });
  }

  if (data.otp !== otp) {
    return res.json({
      status: "Invalid OTP",
    });
  }

  // OTP verify ho gaya
  delete OtpStore[email];

  res.json({
    status: "Verified",
  });
});

router.post("/resetpassword", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Email:", email);
    console.log("Password:", password);

    const user = await SignupModel.findOne({ email });

    console.log("User:", user);
    
  if (!user) {
    return res.json({
      status: "Error",
      message: "User Not Found!",
    });
  }

  const bcrypt = require("bcryptjs");

  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;

  await user.save();

  res.json({
    status: "Success",
    message: "New Password Updated."
  });
  } catch (error) {
    console.log(err);

    return res.status(500).json({
      status: "Error",
      message: err.message,
    });
  }
});


module.exports = router;