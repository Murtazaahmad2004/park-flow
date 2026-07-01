import { FaFileInvoiceDollar, FaParking, FaPlus, FaSignOutAlt, FaUserPlus, FaUserTie } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import axios from 'axios';
import { MdDashboard } from 'react-icons/md';
import "./styling/addstaff.css";

const fadeUp = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0 }
};

const container = {
hidden: {}, // {} Matlab container khud koi animation perform nahi kar raha.
visible: {
transition: { // Transition animation ki timing aur behavior control karti hai.
  // Jab container visible state mein jayega to yeh transition apply hogi.
staggerChildren: 0.2 // Har child animation ke start hone ke beech 0.2 second ka gap hoga.
}
}
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const AddStaff = () => {
  useEffect (() => {
    document.title = "Add Staff - ParkFlow";
  })

  const [staffid, setUserid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [cnic, setCnic] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/addstaff", {
        staffid,
        name,
        email,
        role,
        salary,
        cnic,
        phone,
        age,
      });
      console.log(result.data);

      alert("Staff added successfully!");

      setUserid("");
      setName("");
      setEmail("");
      setRole("");
      setSalary("");
      setCnic("");
      setPhone("");
      setAge("");
    } catch (err) {
      console.log(err);
      alert("Error adding staff. Please try again.");
    }
  };
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
            <NavLink
               to="/admindashboard"
               className="user-nav-item"
               >
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
      <NavLink
         to="/vehicalmanagement"
         className="user-nav-item"
         >
      <li>
      <FaParking className="icon" />
      Vehicle Management
      </li>
      </NavLink>
      </motion.div>
      <motion.div
      variants={fadeUp}
      whileHover={{ x: 10 }} // Hover karne pe element 10px right move karega
      >
      <NavLink
         to="#"
         className="user-nav-item"
         >
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
      <NavLink
         to="/staffmanagement"
         className="user-nav-item"
         >
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
      <NavLink
         to="/slotmanagement"
         className="user-nav-item"
         >
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
      <NavLink
         to="/billingmanagement"
         className="user-nav-item"
         >
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
         onClick={scrollToTop}
         >
      <li>
      <FaSignOutAlt className="icon"/>
      Logout
      </li>
      </NavLink>
      </motion.div>
      </motion.ul>
      </motion.div>
   </div>
</div>   

{/* ADD STAFF FORM */}
<div className="add-staff-form-container">
    <div className="add-staff-form">
        <h2>Add Staff</h2>
    <form onSubmit={handleSubmit}>
  <motion.div
    className="staff-form-wrapper"
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.8 }}
  >
    <div className="staff-form-content">
      <label htmlFor="staffId">ID:</label>
      <input
        type="text"
        id="sid"
        name="staffid"
        value={staffid}
        onChange={(e) => setUserid(e.target.value)}
        placeholder="Staff ID"
        required
      />

      <label htmlFor="staffName">Name:</label>
      <input
        type="text"
        id="sname"
        name="staffName"
         value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Staff Name"
        required
      />

      <label htmlFor="staffEmail">Email:</label>
      <input
        type="email"
        id="semail"
        name="staffemail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Staff Email"
        required
      />

      <label htmlFor="staffRole">Role:</label>
      <select id="staffrole" name="staffrole"  value={role}
        onChange={(e) => setRole(e.target.value)} required>
        <option value="">Select Option</option>
        <option>Employee</option>
        <option>Security Guard</option>
        <option>IT Operator</option>
        <option>Parking Manager</option>
        <option>Parking Attendant</option>
        <option>Cashier</option>
        <option>Customer Support Staff</option>
      </select>

      <label htmlFor="staffSalary">Salary:</label>
      <input
        type="number"
        id="salary"
        name="salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="Staff Salary"
        required
      />

      <label htmlFor="staffCnic">CNIC:</label>
      <input
        type="number"
        id="scnic"
        name="scnic"
        value={cnic}
        onChange={(e) => setCnic(e.target.value)}
        placeholder="Staff CNIC"
        required
      />

      <label htmlFor="staffPhone">Phone Number:</label>
      <input
        type="number"
        id="pno"
        name="pno"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Staff Phone Number"
        required
      />

      <label htmlFor="staffAge">Age:</label>
      <input
        type="number"
        id="sage"
        name="sage"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Staff Age"
        required
      />

      <button type="submit" className="pay-subscribe-btn">
        <FaPlus className="pay-icon" />
        Add Staff
      </button>
    </div>
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
              <p>Smart parking solution to find and book parking spaces efficiently.</p>
            </div>

            {/* CENTER */}
            <div className="login-footer-section">
              <div className="login-company-policies">
                <h3>Company Policies</h3>
                <ul>
                  <li>
                    <NavLink to="#" className="login-policy-link">Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="login-policy-link">Terms of Service</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" className="login-policy-link">Refund Policy</NavLink>
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
  )
}
export default AddStaff;