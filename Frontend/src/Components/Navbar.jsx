import React, { useState, useEffect } from 'react';
import logo from '../assets/icons/Logo1.png';
import { Link } from 'react-router-dom';  // for navigation if using react-router
import { FaUserCircle } from 'react-icons/fa'; // For Profile Icon

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    // Check if the user has a token in localStorage (you can use sessionStorage as well)
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Runs once on component mount

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <span>
          <img src={logo} alt="Logo" className="h-10" />
        </span>
      </div>

      <div className="hidden md:flex space-x-6">
        <a href="/" className="text-black hover:text-pink-500">Home</a>
        <a href="/resources" className="text-black hover:text-pink-500">Resources</a>
        <a href="/book-appointment" className="text-black hover:text-pink-500">Book An Appointment</a>
        <a href="/support" className="text-black hover:text-pink-500">Support</a>
      </div>

      <div className="flex items-center">
        {/* Conditional rendering based on login status */}
        {isLoggedIn ? (
          <Link to="/profile" className="text-black hover:text-pink-500">
            <FaUserCircle className="text-2xl" /> {/* Profile icon */}
          </Link>
        ) : (
          <a 
            href="/register" 
            className="bg-pink-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-pink-600 transition-colors"
          >
            Login/Register
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
