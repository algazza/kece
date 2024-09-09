import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    // belom login langsung ke "/login"
    return <Navigate to="/login" />;
  }

  // sudah login akan dikembalikan ke web
  return children;
};

export default ProtectedRoute;
