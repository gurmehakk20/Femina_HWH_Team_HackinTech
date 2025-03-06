import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Calendar, Clock, Ambulance } from 'lucide-react';
import Button from '../Components/Button'

const AmbulanceBooking = () => {
  const [form, setForm] = useState({
    patientName: '',
    contactNumber: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = async () => {
    alert('Booking Confirmed! Ambulance on the way 🚑');
  };

  return (
    <div className="min-h-screen bg-[#fff0f5] flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-lg p-10 rounded-2xl max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-[#ff4d94] text-center mb-8">Book an Ambulance</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#ff4d94]">Patient Name</label>
            <input
              type="text"
              name="patientName"
              placeholder="Enter Patient Name"
              className="w-full p-3 border rounded-lg focus:outline-[#ff4d94]"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-[#ff4d94]">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              placeholder="Enter Contact Number"
              className="w-full p-3 border rounded-lg focus:outline-[#ff4d94]"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-[#ff4d94]">Pickup Location</label>
            <input
              type="text"
              name="pickup"
              placeholder="Enter Pickup Location"
              className="w-full p-3 border rounded-lg focus:outline-[#ff4d94]"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-[#ff4d94]">Drop Location</label>
            <input
              type="text"
              name="drop"
              placeholder="Enter Drop Location"
              className="w-full p-3 border rounded-lg focus:outline-[#ff4d94]"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-[#ff4d94]">Date</label>
            <input
              type="date"
              name="date"
              className="w-full p-3 border rounded-lg focus:outline-[#ff4d94]"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-[#ff4d94]">Time</label>
            <input
              type="time"
              name="time"
              className="w-full p-3 border rounded-lg focus:outline-[#ff4d94]"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <label className="block text-[#ff4d94]">Additional Notes</label>
            <textarea
              name="notes"
              placeholder="Any additional instructions..."
              className="w-full p-3 border rounded-lg focus:outline-[#ff4d94]"
              rows="3"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="text-center mt-8">
          <Button className="bg-[#ff4d94] hover:bg-[#ff3377] text-white px-8 py-3 rounded-lg" onClick={handleBooking}>
            Confirm Booking
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default AmbulanceBooking;