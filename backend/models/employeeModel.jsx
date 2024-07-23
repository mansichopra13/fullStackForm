const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    gender: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    specialization: { type: String, required: true },
    tools: { type: String, required: true },
    supervisorName: { type: String, required: true },
    product: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    dependents: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);
