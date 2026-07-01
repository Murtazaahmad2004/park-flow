const mongoose = require("mongoose");

const LoginHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "signup",
  },
  name: String,
  email: String,
  role: String,
  loginTime: {
    type: Date,
    default: Date.now,
  },
  status: String,
});

module.exports = mongoose.model("loginhistory", LoginHistorySchema);
