import { Trash2 } from "lucide-react"; // import the icon
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function TaskDeleteButton({ onClick, disabled = false }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label="Delete task"
      className={`p-2 rounded-full transition
        ${
          theme === "dark"
            ? "hover:bg-zinc-800 text-red-400"
            : "hover:bg-zinc-100 text-red-600"
        }
        disabled:opacity-50`}
      type="button"
    >
      <Trash2 className="w-5 h-5" />
    </button>
  );
}
