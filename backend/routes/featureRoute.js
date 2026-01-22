const express = require("express");
const Feature = require("../models/Feature");
const featureRoute = express.Router();

featureRoute.get("/all", async (req, res) => {
  try {
    const features = await Feature.find(); // ✅ FIXED

    res.json({
      success: true,
      features: features,
    });
  } catch (e) {
    console.error("Error fetching features:", e);
    res.status(500).json({ success: false, message: "Error occurred" });
  }
});

module.exports = featureRoute;
