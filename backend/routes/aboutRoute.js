const express = require("express");
const aboutRoute = express.Router();
const About = require("../models/About");

aboutRoute.get("/all", async (req, res) => {
  try {
    const abouts = await About.find();

    res.json({
      success: true,
      about: abouts,
    });
  } catch (e) {
    console.error("Error fetching about:", e);
    res.status(500).json({ success: false, message: "about section invalid" });
  }
});

module.exports = aboutRoute;
