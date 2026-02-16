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

// ✅ DevOps Submodules (MATCHING YOUR FILE NAMES EXACTLY)
import Git from "./studymaterial/devops/TempGit";
import Linux from "./studymaterial/devops/TempLinux";
import Docker from "./studymaterial/devops/TempDocker";
import Kubernettes from "./studymaterial/devops/TempKubernettes";
import Cicd from "./studymaterial/devops/Cicd"
import Aws from "./studymaterial/devops/TempAws";
import MockDevopsTest from "./studymaterial/devops/MockDevopsTest";
function App() {
  const navigate = useNavigate();

  const [showFeatures, setShowFeatures] = useState(false);
  const [showAbouts, setShowAbouts] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuth = async () => {
    try {
      const res = await fetch("http://localhost:5000/users/check-auth", {
        credentials: "include",
      });
      const data = await res.json();
      setIsLoggedIn(data.isLoggedIn);
    } catch {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuth();
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
        {/* 🌍 PUBLIC ROUTES */}
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<UserLogin onLogin={checkAuth} />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/2fa-setup" element={<TwoFactorSetup onAuthSuccess={checkAuth} />} />
        <Route path="/2fa-login" element={<TwoFALogin onAuthSuccess={checkAuth} />} />

        {/* 🔒 Protected Dashboard */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* 📚 Placement Modules */}
        <Route
          path="/dashboard/placements"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><Placements /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/placements/ai-data-science"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><Aids /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/placements/devops"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><Devops /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/placements/dsa"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><DSA /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/placements/web-development"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><WebDevelopment /></ProtectedRoute>}
        />

        {/* 🌐 Web Development Submodules */}
        <Route
          path="/dashboard/placements/web-development/html"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><Html /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/placements/web-development/css"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><Css /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/placements/web-development/js"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><Js /></ProtectedRoute>}
        />

        {/* 🚀 DevOps Submodules */}
        <Route
          path="/dashboard/placements/devops/linux"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><Linux /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/placements/devops/git"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><Git /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/placements/devops/docker"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><Docker /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/placements/devops/Aws"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><Aws /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/placements/devops/Cicd"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><Cicd /></ProtectedRoute>}
        />
        <Route
          path="/dashboard/placements/devops/kubernetes"
          element={<ProtectedRoute isLoggedIn={isLoggedIn}><Kubernettes /></ProtectedRoute>}
        />
        <Route 
        path="/dashboard/placements/devops/mock-test"
        element={<ProtectedRoute isLoggedIn={isLoggedIn}><MockDevopsTest/></ProtectedRoute>}/>
      </Routes>

      <Feature visible={showFeatures} onClose={() => setShowFeatures(false)} />
      <About visible={showAbouts} onClose={() => setShowAbouts(false)} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
