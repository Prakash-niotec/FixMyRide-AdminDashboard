const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/', userController.getAllUsers);

// Remove user (commented out)
// router.delete('/:id', userController.removeUser);

module.exports = router;
