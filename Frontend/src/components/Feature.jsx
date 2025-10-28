import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Grid, Paper, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import './Feature.css';

// Icon Mapping ✅
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import AssignmentIcon from "@mui/icons-material/Assignment";

const iconMap = {
  school: <SchoolIcon />,
  code: <CodeIcon />,
  trending: <TrendingUpIcon />,
  security: <SecurityIcon />,
  assignment: <AssignmentIcon />,
};

export default function Feature({ visible, onClose }) {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden"; // ✅ Disable scroll
      setLoading(true);
      axios.get('/features/all')
        .then(res => setFeatures(res.data))
        .catch(err => console.error("Error fetching features:", err))
        .finally(() => setLoading(false));
    } else {
      document.body.style.overflow = "auto"; // ✅ Enable scroll
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="modal-backdrop">
      <Paper className="modal-window" elevation={6}>
        {/* Close Button */}
        <IconButton className="modal-close" onClick={onClose}>
          <CloseIcon />
        </IconButton>

        {/* Headings */}
        <Typography variant="h4" className="modal-title">
          Everything You Need to <span className="modal-blue">Succeed in Your Career</span>
        </Typography>

        <Typography variant="subtitle1" className="modal-subtitle">
          CareerCraft provides AI-powered tools & resources to make you job-ready with confidence.
        </Typography>

        {/* Loader */}
        {loading ? (
          <Box display="flex" justifyContent="center" mt={5}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3} className="feature-grid">
            {features.map((f, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper className="feature-card" elevation={3}>
                  <Box className="feature-icon">
                    {iconMap[f.icon] || <SchoolIcon />} {/* ✅ Fallback icon */}
                  </Box>
                  <Box>
                    <Typography variant="h6" className="feature-title">{f.title}</Typography>
                    <Typography variant="body2" className="feature-desc">{f.desc}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>
    </div>
  );
}
