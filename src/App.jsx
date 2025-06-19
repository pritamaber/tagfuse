import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskBoard";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? "dark bg-zinc-950 min-h-screen"
          : "bg-white min-h-screen"
      }
    >
      <Navbar />
      <TaskBoard />
    </div>
  );
}

export default App;
