const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctors_controller');

router.post('/register', doctorsController.registeration);
router.post('/login', doctorsController.login);

module.exports = router;