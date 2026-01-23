const express = require("express");
const userRoute = express.Router();
const users = require("../models/User");
const { hashPassword } = require("../utils/Password");
const isLoggedIn = require("../utils/middleware");
const speakeasy = require("speakeasy");

/* =========================
   CHECK AUTH (SESSION)
========================= */
userRoute.get("/check-auth", (req, res) => {
  if (req.session.user) {
    return res.json({
      isLoggedIn: true,
      user: req.session.user,
    });
  }
  res.json({ isLoggedIn: false });
});

/* =========================
   SIGNUP (CREATE USER)
========================= */
userRoute.post("/signup", async (req, res) => {
  try {
    const { User } = req.body;

    if (!User?.email || !User?.name) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const existingUser = await users.findOne({ email: User.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered!" });
    }

    const newUser = new users({
      name: User.name,
      email: User.email,
      password: User.password
        ? await hashPassword(User.password)
        : "", // optional password
      class: User.class || "",
      college: User.college || "",
      twoFactorEnabled: false,
      twoFactorSecret: "",
    });

    await newUser.save();

    return res.json({
      step: "2fa-required",
      email: User.email,
      message: "Continue with QR code verification",
    });
  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    res.status(500).json({ error: "Server error during signup" });
  }
});

/* =========================
   LOGIN (PASSWORDLESS)
========================= */
userRoute.post("/login", async (req, res) => {
  try {
    const { User } = req.body;

    if (!User?.email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const user = await users.findOne({ email: User.email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 🔐 If 2FA enabled → OTP step
    if (user.twoFactorEnabled) {
      return res.json({
        step: "otp-required",
        email: user.email,
      });
    }

    // ✅ Normal login (no 2FA)
    req.session.user = {
      name: user.name,
      email: user.email,
    };

    return res.json({
      success: true,
      user: req.session.user,
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ error: "Server error during login" });
  }
});

/* =========================
   2FA VERIFY (AUTO LOGIN)
========================= */
userRoute.post("/2fa/verify", async (req, res) => {
  try {
    const { email, token } = req.body;

    if (!email || !token) {
      return res.status(400).json({ error: "Email and OTP are required" });
    }

    const user = await users.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: "base32",
      token,
      window: 1,
    });

    if (!verified) {
      return res.status(401).json({ error: "Invalid OTP" });
    }

    // ✅ Enable 2FA
    user.twoFactorEnabled = true;
    await user.save();

    // ✅ AUTO LOGIN (IMPORTANT)
    req.session.user = {
      name: user.name,
      email: user.email,
    };

    return res.json({
      success: true,
      user: req.session.user,
    });
  } catch (err) {
    console.error("2FA VERIFY ERROR:", err);
    res.status(500).json({ error: "OTP verification failed" });
  }
});

/* =========================
   LOGOUT
========================= */
userRoute.get("/logout", isLoggedIn, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out successfully" });
  });
});

/* =========================
   SESSION STATUS (OPTIONAL)
========================= */
userRoute.get("/session-status", (req, res) => {
  if (req.session.user) {
    return res.json({
      isLoggedIn: true,
      user: req.session.user,
    });
  }
  res.json({ isLoggedIn: false });
});

module.exports = userRoute;
