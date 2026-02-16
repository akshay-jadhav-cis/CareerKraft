import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./Python.css";

export default function Python() {

  const days = [
    { day: 1, title: "Introduction to Python", task: "Syntax, variables, data types." },
    { day: 2, title: "Control Flow", task: "If-else, loops." },
    { day: 3, title: "Functions", task: "Define & call functions." },
    { day: 4, title: "Lists & Tuples", task: "Collection types in Python." },
    { day: 5, title: "Dictionaries & Sets", task: "Key-value data handling." },
    { day: 6, title: "OOP Basics", task: "Classes & objects." },
    { day: 7, title: "File Handling", task: "Read & write files." },
    { day: 8, title: "Exception Handling", task: "Try-catch blocks." },
    { day: 9, title: "Libraries", task: "Intro to NumPy & Pandas." },
    { day: 10, title: "Mini Practice", task: "Build small CLI-based project." }
  ];

  return (
    <Box className="ai-container">
      <Typography variant="h4" className="ai-title">
        Python – 10 Day Plan
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {days.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="ai-card">
              <CardContent>
                <Typography variant="h6">
                  Day {item.day}: {item.title}
                </Typography>
                <Typography sx={{ mt: 1 }}>{item.task}</Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                  Start
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
