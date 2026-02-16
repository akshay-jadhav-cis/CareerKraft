import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./Statistics.css";

export default function Statistics() {

  const days = [
    { day: 1, title: "Introduction to Statistics", task: "Types of data, population vs sample." },
    { day: 2, title: "Mean, Median & Mode", task: "Measures of central tendency." },
    { day: 3, title: "Variance & Standard Deviation", task: "Measure of data spread." },
    { day: 4, title: "Probability Basics", task: "Basic probability rules." },
    { day: 5, title: "Probability Distributions", task: "Normal, Binomial distribution." },
    { day: 6, title: "Bayes Theorem", task: "Conditional probability basics." },
    { day: 7, title: "Hypothesis Testing", task: "Null & alternative hypothesis." },
    { day: 8, title: "Confidence Intervals", task: "Confidence level & margin of error." },
    { day: 9, title: "Correlation & Covariance", task: "Relationship between variables." },
    { day: 10, title: "Mini Practice", task: "Solve statistical problems using Python." },
  ];

  return (
    <Box className="stats-container">

      <Typography variant="h4" className="stats-title">
        Statistics – 10 Day Learning Plan
      </Typography>

      <br /><br />

      <Typography className="stats-subtitle">
        Master core statistical concepts required for AI & Machine Learning.
      </Typography>

      <br />

      <Grid container spacing={4} className="stats-grid">
        {days.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="stats-card">
              <CardContent>

                <Typography variant="h6" className="stats-day-title">
                  Day {item.day}: {item.title}
                </Typography>

                <br />

                <Typography className="stats-task">
                  {item.task}
                </Typography>

                <br />

                <Box className="stats-btn-box">
                  <Button variant="contained" className="stats-btn">
                    Start Day
                  </Button>

                  <Button variant="outlined" className="stats-resource-btn">
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
