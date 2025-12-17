const Employee = require("../models/Employee");
const Attendance = require("../models/Attendance");

exports.getPayroll = async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);
        const attendance = await Attendance.find({
            employeeId: req.params.employeeId
        });

        const totalDays = attendance.length;
        const salary = totalDays * employee.salaryPerDay;

        res.json({
            employee: employee.name,
            presentDays: totalDays,
            salary: salary
        });
    } catch (err) {
        next(err);
    }
};
