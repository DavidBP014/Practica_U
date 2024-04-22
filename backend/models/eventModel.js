// backend/models/eventModel.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name for the event'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  date: {
    type: Date,
    required: [true, 'Please specify the date of the event']
  },
  location: {
    type: String,
    required: [true, 'Please specify the location']
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date
  }
});

module.exports = mongoose.model('Event', eventSchema);
