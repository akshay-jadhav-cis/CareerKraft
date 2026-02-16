import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./DataAnalytics.css";

export default function DataAnalytics() {

  const days = [
    { day: 1, title: "Introduction to Data Analysis", task: "What is Data Analytics? Workflow overview." },
    { day: 2, title: "NumPy Basics", task: "Arrays, indexing, mathematical operations." },
    { day: 3, title: "Pandas Basics", task: "DataFrames, Series, loading CSV files." },
    { day: 4, title: "Data Cleaning", task: "Handling missing values & duplicates." },
    { day: 5, title: "Data Filtering & Sorting", task: "Selecting & filtering datasets." },
    { day: 6, title: "GroupBy & Aggregation", task: "Summarizing data." },
    { day: 7, title: "Data Visualization Intro", task: "Matplotlib basics." },
    { day: 8, title: "Advanced Visualization", task: "Seaborn plots & styling." },
    { day: 9, title: "Exploratory Data Analysis (EDA)", task: "Understanding patterns & trends." },
    { day: 10, title: "Feature Engineering", task: "Creating meaningful features." },
    { day: 11, title: "Handling Outliers", task: "Detect & remove outliers." },
    { day: 12, title: "Working with APIs", task: "Fetching real-world data." },
    { day: 13, title: "Data Reporting", task: "Create reports & dashboards." },
    { day: 14, title: "Real Dataset Analysis", task: "Analyze a public dataset." },
    { day: 15, title: "Mini Project", task: "Complete end-to-end data analysis project." },
  ];

  return (
    <Box className="data-container">

      <Typography variant="h4" className="data-title">
        Data Analytics – 15 Day Learning Plan
      </Typography>

      <br /><br />

      <Typography className="data-subtitle">
        Master data cleaning, visualization, and exploratory analysis step by step.
      </Typography>

      <br />

      <Grid container spacing={4} className="data-grid">
        {days.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="data-card">
              <CardContent>

                <Typography variant="h6" className="data-day-title">
                  Day {item.day}: {item.title}
                </Typography>

                <br />

                <Typography className="data-task">
                  {item.task}
                </Typography>

                <br />

                <Box className="data-btn-box">
                  <Button variant="contained" className="data-btn">
                    Start Day
                  </Button>

                  <Button variant="outlined" className="data-resource-btn">
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
