import { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskBoard";
import Support from "./components/Support";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import RedirectIfAuth from "./components/RedirectIfAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContext);
  // Set .dark on <html> tag based on theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className={
        "min-h-screen bg-gradient-to-br " +
        (theme === "dark"
          ? "from-zinc-900 to-zinc-950"
          : "from-gray-100 to-white")
      }
    >
      <Router>
        <Navbar /> {/* ✅ Always show Navbar on top */}
        <Routes>
          {/* Protected Dashboard/Home */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <main className="max-w-4xl mx-auto flex flex-col items-center px-2 mt-8">
                  <TaskBoard />
                </main>
              </ProtectedRoute>
            }
          />
          {/* Support Page - Public */}
          <Route
            path="/support"
            element={
              <main className="max-w-4xl mx-auto flex flex-col items-center px-2 mt-8">
                <Support />
              </main>
            }
          />
          {/* Login route (let AuthLayout inside the page handle centering) */}
          <Route
            path="/login"
            element={
              <RedirectIfAuth>
                <Login />
              </RedirectIfAuth>
            }
          />
          {/* Signup route */}
          <Route
            path="/signup"
            element={
              <RedirectIfAuth>
                <Signup />
              </RedirectIfAuth>
            }
          />
          {/* Profile - protected and centered */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <main className="max-w-4xl mx-auto flex flex-col items-center px-2 mt-8">
                  <Profile />
                </main>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
