import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./css.css";

export default function Css() {

    const days = [
        { day: 1, title: "Introduction to CSS", task: "Selectors, properties, syntax, how CSS works." },
        { day: 2, title: "Colors & Backgrounds", task: "RGBA, gradients, background images." },
        { day: 3, title: "Box Model", task: "Margin, padding, border, outline." },
        { day: 4, title: "Display & Position", task: "inline, block, absolute, relative, sticky." },
        { day: 5, title: "Flexbox (Part 1)", task: "Container properties, alignment, direction." },
        { day: 6, title: "Flexbox (Part 2)", task: "Practical layouts: navbar, card layout." },
        { day: 7, title: "CSS Grid (Part 1)", task: "Grid rows, columns, template areas." },
        { day: 8, title: "CSS Grid (Part 2)", task: "Advanced layouts using Grid." },
        { day: 9, title: "Typography", task: "Fonts, text spacing, line height." },
        { day: 10, title: "Animations & Transitions", task: "Keyframes, easing, hover effects." },
        { day: 11, title: "Responsive Design", task: "Media queries, breakpoints, mobile design." },
        { day: 12, title: "Units & Sizing", task: "px, %, em, rem, vh/vw, fr." },
        { day: 13, title: "Pseudo Classes/Elements", task: "::before, ::after, :hover, :focus." },
        { day: 14, title: "CSS Variables", task: "Custom properties, theming." },
        { day: 15, title: "Mini Project", task: "Build a Landing Page using pure CSS." },
    ];

    return (
        <Box className="css-container">
            <Typography variant="h4" className="css-title">
                CSS 15-Day Learning Plan
            </Typography>
            <br />
            <Typography className="css-subtitle">
                Learn CSS with hands-on tasks, animations, layouts, and responsiveness.
            </Typography>
            <br />
            <Grid container spacing={4} className="css-grid">
                {days.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                        <Card className="css-card">
                            <CardContent>
                                <Typography variant="h5" className="css-day-title">
                                    Day {item.day}: {item.title}
                                </Typography>
                                <br />
                                <Typography className="css-task">{item.task}</Typography>
                                <br />
                                <Box className="css-btn-box">
                                    <Button variant="contained" className="css-btn">
                                        Start Day
                                    </Button>

                                    <Button variant="outlined" className="css-resource-btn">
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
