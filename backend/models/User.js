// User model for admin backend
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  status: String,
  role: String // 'customer' or 'provider'
});

module.exports = mongoose.model('User', userSchema);
