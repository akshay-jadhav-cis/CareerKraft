import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./Linux.css";

export default function Linux() {

  const days = [
    { day: 1, title: "Introduction to Linux", task: "History, distributions, Linux architecture." },
    { day: 2, title: "Linux Installation & Setup", task: "Install Ubuntu, dual boot, WSL setup." },
    { day: 3, title: "File System & Navigation", task: "pwd, ls, cd, mkdir, rm, file hierarchy." },
    { day: 4, title: "File Permissions", task: "chmod, chown, user groups & access control." },
    { day: 5, title: "Process Management", task: "ps, top, kill, background & foreground jobs." },
    { day: 6, title: "Package Management", task: "apt, yum, install & remove software." },
    { day: 7, title: "Shell Scripting Basics", task: "Variables, loops, conditions, bash scripts." },
    { day: 8, title: "Networking Commands", task: "ping, netstat, curl, ifconfig, ssh." },
    { day: 9, title: "Cron Jobs & Automation", task: "Scheduling tasks using crontab." },
    { day: 10, title: "Mini Project", task: "Create automation script for system monitoring." },
  ];

  return (
    <Box className="linux-container">

      <Typography variant="h4" className="linux-title">
        Linux 10-Day Learning Plan
      </Typography>

      <br /><br />

      <Typography className="linux-subtitle">
        Follow this structured plan to master Linux fundamentals for DevOps.
      </Typography>

      <br />

      <Grid container spacing={4} className="linux-grid">
        {days.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="linux-card">
              <CardContent>

                <Typography variant="h5" className="linux-day-title">
                  Day {item.day}: {item.title}
                </Typography>

                <br />

                <Typography className="linux-task">
                  {item.task}
                </Typography>

                <br />

                <Box className="linux-btn-box">
                  <Button variant="contained" className="linux-btn">
                    Start Day
                  </Button>

                  <Button variant="outlined" className="linux-resource-btn">
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
