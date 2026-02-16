import React from "react";
import { Box, Typography, Card, CardContent, Grid, Button } from "@mui/material";
import "./Month.css";

export default function Month6() {

  const topics = [
    "Dynamic Programming Basics",
    "1D DP Problems (Fibonacci, Climbing Stairs)",
    "2D DP Problems (Grid Paths)",
    "Knapsack Pattern",
    "Longest Common Subsequence (LCS)",
    "Matrix Chain Multiplication",
    "Greedy Algorithms",
    "Sliding Window Technique",
    "Two Pointer Technique",
    "Mock Interview Practice"
  ];

  return (
    <Box className="month-container">

      <Typography variant="h4" className="month-title">
        Month 6 – Dynamic Programming & Interview Prep
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {topics.map((topic, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="month-card">
              <CardContent>

                <Typography className="month-topic">
                  {topic}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#dc2626",
                    textTransform: "none",
                    borderRadius: "8px"
                  }}
                >
                  Practice
                </Button>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}
