import {
  FaCar,
  FaClipboardList,
  FaEdit,
  FaFileInvoiceDollar,
  FaParking,
  FaPlus,
  FaSignOutAlt,
  FaTicketAlt,
  FaTrash,
  FaUserPlus,
  FaUserTie,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import axios from "axios";
import "./styling/slotmanagement.css";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
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

const SlotMnagement = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    document.title = "Admin || Slot Management - ParkFlow";

    axios
      .get("http://localhost:3001/bookings")
      .then((result) => setSlots(result.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("role");

    navigate("/loginsignup");
  };
  return (
    <>
      {/* HEADER */}
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
      {/* SLOT MANAGEMENT TABLE */}
      <div className="slot-management-page">
        <motion.div
          className="slot-table-container"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <table className="slot-table">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Slot Number</th>
                <th>Vehical Type</th>
                <th>Vehical Number</th>
                <th>Vehical Owner</th>
                <th>Owner Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {slots.map((slot, index) => (
                <tr key={slot.id}>
                  <td>{index + 1}</td>
                  <td>{slot.slot}</td>
                  <td>{slot.vehicletype}</td>
                  <td>{slot.vehiclenumber}</td>
                  <td>{slot.name}</td>
                  <td>{slot.phonenumber}</td>
                  <td>
                    <button className="slot-button-primary btn-primary">
                      <FaEdit className="icon" />
                    </button>
                    <button className="slot-button-danger btn-danger">
                      <FaTrash className="icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
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
};
export default SlotMnagement;
