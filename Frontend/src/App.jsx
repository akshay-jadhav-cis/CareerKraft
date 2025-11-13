import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Nav from "./components/Nav";
import HomePage from "./HomePage";
import UserLogin from "./users/UserLogin";
import UserSignup from "./users/UserSignup";
import Dashboard from "./studymaterial/DashBoard";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import About from "./components/About";
import ProtectedRoute from "./components/ProtectedRoute";
import TwoFactorSetup from "./users/TwoFactorSetup";
import TwoFALogin from "./users/TwoFALogin";

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  const navigate=useNavigate();
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAbouts, setShowAbouts] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔥 Check login status on page load
  useEffect(() => {
    fetch("http://localhost:5000/users/check-auth", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setIsLoggedIn(data.isLoggedIn))
      .catch(() => setIsLoggedIn(false));
  }, []);

  // 🔥 Logout function
  const handleLogout = async () => {
    await fetch("http://localhost:5000/users/logout", {
      method: "GET",
      credentials: "include",
    });

    setIsLoggedIn(false);
    navigate("/"); 
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav
        onFeaturesClick={() => setShowFeatures(true)}
        onAboutClick={() => setShowAbouts(true)}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />

        <Route
          path="/login"
          element={<UserLogin onLogin={() => setIsLoggedIn(true)} />}
        />

        <Route
          path="/signup"
          element={<UserSignup onSignup={() => setIsLoggedIn(true)} />}
        />

        <Route path="/2fa-setup" element={<TwoFactorSetup />} />
        <Route path="/2fa-login" element={<TwoFALogin />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Feature visible={showFeatures} onClose={() => setShowFeatures(false)} />
      <About visible={showAbouts} onClose={() => setShowAbouts(false)} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
