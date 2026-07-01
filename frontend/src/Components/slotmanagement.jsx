import { FaEdit, FaFileInvoiceDollar, FaParking, FaSignOutAlt, FaTrash, FaUserPlus, FaUserTie } from 'react-icons/fa';
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import "./styling/slotmanagement.css"
import { MdDashboard } from 'react-icons/md';

const fadeUp = {
    hidden: { opacity:0, y: 60 },
    visible: { opacity:1, y:0 }
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
        top:0,
        behavior: "smooth"
    });
};

const SlotMnagement = () => {
    useEffect (() => {
        document.title="Slot Management - ParkFlow"
    }, []);
    
const slots = [
    { slotno: "Slot 01", vtype: "Car", vowner: "Muhammad Ahmad", ownerno: "03314567890" },
    { slotno: "Slot 02", vtype: "Jeep", vowner: "Asad Ali", ownerno: "03320912873" },
    { slotno: "Slot 03", vtype: "Truck", vowner: "Ahmad Nadeem", ownerno: "03331000114" },
]

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
              to="/addstaff"
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
                        <th>Vehical Owner</th>
                        <th>Owner Phone Number</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {slots.map((slot, index) => 
                        <tr key = {slot.id}>
                            <td>{index + 1}</td>
                            <td>{slot.slotno}</td>
                            <td>{slot.vtype}</td>
                            <td>{slot.vowner}</td>
                            <td>{slot.ownerno}</td>
                            <td>
                                <button className="staff-button-primary btn-primary">
                                    <FaEdit className="icon" />
                                </button>
                                <button className="staff-button-danger btn-danger">
                                    <FaTrash className="icon" />
                                </button>
                            </td>
                        </tr>
                    )}
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
export default SlotMnagement;