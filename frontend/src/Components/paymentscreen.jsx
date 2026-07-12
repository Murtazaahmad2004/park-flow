import { FaCalendar, FaCalendarCheck, FaCcMastercard, FaCcVisa, FaCreditCard, FaLock, FaUser } from 'react-icons/fa';
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styling/paymentscreen.css";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

function PaymentScreen() {
  const bookingData = JSON.parse(localStorage.getItem("bookingData") || null );
  
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  const handlePayment = async () => {

    if (
        !cardNumber ||
        !cvvNumber ||
        !expiryMonth ||
        !expiryYear ||
        !cardHolderName
    ) {
        alert("Please fill all fields");
        return;
    }

    try {

        const bookingData = JSON.parse(
            localStorage.getItem("bookingData")
        );

        const result = await axios.post(
            "http://localhost:3001/email/send-otp",
            {
                email: bookingData.email,
            }
        );

        if(result.data.status==="OTP sent successfully"){

            navigate("/otpverification",{
                state:{
                    email:bookingData.email
                }
            });

        }else{

            alert(result.data.status);
        }

    } catch(err){

        console.log(err);
        console.log(err.response?.data);

        alert("Failed to send OTP");
    }
};
  console.log(bookingData);

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
                <div className="pay-input"
                   onChange={(e) => setCardNumber(e.target.value)}
                >
                  <FaCreditCard className="pay-icon" />
                  <input type="number" placeholder="e.g. 1234 5678 9012 3456" />
                </div>
              </div>
              <div className="pay-input-group"
                 onChange={(e) => setCardNumber(e.target.value)}
              >
                <label>CVV Number</label>
                <div className="pay-input">
                  <FaLock className="pay-icon" />
                  <input type="number" placeholder="e.g. 123" />
                </div>
              </div>
              <div className="pay-input-group"
                 onChange={(e) => setCvvNumber(e.target.value)}
              >
                <label>Expiry Month</label>
                <div className="pay-input">
                  <FaCalendar className="pay-icon" />
                  <input type="text" placeholder="MM" />
                </div>
              </div>
              <div className="pay-input-group"
                 onChange={(e) => setExpiryMonth(e.target.value)}
              >
                <label>Expiry Year</label>
                <div className="pay-input">
                  <FaCalendarCheck className="pay-icon" />
                  <input type="number" placeholder="YY" />
                </div>
              </div>
              <div className="pay-input-group"
                 onChange={(e) => setExpiryYear(e.target.value)}
              >
                <label>Card Holder Name</label>
                <div className="pay-input"
                  onChange={(e) => setCardHolderName(e.target.value)}
                >
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
            <button onClick={handlePayment}>
              Pay Subscription
            </button>
          </div>
        </motion.div>

      </div>
    </>
  )
}

export default PaymentScreen;