// User controller for admin backend
// const jwt = require('jsonwebtoken'); // Uncomment for admin auth
const User = require('../models/User');

// Get all users (customers and providers)
exports.getAllUsers = async (req, res) => {
  try {
    const type = req.query.type;
    let users;
    if (type === 'customers') {
      users = await User.find({ role: 'customer' });
    } else if (type === 'providers') {
      users = await User.find({ role: 'provider' });
    } else {
      users = await User.find();
    }
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Remove user (commented out to avoid affecting mobile app)
// exports.removeUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.json({ message: 'User removed' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to remove user' });
//   }
// };
