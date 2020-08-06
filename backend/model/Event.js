const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [ true, 'First name required' ]
  },
  lastName: {
    type: String,
    required: [ true, 'Last name required' ]
  },
  email: {
    type: String,
    trim: true,
    required: true,
    validate: {
      validator: (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      },
      message: "Please enter a valid email"
    },
    required: [ true, "Email required" ]
  },
  date: {
    type: Date,
    required: [ true, "Date required" ]
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;