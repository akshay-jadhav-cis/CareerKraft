import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./Cicd.css";

export default function Cicd() {

  const days = [
    { day: 1, title: "Introduction to CI/CD", task: "What is CI/CD? DevOps lifecycle overview." },
    { day: 2, title: "Version Control Integration", task: "Git workflows in CI/CD pipelines." },
    { day: 3, title: "Build Automation", task: "Automated build tools & scripts." },
    { day: 4, title: "GitHub Actions Basics", task: "Create first CI workflow using GitHub Actions." },
    { day: 5, title: "Jenkins Basics", task: "Install Jenkins & create first pipeline." },
    { day: 6, title: "Pipeline as Code", task: "YAML pipelines & Jenkinsfile." },
    { day: 7, title: "Testing in CI", task: "Unit testing & automated testing integration." },
    { day: 8, title: "Docker in CI/CD", task: "Build & push Docker images automatically." },
    { day: 9, title: "Deployment Automation", task: "Auto-deploy to server/cloud." },
    { day: 10, title: "Mini Project", task: "Create full CI/CD pipeline for a web app." },
  ];

  return (
    <Box className="cicd-container">

      <Typography variant="h4" className="cicd-title">
        CI/CD 10-Day Learning Plan
      </Typography>

      <br /><br />

      <Typography className="cicd-subtitle">
        Learn continuous integration and deployment pipelines step by step.
      </Typography>

      <br />

      <Grid container spacing={4} className="cicd-grid">
        {days.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="cicd-card">
              <CardContent>

                <Typography variant="h6" className="cicd-day-title">
                  Day {item.day}: {item.title}
                </Typography>

                <br />

                <Typography className="cicd-task">
                  {item.task}
                </Typography>

                <br />

                <Box className="cicd-btn-box">
                  <Button variant="contained" className="cicd-btn">
                    Start Day
                  </Button>
                  <Button variant="outlined" className="cicd-resource-btn">
                    Resources
                  </Button>
                </Box>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}
