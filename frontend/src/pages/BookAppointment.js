import React, { useState } from 'react';
import axios from 'axios';

export default function BookAppointment() {
  const [form, setForm] = useState({
    student: '',
    teacher: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form:', form);
    
    try {
      const res = await axios.post('/api/appointments/book', form);
      alert('Appointment Booked!');
      console.log(res.data);
    } catch (err) {
      alert('Error booking appointment');
      console.error(err);
    }
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', width: '300px' }}>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
            <input
  name="student"
  placeholder="Student ID"
  value={form.student}
  onChange={handleChange}
  style={{ padding: '10px', margin: '5px 0', border: '1px solid #ccc', color: '#000' }}
/><br />

<input
  name="teacher"
  placeholder="Teacher ID"
  value={form.teacher}
  onChange={handleChange}
  style={{ padding: '10px', margin: '5px 0', border: '1px solid #ccc', color: '#000' }}
/><br />

<input
  type="date"
  name="date"
  value={form.date}
  onChange={handleChange}
  style={{ padding: '10px', margin: '5px 0', border: '1px solid #ccc', color: '#000' }}
/><br />

<input
  name="time"
  placeholder="Time Slot"
  value={form.time}
  onChange={handleChange}
  style={{ padding: '10px', margin: '5px 0', border: '1px solid #ccc', color: '#000' }}
/><br />

        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'Black', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Book</button>
      </form>
    </div>
  );
}
