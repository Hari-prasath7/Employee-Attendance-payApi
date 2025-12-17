const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    date: { type: Date, default: Date.now },
    status: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Attendance", attendanceSchema);
