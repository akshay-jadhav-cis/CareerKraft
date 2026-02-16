import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import "./Month.css";

export default function Month3() {

  const topics = [
    "Advanced Recursion",
    "Backtracking Basics",
    "Subsets & Subsequences",
    "Permutations & Combinations",
    "N-Queens Problem",
    "Bit Manipulation Basics"
  ];

  return (
    <Box className="month-container">

      <Typography variant="h4" className="month-title">
        Month 3 – Recursion & Backtracking
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {topics.map((topic, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="month-card">
              <CardContent>
                <Typography className="month-topic">
                  {topic}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}
