import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Navbar = () => {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <nav className="bg-white shadow p-4 flex space-x-4 justify-center">
      <Link to="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Home
        </button>
      </Link>
      <Link to="/book">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Book Appointment
        </button>
      </Link>
      <Link to="/student">
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          Student Dashboard
        </button>
      </Link>
      <Link to="/teacher">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Teacher Dashboard
        </button>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
