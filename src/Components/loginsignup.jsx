import { FaUser, FaEnvelope, FaLock, FaHome, FaParking, FaCalendarCheck, FaSignInAlt } from 'react-icons/fa'
import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './loginsignup.css'

export const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // 🔥 TITLE CHANGE LOGIC
  useEffect(() => {
    document.title = action === "Login" ? "Login Page" : "Signup Page";
  }, [action]);

    const handleLogin = () => {
      if (action !== "Login") {
        setAction("Login");
        return;
      }
      
    if (email && password) {
      navigate("/Home");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <>
    {/* HEADER AND NAVIGATION */}
    <div className="home-header">

      <div className="nav-bar">

        <div className="logo">
            <img src="/logo.png" alt="Logo" />
        </div>
      
        <h1>ParkFlow</h1>

        <ul className="nav-links">
          <NavLink to="/" className="nav-item">
            <li><FaHome className="icon"/> Home</li>
          </NavLink>
          
           <NavLink to="/available-parking" className="nav-item">
            <li><FaParking className="icon"/> Available Parking</li>
          </NavLink>

           <NavLink to="/my-bookings" className="nav-item">
            <li><FaCalendarCheck className="icon"/> My Bookings</li>
          </NavLink>

           <NavLink to="/loginsignup" className="nav-item">
            <li><FaSignInAlt className="icon"/> Login</li>
          </NavLink>
        </ul>

      </div>

    </div>

    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? <div></div> : 
        <div className="input">
          <FaUser className="icon"/>
          <input type="text" placeholder="Username"/>
        </div>}

        <div className="input">
          <FaEnvelope className="icon"/>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="input">
          <FaLock className="icon"/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
      </div>

      {action === "Sign Up" ? <div></div> : 
      <div className="forget-password">
        Lost Password? <Link to="/reset-password"><span>Click Here!</span></Link>
      </div>}

      <div className="submit-container">
        <div 
          className={`submit ${action === "Sign Up" ? "active" : "gray"}`}
          onClick={() => setAction("Sign Up")}>Sign Up
        </div>
        
        <div 
          className={`submit ${action === "Login" ? "active" : "gray"}`}
          onClick={handleLogin}>Login
        </div>
      </div>
    </div>

    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-section">
          <h2>ParkFlow</h2>
          <p>Smart parking solution to find and book parking spaces بسهولة and efficiently.</p>
        </div>

        {/* CENTER */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/available-parking">Parking</NavLink></li>
            <li><NavLink to="/my-bookings">Bookings</NavLink></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@parkflow.com</p>
          <p>Phone: +92 300 1234567</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 ParkFlow. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  )
}