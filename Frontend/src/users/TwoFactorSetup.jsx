import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function TwoFactorSetup({ onAuthSuccess }) {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [qr, setQr] = useState("");
  const [otp, setOtp] = useState("");

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  // 🚨 If no email → redirect
  useEffect(() => {
    if (!email) navigate("/signup");
  }, [email, navigate]);

  // 📡 Fetch QR
  useEffect(() => {
    async function fetchQR() {
      const res = await fetch("http://localhost:5000/2fa/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setQr(data.qr);
    }
    fetchQR();
  }, [email]);

  // ✅ Verify OTP
  const verifyOTP = async () => {
    const res = await fetch("http://localhost:5000/2fa/verify-signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, token: otp }),
    });

    const data = await res.json();

    if (!data.success) {
      return setAlert({
        open: true,
        message: data.error || "Invalid OTP",
        severity: "error",
      });
    }

    // 🔥 Update React auth state
    await onAuthSuccess();

    navigate("/dashboard", { replace: true });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ p: 4, maxWidth: 420 }}>
        <Typography variant="h5" align="center">
          Set Up Google Authenticator
        </Typography>

        {qr ? (
          <img src={qr} alt="QR" style={{ width: "100%", marginTop: 20 }} />
        ) : (
          <Typography align="center" sx={{ mt: 2 }}>
            Loading QR...
          </Typography>
        )}

        <TextField
          fullWidth
          label="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          sx={{ mt: 3 }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={verifyOTP}
        >
          Verify OTP
        </Button>

        <Snackbar
          open={alert.open}
          autoHideDuration={4000}
          onClose={() => setAlert({ ...alert, open: false })}
        >
          <Alert severity="error">{alert.message}</Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
}
