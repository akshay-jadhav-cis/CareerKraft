import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function TwoFALogin() {
  const { state } = useLocation();
  const email = state?.email; // email passed from login
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  const handleVerify = async () => {
    if (!otp || otp.length !== 6) {
      setAlert({
        open: true,
        message: "Enter a valid 6-digit OTP",
        severity: "error",
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/2fa/verify-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: data.user.name,
            email: data.user.email,
          })
        );

        navigate("/dashboard");
      } else {
        setAlert({
          open: true,
          message: data.error || "Invalid OTP",
          severity: "error",
        });
      }
    } catch (error) {
      setAlert({
        open: true,
        message: "Server error",
        severity: "error",
      });
    }
  };

  if (!email) {
    return (
      <Typography align="center" sx={{ mt: 10 }}>
        ❌ Invalid access — no email provided.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: "20px",
          maxWidth: 420,
          width: "100%",
        }}
      >
        <Typography variant="h5" align="center" sx={{ mb: 2, fontWeight: 600 }}>
          Enter OTP
        </Typography>

        <Typography align="center" sx={{ mb: 3, color: "#666" }}>
          Enter the 6-digit code from your Google Authenticator app.
        </Typography>

        <TextField
          fullWidth
          label="6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          inputProps={{ maxLength: 6 }}
          sx={{ mb: 3 }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ py: 1.2, fontWeight: 600, borderRadius: 2 }}
          onClick={handleVerify}
        >
          Verify OTP
        </Button>

        <Snackbar
          open={alert.open}
          autoHideDuration={4000}
          onClose={() => setAlert({ ...alert, open: false })}
        >
          <Alert severity={alert.severity}>{alert.message}</Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
}
