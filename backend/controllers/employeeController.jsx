const Employee = require('../models/employeeModel');

exports.createEmployee = async (req, res) => {
    try {
        const { name, email, contact, gender, department, designation, specialization, tools, supervisorName, product, maritalStatus, dependents } = req.body;
        const newEmployee = new Employee({
            name, email, contact, gender, department, designation, specialization, tools, supervisorName, product, maritalStatus, dependents
        });
        await newEmployee.save();
        res.status(201).json({ message: 'Employee created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
