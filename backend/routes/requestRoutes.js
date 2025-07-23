const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');

// Get all requests
router.get('/', requestController.getAllRequests);

// Remove request (commented out)
// router.delete('/:id', requestController.removeRequest);

module.exports = router;
