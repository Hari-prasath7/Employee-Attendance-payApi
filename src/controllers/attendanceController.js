const Attendance = require("../models/Attendance");

exports.punchIn = async (req, res, next) => {
    try {
        const attendance = await Attendance.create(req.body);
        res.status(201).json(attendance);
    } catch (err) {
        next(err);
    }
};

exports.punchOut = async (req, res, next) => {
    try {
        const attendance = await Attendance.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(attendance);
    } catch (err) {
        next(err);
    }
};

exports.getAttendance = async (req, res, next) => {
    try {
        const records = await Attendance.find({
            employeeId: req.params.employeeId
        });
        res.json(records);
    } catch (err) {
        next(err);
    }
};
