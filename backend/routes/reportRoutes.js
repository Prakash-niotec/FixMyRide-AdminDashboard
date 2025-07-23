const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Get report summary
router.get('/summary', reportController.getReportSummary);

module.exports = router;
