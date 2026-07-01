import { FaEnvelope } from 'react-icons/fa'
import React, { useEffect } from "react"
import './styling/resetpassword.css'

function ResetPassword() {
  useEffect(() => {
    document.title = "Reset Password Page";
  }, []);

  return (
    <div className="rp-container">
      <div className="rp-card">
        <div className="rp-header">
          <div className="rp-text">Reset Password</div>
          <div className="rp-underline"></div>
        </div>
        <div className="rp-input">
          <FaEnvelope className="rp-icon" />
          <input type="email" placeholder="Email" />
        </div>
        <button className="rp-btn">Send Reset Link</button>
      </div>
    </div>
  )
}

export default ResetPassword;