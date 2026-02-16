import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./Docker.css";

export default function Docker() {

  const days = [
    { day: 1, title: "Introduction to Docker", task: "What is Docker? Containers vs Virtual Machines." },
    { day: 2, title: "Docker Installation", task: "Install Docker Desktop & basic configuration." },
    { day: 3, title: "Docker Images", task: "Pull, list, remove and inspect images." },
    { day: 4, title: "Docker Containers", task: "Run, stop, restart and remove containers." },
    { day: 5, title: "Port Mapping", task: "Expose container ports to host machine." },
    { day: 6, title: "Dockerfile Basics", task: "Create custom images using Dockerfile." },
    { day: 7, title: "Build & Push Images", task: "Build images & push to Docker Hub." },
    { day: 8, title: "Volumes", task: "Persistent storage and bind mounts." },
    { day: 9, title: "Networking", task: "Bridge network & container communication." },
    { day: 10, title: "Docker Compose", task: "Multi-container app setup using docker-compose." },
    { day: 11, title: "Environment Variables", task: "Pass env variables securely." },
    { day: 12, title: "Docker Logs & Debugging", task: "Monitor logs and troubleshoot issues." },
    { day: 13, title: "Docker Best Practices", task: "Image optimization & security basics." },
    { day: 14, title: "Docker + Node/React", task: "Containerize a full-stack application." },
    { day: 15, title: "Mini Project", task: "Deploy a complete multi-service app using Docker." },
  ];

  return (
    <Box className="docker-container">

      <Typography variant="h4" className="docker-title">
        Docker 15-Day Learning Plan
      </Typography>

      <br /><br />

      <Typography className="docker-subtitle">
        Master containerization step by step for DevOps excellence.
      </Typography>

      <br />

      <Grid container spacing={4} className="docker-grid">
        {days.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="docker-card">
              <CardContent>

                <Typography variant="h6" className="docker-day-title">
                  Day {item.day}: {item.title}
                </Typography>

                <br />

                <Typography className="docker-task">
                  {item.task}
                </Typography>

                <br />

                <Box className="docker-btn-box">
                  <Button variant="contained" className="docker-btn">
                    Start Day
                  </Button>

                  <Button variant="outlined" className="docker-resource-btn">
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
