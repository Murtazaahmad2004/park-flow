import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    return <Navigate to="/loginsignup" replace />;
  }

  return children;
};

export default ProtectedRoute;