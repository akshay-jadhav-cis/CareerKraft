import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./HomePage";
import UserLogin from "./users/UserLogin";
import UserSignup from "./users/UserSignup";
import Dashboard from "./studymaterial/Dashboard";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import About from "./components/About";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAbouts, setShowAbouts] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/users/check-auth", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setIsLoggedIn(data.loggedIn))
      .catch(() => setIsLoggedIn(false));
  }, []);

  const handleLogout = async () => {
    await fetch("/users/logout", {
      method: "GET",
      credentials: "include",
    });

    setIsLoggedIn(false);

    navigate("/"); // ✅ redirect after logout
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
        <Route path="/login" element={<UserLogin onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/signup" element={<UserSignup onSignup={() => setIsLoggedIn(true)} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Feature visible={showFeatures} onClose={() => setShowFeatures(false)} />
      <About visible={showAbouts} onClose={() => setShowAbouts(false)} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
