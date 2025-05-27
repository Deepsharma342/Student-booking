import React from 'react';
import { Link } from 'react-router-dom';
import PhotoGallery from '../components/PhotoGallery';

export default function StudentDashboard() {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <Link to="/book">Book Appointment</Link><br />
      <Link to="/my-appointments">My Appointments</Link>
      <PhotoGallery />
    </div>
  );
}
