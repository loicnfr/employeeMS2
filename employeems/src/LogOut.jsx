import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const LogOut = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    // Simulate a logout action by setting isLoggedOut to true after component mounts
    setIsLoggedOut(true);
  }, []);

  // Redirect to the dashboard if logged out, otherwise show nothing
  return isLoggedOut ? <Navigate to="/employeems/src/Login.jsx /> : null;
};

export default LogOut;
