import React, { useEffect } from "react"
import { motion } from "framer-motion";
import "./styling/payment-screen.css";
import { FaCalendar, FaCalendarCheck, FaCcMastercard, FaCcVisa, FaCreditCard, FaLock, FaUser } from 'react-icons/fa';

const fadeUp = {
hidden: { opacity: 0, y: 60 },
visible: { opacity: 1, y: 0 }
};
const PaymentScreen = () => {
// page title //
useEffect(() => {
document.title = "Payment Page";
}, []);
return (
<>
<div className="payment-form-section">
   <motion.div
   className="payment-form-left"
   variants={fadeUp}
   initial="hidden"
   animate="visible"
   transition={{ duration: 0.6 }}
   >
   <div className="payment-container">
      <div className="card-icons">
         <FaCcVisa className="card-icon visa" />
         <FaCcMastercard className="card-icon mastercard" />
      </div>
      <div className="inputs">
         <div className="input-group">
            <label>Card Number</label>
            <div className="input">
               <FaCreditCard className="icon" />
               <input type="number" placeholder="Card Number" />
            </div>
         </div>
         <div className="input-group">
            <label>CVV Number</label>
            <div className="input">
               <FaLock className="icon" />
               <input type="number" placeholder="CVV Number" />
            </div>
         </div>
         <div className="input-group">
            <label>Expiry Month</label>
            <div className="input">
               <FaCalendar className="icon" />
               <input type="text" placeholder="Expiry Month" />
            </div>
         </div>
         <div className="input-group">
            <label>Expiry Year</label>
            <div className="input">
               <FaCalendarCheck className="icon" />
               <input type="number" placeholder="Expiry Year" />
            </div>
         </div>
         <div className="input-group">
            <label>Card Holder Name</label>
            <div className="input">
               <FaUser  className="icon" />
               <input type="number" placeholder="Card Holder Name" />
            </div>
         </div>
      </div>
   </div>
   </motion.div>
   <motion.div
   className="payment-form-right"
   variants={fadeUp}
   initial="hidden"
   animate="visible"
   transition={{ duration: 0.8, delay: 0.2 }}
   >
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
        <button className="subscribe-btn">
            <FaLock className="icon" />
                Subscription
        </button>
      </div>
   </div>
   </motion.div>
</div>
</>
)
}
export default PaymentScreen;