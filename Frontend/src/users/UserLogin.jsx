import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  Link as MuiLink,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";

export default function UserLogin({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ User: formData }),
    });

    const data = await res.json();

    // CASE 1 → 2FA required
    if (data.step === "otp-required") {
      navigate("/2fa-login", { state: { email: data.email } });
      return;
    }

    // CASE 2 → Normal login
    if (data.success) {
      localStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, email: data.user.email })
      );

      if (typeof onLogin === "function") onLogin();

      navigate("/dashboard");
      return;
    }

    // CASE 3 → Error
    setAlert({
      open: true,
      message: data.error || "Login failed",
      severity: "error",
    });

  } catch (err) {
    setAlert({
      open: true,
      message: "Server Error",
      severity: "error",
    });
  }
};



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
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 3, color: "#1976d2", fontWeight: 600 }}
        >
          User Login
        </Typography>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            sx={{ mb: 3 }}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              py: 1.2,
              fontWeight: 600,
              borderRadius: 2,
              mb: 2,
            }}
          >
            Login
          </Button>
        </form>

        {/* GOOGLE LOGIN BUTTON */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            py: 1.2,
            fontWeight: 600,
            borderRadius: 2,
            mb: 2,
            color: "#4285F4",
            borderColor: "#4285F4",
          }}
          onClick={() =>
            window.open("http://localhost:5000/auth/google", "_self")
          }
        >
          Continue with Google
        </Button>

        <Typography align="center">
          Don’t have an account?{" "}
          <MuiLink component={Link} to="/signup" underline="hover">
            Signup
          </MuiLink>
        </Typography>
      </Paper>

      {/* ALERT MESSAGE */}
      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={() => setAlert({ ...alert, open: false })}
      >
        <Alert severity={alert.severity}>{alert.message}</Alert>
      </Snackbar>
    </Box>
  );
}
