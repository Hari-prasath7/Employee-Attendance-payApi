const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
    getPayroll
} = require("../controllers/payrollController");

router.get("/:employeeId", authMiddleware,getPayroll);

module.exports = router;
