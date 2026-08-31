import {
  FaGlobe,
  FaTicketAlt,
  FaTachometerAlt,
  FaCreditCard,
  FaShieldAlt,
  FaClock,
  FaHeadset,
} from "react-icons/fa";
import { FaCalendarCheck, FaSignInAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "./styling/home.css";

// main banner animations //
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};
// childern part animations //
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
// screen scroll top //
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// page title //
function Home() {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    document.title = "Home Page - ParkFlow";
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/plans")
      .then((result) => {
        setPlan(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {/* HEADER AND NAVIGATION */}
      <div className="home-header">
        <div className="home-nav-bar">
          <div className="home-logo">
            <NavLink to="/" className="home-logo-link" onClick={scrollToTop}>
              <div className="home-logo">
                <img src="/logo.png" alt="Logo" />
              </div>
            </NavLink>
          </div>
          <h1>ParkFlow</h1>
          <ul className="home-nav-links">
            <NavLink to="/loginsignup" className="home-nav-item">
              <li>
                <FaSignInAlt className="home-icon" />
                Login
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
      {/* HERO SECTION */}
      <motion.div
        className="hero-section"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        <img src="/banner.png" alt="Hero" className="hero-image" />
      </motion.div>
      {/* About Section */}
      <div className="about-us-section">
        <motion.div
          className="about-us-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Us</h2>
          <p>
            “Our Smart Parking System allows users to monitor available parking
            spaces in real-time and book their desired slot online with ease.
            The system is designed to reduce traffic congestion, minimize
            waiting time, and provide a smooth, efficient, and user-friendly
            parking experience.”
          </p>
        </motion.div>
        <motion.div
          className="about-us-right"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/about.png" alt="About Us" />
        </motion.div>
      </div>
      {/* Availablity Section */}
      <motion.div
        className="availability-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Real-Time Parking Availability</h2>
        <p>
          “Our system provides real-time updates on parking space availability,{" "}
          <br></br> allowing users to find and reserve parking spots with ease.{" "}
          <br></br> Say goodbye to circling the block and hello to stress-free
          parking!”
        </p>
      </motion.div>
      {/* Pricing Plans */}
      <div className="plan-detail-container">
        {plan.map((item) => (
          <motion.div className="pricing-card" key={item._id}>
            <h2>{item.planname}</h2>

            <p className="price">
              Rs {item.price}
              <span>/{item.durationtype}</span>
            </p>

            <ul>
              {item.features.map((features, index) => (
                <li key={index}>{features}</li>
              ))}
            </ul>

            <NavLink to="/paymentscreen" className="plan-buttons">
              Get {item.planname} Plan
            </NavLink>
          </motion.div>
        ))}
      </div>
      {/* Product & Services Card */}
      <motion.div
        className="services-wrapper"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* LEFT SIDE */}
        <motion.div className="services-section-left" variants={fadeUp}>
          <div className="intro-box">
            <h2>Our Products & Services</h2>
            <p>
              Our system provides advanced parking management tools (products)
              along with a seamless and secure parking experience (services) for
              users.
            </p>
          </div>
          {/* PRODUCTS CARD */}
          <motion.div
            className="product-card"
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>Our Products</h3>
            <ul>
              <motion.li whileHover={{ x: 5 }}>
                <FaGlobe className="icon product" />
                Smart Web App
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <FaTicketAlt className="icon product" />
                Ticket System
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <FaTachometerAlt className="icon product" />
                Dashboard
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <FaCreditCard className="icon product" />
                Payment System
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
        {/* RIGHT SIDE */}
        <motion.div className="services-section-right" variants={fadeUp}>
          {/* SERVICE CARD */}
          <motion.div
            className="service-card"
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h3>Our Services</h3>
            <ul>
              <motion.li whileHover={{ x: 5 }}>
                <FaCalendarCheck className="icon service" />
                Easy Booking
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <FaShieldAlt className="icon service" />
                Secure Parking
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <FaClock className="icon service" />
                Time Saving
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <FaHeadset className="icon service" />
                24/7 Support
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* FOOTER */}
      <footer className="login-footer">
        <div className="login-footer-container">
          {/* LEFT */}
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

          {/* CENTER */}
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

          {/* RIGHT */}
          <div className="login-footer-section">
            <h3>Contact Us</h3>
            <a href="mailto:parkflow101@gmail.com" className="login-gmail">
              parkflow101@gmail.com
            </a>
            <br />
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              className="login-whatsapp"
              rel="noreferrer"
            >
              +92 300 1234567
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="login-footer-bottom">
          <p>© 2026 ParkFlow. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
export default Home;
