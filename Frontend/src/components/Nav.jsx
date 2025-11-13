import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Drawer,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Nav.css";

export default function Nav({ onFeaturesClick, onAboutClick, isLoggedIn, onLogout }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const menuItems = (
    <>
      <Button component={Link} to="/" color="inherit">Home</Button>
      <Button onClick={onFeaturesClick} color="inherit">Features</Button>
      <Button onClick={onAboutClick} color="inherit">About</Button>

      {isLoggedIn ? (
        <>
          <Button component={Link} to="/dashboard" color="inherit">
            Dashboard
          </Button>
          <Button
            color="error"
            onClick={onLogout}
            startIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button component={Link} to="/login" color="inherit">Login</Button>
          <Button
            component={Link}
            to="/signup"
            variant="outlined"
            sx={{ ml: 1 }}
          >
            Signup
          </Button>
        </>
      )}
    </>
  );

  return (
    <AppBar
      position="sticky"
      className="navbar-appbar"
      elevation={0}
      sx={{ backgroundColor: "#ffffff", color: "#333" }}
    >
      <Toolbar className="navbar-toolbar">

        <Typography
          variant="h6"
          className="nav-title"
          component={Link}
          to="/"
        >
          Career Kraft
        </Typography>

        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Button className="nav-btn" component={Link} to="/">Home</Button>
            <Button className="nav-btn" onClick={onFeaturesClick}>Features</Button>
            <Button className="nav-btn" onClick={onAboutClick}>About</Button>

            {isLoggedIn ? (
              <>
                <Button className="nav-btn" component={Link} to="/dashboard">
                  Dashboard
                </Button>
                <Button
                  className="nav-logout"
                  color="error"
                  startIcon={<LogoutIcon />}
                  onClick={onLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button className="nav-btn" component={Link} to="/login">
                  Login
                </Button>
                <Button
                  className="nav-btn"
                  component={Link}
                  to="/signup"
                  variant="outlined"
                >
                  Signup
                </Button>
              </>
            )}
          </Box>
        ) : (
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box className="drawer-container" onClick={() => setDrawerOpen(false)}>
          {menuItems}
        </Box>
      </Drawer>
    </AppBar>
  );
}
