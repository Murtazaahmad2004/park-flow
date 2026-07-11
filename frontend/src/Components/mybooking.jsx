import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "./styling/mybooking.css";
import {
  FaCalendarCheck,
  FaChevronDown,
  FaCloudDownloadAlt,
  FaParking,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // har child element 0.2 seconds ke gap se animate hoga
    },
  },
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function MyBooking () {
   const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState("");
    const [bookings, setBookings] = useState([]);

  useEffect(() => {
    document.title = "My Booking - ParkFlow";

    axios
      .get("http://localhost:3001/bookings")
      .then((result) => setBookings(result.data))
      .catch((err) => console.log(err));
  }, []);

    useEffect(() => {
      const loggedInUser = JSON.parse(localStorage.getItem("user"));
  
      if(loggedInUser) {
        setUser(loggedInUser);
      }
    }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    localStorage.removeItem("user");

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
          
           {/* DROPDOWN */}
                    <div
                      className="dropdown-container"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen(!open);
                      }}
                    >
                      <span className="user-name">{user.name}</span>
                      <FaChevronDown className="icon" />
                      {open && (
                        <div className="dropdown-menu">
                          <div className="dropdown-header">
                            <div className="dropdown-logo">
                              <img src="/logo.png" alt="Logo" />
                            </div>
          
                            <div className="dropdown-user-info">
                              <h3>{user.name}</h3>
                              <p>{user.email}</p>
                              <p>{user.userid}</p>
                            </div>
                          </div>
                          <hr />
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
                        </div>
                      )}
                    </div>
        </div>
      </div>

      {/* sidebar */}
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
                <NavLink to="/userhome" className="user-nav-item">
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
                <NavLink to="/bookingform" className="user-nav-item">
                  <li>
                    <FaParking className="icon" />
                    Book Parking
                  </li>
                </NavLink>
              </motion.div>
              <motion.div
                variants={fadeUp}
                whileHover={{ x: 10 }} // Hover karne pe element 10px right move karega
              >
                <NavLink to="/mybooking" className="user-nav-item">
                  <li>
                    <FaCalendarCheck className="icon" />
                    My Booking
                  </li>
                </NavLink>
              </motion.div>
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* BOOKING ROWS */}
      <div className="booking-page">
        <motion.div
          className="booking-table-container"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
           <table className="booking-table">
                      <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>User ID</th>
                          <th>Booking ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>CNIC</th>
                          <th>Vehicle Number</th>
                          <th>Vehicle Type</th>
                          <th>Slot Number</th>
                          <th>Parking Area</th>
                          <th>Plan</th>
                          <th>Price</th>
                          <th>Booking Date</th>
                          <th>Booking Time</th>
                          <th>Ending Date</th>
                          <th>Ending Time</th>
                          <th>Duration</th>
                          <th>Status</th>
                          <th>QR Code</th>
                        </tr>
                      </thead>
          
                      <tbody>
                        {/* booking current item ha */}
                        {/* bookings array ha */}
                        {/* index current item ka number ha */}
                        {bookings.map((booking, index) => (
                          <tr key={booking.id}>
                            <td>{index + 1}</td> {/* ✅ Auto Sr.No */}
                            <td>{booking.userid}</td>
                            <td>{booking.bookingid}</td>
                            <td>{booking.name}</td>
                            <td>{booking.email}</td>
                            <td>{booking.cnic}</td>
                            <td>{booking.vehiclenumber}</td>
                            <td>{booking.vehicletype}</td>
                            <td>{booking.slot}</td>
                            <td>{booking.area}</td>
                            <td>{booking.plan}</td>
                            <td>Rs. {booking.price}</td>
                            <td>{booking.bookingdate}</td>
                            <td>{booking.bookingtime}</td>
                            <td>{booking.enddate}</td>
                            <td>{booking.endtime}</td>
                            <td>{booking.duration}</td>
                            <td>{booking.status}</td>
                            <td>
                              <button className="vehical-button-primary btn-primary">
                                <FaCloudDownloadAlt className="icon" />
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
};

export default MyBooking;
