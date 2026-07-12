const mongoose = require("mongoose");

const LoginHistorySchema = new mongoose.Schema({
  userid: {
    type: String,
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
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  loginTime: {
    type: String,
  },
  status: String,
});

module.exports = mongoose.model("loginhistory", LoginHistorySchema);
