import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { KanbanSquare } from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Classes that change with theme
  const navBg =
    theme === "dark"
      ? "bg-zinc-950 border-zinc-800"
      : "bg-white border-gray-200";
  const logoClass =
    theme === "dark"
      ? "text-blue-400 bg-zinc-900 hover:bg-zinc-800"
      : "text-blue-700 bg-blue-100 hover:bg-blue-200";
  const profileBg =
    theme === "dark"
      ? "bg-zinc-800 text-blue-200 hover:ring-blue-400"
      : "bg-gray-200 text-gray-700 hover:ring-blue-400";
  const buttonLogin =
    theme === "dark"
      ? "bg-blue-900 text-blue-100 hover:bg-blue-800"
      : "bg-blue-100 text-blue-600 hover:bg-blue-200";
  const buttonSignup =
    theme === "dark"
      ? "bg-green-900 text-green-100 hover:bg-green-800"
      : "bg-green-100 text-green-600 hover:bg-green-200";
  const buttonLogout =
    theme === "dark"
      ? "bg-red-900 text-red-100 hover:bg-red-800"
      : "bg-red-100 text-red-600 hover:bg-red-200";

  return (
    <nav className={`w-full shadow-sm border-b px-4 py-3 transition ${navBg}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          to="/"
          className={`flex items-center gap-2 text-xl font-extrabold px-3 py-2 rounded transition ${logoClass}`}
          aria-label="Taskjet Home"
        >
          <KanbanSquare className="w-6 h-6 text-blue-600" />
          <span>Taskjet</span>
        </Link>

        {/* Center: Support link */}
        <div className="flex-1 flex justify-center">
          <Link
            to="/support"
            className="text-sm font-medium hover:underline transition"
          >
            Support
          </Link>
        </div>

        {/* Right: Theme/Auth/Profile */}
        <div className="flex items-center space-x-3">
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
          {user ? (
            <>
              {/* Profile Icon */}
              <Link to="/profile">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium ring-1 ring-transparent hover:ring-2 transition ${profileBg}`}
                >
                  {user.email[0].toUpperCase()}
                </div>
              </Link>
              {/* Logout Button */}
              <button
                onClick={logout}
                className={`text-sm px-3 py-1 rounded transition ${buttonLogout}`}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`text-sm px-3 py-1 rounded transition ${buttonLogin}`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`text-sm px-3 py-1 rounded transition ${buttonSignup}`}
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
