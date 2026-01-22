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

// Icon Mapping
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
        if (!visible) {
            document.body.style.overflow = "auto";
            return;
        }

        document.body.style.overflow = "hidden";
        setLoading(true);

        axios
            .get("/about/all")
            .then((res) => {
                console.log("ABOUT RESPONSE:", res.data);
                setAbout(
                    Array.isArray(res.data) ? res.data : res.data.about || []
                );
            })
            .catch((e) => {
                console.error("Error fetching about:", e);
                setAbout([]);
            })
            .finally(() => setLoading(false));

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="modal-backdrop">
            <Paper className="modal-window about-modal" elevation={6}>
                {/* Close Button */}
                <IconButton className="modal-close" onClick={onClose}>
                    <CloseIcon />
                </IconButton>

                {/* Header */}
                <Typography variant="h4" className="about-header">
                    Why <span className="modal-blue">CareerCraft?</span>
                </Typography>

                <Typography variant="subtitle1" className="about-sub">
                    We help students build real career growth with confidence.
                </Typography>

                {/* Loader */}
                {loading ? (
                    <Box display="flex" justifyContent="center" mt={5}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Grid container spacing={3} className="feature-grid">
                        {Array.isArray(about) && about.length > 0 ? (
                            about.map((A, idx) => (
                                <Grid item xs={12} sm={6} md={6} key={idx}>
                                    <Paper className="feature-card" elevation={3}>
                                        <Box className="feature-icon">
                                            {iconMap[A.icon] || <StarsIcon />}
                                        </Box>

                                        <Typography variant="h6" className="feature-title">
                                            {A.title}
                                        </Typography>

                                        <Typography variant="body2" className="feature-desc">
                                            {A.description}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))
                        ) : (
                            <Typography
                                variant="body1"
                                sx={{ textAlign: "center", width: "100%", mt: 4 }}
                            >
                                No information available.
                            </Typography>
                        )}
                    </Grid>

                )}
            </Paper>
        </div>
    );
}
