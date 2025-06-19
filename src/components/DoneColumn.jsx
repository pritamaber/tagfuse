import TaskCard from "./TaskCard";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DoneColumn({ tasks }) {
  const { theme } = useContext(ThemeContext);
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2
          className={`text-lg font-semibold transition ${
            theme === "dark" ? "text-zinc-100" : "text-zinc-900"
          }`}
        >
          Done
        </h2>
      </div>

      {doneTasks.map((task) => (
        <TaskCard key={task._id || task.id} {...task} />
      ))}
    </div>
  );
}
