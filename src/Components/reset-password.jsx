import {FaEnvelope} from 'react-icons/fa'
import React, { useEffect } from "react"
import './styling/reset-password.css'

function ResetPassword() {

  // 🔥 TITLE CHANGE LOGIC
  useEffect(() => {
    document.title = "Reset Password Page";
  }, []);

  return (
    <div className="container">
        <div className="header">
            <div className="text">Reset Password</div>
            <div className="underline"></div>
        </div>
        <div className="input">
            <FaEnvelope className="icon"/>
            <input type="email" placeholder="Email"/>
        </div>
        <button className="btn">Send Reset Link</button>
    </div>
  )
}

export default ResetPassword;