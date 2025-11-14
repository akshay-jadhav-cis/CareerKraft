import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./WebDevelopment.css";
import { useNavigate } from "react-router-dom";

export default function WebDevelopment() {
  const navigate = useNavigate();

  // Dynamic roadmap list with route paths
  const roadmap = [
    {
      title: "HTML (10 Days)",
      description: "Master structure, tags, forms, tables, and semantic HTML.",
      days: 10,
      path: "/dashboard/placements/web-development/html",
    },
    {
      title: "CSS (15 Days)",
      description: "Learn layouts, Flexbox, Grid, animations & responsive design.",
      days: 15,
      path: "/dashboard/placements/web-development/css",
    },
    {
      title: "JavaScript (30 Days)",
      description: "Understand ES6+, DOM, APIs, async JS, and project building.",
      days: 30,
      path: "/dashboard/placements/web-development/js",
    },
    {
      title: "Practice (7 Days)",
      description: "Build real mini-projects like Portfolio, Calculator, Weather App.",
      days: 7,
      path: "/dashboard/placements/web-development/practice",
    },
    {
      title: "Mock Test",
      description: "Final evaluation covering HTML, CSS, JS & real-world logic.",
      days: 1,
      path: "/dashboard/placements/web-development/mock-test",
    },
  ];

  return (
    <Box className="webdev-container">
      <Typography variant="h4" className="webdev-title">
        Web Development Roadmap
      </Typography>

      <Grid container spacing={4} className="webdev-grid">
        {roadmap.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
            <Card className="webdev-card">
              <CardContent>
                <Typography variant="h5" className="webdev-card-title">
                  {item.title}
                </Typography>

                <Typography className="webdev-card-desc">
                  {item.description}
                </Typography>

                <Typography className="webdev-card-days">
                  Duration: {item.days} Days
                </Typography>

                <br />

                <Button
                  variant="contained"
                  fullWidth
                  className="webdev-btn"
                  onClick={() => navigate(item.path)}
                >
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
