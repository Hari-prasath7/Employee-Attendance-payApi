const express = require("express");
const router = express.Router();

const {
    getPayroll
} = require("../controllers/payrollController");

router.get("/:employeeId", getPayroll);

module.exports = router;
