import React, { useEffect } from "react"
import { motion } from "framer-motion";
import "./styling/paymentscreen.css";
import { FaCalendar, FaCalendarCheck, FaCcMastercard, FaCcVisa, FaCreditCard, FaLock, FaUser } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const PaymentScreen = () => {
  useEffect(() => {
    document.title = "Payment Page";
  }, []);

  return (
    <>
      <div className="payment-form-section">

        {/* LEFT — CARD FORM */}
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
            <div className="pay-inputs">
              <div className="pay-input-group">
                <label>Card Number</label>
                <div className="pay-input">
                  <FaCreditCard className="pay-icon" />
                  <input type="number" placeholder="e.g. 1234 5678 9012 3456" />
                </div>
              </div>
              <div className="pay-input-group">
                <label>CVV Number</label>
                <div className="pay-input">
                  <FaLock className="pay-icon" />
                  <input type="number" placeholder="e.g. 123" />
                </div>
              </div>
              <div className="pay-input-group">
                <label>Expiry Month</label>
                <div className="pay-input">
                  <FaCalendar className="pay-icon" />
                  <input type="text" placeholder="MM" />
                </div>
              </div>
              <div className="pay-input-group">
                <label>Expiry Year</label>
                <div className="pay-input">
                  <FaCalendarCheck className="pay-icon" />
                  <input type="number" placeholder="YY" />
                </div>
              </div>
              <div className="pay-input-group">
                <label>Card Holder Name</label>
                <div className="pay-input">
                  <FaUser className="pay-icon" />
                  <input type="text" placeholder="e.g. John Doe" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — PLAN DETAIL */}
        <motion.div
          className="payment-form-right"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
            <div className="pay-row">
              <span>Monthly Subscription</span>
              <span>Rs 600</span>
            </div>
            <div className="pay-row">
              <span>Estimated Tax</span>
              <span>Rs 0</span>
            </div>
            <div className="divider"></div>
            <div className="pay-row pay-total">
              <span>Due Today</span>
              <span>Rs 0</span>
            </div>
            <button className="pay-subscribe-btn">
              <FaLock className="pay-icon" />
              Subscription
            </button>
          </div>
        </motion.div>

      </div>
    </>
  )
}

export default PaymentScreen;