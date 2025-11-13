const express = require("express");
const router = express.Router();
const speakeasy = require("speakeasy");
const qrcode = require("qrcode");
const users = require("../models/User");

router.post("/generate", async (req, res) => {
  try {
    const { email } = req.body;

    const secret = speakeasy.generateSecret({
      name: `CareerKraft (${email})`,
    });

    const qr = await qrcode.toDataURL(secret.otpauth_url);

    res.json({
      qr,
      secret: secret.base32,
    });
  } catch (err) {
    console.log("QR GENERATE ERROR:", err);
    res.status(500).json({ error: "Failed to generate QR" });
  }
});
router.post("/verify-signup", async (req, res) => {
  try {
    const { email, secret, token } = req.body;

    const verified = speakeasy.totp.verify({
      secret,
      encoding: "base32",
      token,
      window: 1,
    });

    if (!verified) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    // 🟢 Update user with 2FA secret
    await users.updateOne(
      { email },
      { twoFactorEnabled: true, twoFactorSecret: secret }
    );

    // 🟢 Fetch updated user
    const user = await users.findOne({ email });

    // 🟢 Auto-login the user
    req.session.user = {
      name: user.name,
      email: user.email,
    };

    res.json({
      success: true,
      user: req.session.user,
    });

  } catch (err) {
    console.log("VERIFY SIGNUP ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ----------------------------
// 3️⃣ VERIFY OTP DURING LOGIN
// ----------------------------
router.post("/verify-login", async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await users.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: "base32",
      token: otp,
      window: 1,
    });

    if (!verified) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    
    req.session.user = { name: user.name, email: user.email };

    res.json({
      success: true,
      user: req.session.user,
    });
  } catch (err) {
    console.log("LOGIN OTP VERIFY ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
