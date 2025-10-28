import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Box,
    Typography,
    IconButton,
    Grid,
    Paper,
    CircularProgress,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import "./About.css";

// ✅ Icon Mapping for dynamic icon rendering
import PersonIcon from "@mui/icons-material/Person";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarsIcon from "@mui/icons-material/Stars";

const iconMap = {
    person: <PersonIcon />,
    psychology: <PsychologyIcon />,
    award: <EmojiEventsIcon />,
    star: <StarsIcon />,
};

export default function About({ visible, onClose }) {
    const [about, setAbout] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (visible) {
            document.body.style.overflow = "hidden"; // ✅ Block scroll
            setLoading(true);
            axios
                .get("/about/all")
                .then((res) => setAbout(res.data))
                .catch((e) => console.error("Error fetching about:", e))
                .finally(() => setLoading(false));
        } else {
            document.body.style.overflow = "auto"; // ✅ Restore scroll when closed
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="modal-backdrop">
            <Paper className="modal-window about-modal" elevation={6}>
                {/* Close */}
                <IconButton className="modal-close" onClick={onClose}>
                    <CloseIcon />
                </IconButton>

                {/* Main Heading */}
                <Typography variant="h4" className="about-header">
                    Why <span className="modal-blue">CareerKraft ?</span>
                </Typography>

                <Typography variant="subtitle1" className="about-sub">
                    We aim to help students build real career growth with confidence.
                </Typography>

                {/* Loader */}
                {loading ? (
                    <Box display="flex" justifyContent="center" mt={5}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Grid container spacing={3} className="feature-grid">
                        {about.map((A, idx) => (
                            <Grid item xs={12} sm={6} md={4} key={idx}>
                                <Paper className="feature-card" elevation={3}>
                                    <Box className="feature-icon">{A.icon}</Box>

                                    <Typography variant="h6" className="feature-title">
                                        {A.title}
                                    </Typography>

                                    <Typography variant="body2" className="feature-desc">
                                        {A.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>



                )}
            </Paper>
        </div>
    );
}
