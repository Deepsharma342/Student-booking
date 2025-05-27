import React, { useEffect, useState } from 'react';
import './App.css';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BookAppointment from './pages/BookAppointment';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import Navbar from './components/navbar';
import backgroundImage from './images/bg.png';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

import { auth } from './firebase';
import PhotoGallery from './components/PhotoGallery';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/student" element={<PhotoGallery />} />
            <Route path="/teacher" element={<PhotoGallery />} />
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          </>
        ) : (
          <>
            <Route
              path="*"
              element={
                <div className="relative min-h-screen text-white">
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                  ></div>
                  <div className="relative z-10 bg-black bg-opacity-60 min-h-screen">
                    <Navbar />
                    <div className="bg-red-500 text-white p-4 text-xl text-center">
                      Students are advised to check their emails regularly otherwise they will be responsible for any inconvenience.
                    </div>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/book" element={<BookAppointment />} />
                      <Route path="/student-dashboard" element={<StudentDashboard />} />
                      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
                      <Route path="/login" element={<Navigate to="/" />} />
                      <Route path="/book" element={<BookAppointment />} />
                    </Routes>
                  </div>
                </div>
              }
            />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
