import { FaParking, FaSignOutAlt, FaCalendarCheck, FaCheck } from 'react-icons/fa'
import React, { useState, useEffect } from  "react";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom'
import "./styling/available-parking.css";
// slots container animation //
const fadeUp = {
hidden: { opacity: 0, y: 60 },
visible: { opacity: 1, y: 0 }
};
// create slots using array //
const slotsData = Array.from({ length: 50} , (_, i) => ({
id: i + 1,
}));
// usestate react hook to store and update the data //
// slots is current state of variable and store the data of current parking slots //
// setslots is a function that update the slots state //
const AvailableParking = () => {
const [slots, setsolts] = useState(slotsData);
// to store the data of selected parking slots in selectedSlot function //
// to update the data of selected slots in setSelectedSlot function //
// render on UI use usestate //
const [selectedSlot, setSelectedSlot] = useState(null);
// check slot status //
const handleSelect = (slot) => {
if(slot.status === "booked") return;
setSelectedSlot(slot.id);
};
// function for confirm button //
const confirmBooking = () => {
if(!selectedSlot) return;
setsolts((prev) =>
prev.map((slot) =>
slot.id === selectedSlot ? { ...slot, ststus: "booked"} : slot
) 
);
setSelectedSlot(null);
};
// check slot class //
const getSlotClass = (slot) => {
if(slot.ststus === "booked") return "slot booked";
if(selectedSlot === slots.id) return "slot selected";
return "slot available";
};
// page title //
useEffect(() => {
document.title = "Parking Slots"
}, []);
// screen scroll top //
const scrollToTop = () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
};
return (
<>
{/* Header */}
<div className="home-header">
   <div className="nav-bar">
      <div className="logo">
         <NavLink to="/available-parking" className="logo-link" onClick={scrollToTop}>
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
{/* Slots */}
<div className="parking-container">
   <motion.div
   className="hero-section"
   variants={fadeUp}
   initial="hidden"
   animate="visible"
   transition={{ duration: 0.8 }}
   >
   {/* LEFT SIDE */}
   <div className="info-left">
      <h2>Parking Slots</h2>
      <div className="slots-grid">
         {/* RUN LOOP FOR CREATING DIV FOR SLOT */}
         {slots.map((slot) => (
         <div
            key={slot.id}
            onClick={() => handleSelect(slot)}
            className={getSlotClass(slot)}
            >
            Slot {slot.id}
         </div>
         ))}
      </div>
   </div>
   {/* RIGHT SIDE */}
   <div className="info-right">
      {/* check if selectedslot is true then show info box */}
      {selectedSlot && (
      <div className="info">
         <h3>Booking Information</h3>
         <p>
            Selected Slot:
            <b> {selectedSlot}</b>
         </p>

         <div className="plan-detail">
               <div className="plan-detail-container">
                  <div className="features">
                     <h1>Basic Plan</h1>
                     <h2>Top Features</h2>
                     <ul>
                        <li>🅿️ Standard parking slot</li>
                        <li>⏰ Unlimited parking duration</li>
                        <li>🧾 Digital parking ticket</li>
                        <li>📷 QR code entry</li>
                        <li>🚗 Suitable for short visits</li>
                     </ul>
                  </div>
                  <div className="divider"></div>
                  <div className="row">
                     <span>Monthly Subscription</span>
                     <span>Rs 600</span>
                  </div>
                  <div className="row">
                     <span>Estimated Tax</span>
                     <span>Rs 0</span>
                  </div>
                  <div className="divider"></div>
                  <div className="row total">
                     <span>Due Today</span>
                     <span>Rs 0</span>
                  </div>
                 <button onClick={confirmBooking}>
                  <FaCheck className="icon" />
                     Confirm Booking
                  </button>
               </div>
            </div>
      </div>
      )}
   </div>
   </motion.div>
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
export default AvailableParking;