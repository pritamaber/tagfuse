// src/components/RedirectIfAuth.jsx

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * RedirectIfAuth - if already logged in, redirect to /
 */
export default function RedirectIfAuth({ children }) {
  const { user } = useAuth();

  // If already logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
