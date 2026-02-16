import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./TempKubernettes.css";

export default function Kubernetes() {

  const days = [
    { day: 1, title: "Introduction to Kubernetes", task: "What is Kubernetes & container orchestration." },
    { day: 2, title: "Kubernetes Architecture", task: "Master node, worker node, cluster basics." },
    { day: 3, title: "Pods", task: "Creating and managing pods." },
    { day: 4, title: "Deployments", task: "Scaling and updating applications." },
    { day: 5, title: "Services", task: "ClusterIP, NodePort, LoadBalancer." },
    { day: 6, title: "ConfigMaps & Secrets", task: "Managing configuration securely." },
    { day: 7, title: "Volumes", task: "Persistent storage in Kubernetes." },
    { day: 8, title: "Horizontal Scaling", task: "Auto scaling pods." },
    { day: 9, title: "Helm Basics", task: "Package manager for Kubernetes." },
    { day: 10, title: "Mini Project", task: "Deploy a containerized app on Kubernetes." },
  ];

  return (
    <Box className="kube-container">

      <Typography variant="h4" className="kube-title">
        Kubernetes 10-Day Learning Plan
      </Typography>

      <br /><br />

      <Typography className="kube-subtitle">
        Master container orchestration and cluster management.
      </Typography>

      <br />

      <Grid container spacing={4} className="kube-grid">
        {days.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="kube-card">
              <CardContent>

                <Typography variant="h5" className="kube-day-title">
                  Day {item.day}: {item.title}
                </Typography>

                <br />

                <Typography className="kube-task">
                  {item.task}
                </Typography>

                <br />

                <Box className="kube-btn-box">
                  <Button variant="contained" className="kube-btn">
                    Start Day
                  </Button>

                  <Button variant="outlined" className="kube-resource-btn">
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
