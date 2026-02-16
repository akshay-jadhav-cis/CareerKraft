import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./DeepLearning.css";

export default function DeepLearning() {

  const days = [
    { day: 1, title: "Introduction to Deep Learning", task: "What is Deep Learning? Neural network basics." },
    { day: 2, title: "Perceptron & Neural Networks", task: "Structure of artificial neurons." },
    { day: 3, title: "Activation Functions", task: "ReLU, Sigmoid, Tanh explained." },
    { day: 4, title: "Loss Functions", task: "MSE, Cross Entropy basics." },
    { day: 5, title: "Backpropagation", task: "How neural networks learn." },
    { day: 6, title: "TensorFlow Basics", task: "Build first neural network model." },
    { day: 7, title: "Keras API", task: "Model creation & training." },
    { day: 8, title: "Model Optimization", task: "Optimizers like Adam, SGD." },
    { day: 9, title: "CNN Basics", task: "Convolutional Neural Networks intro." },
    { day: 10, title: "Image Classification", task: "Train CNN on image dataset." },
    { day: 11, title: "RNN Basics", task: "Recurrent Neural Networks intro." },
    { day: 12, title: "LSTM & GRU", task: "Advanced sequence models." },
    { day: 13, title: "Dropout & Regularization", task: "Prevent overfitting." },
    { day: 14, title: "Model Evaluation", task: "Accuracy, precision & validation." },
    { day: 15, title: "Mini Deep Learning Project", task: "Build and train real-world DL model." },
  ];

  return (
    <Box className="ml-container">

      <Typography variant="h4" className="ml-title">
        Deep Learning – 15 Day Learning Plan
      </Typography>

      <br /><br />

      <Typography className="ml-subtitle">
        Master neural networks and deep learning step by step.
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
