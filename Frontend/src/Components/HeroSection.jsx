import React from 'react';
import { Link } from 'react-router-dom';
import warrior from '../assets/icons/warrior.png';
import { person1, person2, person3, person4, person5 } from '../assets/icons/index';

const HeroSection = () => {
  return (
    <div className="bg-[#F9F0F3] text-center py-1 px-4 relative h-500">
      <div className="bg-pink-500 text-white p-3 rounded-lg m-10 h-150">
        <div className="text-center py-10 px-5">
          <h1 className="text-4xl font-bold mb-5">YOUR HEALTH OUR PRIORITY</h1>
          <div className="flex flex-col items-center mb-7">
            <p className="mb-2">We Have A Dedicated Team Of Experts</p>
            <div className="flex mb-2">
              <img src={person1} alt="Team Member 1" className="w-8 h-8 rounded-full mx-1" />
              <img src={person2} alt="Team Member 2" className="w-8 h-8 rounded-full mx-1" />
              <img src={person3} alt="Team Member 3" className="w-8 h-8 rounded-full mx-1" />
              <img src={person4} alt="Team Member 4" className="w-8 h-8 rounded-full mx-1" />
              <img src={person5} alt="Team Member 5" className="w-8 h-8 rounded-full mx-1" />
            </div>
            <div className="flex items-center justify-center">
              <span className="text-yellow-500 text-xl mr-1">⭐</span>
              <span className="text-yellow-500 text-xl mr-1">⭐</span>
              <span className="text-yellow-500 text-xl mr-1">⭐</span>
              <span className="text-yellow-500 text-xl mr-1">⭐</span>
              <span className="text-yellow-500 text-xl mr-2">⭐</span>
              <span className="text-lg">4572 Users</span>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex justify-between mb-8">
            <Link to="/ambulance">
              <button className="bg-white text-black rounded-full px-4 py-2 flex items-center transition-all duration-200 hover:bg-pink-200 focus:bg-pink-600">
                <span>Book An Ambulance</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
            <Link to="/book-appointment">
              <button className="bg-white text-black rounded-full px-4 py-2 flex items-center transition-all duration-200 hover:bg-pink-200 focus:bg-pink-600">
                <span>Book An Appointment</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>

          <div className="flex justify-between items-center mb-8 relative">
            <Link to="/cycle-tracker">
              <button className="bg-white text-black rounded-full px-4 py-2 flex items-center transition-all duration-200 hover:bg-pink-200 focus:bg-pink-600">
                <span>Track Your Cycle</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>

            {/* Warrior Image - Positioned higher */}
            <div
              className="w-64 h-96 bg-cover bg-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4"
              style={{ backgroundImage: `url(${warrior})` }}
            ></div>

            <Link to="/health-tracker">
              <button className="bg-white text-black rounded-full px-4 py-2 flex items-center transition-all duration-200 hover:bg-pink-200 focus:bg-pink-600">
                <span>Track Your Health</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>

          <div className="bg-[#A1715C] rounded-lg p-6 flex justify-between">
            <div className="text-center">
              <h2 className="text-4xl font-bold">21k+</h2>
              <p className="text-sm">Daily Users</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">42k+</h2>
              <p className="text-sm">Monthly Users</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">3k+</h2>
              <p className="text-sm">Experts</p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">78k+</h2>
              <p className="text-sm">Downloads</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
