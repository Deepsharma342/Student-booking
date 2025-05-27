import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PhotoGallery from '../components/PhotoGallery';

export default function TeacherDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Replace with actual teacher ID logic (e.g., from login)
    axios.get('http://localhost:5000/api/appointments/teacher/1')
      .then(res => setAppointments(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Teacher Appointments</h2>
      <ul>
        {appointments.map((appt, idx) => (
          <li key={idx}>
            Student ID: {appt.student_id}, Date: {appt.date}, Time: {appt.time}
          </li>
        ))}
      </ul>
      <PhotoGallery />
    </div>
  );
}
