const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
    createEmployee,
    getEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
} = require("../controllers/employeeController");

router.post("/",authMiddleware, createEmployee);
router.get("/", authMiddleware,getEmployees);
router.get("/:id",authMiddleware, getEmployee);
router.put("/:id",authMiddleware, updateEmployee);
router.delete("/:id",authMiddleware, deleteEmployee);

module.exports = router;
