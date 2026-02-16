import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  LinearProgress
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Icons
import TerminalIcon from "@mui/icons-material/Terminal";
import GitHubIcon from "@mui/icons-material/GitHub";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import CloudIcon from "@mui/icons-material/Cloud";
import StorageIcon from "@mui/icons-material/Storage";
import QuizIcon from "@mui/icons-material/Quiz";

import "./Devops.css";

export default function Devops() {
  const navigate = useNavigate();

  const roadmap = [
    {
      title: "Linux Fundamentals",
      description:
        "Learn CLI, file system, permissions, processes & shell scripting.",
      days: 10,
      progress: 40,
      icon: <TerminalIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
      path: "/dashboard/placements/devops/linux",
    },
    {
      title: "Git & GitHub",
      description:
        "Version control, branching, pull requests & collaboration.",
      days: 7,
      progress: 70,
      icon: <GitHubIcon sx={{ fontSize: 40, color: "#111827" }} />,
      path: "/dashboard/placements/devops/git",
    },
    {
      title: "Docker",
      description:
        "Containers, images, Dockerfile, volumes & networking.",
      days: 15,
      progress: 20,
      icon: <Inventory2Icon sx={{ fontSize: 40, color: "#0ea5e9" }} />,
      path: "/dashboard/placements/devops/docker",
    },
    {
      title: "CI/CD",
      description:
        "Build pipelines using GitHub Actions or Jenkins.",
      days: 10,
      progress: 0,
      icon: <BuildCircleIcon sx={{ fontSize: 40, color: "#f59e0b" }} />,
      path: "/dashboard/placements/devops/cicd",
    },
    {
      title: "Cloud (AWS Basics)",
      description:
        "EC2, S3, IAM, VPC & deployment strategies.",
      days: 20,
      progress: 0,
      icon: <CloudIcon sx={{ fontSize: 40, color: "#2563eb" }} />,
      path: "/dashboard/placements/devops/aws",
    },
    {
      title: "Kubernetes",
      description:
        "Pods, deployments, services & cluster management.",
      days: 15,
      progress: 0,
      icon: <StorageIcon sx={{ fontSize: 40, color: "#7c3aed" }} />,
      path: "/dashboard/placements/devops/kubernetes",
    },
    {
      title: "Mock Test",
      description:
        "Final DevOps evaluation & real-world scenario test.",
      days: 1,
      progress: 0,
      icon: <QuizIcon sx={{ fontSize: 40, color: "#ef4444" }} />,
      path: "/dashboard/placements/devops/mock-test",
    },
  ];

  return (
    <Box className="devops-container">
      <Typography variant="h4" className="devops-title">
        DevOps Roadmap
      </Typography>

      <Grid container spacing={4} className="devops-grid">
        {roadmap.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
            <Card className="devops-card">
              <CardContent>

                {/* Icon */}
                <Box sx={{ mb: 2 }}>{item.icon}</Box>

                {/* Title */}
                <Typography variant="h5" className="devops-card-title">
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography className="devops-card-desc">
                  {item.description}
                </Typography>

                {/* Duration */}
                <Typography className="devops-card-days">
                  Duration: {item.days} Days
                </Typography>

                {/* Progress Bar */}
                <Box sx={{ mt: 2, mb: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={item.progress}
                  />
                  <Typography variant="caption">
                    {item.progress}% Completed
                  </Typography>
                </Box>

                {/* Button */}
                <Button
                  variant="contained"
                  fullWidth
                  className="devops-btn"
                  onClick={() => navigate(item.path)}
                >
                  {item.progress > 0
                    ? "Continue Learning"
                    : "Start Learning"}
                </Button>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
