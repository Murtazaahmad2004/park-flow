const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
    slot: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model("slot", slotSchema);