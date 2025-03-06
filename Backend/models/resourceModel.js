const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: true,
  },
  fullContent: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('Resource', resourceSchema);