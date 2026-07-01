import React from 'react';
import Home from "./Components/home";
import LoginSignup from './Components/loginsignup';
import ResetPassword from "./Components/resetpassword";
import UserHome from './Components/userhome';
import MyBooking from './Components/mybooking';
import PaymentScreen from './Components/paymentscreen';
import AdminDashboard from './Components/admindashboard';
import BookingForm from "./Components/bookingform";
import VehicalManagement from "./Components/vehicalmanagement";
import AddStaff from "./Components/addstaff";
import StaffManagement from "./Components/staffmanagement";
import SlotManagement from "./Components/slotmanagement";
import BillingManagement from "./Components/billingmanagement";
import ScrollToTop from "./Components/scroll-top";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/bookingform" element={<BookingForm/>} />
        <Route path="/userhome" element={<UserHome/>} />
        <Route path="/mybooking" element={<MyBooking/>} />
        <Route path="/paymentscreen" element={<PaymentScreen/>} />
        <Route path="/admindashboard" element={<AdminDashboard/>} />
        <Route path="/vehicalmanagement" element={<VehicalManagement/>} />
        <Route path="/addstaff" element={<AddStaff/>} />
        <Route path="/staffmanagement" element={<StaffManagement/>} />
        <Route path="/slotmanagement" element={<SlotManagement/>} />
        <Route path="/billingmanagement" element={<BillingManagement/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;