const Doctor = require('../models/doctor');
const Patient = require('../models/patients');
const Report = require('../models/report');
const jwt = require('jsonwebtoken');
const env = require('../config/environment');

module.exports.register =  async (req,res) => {
    try {
        let patient = await Patient.findOne({phone_no: req.body.phone_no});
        if(patient)
        {
            return res.status(400).json({
                message: 'Patient already registered!'
            });
        }
        patient = await Patient.create({
            phone_no: req.body.phone_no
        });
        return res.status(200).json({
            message: 'new patient created!'
        });
    } catch (err) {
        console.log("Error => ",err);
        return res.status(404).json({
            message: `Error is ${err}`
        });
    }
}

module.exports.createReport = async(req, res) => {
    try {
        if (req.headers && req.headers.authorization) {
            var authorization = req.headers.authorization.split(' ')[1];
            var decoded = jwt.verify(authorization, env.jwt_secret);
            var doctorId = decoded._id;
            var doctor = await Doctor.findOne({_id: doctorId});
            console.log(doctor);
            var patientId = req.params.id;
            var patient = await Patient.findOne({_id: patientId});
            console.log(patient);
            if(!doctor || !patient)
            {
                return res.status(420).json({
                    message: 'doctor or patient missing'
                });
            }
            var report = await Report.create({
                created_by: doctor._id,
                status: req.body.status,
                date: Date.now()
            });
            patient.reports.push(report);
            await patient.save();
            console.log(report);
            return res.status(200).json({
                message: 'Report created!'
            });
        }
        else{
            return res.status(404).json({
                message: 'unauthorized'
            });
        }
    } catch (err) {
        console.log("Error => ",err);
        return res.status(404).json({
            message: `Error is ${err}`
        });
    }
}

module.exports.allReports = async(req, res) => {
    try {
        let report = await Report.find({}).sort('-createdAt');
        return res.status(200).json({
            message: 'All Reports List',
            data: report
        });
    } catch (err) {
        console.log("Error => ", err);
        return res.status(401).json({
            message: 'Error is',err
        });
    }
}