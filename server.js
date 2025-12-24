const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");

dotenv.config();
const app = express(); 

// middleWare
app.use(cors());
app.use(express.json());

// Database
connectDB(); 

const authRoutes = require("./src/routes/authRoutes");
app.use("/api/auth", authRoutes);

// Routes
app.use("/api/employees", require("./src/routes/employeeRoutes"));
app.use("/api/attendance", require("./src/routes/attendanceRoutes"));
app.use("/api/payroll", require("./src/routes/payrollRoutes"));

// Default Route
app.get("/", (req, res) => {
    res.send("Employee Attendance & Payroll API running");
});

// Error Handler
const errorHandler = require("./src/middlewares/errorHandler");
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
