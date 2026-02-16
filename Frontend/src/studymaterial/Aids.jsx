import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Aids.css";

export default function Aids() {

  const navigate = useNavigate();

  const modules = [
    {
      title: "Python Basics (10 Days)",
      description: "Variables, loops, functions, OOP concepts.",
      path: "/dashboard/placements/ai-data-science/python"
    },
    {
      title: "Data Analysis (15 Days)",
      description: "NumPy, Pandas, Data Cleaning & Visualization.",
      path: "/dashboard/placements/ai-data-science/data-analytics"
    },
    {
      title: "Statistics & Math (10 Days)",
      description: "Probability, distributions, linear algebra basics.",
      path: "/dashboard/placements/ai-data-science/statistics"
    },
    {
      title: "Machine Learning (20 Days)",
      description: "Regression, Classification, Clustering, Model evaluation.",
      path: "/dashboard/placements/ai-data-science/ml"
    },
    {
      title: "Deep Learning (15 Days)",
      description: "Neural networks, CNN, RNN basics.",
      path: "/dashboard/placements/ai-data-science/deep-learning"
    },
    {
      title: "Mini Project",
      description: "Build a ML project with dataset & deployment.",
      path: "/dashboard/placements/ai-data-science/capstone"
    }
  ];

  return (
    <Box className="aids-container">

      <Typography variant="h4" className="aids-title">
        AI & Data Science Roadmap
      </Typography>

      <br /><br />

      <Typography className="aids-subtitle">
        Follow this structured roadmap to master AI and Data Science fundamentals.
      </Typography>

      <br />

      <Grid container spacing={4} className="aids-grid">
        {modules.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="aids-card">
              <CardContent>

                <Typography variant="h6" className="aids-module-title">
                  {item.title}
                </Typography>

                <br />

                <Typography className="aids-description">
                  {item.description}
                </Typography>

                <br />

                <Button
                  variant="contained"
                  className="aids-btn"
                  onClick={() => navigate(item.path)}
                >
                  Start Module
                </Button>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}
