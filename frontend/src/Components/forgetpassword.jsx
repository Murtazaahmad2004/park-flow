import { FaEnvelope } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "./styling/forgetpassword.css";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

function ForgetPassword() {
  useEffect(() => {
    document.title = "Forget Password";
  }, []);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSendOTP = async () => {
    if (!email) {
      alert("Please enter email");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3001/email/send-otp",
        { email }
      );

      console.log("Response:", res.data);

      // Agar request successful hui to OTP page par jao
      navigate("/otpverification", {
        state: { 
          email,
          from: "forgetpassword",
        },
      });

    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <form>
      <motion.div
        className="booking-form-wrapper"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        <div className="rp-container">
          <div className="rp-card">
            <div className="rp-header">
              <div className="rp-text">Forget Password</div>
              <div className="rp-underline"></div>
            </div>

            <div className="rp-input">
              <FaEnvelope className="rp-icon" />
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="button"
              className="rp-btn"
              onClick={handleSendOTP}
            >
              Send OTP
            </button>
          </div>
        </div>
      </motion.div>
    </form>
  );
}

export default ForgetPassword;