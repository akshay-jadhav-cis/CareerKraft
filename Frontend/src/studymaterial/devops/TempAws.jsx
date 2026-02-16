import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import "./Aws.css";

export default function Aws() {

  const days = [
    { day: 1, title: "Introduction to Cloud", task: "What is Cloud Computing? IaaS, PaaS, SaaS." },
    { day: 2, title: "AWS Overview", task: "AWS global infrastructure & regions." },
    { day: 3, title: "IAM Basics", task: "Users, groups, roles & policies." },
    { day: 4, title: "EC2 Instances", task: "Launch and manage EC2 servers." },
    { day: 5, title: "Security Groups", task: "Configure firewall rules in AWS." },
    { day: 6, title: "EBS Storage", task: "Attach storage volumes to EC2." },
    { day: 7, title: "S3 Basics", task: "Object storage & bucket configuration." },
    { day: 8, title: "Static Website Hosting", task: "Host static website using S3." },
    { day: 9, title: "VPC Basics", task: "Virtual Private Cloud networking." },
    { day: 10, title: "Subnets & Routing", task: "Public & private subnet setup." },
    { day: 11, title: "Load Balancer", task: "Application Load Balancer setup." },
    { day: 12, title: "Auto Scaling", task: "Scale applications automatically." },
    { day: 13, title: "RDS Basics", task: "Managed database service in AWS." },
    { day: 14, title: "CloudWatch", task: "Monitoring & logging services." },
    { day: 15, title: "Elastic Beanstalk", task: "Deploy applications easily." },
    { day: 16, title: "Lambda Basics", task: "Serverless computing intro." },
    { day: 17, title: "API Gateway", task: "Create and manage APIs." },
    { day: 18, title: "Cloud Security", task: "Best practices & security measures." },
    { day: 19, title: "Cost Management", task: "Billing dashboard & cost optimization." },
    { day: 20, title: "Final Project", task: "Deploy full-stack app on AWS." },
  ];

  return (
    <Box className="aws-container">

      <Typography variant="h4" className="aws-title">
        AWS Cloud 20-Day Learning Plan
      </Typography>

      <br /><br />

      <Typography className="aws-subtitle">
        Master AWS fundamentals for cloud & DevOps career growth.
      </Typography>

      <br />

      <Grid container spacing={4} className="aws-grid">
        {days.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="aws-card">
              <CardContent>

                <Typography variant="h6" className="aws-day-title">
                  Day {item.day}: {item.title}
                </Typography>

                <br />

                <Typography className="aws-task">
                  {item.task}
                </Typography>

                <br />

                <Box className="aws-btn-box">
                  <Button variant="contained" className="aws-btn">
                    Start Day
                  </Button>
                  <Button variant="outlined" className="aws-resource-btn">
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
