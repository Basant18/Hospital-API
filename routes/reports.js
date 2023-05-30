const express = require('express');
const router = express.Router();
const ReportsController = require('../controllers/reports_controller');

router.get('/:status', ReportsController.statusReports);

module.exports = router;