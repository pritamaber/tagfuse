import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function TaskStatusDropdown({ status, onChange }) {
  const { theme } = useContext(ThemeContext);

  // Build className string based on theme
  const baseClass =
    "border rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 transition";
  const lightClass =
    "bg-white text-zinc-800 border-gray-300 focus:ring-blue-400";
  const darkClass =
    "bg-zinc-900 text-zinc-100 border-zinc-700 focus:ring-blue-600";

  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value)}
      className={`${baseClass} ${theme === "dark" ? darkClass : lightClass}`}
    >
      <option value="todo">To Do</option>
      <option value="progress">In Progress</option>
      <option value="done">Done</option>
    </select>
  );
}
