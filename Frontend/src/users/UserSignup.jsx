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
  Link as MuiLink,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function UserSignup({ onSignup }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    class: "FE",
    college: "ADYPSOE",
  });

  const [alert, setAlert] = useState({ open: false, message: "", severity: "success" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ User: formData }),
      });

      const data = await res.json();

      if (res.ok && data.user) {
        localStorage.setItem("user", JSON.stringify({
          name: data.user.name,
          email: data.user.email
        }));

        if (typeof onSignup === "function") onSignup();
        navigate("/dashboard");
      } else {
        setAlert({ open: true, message: data.error || "Signup Failed", severity: "error" });
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
      <Paper elevation={6} sx={{ p: 4, borderRadius: "20px", maxWidth: 420, width: "100%" }}>
        <Typography variant="h5" align="center" sx={{ mb: 3, color: "#1976d2", fontWeight: 600 }}>
          User Signup
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />

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
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Select Class</InputLabel>
            <Select name="class" value={formData.class} onChange={handleChange}>
              <MenuItem value="FE">FE</MenuItem>
              <MenuItem value="SE">SE</MenuItem>
              <MenuItem value="TE">TE</MenuItem>
              <MenuItem value="B.E">B.E</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Select College</InputLabel>
            <Select name="college" value={formData.college} onChange={handleChange}>
              <MenuItem value="ADYPSOE">ADYPSOE</MenuItem>
              <MenuItem value="ADYPSOET">ADYPSOET</MenuItem>
              <MenuItem value="ADYPSOE(PRIVATE)">ADYPSOE (PRIVATE)</MenuItem>
              <MenuItem value="SEAMEDU">SEAMEDU</MenuItem>
            </Select>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ py: 1.2, fontWeight: 600, borderRadius: 2, mb: 2 }}
          >
            Signup
          </Button>
        </form>

        <Typography align="center">
          Already have an account?{" "}
          <MuiLink component={Link} to="/login" underline="hover">
            Login
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
