import TaskCard from "./TaskCard";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import theme context

export default function ProgressColumn({ tasks }) {
  // Theme for consistent header color in light/dark mode
  const { theme } = useContext(ThemeContext);
  // Filter tasks to show only those with status "progress"
  const progressTasks = tasks.filter((task) => task.status === "progress");
  return (
    <div>
      <h2
        className={`text-lg font-semibold mb-2 transition ${
          theme === "dark" ? "text-zinc-100" : "text-zinc-900"
        }`}
      >
        In Progress
      </h2>
      {/* Render each in progress task */}
      {progressTasks.map((task) => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  );
}
