import LoginSignup from './Components/loginsignup';
import ResetPassword from "./Components/reset-password";
import AvailableParking from "./Components/available-parking";
import ScrollToTop from "./Components/scroll-top";
import Home from "./Components/home";
import UserHome from './Components/userhome';
import MyBooking from './Components/my-booking';
import PaymentScreen from './Components/payment-screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/available-parking" element={<AvailableParking />} />
        <Route path="/userhome" element={<UserHome/>} />
        <Route path="/my-booking" element={<MyBooking/>} />
        <Route path="/payment-screen" element={<PaymentScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;