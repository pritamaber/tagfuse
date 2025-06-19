import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskBoard";
import TagListInfo from "./components/TagListInfo";
import Support from "./components/Support"; // Import your Support page
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import router

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    // App-wide theme wrapper
    <div
      className={
        theme === "dark"
          ? "dark bg-zinc-950 min-h-screen"
          : "bg-white min-h-screen"
      }
    >
      <Router>
        <Navbar />
        {/* Main content area */}
        <main className="max-w-4xl mx-auto flex flex-col items-center px-2 mt-8">
          <Routes>
            {/* Home: TagListInfo and TaskBoard */}
            <Route
              path="/"
              element={
                <>
                  <TagListInfo />
                  <TaskBoard />
                </>
              }
            />
            {/* Support Page */}
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
