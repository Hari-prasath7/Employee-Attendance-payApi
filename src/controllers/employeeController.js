const Employee = require("../models/Employee");

exports.createEmployee = async (req, res, next) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (err) {
        next(err);
    }
};

exports.getEmployees = async (req, res, next) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        next(err);
    }
};

exports.getEmployee = async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.json(employee);
    } catch (err) {
        next(err);
    }
};

exports.updateEmployee = async (req, res, next) => {
    try {
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(employee);
    } catch (err) {
        next(err);
    }
};

exports.deleteEmployee = async (req, res, next) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: "Employee Deleted" });
    } catch (err) {
        next(err);
    }
};
