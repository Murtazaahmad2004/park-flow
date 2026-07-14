import { FaKey } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "./styling/forgetpassword.css";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

function ResetPassword() {
  useEffect(() => {
    document.title = "Reset Password";
  }, []);

  const navigate = useNavigate();

  const location = useLocation();
  const email = location.state?.email;

  console.log(email);
  
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleResetPassword = async () => {
    if (!password || !confirmpassword) {
        alert("Please fill all the fields!");
        return;
    }

    if (password !== confirmpassword) {
        alert("Password do not matched!");
        return;
    }

    try {
        const res = await axios.post(
            "http://localhost:3001/email/resetpassword",
            {
                email,
                password,
            }
        );

        alert(res.data.message);

        if (res.data.status === "Success") {
            alert(res.data.message);
            navigate("/loginsignup");
        }
    } catch (error) {
        console.log(error);
    }
  }

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
              <div className="rp-text">Reset Password</div>
              <div className="rp-underline"></div>
            </div>

            <div className="rp-input">
              <FaKey className="rp-icon" />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="rp-input">
              <FaKey className="rp-icon" />
              <input
                type="password"
                placeholder="Enter Confirm Password"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="button"
              className="rp-btn"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
          </div>
        </div>
      </motion.div>
    </form>
  );
}

export default ResetPassword;