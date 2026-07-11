import {
  FaBookmark,
  FaCalendarCheck,
  FaCar,
  FaCheck,
  FaChevronDown,
  FaCreditCard,
  FaHistory,
  FaParking,
  FaSignOutAlt,
} from "react-icons/fa"; // icons import kar rahi hai.
import { MdAlarm, MdDashboard, MdSubscriptions } from "react-icons/md"; // Material Design icons import ho rahe hain.
import React, { useEffect, useState } from "react"; // page title set karne ke liye use hua hai.
import { NavLink, useNavigate } from "react-router-dom"; // Pages ke darmiyan navigation.
import { motion } from "framer-motion"; // Elements ko animate karta hai.
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"; // Dashboard graphs banane ke liye.
import "./styling/userhome.css"; // CSS file import.
import axios from "axios";
// FADE UP Ye animation object hai.
const fadeUp = {
  hidden: { opacity: 0, y: 60 }, // simple 60 mean 60px ha (element 60px neeche shift hoga (vertical position down))
  visible: { opacity: 1, y: 0 },
};
// STAGGER CONTAINER
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // har child element 0.2 seconds ke gap se animate hoga
    },
  },
};
// SCALE ANIMATION Element zoom effect ke sath show hota hai.
const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
function UserHome() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [totalSlots, setTotalSlots] = useState(0);
  const [availableSlots, setAvailableSlots] = useState(0);

  // PAGE TITLE
  useEffect(() => {
    document.title = "User DashBoard - ParkFlow";

    axios
      .get("http://localhost:3001/api/slots/count")
      .then((result) => {
        setTotalSlots(result.data.totalSlots);
        setAvailableSlots(result.data.availableSlots);
      })
      .catch((err) => {
        console.log(err);
      });
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
  // SCROLL TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Graphs
  const linedata = [
    { day: "Sunday", booked: 10, available: 40 },
    { day: "Monday", booked: 19, available: 31 },
    { day: "Tuesday", booked: 21, available: 29 },
    { day: "Wednesday", booked: 29, available: 21 },
    { day: "Thursday", booked: 33, available: 17 },
    { day: "Friday", booked: 15, available: 35 },
    { day: "Saturday", booked: 5, available: 45 },
  ];
  const donutdata = [
    { name: "available", value: 38 },
    { name: "booked", value: 7 },
  ];
  const colors = ["#28a745", "#ffc107"];
  return (
    <>
      {/* HEADER AND NAVIGATION */}
      <div className="user-home-header">
        <div className="user-home-nav-bar">
          <div className="user-home-logo">
            <NavLink
              to="#"
              className="user-home-logo-link"
              onClick={scrollToTop}
            >
              <div className="user-home-logo">
                <img src="/logo.png" alt="Logo" />
              </div>
            </NavLink>
            <h1>ParkFlow</h1>
          </div>

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
                <NavLink to="#" className="user-nav-item">
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
      {/* DASHBOARD */}
      <div className="main-dashboard">
        <div className="dashboard-container">
          <motion.div
            className="dashboard-cards"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="stat-card"
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }} // Hover karne pe element 10px upar move karega aur 1.03px zoom hoga
              transition={{ duration: 0.3 }} // animation 0.3 seconds ma complete hoga
            >
              <div className="stat-icon">
                <FaParking />
              </div>
              <div className="stat-info">
                <p className="stat-label">Total Slots</p>
                <h3 className="stat-number">{totalSlots}</h3>
                <p className="stat-sub">All Parking Slots</p>
              </div>
            </motion.div>
            <motion.div
              className="stat-card"
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }} // Hover karne pe element 10px upar move karega aur 1.03px zoom hoga
              transition={{ duration: 0.3 }} // animation 0.3 seconds ma complete hoga
            >
              <div className="stat-icon">
                <FaCar />
              </div>
              <div className="stat-info">
                <p className="stat-label">Available Slots</p>
                <h3 className="stat-number">{availableSlots}</h3>
                <p className="stat-sub">Slots Available</p>
              </div>
            </motion.div>
            <motion.div
              className="stat-card"
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }} // Hover karne pe element 10px upar move karega aur 1.03px zoom hoga
              transition={{ duration: 0.3 }} // animation 0.3 seconds ma complete hoga
            >
              <div className="stat-icon">
                <FaBookmark />
              </div>
              <div className="stat-info">
                <p className="stat-label">Booked Slots</p>
                <h3 className="stat-number">7</h3>
                <p className="stat-sub">Currently Booked</p>
              </div>
            </motion.div>
            <motion.div
              className="stat-card"
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03 }} // Hover karne pe element 10px upar move karega aur 1.03px zoom hoga
              transition={{ duration: 0.3 }} // animation 0.3 seconds ma complete hoga
            >
              <div className="stat-icon">
                <MdSubscriptions />
              </div>
              <div className="stat-info">
                <p className="stat-label">Subscription Card</p>
                <h3 className="stat-number">Basic Plan</h3>
                <p className="stat-sub">Currently Active Plan</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* GRAPHS SECTION */}
        <motion.div
          className="graphs-section"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="chart-card"
            variants={scaleUp}
            whileHover={{ scale: 1.02 }} // Hover karne pe element 1.02px zoom hoga
          >
            <h3>Parking Duration</h3>
            <LineChart width={890} height={350} data={linedata}>
              <XAxis dataKey="day" />
              <YAxis domain={[0, 50]} />
              <Tooltip /> {/* Hover pe popup show karta hai */}
              <Legend /> {/* Chart labels show karta hai */}
              <Line
                type="monotone"
                dataKey="booked"
                stroke="#185FA5"
                strokeWidth={2}
                dot={{ r: 4 }}
              />{" "}
              {/* monotype smooth curved line banata hai. */}
              <Line
                type="monotone"
                dataKey="available"
                stroke="#3ecf8e"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </motion.div>

          <motion.div
            className="donut-chart-container"
            variants={scaleUp}
            whileHover={{ scale: 1.02 }} // Hover karne pe element 1.02px zoom hoga
          >
            <h3 className="chart-title">Parking Overview</h3>
            <ResponsiveContainer width="100%" height={290}>
              {" "}
              {/* Responsive Container Different screen sizes pe adjust hota ha */}
              <PieChart>
                {" "}
                {/* pie chart ka main container */}
                <Pie
                  data={donutdata}
                  cx="50%" // center x-axis
                  cy="50%" // center y-axis
                  innerRadius={70} // Center me hole create karta hai.
                  outerRadius={100} // Outer circle size.
                  paddingAngle={5} // Chart sections ke darmiyan gap.
                  dataKey="value"
                >
                  {donutdata.map(
                    (
                      curitem,
                      i, // har data items k liya cells create ho rahy han (curitem(current item) (i(indexing k liya ha color assign k liya)
                    ) => (
                      <Cell key={i} fill={colors[i]} /> // Har pie section ka color set kar raha hai. (key is unique id)
                    ),
                  )}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>

        {/* NOTIFICATION + QUICK ACTIONS */}
        <div className="dashboard-bottom-section">
          {/* LEFT - NOTIFICATIONS */}
          <div className="notif-card">
            <div className="notif-card-header">
              <h3>Notifications</h3>
              <button className="view-all-btn">View All →</button>
            </div>
            <div className="notif-item">
              <div className="notif-dot" style={{ background: "#EAF3DE" }}>
                <FaCheck style={{ color: "#3B6D11" }} />
              </div>
              <div className="notif-body">
                <p>Booking Confirmed</p>
                <span>Slot #5 has been booked successfully.</span>
                <div className="notif-time">2 min ago</div>
              </div>
            </div>
            <div className="notif-item">
              <div className="notif-dot" style={{ background: "#FAEEDA" }}>
                <MdAlarm style={{ color: "#854F0B" }} />
              </div>
              <div className="notif-body">
                <p>Parking Time Reminder</p>
                <span>Your parking time expires in 30 minutes.</span>
                <div className="notif-time">21 min ago</div>
              </div>
            </div>
            <div className="notif-item">
              <div className="notif-dot" style={{ background: "#FCEBEB" }}>
                <FaCreditCard style={{ color: "#A32D2D" }} />
              </div>
              <div className="notif-body">
                <p>Subscription Expiring</p>
                <span>Your subscription expires on 20 June 2026.</span>
                <div className="notif-time">1 hour ago</div>
              </div>
            </div>
          </div>
          {/* RIGHT - QUICK ACTIONS */}
          <div className="qa-main-section">
            <div className="notif-card-header">
              <h3>Quick Actions</h3>
            </div>
            <div className="qa-grid">
              <NavLink to="/" className="qa-card">
                <div className="qa-icon-wrap" style={{ background: "#E6F1FB" }}>
                  <FaParking style={{ color: "#185FA5" }} />
                </div>
                <span className="qa-label">Book Parking</span>
              </NavLink>
              <NavLink to="/" className="qa-card">
                <div className="qa-icon-wrap" style={{ background: "#FAEEDA" }}>
                  <FaCar style={{ color: "#854F0B" }} />
                </div>
                <span className="qa-label">My Vehicles</span>
              </NavLink>
              <NavLink to="/" className="qa-card">
                <div className="qa-icon-wrap" style={{ background: "#EAF3DE" }}>
                  <FaHistory style={{ color: "#3B6D11" }} />
                </div>
                <span className="qa-label">Parking History</span>
              </NavLink>
              <NavLink to="/" className="qa-card">
                <div className="qa-icon-wrap" style={{ background: "#EEEDFE" }}>
                  <FaCreditCard style={{ color: "#534AB7" }} />
                </div>
                <span className="qa-label">Payments</span>
              </NavLink>
            </div>
          </div>
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
}
export default UserHome;
