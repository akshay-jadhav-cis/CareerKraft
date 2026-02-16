import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./Git.css";

export default function Git() {

  const days = [
    { day: 1, title: "Introduction to Git", task: "What is Git, version control basics, install Git." },
    { day: 2, title: "Git Configuration", task: "git config, setting username & email." },
    { day: 3, title: "Basic Commands", task: "git init, add, commit, status, log." },
    { day: 4, title: "Branches", task: "git branch, checkout, merge basics." },
    { day: 5, title: "GitHub Setup", task: "Create repository, push & pull code." },
    { day: 6, title: "Remote Repositories", task: "origin, fetch, pull, clone." },
    { day: 7, title: "Merge Conflicts", task: "Handling conflicts and resolving them." },
    { day: 8, title: "Pull Requests", task: "Creating PR, reviewing code, collaboration." },
    { day: 9, title: "Advanced Git", task: "Rebase, stash, cherry-pick basics." },
    { day: 10, title: "Mini Project", task: "Collaborative project using Git & GitHub." },
  ];

  return (
    <Box className="git-container">

      <Typography variant="h4" className="git-title">
        Git & GitHub 10-Day Learning Plan
      </Typography>

      <br /><br />

      <Typography className="git-subtitle">
        Master version control and collaboration workflows step by step.
      </Typography>

      <br />

      <Grid container spacing={4} className="git-grid">
        {days.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="git-card">
              <CardContent>

                <Typography variant="h5" className="git-day-title">
                  Day {item.day}: {item.title}
                </Typography>

                <br />

                <Typography className="git-task">
                  {item.task}
                </Typography>

                <br />

                <Box className="git-btn-box">
                  <Button variant="contained" className="git-btn">
                    Start Day
                  </Button>

                  <Button variant="outlined" className="git-resource-btn">
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
