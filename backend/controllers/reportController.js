// Report controller for admin backend
const Request = require('../models/Request');

// Get summary report data
exports.getReportSummary = async (req, res) => {
  try {
    // Example: count requests by type
    const summary = await Request.aggregate([
      { $group: { _id: '$type', count: { $sum: 1 } } }
    ]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch report summary' });
  }
};
