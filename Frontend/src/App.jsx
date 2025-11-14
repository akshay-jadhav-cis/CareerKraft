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
import Placements from "./studymaterial/Placements";
import Aids from "./studymaterial/Aids";
import Devops from "./studymaterial/Devops";
import DSA from "./studymaterial/DSA";
import WebDevelopment from "./studymaterial/WebDevelopment";
import Html from "./studymaterial/webdevelopment/Html";
import Css from "./studymaterial/webdevelopment/CSS";
import Js from "./studymaterial/webdevelopment/Js";

function App() {
  const navigate=useNavigate();
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAbouts, setShowAbouts] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/users/check-auth", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setIsLoggedIn(data.isLoggedIn))
      .catch(() => setIsLoggedIn(false));
  }, []);
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
        <Route path="/dashboard/placements" element={<Placements/>}/>
        <Route path="/dashboard/placements/ai-data-science" element={<Aids/>}/>
        <Route path="/dashboard/placements/devops" element={<Devops/>}/>
        <Route path="/dashboard/placements/dsa" element={<DSA/>}/>
        <Route path="/dashboard/placements/web-development" element={<WebDevelopment/>}/>
        <Route path="/dashboard/placements/web-development/Html" element={<Html/>}/>
        <Route path="/dashboard/placements/web-development/css" element={<Css/>}/>
        <Route path="/dashboard/placements/web-development/js" element={<Js/>}/>
      </Routes>

      <Feature visible={showFeatures} onClose={() => setShowFeatures(false)} />
      <About visible={showAbouts} onClose={() => setShowAbouts(false)} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
