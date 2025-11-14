import React, { useEffect, useState } from "react";
import { Button, Typography, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Placements() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.name) setUsername(user.name);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fa",
        p: 3,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: "20px",
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
          Welcome to Placements, {username}! 🎯
        </Typography>

        <Typography sx={{ mb: 3, color: "gray" }}>
          Choose your career path below and begin your journey!
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 2, py: 1.2 }}
          onClick={() => navigate("/dashboard/placements/web-development")}
        >
          Build a Career in Web Development
        </Button>

        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 2, py: 1.2 }}
          onClick={() => navigate("/dashboard/placements/ai-data-science")}
        >
          Career in AI & Data Science
        </Button>

        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 2, py: 1.2 }}
          onClick={() => navigate("/dashboard/placements/devops")}
        >
          Become a DevOps Engineer
        </Button>

        <Button
          fullWidth
          variant="outlined"
          sx={{ py: 1.2 }}
          onClick={() => navigate("/dashboard/placements/dsa")}
        >
          Learn Data Structures & Algorithms
        </Button>
      </Paper>
    </Box>
  );
}
