// models/doctorModel.js
const mongoose = require('mongoose');

const availableSlotSchema = new mongoose.Schema({
  day: { type: String, required: true },
  times: [{ type: String, required: true }]
});

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: String, required: true },
  rating: { type: Number, required: true },
  profilePic: { type: String, required: true },
  availableSlots: [availableSlotSchema]
});

module.exports = mongoose.model('Doctor', doctorSchema);
