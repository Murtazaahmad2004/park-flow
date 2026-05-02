import { FaGlobe, FaTicketAlt, FaTachometerAlt, FaCreditCard, FaShieldAlt, FaClock, FaHeadset } from "react-icons/fa";
import { FaHome, FaParking, FaCalendarCheck, FaSignInAlt } from 'react-icons/fa'
import React, { useEffect } from "react"
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
import "./styling/home.css"

const fadeUp = {
hidden: { opacity: 0, y: 60 },
visible: { opacity: 1, y: 0 }
};
const container = {
hidden: {},
visible: {
transition: {
staggerChildren: 0.2
}
}
};
const scrollToTop = () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
};
function Home() {
useEffect(() => {
document.title = "Home Page";
}, []);
return (
<>
{/* HEADER AND NAVIGATION */}
<div className="home-header">
   <div className="nav-bar">
      <div className="logo">
         <NavLink to="/" className="logo-link" onClick={scrollToTop}>
            <img src="/logo.png" alt="Logo" />
         </NavLink>
      </div>
      <h1>ParkFlow</h1>
      <ul className="nav-links">
         <NavLink to="/" className="nav-item" onClick={scrollToTop}>
            <li>
               <FaHome className="icon"/>
               Home
            </li>
         </NavLink>
         <NavLink to="/available-parking" className="nav-item">
            <li>
               <FaParking className="icon"/>
               Available Parking
            </li>
         </NavLink>
         <NavLink to="/my-bookings" className="nav-item">
            <li>
               <FaCalendarCheck className="icon"/>
               My Bookings
            </li>
         </NavLink>
         <NavLink to="/loginsignup" className="nav-item">
            <li>
               <FaSignInAlt className="icon"/>
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
      “Our Smart Parking System allows users to monitor available parking spaces in real-time and book their 
      desired slot online with ease. The system is designed to reduce traffic congestion, minimize waiting time, 
      and provide a smooth, efficient, and user-friendly parking experience.”
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
      “Our system provides real-time updates on parking space availability, <br></br> allowing users to find and reserve
      parking spots with ease. <br></br> Say goodbye to circling the block and hello to stress-free parking!”
   </p>
   <NavLink to="/available-parking" className="available-cta-button">Browser Parking Location</NavLink>
</motion.div>
{/* Pricing Plans */}
<div className="pricing-container">
   {/* BASIC */}
   <motion.div
   className="pricing-card"
   variants={fadeUp}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true }}
   whileHover={{ y: -10, scale: 1.03 }}
   transition={{ duration: 0.1 }}
   >
   <h2>Basic</h2>
   <p className="price">Rs 600<span>/hour</span></p>
   <ul>
      <li>🅿️ Standard parking slot</li>
      <li>⏰ Max 2 hours usage</li>
      <li>🧾 Digital parking ticket</li>
      <li>📷 QR code entry</li>
      <li>🚗 Suitable for short visits</li>
      <li className="disabled">❌ No reservation</li>
      <li className="disabled">❌ No security monitoring</li>
   </ul>
   <NavLink to="#" className="plan-buttons">Get Basic Plan</NavLink>
   </motion.div>
   {/* STANDARD */}
   <motion.div
   className="pricing-card"
   variants={fadeUp}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true }}
   whileHover={{ y: -10, scale: 1.03 }}
   transition={{ duration: 0.1}}
   >
   <h2>Standard</h2>
   <p className="price">Rs 1500<span>/month</span></p>
   <ul>
      <li>🅿️ Reserved parking slot</li>
      <li>⏰ Up to 5 hours per day</li>
      <li>📱 Online booking access</li>
      <li>🧾 Digital + printable ticket</li>
      <li>📷 QR code access</li>
      <li>🔐 Basic security monitoring</li>
      <li className="disabled">❌ No priority support</li>
   </ul>
   <NavLink to="#" className="plan-buttons">Get Standard Plan</NavLink>
   </motion.div>
   {/* ADVANCED */}
   <motion.div
   className="pricing-card popular"
   variants={fadeUp}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true }}
   whileHover={{ y: -10, scale: 1.03 }}
   transition={{ duration: 0.1}}
   >
   <span className="badge">Most Popular</span>
   <h2>Advanced</h2>
   <p className="price">Rs 2500<span>/month</span></p>
   <ul>
      <li>🅿️ Priority parking slot</li>
      <li>⏰ Up to 10 hours per day</li>
      <li>📱 Instant online booking</li>
      <li>🔐 CCTV security monitoring</li>
      <li>🔔 SMS & Email notifications</li>
      <li>🧾 Digital + printable ticket</li>
      <li>📷 QR code access</li>
   </ul>
   <NavLink to="#" className="plan-buttons">Get Advanced Plan</NavLink>
   </motion.div>
   {/* PREMIUM */}
   <motion.div
   className="pricing-card premium"
   variants={fadeUp}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true }}
   whileHover={{ y: -10, scale: 1.03 }}
   transition={{ duration: 0.1}}
   >
   <h2>Premium</h2>
   <p className="price">Rs 7500<span>/year</span></p>
   <ul>
      <li>🅿️ VIP parking near entrance</li>
      <li>⏰ Unlimited parking duration</li>
      <li>📱 Instant booking + QR access</li>
      <li>🔐 24/7 high-level security</li>
      <li>🚗 Full vehicle safety guarantee</li>
      <li>🛎️ Priority customer support</li>
      <li>🔔 Real-time alerts & updates</li>
   </ul>
   <NavLink to="#" className="plan-buttons">Get Premium Plan</NavLink>
   </motion.div>
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
   <motion.div
      className="services-section-left"
      variants={fadeUp}
      >
      <div className="intro-box">
         <h2>Our Products & Services</h2>
         <p>
            Our system provides advanced parking management tools (products) 
            along with a seamless and secure parking experience (services) for users.
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
         <li>
            <FaGlobe className="icon product" />
            Smart Web App
         </li>
         <li>
            <FaTicketAlt className="icon product" />
            Ticket System
         </li>
         <li>
            <FaTachometerAlt className="icon product" />
            Dashboard
         </li>
         <li>
            <FaCreditCard className="icon product" />
            Payment System
         </li>
      </ul>
   </motion.div>
</motion.div>
{/* RIGHT SIDE */}
<motion.div
   className="services-section-right"
   variants={fadeUp}
   >
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
         <h3>Quick Links</h3>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/available-parking">Parking</NavLink>
            </li>
            <li>
               <NavLink to="/my-bookings">Bookings</NavLink>
            </li>
         </ul>
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
)
}
export default Home;