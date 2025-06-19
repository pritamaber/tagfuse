import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // lucide icons for crisp, non-emoji icons

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`w-full border-b ${
        theme === "dark"
          ? "bg-zinc-950 border-zinc-800"
          : "bg-white border-gray-200"
      } transition`}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Left: Logo with space */}
        <div className="flex items-center">
          {/* Add margin for left spacing */}
          <span className="mr-4" />
          {/* TaskJet logo/text */}
          <span
            className={`font-extrabold text-xl tracking-tight ${
              theme === "dark" ? "text-white" : "text-zinc-900"
            }`}
          >
            TaskJet
          </span>
        </div>

        {/* Center: Fills space for centered app content (in layout, not here) */}
        <div className="flex-1 flex justify-center"></div>

        {/* Right: Theme toggle */}
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-zinc-800" />
            )}
          </button>
          {/* Right spacing */}
          <span className="ml-4" />
        </div>
      </div>
    </nav>
  );
}
