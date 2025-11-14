import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./js.css";

export default function JavaScriptCourse() {
  const days = [
    { day: 1, title: "Introduction & Variables", task: "var, let, const, data types." },
    { day: 2, title: "Operators", task: "Arithmetic, logical, comparison." },
    { day: 3, title: "Control Flow", task: "if, else, switch, loops." },
    { day: 4, title: "Functions", task: "Function declaration, expression, arrow functions." },
    { day: 5, title: "Arrays", task: "Push, pop, map, filter, reduce." },
    { day: 6, title: "Objects", task: "Object methods, keys, values." },
    { day: 7, title: "DOM Basics", task: "Selecting elements, innerHTML, events." },
    { day: 8, title: "DOM Advanced", task: "Event delegation, DOM tree." },
    { day: 9, title: "ES6 Features", task: "Let/const, template strings, spread operator." },
    { day: 10, title: "Async JS", task: "Callbacks, Promises, async/await." },
    { day: 11, title: "Fetch API", task: "GET & POST requests, APIs." },
    { day: 12, title: "Error Handling", task: "Try/catch, debugging." },
    { day: 13, title: "Modules", task: "Export/import modules." },
    { day: 14, title: "LocalStorage", task: "Saving data in browser." },
    { day: 15, title: "OOP Basics", task: "Classes, constructors, prototypes." },
    { day: 16, title: "Advanced OOP", task: "Inheritance, encapsulation." },
    { day: 17, title: "Callbacks & Events", task: "Event loop, microtasks." },
    { day: 18, title: "Array Deep Dive", task: "Advanced array methods." },
    { day: 19, title: "Regex Basics", task: "Pattern matching in JS." },
    { day: 20, title: "Map / Set", task: "JS collections." },
    { day: 21, title: "Date & Time", task: "Working with Dates." },
    { day: 22, title: "Math Object", task: "Math functions, rounding." },
    { day: 23, title: "Browser APIs", task: "Clipboard, Speech, Notifications." },
    { day: 24, title: "Canvas Basics", task: "Draw shapes using JS." },
    { day: 25, title: "Async Projects", task: "Weather app, jokes API." },
    { day: 26, title: "Games with JS", task: "Snake, ping-pong basics." },
    { day: 27, title: "Mini Project 1", task: "To-do list or calculator." },
    { day: 28, title: "Mini Project 2", task: "Notes app, quiz app." },
    { day: 29, title: "Algorithm Practice", task: "Arrays, strings questions." },
    { day: 30, title: "Final JS Project", task: "Build a complete JS project." },
  ];

  return (
    <Box className="js-container">
      <Typography variant="h4" className="js-title">
        JavaScript 30-Day Learning Plan
      </Typography>
      <br />


      <Typography className="js-subtitle">
        Master JavaScript from basics to advanced with structured daily tasks.
      </Typography>
<br />
      <Grid container spacing={4}>
        {days.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="js-card">
              <CardContent>
                <Typography variant="h5" className="js-day-title">
                  Day {item.day}: {item.title}
                </Typography>
                <br />

                <Typography className="js-task">{item.task}</Typography><br />

                <Box className="js-btn-box">
                  <Button variant="contained" className="js-btn">Start Day</Button>
                  <Button variant="outlined" className="js-resource-btn">Resources</Button>
                </Box>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
