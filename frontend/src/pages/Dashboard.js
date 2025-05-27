// src/pages/Dashboard.js
import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AppointmentsList from '../components/AppointmentsList';

function StudentDashboard() {
  return (
    <div>
      <h1>Welcome to Student Dashboard</h1>
      <AppointmentsList />
    </div>
  );
}


function Dashboard() {
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged in:", user.email);
      } else {
        console.log("Redirecting to login...");
        // Optionally redirect to login
      }
    });
  }, []);

  return <h2>Dashboard</h2>;
}

export default Dashboard;
