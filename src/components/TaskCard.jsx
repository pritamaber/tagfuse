import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TaskContext } from "../context/TaskContext";

// import progress selector
import TaskStatusDropdown from "./TaskStatusDropdown";
// import task delete button
import TaskDeleteButton from "./TaskDeleteButton";

// import tag colors
import { TAG_COLORS } from "../constants/tagColors";

// Minimal, context-based TaskCard
export default function TaskCard({
  _id,
  title,
  note,
  tags = [],
  project,
  status,
}) {
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useContext(TaskContext);

  // function to handle task delete
  async function handleDelete() {
    // 1. Call backend API to delete the task
    await fetch(`https://api.impritam.com/api/tasks/${_id}`, {
      method: "DELETE",
    });

    // 2. Update local state (remove task from UI)
    dispatch({ type: "DELETE", payload: _id });
  }

  // Set card background and text based on theme
  const cardTheme =
    theme === "dark"
      ? "bg-zinc-900 border-zinc-700 text-zinc-100"
      : "bg-white border-gray-200 text-gray-900";

  return (
    <>
      <div
        className={`rounded-2xl border shadow-sm px-4 py-3 mb-4 min-w-[240px] transition
        ${cardTheme}
        hover:shadow-md group`}
      >
        <div className="flex justify-between items-center mb-1">
          <span
            className={`text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded
            ${
              status === "todo"
                ? "bg-gray-100 text-gray-500"
                : status === "progress"
                ? "bg-blue-100 text-blue-600"
                : "bg-green-100 text-green-700"
            }
          `}
          >
            {status}
          </span>
          {/* Tag badges */}
          <div className="flex gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className={
                  "inline-block text-[11px] px-2 py-[2px] rounded-full border font-medium " +
                  (TAG_COLORS[tag] ||
                    "bg-gray-50 text-gray-600 border-gray-200")
                }
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p>Project - {project}</p>
        <h3 className="font-bold text-base mb-1 truncate">{title}</h3>
        {note && (
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            {note}
          </p>
        )}
        <TaskStatusDropdown
          status={status}
          onChange={async (newStatus) => {
            // 1. Call backend API to update status
            await fetch(`https://api.impritam.com/api/tasks/${_id}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ status: newStatus }),
            });

            // 2. Update local state via reducer
            if (newStatus === "todo")
              dispatch({ type: "ADD_TO_TODO", payload: _id });
            else if (newStatus === "progress")
              dispatch({ type: "ADD_TO_PROGRESS", payload: _id });
            else if (newStatus === "done")
              dispatch({ type: "ADD_TO_DONE", payload: _id });
          }}
        />
        <TaskDeleteButton onClick={handleDelete} />
      </div>
    </>
  );
}
