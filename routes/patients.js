const express = require('express');
const passport = require('passport');
const router = express.Router();
const patientsController = require('../controllers/patients_controller');

router.get('/register', passport.authenticate('jwt', {session: false}), patientsController.register);
router.get('/:id/create_report', passport.authenticate('jwt', {session: false}), patientsController.createReport);
router.get('/:id/all_reports', passport.authenticate('jwt', {session: false}), patientsController.allReports);

module.exports = router;