import React from "react";
import { Box, Typography, Card, CardContent, Button, Grid } from "@mui/material";
import "./AiMiniProject.css";

export default function AiMiniProject() {

  const steps = [
    { step: 1, title: "Problem Statement", description: "Choose a real-world problem (e.g., House Price Prediction, Spam Detection)." },
    { step: 2, title: "Data Collection", description: "Collect dataset from Kaggle or public APIs." },
    { step: 3, title: "Data Cleaning", description: "Handle missing values and preprocess data." },
    { step: 4, title: "Exploratory Data Analysis", description: "Visualize and understand patterns." },
    { step: 5, title: "Model Building", description: "Train ML/DL model on dataset." },
    { step: 6, title: "Model Evaluation", description: "Measure accuracy, precision, recall." },
    { step: 7, title: "Deployment", description: "Deploy using Flask/FastAPI or Streamlit." },
    { step: 8, title: "Documentation", description: "Prepare project documentation & GitHub repo." }
  ];

  return (
    <Box className="capstone-container">

      <Typography variant="h4" className="capstone-title">
        AI & Data Science Capstone Project
      </Typography>

      <br /><br />

      <Typography className="capstone-subtitle">
        Apply all your knowledge to build a real-world AI solution from scratch.
      </Typography>

      <br />

      <Grid container spacing={4}>
        {steps.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="capstone-card">
              <CardContent>

                <Typography variant="h6" className="capstone-step-title">
                  Step {item.step}: {item.title}
                </Typography>

                <br />

                <Typography className="capstone-description">
                  {item.description}
                </Typography>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box className="capstone-btn-box">
        <Button variant="contained" className="capstone-btn">
          Start Capstone Project
        </Button>
      </Box>

    </Box>
  );
}
