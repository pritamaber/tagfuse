import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon, UserCircle } from "lucide-react"; // Lucide icons
import { Link } from "react-router-dom";

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
        {/* Left: Logo with margin */}
        <div className="flex items-center">
          <span className="mr-4" />
          <Link
            to="/"
            className={`font-extrabold text-xl tracking-tight ${
              theme === "dark" ? "text-white" : "text-zinc-900"
            }`}
          >
            TaskJet
          </Link>
        </div>

        {/* Center: Support link */}
        <div className="flex-1 flex justify-center">
          <Link
            to="/support"
            className="text-sm font-medium hover:underline transition"
          >
            Support
          </Link>
        </div>

        {/* Right: Theme toggle and avatar */}
        <div className="flex items-center gap-2">
          {/* Placeholder for user avatar (profile menu to add later) */}
          <button
            className="p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            aria-label="Profile"
            // Add onClick for menu later
            tabIndex={-1} // visually present, but not focusable for now
          >
            <UserCircle className="w-7 h-7 text-zinc-400" />
          </button>
          {/* Theme toggle */}
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
          <span className="ml-2" />
        </div>
      </div>
    </nav>
  );
}
