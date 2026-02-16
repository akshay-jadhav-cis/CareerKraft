import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import "./Dsa450.css";

export default function DSA450() {
  return (
    <Box className="sheet-container">

      <Typography variant="h4" className="sheet-title">
        DSA 450 Interview Sheet
      </Typography>

      <Card className="sheet-card">
        <CardContent>
          <Typography>
            Complete 450 curated DSA problems covering:
          </Typography>

          <ul>
            <li>Arrays</li>
            <li>Strings</li>
            <li>Linked List</li>
            <li>Stacks & Queues</li>
            <li>Trees</li>
            <li>Graphs</li>
            <li>Dynamic Programming</li>
          </ul>

          <Typography sx={{ mt: 2 }}>
            Solve these to become placement ready 💪
          </Typography>
        </CardContent>
      </Card>

    </Box>
  );
}
