import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaKey } from "react-icons/fa";
import "./styling/otpverification.css";

function OTPVerification() {
  const navigate = useNavigate();
  const location = useLocation();

  // Email signup page se aayegi
  const email =
    location.state?.email || localStorage.getItem("otpEmail") || "";
  const [otp, setOtp] = useState("");

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      const result = await axios.post(
        "http://localhost:3001/email/verify-otp",
        {
          email,
          otp,
        }
      );

      if (result.data.status === "Verified") {
        alert("OTP Verified Successfully");

        const bookingData = JSON.parse(
            localStorage.getItem("bookingData")
        );

        const saveResponse = await axios.post(
            "http://localhost:3001/bookingform",
            bookingData
        );

        console.log(saveResponse.data);

        alert("Booking Successful");

        localStorage.removeItem("bookingData");

        navigate("/mybooking");
      } else {
        alert(result.data.status);
      }
    } catch (err) {
    console.log("Error:", err);
    console.log("Response:", err.response?.data);
    console.log("Status:", err.response?.status);
}
  };

  return (
    <div className="otp-main">

      <div className="otp-container">

        <h2>Email Verification</h2>

        <p>
          OTP has been sent to
        </p>

        <h4>{email}</h4>

        <form onSubmit={handleVerifyOTP}>

          <div className="otp-input">

            <FaKey className="otp-icon" />

            <input
              type="text"
              placeholder="Enter 6 Digit OTP"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

          </div>

          <button type="submit">
            Verify OTP
          </button>

        </form>

      </div>

    </div>
  );
}

export default OTPVerification;