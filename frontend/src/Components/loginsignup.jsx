import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const [userid, setUserid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const generateUserId = () => {
    const user = "PF-2026-USER";

    const randomId = Math.floor(1000 + Math.random() * 9000);
    const userId = `${user}-${randomId}`;

    console.log(userId);

    setUserid(userId);
  };

  // ==================== Page Title ====================
  useEffect(() => {
    document.title =
      action === "Login" ? "Login Page - ParkFlow" : "Signup Page - ParkFlow";
      generateUserId();
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
          userid,
          name,
          email,
          password,
        })
        .then((result) => {
          if (result.data.status === "Email already exists") {
            alert("Email already exists!")
            return;
          }
          // setUserid("");
          setName("");
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          console.log(err);
        });
        generateUserId();
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

      // Login Status
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userid", result.data.user.userid);
      sessionStorage.setItem("email", result.data.user.email);

      // User Object Save
      sessionStorage.setItem(
        "user",
        JSON.stringify(result.data.user)
      );

      // Role Save
      sessionStorage.setItem(
        "role",
        result.data.user.role
      );

      // Redirect
      if (result.data.user.role === "admin") {
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
      <motion.div
        className="login-header"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
      >
        <div className="login-text">{action}</div>
        <div className="login-underline"></div>
      </motion.div>

      {/* INPUTS */}
      <div className="login-inputs">
           {/* Username */}
        {action !== "Login" && (
          <>
          {/* UserID */}
        <motion.div
          className="login-input"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <FaUser className="login-icon" />

          <input
            type="text"
            id="userid"
            value={userid}
            required
            readOnly
          />
        </motion.div>

          <motion.div
            className="login-input"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <FaUser className="login-icon" />

            <input
              type="text"
              placeholder="Username"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </motion.div>
        </>
        )}

        {/* Email */}
        <motion.div
          className="login-input"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <FaEnvelope className="login-icon" />

          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>

        {/* Password */}
        <motion.div
          className="login-input"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <FaLock className="login-icon" />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </motion.div>

      </div>

      {/* Forgot Password */}
      {action === "Login" && (
        <motion.div
          className="login-forget-password"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <p
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/forgetpassword")}
          >
            Lost Password?
          </p>
        </motion.div>
      )}

      {/* Buttons */}
      <motion.div
        className="login-submit-container"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type={action === "Sign Up" ? "submit" : "button"}
          className={`submit ${
            action === "Sign Up" ? "active" : "gray"
          }`}
          onClick={handleSignup}
        >
          <FaUserPlus className="icon" />
          Sign Up
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type={action === "Login" ? "submit" : "button"}
          className={`submit ${
            action === "Login" ? "active" : "gray"
          }`}
          onClick={handleLogin}
        >
          <FaSignInAlt className="icon" />
          Login
        </motion.button>
      </motion.div>

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

              <a href="mailto:parkflow101@gmail.com" className="login-gmail">
                parkflow101@gmail.com
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
