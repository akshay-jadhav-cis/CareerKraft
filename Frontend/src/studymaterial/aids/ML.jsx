import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./ML.css";

export default function ML() {

  const days = [
    { day: 1, title: "Introduction to ML", task: "What is ML? Types: Supervised, Unsupervised." },
    { day: 2, title: "Data Preprocessing", task: "Handling missing data, encoding, scaling." },
    { day: 3, title: "Exploratory Data Analysis", task: "Understanding dataset patterns." },
    { day: 4, title: "Linear Regression", task: "Model training & evaluation." },
    { day: 5, title: "Logistic Regression", task: "Binary classification basics." },
    { day: 6, title: "K-Nearest Neighbors", task: "Distance-based classification." },
    { day: 7, title: "Decision Trees", task: "Tree-based learning model." },
    { day: 8, title: "Random Forest", task: "Ensemble learning technique." },
    { day: 9, title: "Support Vector Machine", task: "Classification using hyperplanes." },
    { day: 10, title: "Naive Bayes", task: "Probability-based classification." },
    { day: 11, title: "Clustering", task: "K-Means clustering algorithm." },
    { day: 12, title: "Dimensionality Reduction", task: "PCA basics." },
    { day: 13, title: "Model Evaluation", task: "Confusion matrix, accuracy, precision." },
    { day: 14, title: "Cross Validation", task: "Avoid overfitting." },
    { day: 15, title: "Hyperparameter Tuning", task: "GridSearch & RandomSearch." },
    { day: 16, title: "Feature Engineering", task: "Improving model performance." },
    { day: 17, title: "Pipeline Creation", task: "Building ML pipelines." },
    { day: 18, title: "Model Deployment Basics", task: "Flask/FastAPI introduction." },
    { day: 19, title: "ML Project Structure", task: "Organizing ML project files." },
    { day: 20, title: "Mini ML Project", task: "Build & deploy end-to-end ML model." },
  ];

  return (
    <Box className="ml-container">

      <Typography variant="h4" className="ml-title">
        Machine Learning – 20 Day Learning Plan
      </Typography>

      <br /><br />

      <Typography className="ml-subtitle">
        Master core ML concepts and build real-world models step by step.
      </Typography>

      <br />

      <Grid container spacing={4} className="ml-grid">
        {days.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="ml-card">
              <CardContent>

                <Typography variant="h6" className="ml-day-title">
                  Day {item.day}: {item.title}
                </Typography>

                <br />

                <Typography className="ml-task">
                  {item.task}
                </Typography>

                <br />

                <Box className="ml-btn-box">
                  <Button variant="contained" className="ml-btn">
                    Start Day
                  </Button>

                  <Button variant="outlined" className="ml-resource-btn">
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
