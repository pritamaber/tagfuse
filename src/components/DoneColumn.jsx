import TaskCard from "./TaskCard";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import theme context

export default function DoneColumn({ tasks }) {
  // Theme for consistent header color in light/dark mode
  const { theme } = useContext(ThemeContext);

  // Filter tasks to show only those with status "done"
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div>
      {/* Themed "Done" header */}
      <h2
        className={`text-lg font-semibold mb-2 transition ${
          theme === "dark" ? "text-zinc-100" : "text-zinc-900"
        }`}
      >
        Done
      </h2>

      {/* Render each completed task */}
      {doneTasks.map((task) => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  );
}
