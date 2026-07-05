const express = require("express"); // Express ek framework hai jo server banana bahut aasaan kar deta hai.
const mongoose = require("mongoose"); // Ye MongoDB ko use karne ke liye hai Mongoose ek bridge hai.
const cors = require("cors"); // Frontend ko backend se request bhejne ki permission hai
const SignupModel = require("./models/signup");
const LoginHistory = require("./models/loginhistory");
const BookingForm = require("./models/booking");
const AddStaff = require("./models/addstaff");
const slotRoutes = require("./routes/slotRoutes");
const Plan = require("./models/plan");
const Slot = require("./models/slot");

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
app.post("/bookingform", async (req, res) => {
  try {
    const {
      userid,
      bookingid,
      name,
      email,
      cnic,
      phonenumber,
      vehiclenumber,
      vehicletype,
      slot,
      area,
      plan,
      price,
      bookingday,
      bookingdate,
      enddate,
      bookingtime,
      endtime,
      duration,
    } = req.body;

    const bookingform = await BookingForm.create({
      userid,
      bookingid,
      name,
      email,
      cnic,
      phonenumber,
      vehiclenumber,
      vehicletype,
      slot,
      area,
      plan,
      price,
      bookingdate,
      enddate,
      bookingtime,
      endtime,
      duration,
    });
    res.json({
      status: "Success",
      bookingform,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------- ADD STAFF ----------
app.post("/addstaff", async (req, res) => {
  try {
    const { staffid, name, email, role, salary, cnic, phone, age } = req.body;

    const addstaff = await AddStaff.create({
      staffid,
      name,
      email,
      role,
      salary,
      cnic,
      phone,
      age,
    });
    res.json({
      status: "Success",
      addstaff,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ADD NEW PLAN
app.post("/plan", async (req, res) => {
  try {
    const {  planname, price, features, duration, durationtype,  } = req.body;

    const plan = await Plan.create({
      planname,
      price,
      features,
      duration,
      durationtype,
    });
    res.json({
      status: "Success",
      plan,
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

// ---------- GET BOOKINGS ----------
app.get("/bookings", async (req, res) => {
  try {
    const bookings = await BookingForm.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------- GET STAFF ----------
app.get("/addstaff", async (req, res) => {
  try {
    const staff = await AddStaff.find();
    res.json(staff);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------- GET SLOTS FROM API (POSTMAN) ----------
app.use("/api", slotRoutes);

// GET PLAN PRICE IN FORM
app.get("/plans", async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (err) {
    res.status(500).json(err);
  }
});


app.get("/slots", async (req, res) => {
  try {
    const slots = await Slot.find();
    res.json(slots);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(3001, () => {
  console.log("server is running");
});
