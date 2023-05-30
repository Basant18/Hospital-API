const Report = require('../models/report');

module.exports.statusReports = async(req, res) => {
    try {
        let reports = await Report.find({status: req.params.status});
        return res.status(200).json({
            message: 'Report List by status',
            data: reports
        });
    } catch (err) {
        console.log("Error is => ", err);
        return res.status(401).json({
            message: `Error is ${err}`
        });
    }
}