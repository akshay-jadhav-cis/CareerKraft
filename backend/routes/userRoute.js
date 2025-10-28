const express = require("express");
const userRoute = express.Router();
const users = require("../models/User");
const { hashCompare, hashPassword } = require("../utils/Password");
const isLoggedIn=require("../utils/middleware");
// ✅ Signup Route
userRoute.post("/signup", async (req, res) => {
  try {
    const { User } = req.body;
    
    const existingUser = await users.findOne({ email: User.email });
    if (existingUser)
      return res.status(400).json({ error: "Email already registered!" });

    const newUser = new users({
      name: User.name,
      password: await hashPassword(User.password),
      class: User.class,
      college: User.college,
      email: User.email,
    });

    await newUser.save();

    req.session.user = { name: newUser.name, email: newUser.email };

    res.status(201).json({
      message: "Signup Successful",
      user: req.session.user
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error during signup" });
  }
});
userRoute.post("/login", async (req, res) => {
  try {
    const { User } = req.body;
    const user = await users.findOne({ email: User.email });

    if (!user) return res.status(404).json({ error: "User does not exist" });

    const validPassword = await hashCompare(User.password, user.password);
    if (!validPassword)
      return res.status(401).json({ error: "Incorrect password" });

    req.session.user = { name: user.name, email: user.email };

    res.json({
      message: "Login successful",
      user: req.session.user
    });

  } catch (err) {
    res.status(500).json({ error: "Server error during login" });
  }
});
userRoute.get("/logout", isLoggedIn,(req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out successfully" });
    
  });
});

userRoute.get("/session-status", (req, res) => {
  if (req.session.user) {
    return res.json({ isLoggedIn: true, user: req.session.user });
  }
  res.json({ isLoggedIn: false });
});

module.exports = userRoute;
