import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import LoginSignup from "./Components/loginsignup";
import ResetPassword from "./Components/resetpassword";
import UserHome from "./Components/userhome";
import MyBooking from "./Components/mybooking";
import PaymentScreen from "./Components/paymentscreen";
import AdminDashboard from "./Components/admindashboard";
import BookingForm from "./Components/bookingform";
import VehicalManagement from "./Components/vehicalmanagement";
import AddStaff from "./Components/addstaff";
import StaffManagement from "./Components/staffmanagement";
import SlotManagement from "./Components/slotmanagement";
import BillingManagement from "./Components/billingmanagement";
import AdminBooking from "./Components/adminbooking";
import PlanForm from "./Components/plan";
import ScrollToTop from "./Components/scroll-top";
import ProtectedRoute from "./Components/protectedroute";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        {/* Protected User Routes */}
        <Route
          path="/userhome"
          element={
            <ProtectedRoute>
              <UserHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookingform"
          element={
            <ProtectedRoute>
              <BookingForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mybooking"
          element={
            <ProtectedRoute>
              <MyBooking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/paymentscreen"
          element={
            <ProtectedRoute>
              <PaymentScreen />
            </ProtectedRoute>
          }
        />

        {/* Protected Admin Routes */}
        <Route
          path="/admindashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/vehicalmanagement"
          element={
            <ProtectedRoute>
              <VehicalManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/addstaff"
          element={
            <ProtectedRoute>
              <AddStaff />
            </ProtectedRoute>
          }
        />

        <Route
          path="/staffmanagement"
          element={
            <ProtectedRoute>
              <StaffManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/slotmanagement"
          element={
            <ProtectedRoute>
              <SlotManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/billingmanagement"
          element={
            <ProtectedRoute>
              <BillingManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/adminbooking"
          element={
            <ProtectedRoute>
              <AdminBooking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/plan"
          element={
            <ProtectedRoute>
              <PlanForm/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
