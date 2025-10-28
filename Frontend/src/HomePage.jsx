import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage({ isLoggedIn }) {
  return (
    <section className="hero-container">
      <Box className="hero-content">
        <Typography variant="h5" className="sub-title">
          AI Powered Learning Platform
        </Typography>

        <Typography variant="h2" className="main-title">
          Your AI Companion from Classroom to Career
        </Typography>

        <br />

        <Typography className="desc">
          Personalized Roadmaps, Daily Tasks, Gamified Progress Tracking,
          and AI Mentorship in a Single Smart Platform
        </Typography>

        <br />
        <Link
          to={isLoggedIn ? "/dashboard" : "/login"}
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" className="cta-button">
            {isLoggedIn ? "Go to Dashboard" : "Start Your Journey"}
          </Button>
        </Link>

        <Box className="stats">
          <Box className="stat-box">
            <h2 className="stat-number">10K+</h2>
            <p className="stat-text">Active Learners</p>
          </Box>
          <Box className="stat-box">
            <h2 className="stat-number">500+</h2>
            <p className="stat-text">Learning Paths</p>
          </Box>
          <Box className="stat-box">
            <h2 className="stat-number">95%</h2>
            <p className="stat-text">Success Rate</p>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
