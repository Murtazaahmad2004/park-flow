const mongoose = require("mongoose");

const LoginHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "signup",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  loginTime: {
    type: Date,
    default: Date.now,
  },
  status: String,
});

module.exports = mongoose.model("loginhistory", LoginHistorySchema);
