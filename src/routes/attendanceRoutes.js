const express = require("express");
const router = express.Router();

const {
    punchIn,
    punchOut,
    getAttendance
} = require("../controllers/attendanceController");

router.post("/punch-in", punchIn);
router.put("/punch-out/:id", punchOut);
router.get("/:employeeId", getAttendance);

module.exports = router;
