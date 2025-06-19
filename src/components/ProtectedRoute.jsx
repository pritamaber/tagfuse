import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // If no user, redirect to login page
  if (!user) return <Navigate to="/" replace />;

  // Otherwise, render the protected content
  return children;
}
