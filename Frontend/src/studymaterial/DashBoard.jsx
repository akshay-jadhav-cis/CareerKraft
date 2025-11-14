import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Briefcase, GraduationCap } from "lucide-react";

import "./Dashboard.css"; // ✅ Imported Custom CSS
import Placements from "./Placements";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUsername(savedUser?.name || "User");
  }, []);


  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">
        {/* Welcome Section */}
        <Typography variant="h3" align="center" className="welcome-text">
          Welcome, {username}! 👋
        </Typography>
        <Typography variant="h6" align="center" className="subtitle-text">
          Let’s personalize your learning journey. Choose your career path to get started.
        </Typography>

        {/* Cards Section */}
        <Grid container spacing={4} justifyContent="center" className="card-section">

          {/* Placements Card */}
          <Grid item xs={12} md={5}>
            <Card className="dash-card">
              <CardHeader
                title={
                  <div className="icon-wrapper">
                    <Briefcase className="card-icon" />
                  </div>
                }
              />
              <CardContent>
                <Typography variant="h5" className="card-title">
                  Placements
                </Typography>
                <Typography className="card-desc">
                  Get industry-ready with interview preparation, resume building,
                  and technical skills enhancement.
                </Typography>

                <ul className="feature-list">
                  <li>✓ Technical interview preparation</li>
                  <li>✓ Aptitude & coding practice</li>
                  <li>✓ Resume & LinkedIn optimization</li>
                  <li>✓ Mock interviews & feedback</li>
                  <li>✓ Company-specific preparation</li>
                </ul>

                <Button
                  variant="contained"
                  fullWidth
                  className="choose-btn"
                  onClick={() => navigate("/dashboard/placements")}
                >
                  Placements
                </Button>

              </CardContent>
            </Card>
          </Grid>

          {/* Higher Studies Card
          <Grid item xs={12} md={5}>
            <Card className="dash-card">
              <CardHeader
                title={
                  <div className="icon-wrapper">
                    <GraduationCap className="card-icon" />
                  </div>
                }
              />
              <CardContent>
                <Typography variant="h5" className="card-title">
                  Higher Studies
                </Typography>
                <Typography className="card-desc">
                  Prepare for competitive exams and advanced degrees with proper guidance.
                </Typography>

                <ul className="feature-list">
                  <li>✓ GRE, GMAT, CAT preparation</li>
                  <li>✓ Research paper guidance</li>
                  <li>✓ University application support</li>
                  <li>✓ Scholarship opportunities</li>
                  <li>✓ Academic skill enhancement</li>
                </ul>

                <Button
                  variant="contained"
                  fullWidth
                  className="choose-btn"
                  onClick={() => navigate("/higher-studies")}
                >
                  Choose Higher Studies
                </Button>
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
