// Request controller for admin backend
const Request = require('../models/Request');

// Get all requests
exports.getAllRequests = async (req, res) => {
  try {
    const type = req.query.type;
    let requests;
    if (type) {
      requests = await Request.find({ type });
    } else {
      requests = await Request.find();
    }
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch requests' });
  }
};

// Remove request (commented out to avoid affecting mobile app)
// exports.removeRequest = async (req, res) => {
//   try {
//     await Request.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Request removed' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to remove request' });
//   }
// };
