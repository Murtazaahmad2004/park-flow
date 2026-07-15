const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
    slot: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ["available", "booked"],
        default: "available",
    },
});

module.exports = mongoose.model("slot", slotSchema);