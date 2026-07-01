import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

import "./styling/loginsignup.css";

// ==================== Animation ====================
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function LoginSignup() {
  // ==================== States ====================
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // ==================== Page Title ====================
  useEffect(() => {
    document.title =
      action === "Login" ? "Login Page - ParkFlow" : "Signup Page - ParkFlow";
  }, [action]);

  const handleSignup = (e) => {
    if (action !== "Sign Up") {
      e.preventDefault();
      setAction("Sign Up");
    }
  };

  const handleLogin = (e) => {
    if (action !== "Login") {
      e.preventDefault();
      setAction("Login");
    }
  };

  // ==================== Form Submit ====================
  const handleSubmit = (e) => {
    e.preventDefault();

    // ---------- SIGN UP ----------
    if (action === "Sign Up") {
      axios
        .post("http://localhost:3001/signup", {
          name,
          email,
          password,
        })
        .then((result) => {
          console.log(result);

          setName("");
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          console.log(err);
        });

      return;
    }

    // ---------- LOGIN ----------
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then((result) => {
        if (result.data.status === "Success") {
          if (result.data.role === "admin") {
            navigate("/admindashboard");
          } else {
            navigate("/userhome");
          }
        } else {
          alert("Invalid Email or Password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // baqi axios wala code

  return (
    <>
      {/* MAIN WRAPPER */}
      <div className="login-main-wrapper">
        {/* HEADER */}
        <div className="login-home-header">
          <div className="login-nav-bar">
            {/* LOGO */}
            <div className="login-logo">
              <img src="/logo.png" alt="Logo" />
            </div>

            <h1>ParkFlow</h1>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <motion.div
            className="login-form-wrapper"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <div className="login-container">
              {/* HEADER */}
              <div className="login-header">
                <div className="login-text">{action}</div>
                <div className="login-underline"></div>
              </div>

              {/* INPUTS */}
              <div className="login-inputs">
                {/* Username */}
                {action !== "Login" && (
                  <div className="login-input">
                    <FaUser className="login-icon" />

                    <input
                      type="text"
                      placeholder="Username"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                )}

                {/* Email */}
                <div className="login-input">
                  <FaEnvelope className="login-icon" />

                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password */}
                <div className="login-input">
                  <FaLock className="login-icon" />

                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Forgot Password */}
              {action === "Login" && (
                <div className="login-forget-password">
                  Lost Password?
                  <Link to="/resetpassword">
                    <span> Click Here!</span>
                  </Link>
                </div>
              )}

              {/* Buttons */}
              <div className="login-submit-container">
                <button
                  type={action === "Sign Up" ? "submit" : "button"}
                  className={`submit ${action === "Sign Up" ? "active" : "gray"}`}
                  onClick={handleSignup}
                >
                  <FaUserPlus className="icon" />
                  Sign Up
                </button>

                <button
                  type={action === "Login" ? "submit" : "button"}
                  className={`submit ${action === "Login" ? "active" : "gray"}`}
                  onClick={handleLogin}
                >
                  <FaSignInAlt className="icon" />
                  Login
                </button>
              </div>
            </div>
          </motion.div>
        </form>

        {/* FOOTER */}
        <footer className="login-footer">
          <div className="login-footer-container">
            {/* Left */}
            <div className="login-footer-section">
              <div className="login-footer-brand">
                <div className="login-logo">
                  <img src="/logo.png" alt="Logo" />
                </div>

                <h2>ParkFlow</h2>
              </div>

              <p>
                Smart parking solution to find and book parking spaces
                efficiently.
              </p>
            </div>

            {/* Center */}
            <div className="login-footer-section">
              <div className="login-company-policies">
                <h3>Company Policies</h3>

                <ul>
                  <li>
                    <NavLink to="#" className="login-policy-link">
                      Privacy Policy
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="login-policy-link">
                      Terms of Service
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="login-policy-link">
                      Refund Policy
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="login-footer-section">
              <h3>Contact Us</h3>

              <a href="mailto:support@parkflow.com" className="login-gmail">
                support@parkflow.com
              </a>

              <br />

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="login-whatsapp"
              >
                +92 300 1234567
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="login-footer-bottom">
            <p>© 2026 ParkFlow. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LoginSignup;
