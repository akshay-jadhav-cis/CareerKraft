const express = require("express");
const router = express.Router();
const speakeasy = require("speakeasy");
const qrcode = require("qrcode");
const users = require("../models/User");

/* =========================
   GENERATE QR (SIGNUP)
========================= */
router.post("/generate", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await users.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 🔐 Generate secret ONCE
    const secret = speakeasy.generateSecret({
      length: 20,
      name: `CareerKraft (${email})`,
    });

    // 🔐 Save secret in DB
    user.twoFactorSecret = secret.base32;
    user.twoFactorEnabled = false;
    await user.save();

    // 📷 Generate QR
    const qr = await qrcode.toDataURL(secret.otpauth_url);

    res.json({ qr });
  } catch (err) {
    console.error("QR GENERATE ERROR:", err);
    res.status(500).json({ error: "Failed to generate QR" });
  }
});

/* =========================
   VERIFY OTP (SIGNUP)
========================= */
router.post("/verify-signup", async (req, res) => {
  try {
    const { email, token } = req.body;

    const user = await users.findOne({ email });
    if (!user || !user.twoFactorSecret) {
      return res.status(400).json({ error: "2FA not initialized" });
    }

    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: "base32",
      token,
      window: 2, // ⏱ handle time drift
    });

    if (!verified) {
      return res.status(401).json({ error: "Invalid OTP" });
    }

    // ✅ Enable 2FA
    user.twoFactorEnabled = true;
    await user.save();

    // ✅ Auto-login
    req.session.user = {
      name: user.name,
      email: user.email,
    };

    res.json({
      success: true,
      user: req.session.user,
    });
  } catch (err) {
    console.error("VERIFY SIGNUP ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

/* =========================
   VERIFY OTP (LOGIN)
========================= */
router.post("/verify-login", async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await users.findOne({ email });
    if (!user || !user.twoFactorSecret) {
      return res.status(400).json({ error: "User not found or 2FA disabled" });
    }

    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: "base32",
      token: otp,
      window: 2,
    });

    if (!verified) {
      return res.status(401).json({ error: "Invalid OTP" });
    }

    req.session.user = {
      name: user.name,
      email: user.email,
    };

    res.json({
      success: true,
      user: req.session.user,
    });
  } catch (err) {
    console.error("LOGIN OTP ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
