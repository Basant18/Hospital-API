const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');
const env = require('../config/environment');

module.exports.registeration = async (req, res) =>{
    try {
        if(req.body.password !== req.body.confirm_password)
        {
            return res.status(401).json({
                message: 'password and confirm password dont match'
            });
        }
        let doctor = await Doctor.findOne({username: req.body.name});
        if(doctor)
        {
            return res.status(401).json({
                message: 'username already registered'
            });
        }
        doctor = await Doctor.create({
            username: req.body.name,
            password: req.body.password
        });
        return res.status(200).json({
            message: 'Doctor stored in db'
        });
    } catch (err) {
        console.log("Error => ",err);
        return res.status(404).json({
            message: `Error is => ${err}`
        });
    }
}

module.exports.login = async(req, res) => {
    try {
        let doctor = await Doctor.findOne({username: req.body.name});
        console.log(doctor);
        if(!doctor || doctor.password != req.body.password)
        {
            return res.status(422).json({
                message: 'Invalid Username and Password'
            });
        }
        return res.status(200).json({
            message: 'Login Successful! Here is your token. Keep it safe!',
            data: {
                token: jwt.sign(doctor.toJSON(), env.jwt_secret, {expiresIn: '6000000'})
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: `Error is => ${err}`
        });
    }
}