import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("http://localhost:5000/users/check-auth", {
          credentials: "include",
        });

        const data = await res.json();

        if (data.isLoggedIn) {
          setAllowed(true);
        } else {
          setAllowed(false);
        }
      } catch (err) {
        setAllowed(false);
      }
      setLoading(false);
    }

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return allowed ? children : <Navigate to="/login" replace />;
}
