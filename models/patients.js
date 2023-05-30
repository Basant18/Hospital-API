const mongoose = require('mongoose');

const patientsSchema = new mongoose.Schema({
    phone_no:{
        type: 'String',
        require: true
    },
    reports:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Report'
        }
    ]
},{
    timestamps: true
});

const Patient = mongoose.model('Patient', patientsSchema);
module.exports = Patient;