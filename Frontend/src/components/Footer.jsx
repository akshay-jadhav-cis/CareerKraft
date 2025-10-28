import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

export default function Footer() {
  return (
    <Box className="footer-container">
      <Box className="footer-content">

        <Box className="footer-section">
          <Typography variant="h6" className="footer-title">Privacy</Typography>
          <Link href="#" className="footer-link">Privacy Policy</Link>
          <Link href="#" className="footer-link">Terms of Service</Link>
          <Link href="#" className="footer-link">Cookie Policy</Link>
        </Box>

        <Box className="footer-section">
          <Typography variant="h6" className="footer-title">Company</Typography>
          <Link href="#" className="footer-link">About Us</Link>
          <Link href="#" className="footer-link">Careers</Link>
          <Link href="#" className="footer-link">Contact</Link>
        </Box>

        <Box className="footer-section">
          <Typography variant="h6" className="footer-title">Follow Us</Typography>
          <IconButton className="social-icon">
            <FacebookIcon />
          </IconButton>
          <IconButton className="social-icon">
            <TwitterIcon />
          </IconButton>
          <IconButton className="social-icon">
            <InstagramIcon />
          </IconButton>
          <IconButton className="social-icon">
            <LinkedInIcon />
          </IconButton>
        </Box>

      </Box>

      <Box className="footer-bottom">
        <Typography variant="body2">
          © 2025 CareerCraft. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
