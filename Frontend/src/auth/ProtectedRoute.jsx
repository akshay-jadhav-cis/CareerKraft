import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users/session-status", {
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => setIsAuthenticated(data.isLoggedIn))
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // or loader animation
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
