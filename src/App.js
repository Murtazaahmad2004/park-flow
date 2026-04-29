import { LoginSignup } from './Components/loginsignup';
import ResetPassword from "./Components/reset-password";
import AvailableParking from "./Components/available-parking";
import ScrollToTop from "./Components/scroll-top";
import MyBookings from "./Components/my-bookings";
import Home from "./Components/home";
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
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;