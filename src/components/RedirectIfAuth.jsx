// src/components/RedirectIfAuth.jsx

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * RedirectIfAuth - if already logged in, redirect to /
 */
export default function RedirectIfAuth({ children }) {
  const { user } = useAuth();
  if (user) return <Navigate to="/dashboard" replace />;
  return children;
}
