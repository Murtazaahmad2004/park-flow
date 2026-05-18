import { FaCalendarCheck, FaParking, FaSignOutAlt } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md'
import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { LineChart, XAxis, YAxis, Line, Tooltip, Cell, BarChart, Bar} from 'recharts'
import "./styling/userhome.css";

const UserHome = () => {
// PAGE TITLE
useEffect(() => {
document.title = "User DashBoard";
}, []);

// SCROLL TOP
const scrollToTop = () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
};

// Graphs
  const linedata = [
    {name: 'Total Parking Slots', value: 50},
    {name: 'Free Parking Slots', value: 15},
    {name: 'Booked Parking Slots', value: 35},
  ]

  const bardata = [
    {name: 'Sunday', value: '6'},
    {name: 'Monday', value: '4'},
    {name: 'Tuesday', value: '2'},
    {name: 'Wednesday', value: '3'},
    {name: 'Thursday', value: '5'},
    {name: 'Friday', value: '2'},
    {name: 'Saturday', value: '4'},
  ]

return (
<>
{/* HEADER AND NAVIGATION */}
<div className="user-home-header">
   <div className="nav-bar">
      {/* LOGO */}
      <div className="logo">
         <NavLink
            to="/"
            className="logo-link"
            onClick={scrollToTop}
            >
            <img src="/logo.png" alt="Logo" />
         </NavLink>
      </div>
      {/* TITLE */}
      <h1>ParkFlow</h1>
    
   </div>
</div>

{/* sidebar */}
<div className="side-bar">
  <div className="side-bar-container">
    <div className="side-bar-links">
      {/* NAVIGATION */}
      <ul className="user-nav-links">
        <NavLink
            to="#"
            className="user-nav-item"
            >
            <li>
               <MdDashboard className="icon" />
               DashBoard
            </li>
         </NavLink>
         <NavLink
            to="/available-parking"
            className="user-nav-item"
            >
            <li>
               <FaParking className="icon" />
               Book Parking
            </li>
         </NavLink>
         <NavLink
            to="/my-booking"
            className="user-nav-item"
            >
            <li>
               <FaCalendarCheck className="icon" />
               My Booking
            </li>
         </NavLink>
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
      </ul>
    </div>
  </div>
</div>

{/* DASHBOARD */}
<div className="main-dashboard">
  <div className="dashboard-container">
    <div className="dashboard-cards">
      <div className="total-parking-cards">
        <ul>
          <li>Total Parking Slots</li>
          <li>50</li>
        </ul>
      </div>

      <div className="booked-parking-cards">
        <ul>
          <li>Booked Parking Slots</li>
          <li>12</li>
        </ul>
      </div>

      <div className="free-parking-cards">
        <ul>
          <li>Free Parking Slots</li>
          <li>38</li>
        </ul>
      </div>

    </div>
  </div>

{/* GRAPHS SECTION */}
<div className="graphs-section">

  {/* LINE CARD */}
  <div className="chart-card">
    <h3>Rate of Parking Spots</h3>
    <LineChart width={500} height={300} data={linedata}>
      <XAxis dataKey="name" />
      <YAxis domain={[0,50]} />
      <Line dataKey="value" fill="red" />
    </LineChart>
  </div>

  {/* BAR CARD */}
  <div className="chart-card">
    <h3>Parking Duration</h3>
    <BarChart width={600} height={300} data={bardata}>
      <XAxis dataKey="name" />
        <YAxis 
          domain={[0,6]} 
          tickFormatter={(value)=> `${value}h`}
        />
        <Tooltip formatter={(value)=> `${value}h`} />
      <Bar dataKey="value">
        {bardata.map((entry, index)=>(
          <Cell
            key={`cell-${index}`}
            fill={[
              "#FF4456",
              "#CC45FF",
              "#CFF098",
              "#705d5d",
              "#00BCD4",
              "#33B5FF",
            ][index % 7]}
          />
        ))}
      </Bar>
    </BarChart>
  </div>
</div>
  
</div>
</>
);
};
export default UserHome;