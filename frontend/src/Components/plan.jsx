import {
  FaFileInvoiceDollar,
  FaParking,
  FaSignOutAlt,
  FaUserPlus,
  FaUserTie,
  FaCar,
  FaTicketAlt,
  FaPlus,
  FaClipboardList,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { MdDashboard } from "react-icons/md";
import "./styling/plan.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function PlanForm() {
  useEffect(() => {
    document.title = "Plan Page - ParkFlow";
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");

    navigate("/loginsignup");
  };

  const [planname, setPlanname] = useState("");
  const [price, setPrice] = useState("");
  const [features, setFeatures] = useState([]);
  const [duration, setDuration] = useState("");
  const [durationtype, setDurationtype] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/plan", {
        planname,
        price,
        features,
        duration,
        durationtype,
      });

      alert("Plan Added Successfully");

      setPlanname("");
      setPrice("");
      setFeatures([]);
      setDuration("");
      setDurationtype("");
    } catch (err) {
      console.log(err);
      alert("Error");
    }
  };

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFeatures([...features, value]);
    } else {
      setFeatures(features.filter((item) => item !== value));
    }
  };
  const featureList = [
    "Standard Parking Slot",
    "Reserved Parking Slot",
    "Priority Parking Slot",
    "VIP Parking Near Entrance",

    "24/7 Parking Access",
    "Unlimited Parking Duration",

    "QR Code Entry",

    "Printable + Digital Ticket",

    "Booking Cancellation Any Time",

    "Email Notifications",

    "CCTV Security Monitoring",
    "24/7 Security Monitoring",
    "Complete Security Coverage",

    "Vehicle Safety Guarantee",

    "Premium Parking Zone Access",

    "Dedicated Support Manager",

    "Highest Priority Entry",
  ];
  return (
    <>
      {/* HEADER AND NAVIGATION */}
      <div className="home-header">
        <div className="home-nav-bar">
          <div className="home-logo">
            <NavLink to="#" className="home-logo-link" onClick={scrollToTop}>
              <div className="home-logo">
                <img src="/logo.png" alt="Logo" />
              </div>
            </NavLink>
          </div>
          <h1>ParkFlow</h1>
        </div>
      </div>
      {/* SIDEBAR */}
      <div className="side-bar">
        <div className="side-bar-container">
          <motion.div
            className="side-bar-links"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.ul className="user-nav-links">
              <motion.div
                variants={fadeUp}
                whileHover={{ x: 10 }} // Hover karne pe element 10px right move karega
              >
                <NavLink to="/admindashboard" className="user-nav-item">
                  <li>
                    <MdDashboard className="icon" />
                    DashBoard
                  </li>
                </NavLink>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ x: 10 }} // Hover karne pe element 10px right move karega
              >
                <NavLink to="/adminbooking" className="user-nav-item">
                  <li>
                    <FaTicketAlt className="icon" />
                    Booking Management
                  </li>
                </NavLink>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ x: 10 }} // Hover karne pe element 10px right move karega
              >
                <NavLink to="/vehicalmanagement" className="user-nav-item">
                  <li>
                    <FaCar className="icon" />
                    Vehicle Management
                  </li>
                </NavLink>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ x: 10 }} // Hover karne pe element 10px right move karega
              >
                <NavLink to="/addstaff" className="user-nav-item">
                  <li>
                    <FaUserPlus className="icon" />
                    Add Staff
                  </li>
                </NavLink>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ x: 10 }} // Hover karne pe element 10px right move karega
              >
                <NavLink to="/staffmanagement" className="user-nav-item">
                  <li>
                    <FaUserTie className="icon" />
                    Staff Management
                  </li>
                </NavLink>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ x: 10 }} // Hover karne pe element 10px right move karega
              >
                <NavLink to="/slotmanagement" className="user-nav-item">
                  <li>
                    <FaParking className="icon" />
                    Slot Management
                  </li>
                </NavLink>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ x: 10 }} // Hover karne pe element 10px right move karega
              >
                <NavLink to="/plan" className="user-nav-item">
                  <li>
                    <FaPlus className="icon" />
                    Add Plan
                  </li>
                </NavLink>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ x: 10 }} // Hover karne pe element 10px right move karega
              >
                <NavLink to="/planmanagement" className="user-nav-item">
                  <li>
                    <FaClipboardList className="icon" />
                    Plan Management
                  </li>
                </NavLink>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ x: 10 }} // Hover karne pe element 10px right move karega
              >
                <NavLink to="/billingmanagement" className="user-nav-item">
                  <li>
                    <FaFileInvoiceDollar className="icon" />
                    Billing Management
                  </li>
                </NavLink>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ x: 10 }} // Hover karne pe element 10px right move karega
              >
                <NavLink
                  to="/loginsignup"
                  className="user-nav-item"
                  onClick={() => {
                    scrollToTop();
                    handleLogout();
                  }}
                >
                  <li>
                    <FaSignOutAlt className="icon" />
                    Logout
                  </li>
                </NavLink>
              </motion.div>
            </motion.ul>
          </motion.div>
        </div>
      </div>

      <div className="add-staff-form-container">
        <div className="add-staff-form">
          <h2>Add New Plan</h2>
          <form onSubmit={handleSubmit}>
            <motion.div
              className="plan-form-content"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
            >
              <label>Plan Name</label>
              <input
                type="text"
                id="pname"
                name="planName"
                value={planname}
                onChange={(e) => setPlanname(e.target.value)}
                placeholder="Plan Name"
                required
              />

              <label>Price</label>
              <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
              />

              <label>Features</label>

              <div className="feature-list">
                {featureList.map((feature) => (
                  <label key={feature} className="feature-item">
                    <input
                      type="checkbox"
                      value={feature}
                      checked={features.includes(feature)}
                      onChange={handleFeatureChange}
                    />
                    <span>{feature}</span>
                  </label>
                ))}
              </div>

              <label>Duration</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Duration"
                required
              />

              <label>Duration Type</label>
              <select
                id="durationtype"
                name="durationtype"
                value={durationtype}
                onChange={(e) => setDurationtype(e.target.value)}
                required
              >
                <option value="">Select Duration Type</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>

              <button type="submit" className="pay-subscribe-btn">
                <FaPlus className="pay-icon" />
                Add Plan
              </button>
            </motion.div>
          </form>
        </div>
      </div>

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
            <a href="mailto:support@parkflow.com" className="login-gmail">
              support@parkflow.com
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
export default PlanForm;
