import { FaSignOutAlt, FaParking, FaCalendarCheck } from 'react-icons/fa'
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom'
import "./styling/my-booking.css";
const fadeUp = {
hidden: { opacity: 0, y: 60 },
visible: { opacity: 1, y: 0 }
};
// screen scroll top //
const scrollToTop = () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
};
const MyBooking = () => {
// page title
useEffect(() => {
document.title = "My Booking Page";
}, []);
return (
<>
{/* HEADER AND NAVIGATION */}
<div className="booking-header">
   <div className="nav-bar">
      <div className="logo">
         <NavLink to="/my-booking" className="logo-link" onClick={scrollToTop}>
            <img src="/logo.png" alt="Logo" />
         </NavLink>
      </div>
      <h1>ParkFlow</h1>
      <ul className="nav-links">
         <NavLink 
            to="/available-parking" 
            className="nav-item"
            >
            <li>
               <FaParking className="icon"/>
               Book Parking
            </li>
         </NavLink>
         <NavLink
            to="/my-booking"
            className="nav-item"
            >
            <li>
               <FaCalendarCheck className="icon" />
               My Booking
            </li>
         </NavLink>
         <NavLink to="/loginsignup" className="nav-item" onClick={scrollToTop}>
            <li>
               <FaSignOutAlt className="icon"/>
               Logout
            </li>
         </NavLink>
      </ul>
   </div>
</div>
<div className="booking-page">
   {/* BOOKING ROW 1 */}
   <div className="booking-row">
      <motion.div className="booking-form-left" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
      <div className="booking-container">
         <div className="vehical-info">
            <ul>
               <li>Booking ID</li>
               <li>Vehicle No</li>
               <li>Parking Area</li>
               <li>Slot No</li>
               <li>Date</li>
               <li>Day</li>
               <li>Entry Time</li>
               <li>Exit Time</li>
               <li>Status</li>
               <li>QR Code</li>
            </ul>
         </div>
      </div>
      </motion.div>
      <motion.div className="booking-form-right" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 0.2 }}>
      <div className="booking-data">
         <div className="booking-data-container">
            <div className="vehical-data">
               <div className="row">
                  <ul>
                     <li>1234</li>
                     <li>ABC-1020</li>
                     <li>Basement</li>
                     <li>Slot 1</li>
                     <li>17 May 2026</li>
                     <li>Sunday</li>
                     <li>10:00 AM</li>
                     <li>03:00 PM</li>
                     <li>Confirmed</li>
                     <li>Download</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      </motion.div>
   </div>
   {/* BOOKING ROW 2 */}
   <div className="booking-row">
      <motion.div className="booking-form-left" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
      <div className="booking-container">
         <div className="vehical-info">
            <ul>
               <li>Booking ID</li>
               <li>Vehicle No</li>
               <li>Parking Area</li>
               <li>Slot No</li>
               <li>Date</li>
               <li>Day</li>
               <li>Entry Time</li>
               <li>Exit Time</li>
               <li>Status</li>
               <li>QR Code</li>
            </ul>
         </div>
      </div>
      </motion.div>
      <motion.div className="booking-form-right" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 0.2 }}>
      <div className="booking-data">
         <div className="booking-data-container">
            <div className="vehical-data">
               <div className="row">
                  <ul>
                     <li>5678</li>
                     <li>DEF-1109</li>
                     <li>Ground Floor</li>
                     <li>Slot 30</li>
                     <li>18 May 2026</li>
                     <li>Monday</li>
                     <li>11:00 AM</li>
                     <li>10:00 PM</li>
                     <li>Confirmed</li>
                     <li>Download</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      </motion.div>
   </div>
   {/* BOOKING ROW 1 */}
   <div className="booking-row">
      <motion.div className="booking-form-left" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.6 }}>
      <div className="booking-container">
         <div className="vehical-info">
           <ul>
               <li>Booking ID</li>
               <li>Vehicle No</li>
               <li>Parking Area</li>
               <li>Slot No</li>
               <li>Date</li>
               <li>Day</li>
               <li>Entry Time</li>
               <li>Exit Time</li>
               <li>Status</li>
               <li>QR Code</li>
            </ul>
         </div>
      </div>
      </motion.div>
      <motion.div className="booking-form-right" variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 0.2 }}>
      <div className="booking-data">
         <div className="booking-data-container">
            <div className="vehical-data">
               <div className="row">
                  <ul>
                     <li>1890</li>
                     <li>XYZ-1976</li>
                     <li>First Floor</li>
                     <li>Slot 45</li>
                     <li>19 May 2026</li>
                     <li>Tuesday</li>
                     <li>08:00 AM</li>
                     <li>10:00 AM</li>
                     <li>Confirmed</li>
                     <li>Download</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      </motion.div>
   </div>
</div>
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
         <a href="mailto:#" class="gmail">
         support@parkflow.com
         </a><br></br>
         <a href="https://wa.me/#" target="_blank" class="whatsapp" rel="noreferrer">
         +92 300 1234567
         </a>
      </div>
   </div>
   {/* BOTTOM */}
   <div className="footer-bottom">
      <p>© 2026 ParkFlow. All Rights Reserved.</p>
   </div>
</footer>
</>
);
};
export default MyBooking;