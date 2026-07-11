const express = require("express");
const router = express.Router();

const sendOTPEmail = require("../middleware/Email");

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
        console.log(error);

        res.status(500).json({
            status: "Server Error"
        });
    }
});

// ================= VERIFY OTP =================
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  const data = otpStore[email];

  if (!data) {
    return res.json({
      status: "OTP not found",
    });
  }

  if (Date.now() > data.expires) {
    delete otpStore[email];

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
  delete otpStore[email];

  res.json({
    status: "Verified",
  });
});

module.exports = router;