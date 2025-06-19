// src/context/useAuth.js
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Custom hook for consuming AuthContext
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
