import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import "./MockDevopsTest.css";

export default function MockDevopsTest() {

  const questions = [
    {
      question: "1. What is Docker primarily used for?",
      options: ["Version Control", "Containerization", "Virtual Machines", "Monitoring"],
      answer: "Containerization"
    },
    {
      question: "2. Which command initializes a Git repository?",
      options: ["git start", "git init", "git create", "git new"],
      answer: "git init"
    },
    {
      question: "3. Which AWS service is used for object storage?",
      options: ["EC2", "RDS", "S3", "IAM"],
      answer: "S3"
    },
    {
      question: "4. Kubernetes manages?",
      options: ["Databases", "Containers", "Operating Systems", "Networks"],
      answer: "Containers"
    },
    {
      question: "5. CI/CD stands for?",
      options: [
        "Continuous Integration / Continuous Deployment",
        "Container Integration / Container Deployment",
        "Cloud Infrastructure / Cloud Deployment",
        "Code Integration / Code Deployment"
      ],
      answer: "Continuous Integration / Continuous Deployment"
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (index, value) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [index]: value
    });
  };

  const handleSubmit = () => {
    let total = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        total++;
      }
    });
    setScore(total);
  };

  return (
    <Box className="mock-container">

      <Typography variant="h4" className="mock-title">
        DevOps Mock Test
      </Typography>

      <br />

      {questions.map((q, index) => (
        <Card key={index} className="mock-card">
          <CardContent>

            <Typography className="mock-question">
              {q.question}
            </Typography>

            <RadioGroup
              value={selectedAnswers[index] || ""}
              onChange={(e) => handleChange(index, e.target.value)}
            >
              {q.options.map((option, i) => (
                <FormControlLabel
                  key={i}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>

          </CardContent>
        </Card>
      ))}

      <Box className="mock-submit-box">
        <Button variant="contained" className="mock-submit-btn" onClick={handleSubmit}>
          Submit Test
        </Button>
      </Box>

      {score !== null && (
        <Typography className="mock-score">
          Your Score: {score} / {questions.length}
        </Typography>
      )}

    </Box>
  );
}
