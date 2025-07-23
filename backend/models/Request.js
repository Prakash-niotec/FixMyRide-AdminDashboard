// Request model for admin backend
const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  type: String, // 'fuel', 'garage', 'booking', etc.
  district: String,
  status: String,
  createdAt: Date,
  completedAt: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Request', requestSchema);
