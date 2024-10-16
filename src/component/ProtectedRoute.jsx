import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if the "key" exists in localStorage (indicating authentication)
  if (localStorage.getItem("key")) {
    return children;  // Return the children if authenticated
  } else {
    return <Navigate to="/login" />;  // Navigate to login if not authenticated
  }
};

export default ProtectedRoute;