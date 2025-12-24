const express = require("express");
const router = express.Router(); 
const authMiddleware = require("../middlewares/authMiddleware");

const {
    punchIn,
    punchOut,
    getAttendance
} = require("../controllers/attendanceController");

router.post("/punch-in",authMiddleware, punchIn);
router.put("/punch-out/:id",authMiddleware, punchOut);
router.get("/:employeeId",authMiddleware, getAttendance);

module.exports = router;
