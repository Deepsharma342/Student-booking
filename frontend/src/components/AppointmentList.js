import React, { useState } from 'react';
import axios from 'axios';

export default function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/appointments');
      setAppointments(res.data);
    } catch (err) {
      console.error("Failed to fetch appointments", err);
      alert("Failed to load appointments");
    }
    setLoading(false);
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', width: '80%', margin: 'auto' }}>
      <h2>📅 All Booked Appointments</h2>
      <button 
        onClick={fetchAppointments}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '10px',
          cursor: 'pointer'
        }}
      >
        Load Appointments
      </button>

      {loading && <p>Loading...</p>}

      {appointments.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {appointments.map((appt, index) => (
            <li key={index} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
              <strong>Student:</strong> {appt.student} <br />
              <strong>Teacher:</strong> {appt.teacher} <br />
              <strong>Date:</strong> {appt.date} <br />
              <strong>Time:</strong> {appt.time}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No appointments yet.</p>
      )}
    </div>
  );
}
