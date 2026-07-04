const express = require("express");
const router = express.Router();
const Slot = require("../models/slot");

// Add multiple slots
router.post("/slots", async (req, res) => {
  try {
    const savedSlots = await Slot.insertMany(req.body);

    res.status(201).json({
      message: "Slots added successfully",
      data: savedSlots,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
});

// Get total slots count
router.get("/slots/count", async (req, res) => {
  try {
    const totalSlots = await Slot.countDocuments();
    const availableSlots = await Slot.countDocuments();

    res.json({
      totalSlots,
      availableSlots,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;