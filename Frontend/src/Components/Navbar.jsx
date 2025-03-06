import React, { useState } from 'react';
import logo from '../assets/icons/Logo1.png'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <span >
            <img src= {logo} alt="" className='h-10' />
        </span>
      </div>

      <div className="hidden md:flex space-x-6">
        <a href="/" className="text-black hover:text-pink-500">Home</a>
        <a href="/resources" className="text-black hover:text-pink-500">Resources</a>
        <a href="/book-appointment" className="text-black hover:text-pink-500">Book An Appointment</a>
        
        <a href="/support" className="text-black hover:text-pink-500">Support</a>
      </div>

      <div className="flex items-center">
        <a 
          href="#" 
          className="bg-pink-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-pink-600 transition-colors"
        >
          Login/Register
          {/* <span className="ml-2">▶</span> */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;