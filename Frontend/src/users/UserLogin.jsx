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
import { Link, useNavigate } from "react-router-dom";

export default function UserLogin({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState({ open: false, message: "", severity: "success" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ User: formData }),
      });

      const data = await res.json();

      if (res.ok && data.user) {
        localStorage.setItem("user", JSON.stringify({
          name: data.user.name,
          email: data.user.email,
          token: data.token
        }));

        if (typeof onLogin === "function") onLogin();
        navigate("/dashboard");
      } else {
        setAlert({ open: true, message: data.error || "Login Failed", severity: "error" });
      }
    } catch (error) {
      setAlert({ open: true, message: "Server Error", severity: "error" });
    }
  };

  return (
    <Box sx={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
      p: 2,
    }}>
      <Paper elevation={6}
        sx={{ p: 4, borderRadius: "20px", maxWidth: 400, width: "100%" }}
      >
        <Typography variant="h5" align="center" sx={{ mb: 3, color: "#1976d2" }}>
          User Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ py: 1.2, fontWeight: 600, borderRadius: 2, mb: 2 }}
          >
            Login
          </Button>
        </form>

        <Typography align="center">
          Not registered yet?{" "}
          <MuiLink component={Link} to="/signup" underline="hover">
            Signup
          </MuiLink>
        </Typography>
      </Paper>

      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={alert.severity}>{alert.message}</Alert>
      </Snackbar>
    </Box>
  );
}
