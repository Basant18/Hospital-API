const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        require: true
    },
    status:{
        type: String,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
        require: true
    },
    date:{
        type: Date,
        require: true
    }
},{
    timestamps: true
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;