import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./Html.css";

export default function HTMLCourse() {
  const days = [
    { day: 1, title: "Introduction to HTML", task: "What is HTML, basic structure, tags, elements." },
    { day: 2, title: "Text & Formatting Tags", task: "Headings, paragraphs, bold, italic, lists." },
    { day: 3, title: "Links & Images", task: "Adding links, images, alt text, relative paths." },
    { day: 4, title: "Tables", task: "Create tables, thead, tbody, colspan, rowspan." },
    { day: 5, title: "Forms (Part 1)", task: "Input types, labels, placeholders, button types." },
    { day: 6, title: "Forms (Part 2)", task: "Textarea, radio, checkbox, select dropdown." },
    { day: 7, title: "Semantic HTML", task: "header, nav, main, section, article, footer." },
    { day: 8, title: "Media & Iframes", task: "Video, audio, iframe embeds (YouTube)." },
    { day: 9, title: "HTML5 Features", task: "Canvas, SVG, localStorage/sessionStorage." },
    { day: 10, title: "Mini Project", task: "Build a Resume or Portfolio using pure HTML." },
  ];

  return (
    <Box className="html-container">
      <Typography variant="h4" className="html-title">
        HTML 10-Day Learning Plan
      </Typography>
    <br /><br />
      <Typography className="html-subtitle">
        Follow this structured plan to master HTML fundamentals with practical learning.
      </Typography>
        <br />
      <Grid container spacing={4} className="html-grid">
        {days.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="html-card">
              <CardContent>
                <Typography variant="h5" className="html-day-title">
                  Day {item.day}: {item.title}
                </Typography>
               <br />
                <Typography className="html-task">{item.task}</Typography>
               <br />
                <Box className="html-btn-box">
                  <Button variant="contained" className="html-btn">
                    Start Day
                  </Button>

                  <Button variant="outlined" className="html-resource-btn">
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
