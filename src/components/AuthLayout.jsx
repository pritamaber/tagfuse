// src/components/AuthLayout.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

/**
 * AuthLayout - wraps around login/signup forms
 * Provides centered form layout with optional heading and link
 */
export default function AuthLayout({
  title,
  children,
  subtitle,
  linkText,
  linkTo,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <div
        className={`
          w-full max-w-md
          shadow-lg rounded-2xl p-8 border
          ${
            theme === "dark"
              ? "bg-zinc-900 border-zinc-800 text-zinc-100"
              : "bg-white border-gray-200 text-gray-800"
          }
        `}
      >
        <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
        {subtitle && (
          <p className="text-sm mb-6 text-center">
            {subtitle}{" "}
            <Link
              to={linkTo}
              className="text-blue-500 hover:underline font-medium"
            >
              {linkText}
            </Link>
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
