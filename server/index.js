const express = require("express"); // Express ek framework hai jo server banana bahut aasaan kar deta hai.
const mongoose = require("mongoose"); // Ye MongoDB ko use karne ke liye hai Mongoose ek bridge hai.
const cors = require("cors"); // Frontend ko backend se request bhejne ki permission hai
const SignupModel = require("./models/signup");
const LoginHistory = require("./models/loginhistory");

const app = express(); //Express ko use karke application banai ja rahi hai.
app.use(express.json()); // Frontend say data JSON format ma send krna
app.use(cors()); // Request aur Response ke beech chalne wala function.

mongoose.connect("mongodb://localhost:27017/parkflow");

// ==================== Routes ====================
// ---------- SIGN UP ----------
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        status: "Please fill all fields",
      });
    }

    const existingUser = await SignupModel.findOne({ email });

    if (existingUser) {
      return res.json({
        status: "Email already exists",
      });
    }

    const user = await SignupModel.create({
      name,
      email,
      password,
    });

    res.json({
      status: "Success",
      user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------- LOGIN ----------
// async function ka use kiya gaya hai kyunki database se data fetch karna time-consuming ho 
// sakta hai aur hum chahte hain ki server is process ke complete hone tak wait kare.

app.post("/login", async (req, res) => { 
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        status: "Please fill all fields",
      });
    }

    const user = await SignupModel.findOne({ email });

    if (!user) {
      return res.json({
        status: "User not found",
      });
    }

    if (user.password !== password) {
      return res.json({
        status: "Incorrect Password",
      });
    }

    // ---------- LOGIN HISTORY ----------
    await LoginHistory.create({
      userId: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: "Success",
    });

    res.json({
      status: "Success",
      role: user.role,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------- BOOKING FORM ----------
app.post("/booking", async (req, res) => {
  try {
    const {
      userid,
      bookingid,
      name,
      email,
      cnic,
      vehiclenumber,
      vehicletype,
      slot,
      plan,
      price,
      bookingday,
      bookingdate,
      enddate,
      bookingtime,
      endtime,
      duration,
    } = req.body;

    const booking = await BookingModel.create({
      userid,
      bookingid,
      name,
      email,
      cnic,
      vehiclenumber,
      vehicletype,
      slot,
      plan,
      price,
      bookingday,
      bookingdate,
      enddate,
      bookingtime,
      endtime,
      duration,
    });
    res.json({
      status: "Success",
      booking,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
