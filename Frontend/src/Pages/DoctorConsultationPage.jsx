import React, { useState } from 'react';
import { Camera, Video, MessageCircle, Clock, StarIcon } from 'lucide-react';
import {doctor1, doctor2, doctor3} from '../assets/images/index'

const DoctorConsultationPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedConsultationType, setSelectedConsultationType] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const doctors = [
    {
      id: 1,
      name: 'Dr. Emily Rodriguez',
      specialization: 'Cardiology',
      experience: '12 years',
      rating: 4.8,
      profilePic: doctor1,
      availableSlots: [
        { day: 'Monday', times: ['10:00 AM', '11:30 AM', '2:00 PM'] },
        { day: 'Wednesday', times: ['9:00 AM', '1:00 PM', '3:30 PM'] }
      ]
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialization: 'Neurology',
      experience: '15 years',
      rating: 4.9,
      profilePic: doctor2,
      availableSlots: [
        { day: 'Tuesday', times: ['11:00 AM', '12:30 PM', '4:00 PM'] },
        { day: 'Thursday', times: ['10:00 AM', '2:00 PM', '5:30 PM'] }
      ]
    },
    {
      id: 3,
      name: 'Dr. Sarah Kim',
      specialization: 'Pediatrics',
      experience: '10 years',
      rating: 4.7,
      profilePic: doctor3,
      availableSlots: [
        { day: 'Friday', times: ['9:00 AM', '11:00 AM', '3:00 PM'] },
        { day: 'Saturday', times: ['10:00 AM', '1:00 PM', '4:30 PM'] }
      ]
    }
  ];

  const consultationTypes = [
    { 
      type: 'Video Call', 
      icon: <Video color="#ff4d94" size={32} />,
      description: 'Consult with doctor via video call'
    },
    { 
      type: 'Chat Consultation', 
      icon: <MessageCircle color="#ff4d94" size={32} />,
      description: 'Get medical advice through chat'
    }
  ];

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setSelectedConsultationType(null);
    setSelectedTimeSlot(null);
  };

  const handleConsultationTypeSelect = (type) => {
    setSelectedConsultationType(type);
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotSelect = (time) => {
    setSelectedTimeSlot(time);
  };

  return (
    <div className="min-h-screen bg-[#ffe0ec] p-8 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-[#fff0f5] shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#ff4d94]">
          Medical Consultation
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {doctors.map((doctor) => (
            <div 
              key={doctor.id}
              onClick={() => handleDoctorSelect(doctor)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedDoctor?.id === doctor.id ? 'bg-[#ff4d94] text-white shadow-xl' : 'bg-white hover:bg-[#ffd6e0]'}`}
            >
              <div className="flex flex-col items-center">
                <img src={doctor.profilePic} alt={doctor.name} className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-[#ff4d94]" />
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <div className="flex items-center mb-2">
                  <StarIcon className="mr-2" size={20} fill="#ffd700" color="#ffd700" />
                  <span>{doctor.rating}</span>
                </div>
                <p>{doctor.specialization}</p>
                <p className="text-sm">Experience: {doctor.experience}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedDoctor && (
          <div className="animate-fade-in mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-[#ff4d94]">Select Consultation Type</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {consultationTypes.map((type) => (
                <div 
                  key={type.type} 
                  onClick={() => handleConsultationTypeSelect(type)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedConsultationType?.type === type.type ? 'bg-[#ff4d94] text-white' : 'bg-white hover:bg-[#ffd6e0]'}`}
                >
                  <div className="flex items-center mb-4">{type.icon}<span className="ml-4 text-xl font-semibold">{type.type}</span></div>
                  <p>{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedConsultationType && (
          <div className="animate-slide-up">
            <h2 className="text-2xl font-semibold mb-6 text-[#ff4d94]">Choose Time Slot</h2>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              {selectedDoctor.availableSlots.map((slot) => (
                <div key={slot.day} className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">{slot.day}</h3>
                  <div className="flex flex-wrap gap-3">
                    {slot.times.map((time) => (
                      <button 
                        key={time}
                        onClick={() => handleTimeSlotSelect(time)}
                        className={`px-6 py-2 rounded-lg transition-all duration-300 transform ${selectedTimeSlot === time ? 'bg-[#ff4d94] text-white' : 'bg-[#ffd6e0] hover:bg-[#ff4d94] hover:text-white'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTimeSlot && (
          <div className="mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6 text-[#ff4d94]">Payment Details</h2>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <input type="text" placeholder="Card Number" className="w-full mb-4 p-3 border border-[#ffd6e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d94]" />
              <input type="text" placeholder="Cardholder Name" className="w-full mb-4 p-3 border border-[#ffd6e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff4d94]" />
              <button className="w-full py-3 bg-[#ff4d94] text-white rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#ffd6e0]">Proceed to Payment</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorConsultationPage;
