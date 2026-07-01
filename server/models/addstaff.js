const mongoose = require("mongoose");

const AddStaffModel = new mongoose.Schema ({
    staffid: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    cnic: {
        type: Number,
        unique: true,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("addstaff", AddStaffModel);