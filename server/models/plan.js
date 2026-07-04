const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  planname: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },

  durationtype: {
    type: String,
    required: true,
  },

  features: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("plan", planSchema);