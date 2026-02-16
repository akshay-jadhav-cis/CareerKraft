import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./DSA.css";

export default function DSA() {

  const navigate = useNavigate();

  const months = [
    {
      month: "Month 1",
      title: "Basics & Arrays",
      topics: "Time Complexity, Recursion, Arrays, Strings",
      path: "/dashboard/placements/dsa/month-1"
    },
    {
      month: "Month 2",
      title: "Linked List & Stack/Queue",
      topics: "Linked List, Stack, Queue, Deque",
      path: "/dashboard/placements/dsa/month-2"
    },
    {
      month: "Month 3",
      title: "Recursion & Backtracking",
      topics: "Recursion, Backtracking, Bit Manipulation",
      path: "/dashboard/placements/dsa/month-3"
    },
    {
      month: "Month 4",
      title: "Trees & Binary Search Trees",
      topics: "Binary Trees, BST, Tree Traversals",
      path: "/dashboard/placements/dsa/month-4"
    },
    {
      month: "Month 5",
      title: "Graphs & Advanced Topics",
      topics: "Graph Traversal, DFS, BFS, Shortest Path, DP Intro",
      path: "/dashboard/placements/dsa/month-5"
    },
    {
      month: "Month 6",
      title: "Dynamic Programming & Interview Prep",
      topics: "DP Patterns, Sliding Window, Greedy, Mock Interviews",
      path: "/dashboard/placements/dsa/month-6"
    },
    {
      month: "DSA 450 Sheet",
      title: "Complete 450 Interview Questions",
      topics: "Striver 450 DSA Sheet – Company-level problems",
      path: "/dashboard/placements/dsa/dsa-450"
    }
  ];

  return (
    <Box className="dsa-container">

      <Typography variant="h4" className="dsa-title">
        DSA – 6 Month Complete Course Plan
      </Typography>

      <br /><br />

      <Typography className="dsa-subtitle">
        Master Data Structures & Algorithms for placements.
      </Typography>

      <br />

      <Grid container spacing={4} className="dsa-grid">
        {months.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="dsa-card">
              <CardContent>

                <Typography variant="h6" className="dsa-month-title">
                  {item.month}
                </Typography>

                <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 600 }}>
                  {item.title}
                </Typography>

                <Typography className="dsa-topics" sx={{ mt: 1 }}>
                  {item.topics}
                </Typography>

                <Button
                  variant="contained"
                  className="dsa-btn"
                  sx={{ mt: 2 }}
                  onClick={() => navigate(item.path)}
                >
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
