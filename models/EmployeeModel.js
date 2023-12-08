const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    employeename: {
        required: true,
        type: String
    },
    department: {
        required: true,
        type: String
    },
    destination: {
        required: true,
        type: String
    },
    salary: {
        required: true,
        type: Number
    }

})

module.exports = mongoose.model('employeedata', dataSchema)