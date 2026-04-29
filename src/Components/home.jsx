import { FaGlobe, FaTicketAlt, FaTachometerAlt, FaCreditCard, FaShieldAlt, FaClock, FaHeadset } from "react-icons/fa";
import { FaHome, FaParking, FaCalendarCheck, FaSignInAlt } from 'react-icons/fa'
import React, { useEffect } from "react"
import { NavLink } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
import "./home.css"

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

function Home() {

  useEffect(() => {
    document.title = "Home Page";
    AOS.init({ duration: 1000, once: true});
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

    {/* HERO SECTION */}
    <div className="hero-section" data-aos="zoom-in" data-aos-delay="200">
      <img src="/banner.png" alt="Hero" className="hero-image" />
      <NavLink to="/available-parking" className="cta-button">Browser Parking Location</NavLink>
    </div>

    {/* About Section */}
    <div className="about-us-section">
      <div className="about-us-left" data-aos="fade-right" data-aos-delay="200">
        <h2>About Us</h2>
        <p>
          “Our Smart Parking System allows users to monitor available parking spaces in real-time and book their 
          desired slot online with ease. The system is designed to reduce traffic congestion, minimize waiting time, 
          and provide a smooth, efficient, and user-friendly parking experience.”
        </p>
      </div>

      <div className="about-us-right" data-aos="fade-left" data-aos-delay="200">
        <img src="/about.png" alt="About Us" />
      </div>
    </div>

    {/* Availablity Section */}
    <div className="availability-section" data-aos="zoom-in" data-aos-delay="200">
      <h2>Real-Time Parking Availability</h2>
      <p>
        Our system provides real-time updates on parking space availability, <br></br> allowing users to find and reserve
        parking spots with ease. <br></br> Say goodbye to circling the block and hello to stress-free parking!
      </p>
        <NavLink to="/available-parking" className="available-cta-button">Browser Parking Location</NavLink>
    </div>

    {/* Pricing Plans */}
    <div className="pricing-section">
      <h1 className="title">Our Pricing Plans</h1>
      <p className="subtitle">
        Choose the best plan for your parking needs with smart features and security.
      </p>

      <div className="pricing-container">

        {/* BASIC (Hourly) */}
        <div className="pricing-card" data-aos="fade-up">
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
        </div>

        {/* STANDARD (Monthly) */}
        <div className="pricing-card" data-aos="fade-up" data-aos-delay="100">
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
        </div>

        {/* ADVANCED (Monthly) */}
        <div className="pricing-card popular" data-aos="fade-up" data-aos-delay="200">
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
        </div>

        {/* PREMIUM (Yearly) */}
        <div className="pricing-card premium" data-aos="fade-up" data-aos-delay="300">
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
        </div>
      </div>
    </div>

    {/* Product & Services Card */}
<div className="services-wrapper">

  {/* LEFT SIDE */}
  <div className="services-section-left" data-aos="fade-up">
    
    <div className="intro-box">
      <h2>Our Products & Services</h2>
      <p>
        Our system provides advanced parking management tools (products) 
        along with a seamless and secure parking experience (services) for users.
      </p>
    </div>

    {/* PRODUCTS */}
    <div className="product-card" data-aos="zoom-in" data-aos-delay="200">
      <h3>Our Products</h3>
      <ul>
        <li><FaGlobe className="icon product" /> Smart Web App</li>
        <li><FaTicketAlt className="icon product" /> Ticket System</li>
        <li><FaTachometerAlt className="icon product" /> Dashboard</li>
        <li><FaCreditCard className="icon product" /> Payment System</li>
      </ul>
    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="services-section-right" data-aos="zoom-out" data-aos-delay="300">
    
    <div className="service-card">
      <h3>Our Services</h3>
      <ul>
        <li><FaCalendarCheck className="icon service" /> Easy Booking</li>
        <li><FaShieldAlt className="icon service" /> Secure Parking</li>
        <li><FaClock className="icon service" /> Time Saving</li>
        <li><FaHeadset className="icon service" /> 24/7 Support</li>
      </ul>
    </div>

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
              <h3>Quick Links</h3>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/available-parking">Parking</NavLink></li>
                <li><NavLink to="/my-bookings">Bookings</NavLink></li>
              </ul>
            </div>
            {/* CENTER */}
            <div className="footer-section">
              <div className="company-policies">
                <h3>Company Policies</h3>
                  <ul>
                    <li><NavLink to="#">Privacy Policy</NavLink></li>
                    <li><NavLink to="#">Terms of Service</NavLink></li>
                    <li><NavLink to="#">Refund Policy</NavLink></li>
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