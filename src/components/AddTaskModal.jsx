import { useState, useContext } from "react";
import { X } from "lucide-react";
// import user auth
import useAuth from "../hooks/useAuth";
// import theme context
import { ThemeContext } from "../context/ThemeContext";

export default function AddTaskModal({ onClose, onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [tags, setTags] = useState("");
  const [project, setProject] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // destruct user fron use auth
  const { user } = useAuth();

  // destruct theme from context
  const { theme } = useContext(ThemeContext);

  async function handleAddTask(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.impritam.com/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          note,
          tags: tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
          status: "todo",
          project,
          userId: user.uid,
        }),
      });
      if (!res.ok) {
        const errorRes = await res.json();
        throw new Error(errorRes.error || "Failed to add task");
      }
      if (onTaskAdded) await onTaskAdded();
      onClose();
    } catch (err) {
      setError(err.message || "Error adding task");
    } finally {
      setLoading(false);
    }
  }

  // Common classes for inputs and textarea
  const inputClass = `w-full border rounded p-2 text-sm focus:outline-none transition
    ${
      theme === "dark"
        ? "bg-zinc-800 text-zinc-100 border-zinc-700 placeholder-zinc-400"
        : "bg-white text-zinc-900 border-gray-300 placeholder-gray-400"
    }
  `;

  const labelClass = `block text-sm font-medium mb-1 transition
    ${theme === "dark" ? "text-zinc-200" : "text-zinc-800"}
  `;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Modal box */}
      <form
        onSubmit={handleAddTask}
        className={`rounded-2xl shadow-xl max-w-md w-full p-6 relative transition
          ${theme === "dark" ? "bg-zinc-900" : "bg-white"}
        `}
        autoFocus
      >
        {/* Close button */}
        <button
          type="button"
          className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <h2
          className={`font-bold text-lg mb-4 text-center ${
            theme === "dark" ? "text-zinc-100" : "text-zinc-900"
          }`}
        >
          Add Task
        </h2>
        <div className="mb-3">
          <label className={labelClass}>
            Title <span className="text-red-500">*</span>
          </label>
          <input
            className={inputClass}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength={60}
            placeholder="Task title"
          />
        </div>
        <div className="mb-3">
          <label className={labelClass}>Note</label>
          <textarea
            className={inputClass}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            maxLength={200}
            placeholder="(optional)"
          />
        </div>
        <div className="mb-3">
          <label className={labelClass}>
            Project <span className="text-red-500">*</span>
          </label>
          <input
            className={inputClass}
            value={project}
            onChange={(e) => setProject(e.target.value)}
            required
            placeholder="e.g. TaskJet"
          />
        </div>
        <div className="mb-4">
          <label className={labelClass}>
            Tags{" "}
            <span className="text-xs text-gray-400 dark:text-zinc-400">
              (comma separated)
            </span>
          </label>
          <input
            className={inputClass}
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="feature, urgent"
          />
        </div>
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        <button
          type="submit"
          disabled={loading || !title.trim() || !project.trim()}
          className="w-full bg-blue-600 text-white rounded p-2 font-semibold hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Adding..." : "Add Task"}
        </button>
      </form>
    </div>
  );
}
