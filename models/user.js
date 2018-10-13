'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  registerDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('users', UserSchema);