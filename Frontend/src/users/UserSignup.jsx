import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UserSignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    class: "FE",
    college: "ADYPSOE",
  });

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          User: {
            name: formData.name,
            email: formData.email,
            class: formData.class,
            college: formData.college,
          },
        }),
      });

      const data = await res.json();

      // 👉 Move directly to 2FA setup
      if (data.step === "2fa-required") {
        navigate("/2fa-setup", { state: { email: formData.email } });
        return;
      }

      setAlert({
        open: true,
        message: data.error || "Signup failed",
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
        sx={{ p: 4, borderRadius: "20px", maxWidth: 420, width: "100%" }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 3, color: "#1976d2", fontWeight: 600 }}
        >
          Create Your Account
        </Typography>

        {/* SIGNUP FORM */}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Class</InputLabel>
            <Select
              name="class"
              value={formData.class}
              onChange={handleChange}
            >
              <MenuItem value="FE">FE</MenuItem>
              <MenuItem value="SE">SE</MenuItem>
              <MenuItem value="TE">TE</MenuItem>
              <MenuItem value="BE">BE</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>College</InputLabel>
            <Select
              name="college"
              value={formData.college}
              onChange={handleChange}
            >
              <MenuItem value="ADYPSOE">ADYPSOE</MenuItem>
              <MenuItem value="ADYPSOET">ADYPSOET</MenuItem>
              <MenuItem value="SEAMEDU">SEAMEDU</MenuItem>
            </Select>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              py: 1.2,
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            Continue
          </Button>
        </form>

        {/* ALERT */}
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
