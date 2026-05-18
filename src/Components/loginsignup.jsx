import { FaUser, FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./styling/loginsignup.css";

// animations
 const fadeUp = {
  hidden: { opacity: 0, y:60},
  visible: { opacity: 1, y: 0 }
 };

const LoginSignup = () => {
  // FORM MODE
  const [action, setAction] = useState("Sign Up");

  // INPUT STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // PAGE TITLE
  useEffect(() => {
    document.title = action === "Login" ? "Login Page" : "Signup Page";
  }, [action]);

  // LOGIN FUNCTION
  const handleLogin = () => {
    // SWITCH TO LOGIN MODE
    if (action !== "Login") {
      setAction("Login");
      return;
    }
    // VALIDATION
    if (email && password) {
      navigate("/userhome");
    } else {
      alert("Please enter email and password");
    }
  };
  return (
    <>
      {/* MAIN WRAPPER */}
      <div className="main-wrapper">

        {/* HEADER */}
        <div className="home-header">
          <div className="nav-bar">
            {/* LOGO */}
            <div className="logo">
              <img src="/logo.png" alt="Logo" />
            </div>
            <h1>ParkFlow</h1>

            {/* NAVIGATION - shifted to right via margin-left: auto in CSS */}
            <ul className="nav-links">
              <NavLink to="/loginsignup" className="nav-item">
                <li>
                  <FaSignInAlt className="icon" />
                  Login
                </li>
              </NavLink>
            </ul>
          </div>
        </div>

        {/* FORM CENTER WRAPPER */}
        <motion.div
        className="form-wrapper"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        >
          {/* LOGIN SIGNUP CONTAINER */}
          <div className="container">

            {/* HEADER */}
            <div className="header">
              <div className="text">{action}</div>
              <div className="underline"></div>
            </div>

            {/* INPUTS */}
            <div className="inputs">

              {/* USERNAME - only shown on Sign Up */}
              {action === "Login" ? null : (
                <div className="input">
                  <FaUser className="icon" />
                  <input type="text" placeholder="Username" />
                </div>
              )}

              {/* EMAIL */}
              <div className="input">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* PASSWORD */}
              <div className="input">
                <FaLock className="icon" />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* FORGOT PASSWORD */}
            {action === "Sign Up" ? null : (
              <div className="forget-password">
                Lost Password?
                <Link to="/reset-password">
                  <span> Click Here!</span>
                </Link>
              </div>
            )}

            {/* BUTTONS */}
            <div className="submit-container">

              {/* SIGNUP BUTTON */}
              <div
                className={`submit ${action === "Sign Up" ? "active" : "gray"}`}
                onClick={() => setAction("Sign Up")}
              >
                Sign Up
              </div>

              {/* LOGIN BUTTON */}
              <div
                className={`submit ${action === "Login" ? "active" : "gray"}`}
                onClick={handleLogin}
              >
                Login
              </div>
            </div>
          </div>
        </motion.div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-container">

            {/* LEFT */}
            <div className="footer-section">
              <div className="footer-brand">
                <div className="logo">
                  <img src="/logo.png" alt="Logo" />
                </div>
                <h2>ParkFlow</h2>
              </div>
              <p>Smart parking solution to find and book parking spaces efficiently.</p>
            </div>

            {/* CENTER */}
            <div className="footer-section">
              <div className="company-policies">
                <h3>Company Policies</h3>
                <ul>
                  <li>
                    <NavLink to="#">Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Terms of Service</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Refund Policy</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT */}
            <div className="footer-section">
              <h3>Contact Us</h3>
              <a href="mailto:support@parkflow.com" className="gmail">
                support@parkflow.com
              </a>
              <br />
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                className="whatsapp"
                rel="noreferrer"
              >
                +92 300 1234567
              </a>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="footer-bottom">
            <p>© 2026 ParkFlow. All Rights Reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default LoginSignup;