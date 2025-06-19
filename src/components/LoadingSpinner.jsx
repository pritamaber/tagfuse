// src/components/LoadingSpinner.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function LoadingSpinner() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full min-h-[40vh] flex flex-col items-center justify-center">
      {/* Spinner */}
      <div
        className={`animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-6 ${
          theme === "dark" ? "border-blue-400" : "border-blue-600"
        }`}
        role="status"
        aria-label="Loading"
      />
      {/* Message */}
      <div
        className={`text-center text-base font-semibold mb-2 ${
          theme === "dark" ? "text-zinc-100" : "text-zinc-700"
        }`}
      >
        Loading, please wait a moment...
      </div>
      <div
        className={`text-center text-xs ${
          theme === "dark" ? "text-zinc-400" : "text-zinc-500"
        }`}
      >
        This project is running on a free Render server. <br />
        It may take a few seconds to wake up. <br />
        If you want to help make{" "}
        <span className="text-blue-600 dark:text-blue-400 font-semibold">
          tagfuse
        </span>{" "}
        faster, please consider a donation!
      </div>
    </div>
  );
}
