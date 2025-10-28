const express = require("express");
const feature = require("../models/Feature"); 
const featureRoute = express.Router();

featureRoute.get("/all", async (req, res) => {
  try {
    const features = await feature.find(); 

    if (!features || features.length === 0) {
      return res.status(404).json({ data: "No features found" });
    }

    res.json(features);
  } catch (e) {
    console.error("Error fetching features:", e);
    res.status(500).json({ data: "Error occurred" });
  }
});

module.exports = featureRoute;
