import TaskCard from "./TaskCard";
import { Plus } from "lucide-react";
import { useState, useContext } from "react";
import AddTaskModal from "./AddTaskModal";
import { TaskContext } from "../context/TaskContext";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../hooks/useAuth";

export default function TodoColumn({ tasks }) {
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();

  // Contexts
  const { dispatch } = useContext(TaskContext);
  const { theme } = useContext(ThemeContext);

  // Defensive: Ensure tasks is always an array
  const safeTasks = Array.isArray(tasks) ? tasks : [];
  const todoTasks = safeTasks.filter((task) => task.status === "todo");

  // Refresh tasks after add (with error guard)

  function refreshTasks() {
    fetch(`https://api.impritam.com/api/tasks?userId=${user.uid}`)
      .then((res) => res.json())
      .then((tasks) => {
        if (Array.isArray(tasks)) {
          dispatch({ type: "SET_TASKS", payload: tasks });
        } else {
          dispatch({ type: "SET_TASKS", payload: [] });
        }
      })
      .catch((err) => {
        dispatch({ type: "SET_TASKS", payload: [] });
      });
  }

  return (
    <div>
      {/* Header: "To Do" label and Add button */}
      <div className="flex items-center justify-between mb-2">
        <h2
          className={`font-bold text-lg transition ${
            theme === "dark" ? "text-zinc-100" : "text-zinc-900"
          }`}
        >
          To Do
        </h2>
        <button
          className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          onClick={() => setShowModal(true)}
          aria-label="Add Task"
        >
          <Plus
            className={`w-5 h-5 ${
              theme === "dark" ? "text-zinc-100" : "text-zinc-900"
            }`}
          />
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <AddTaskModal
          onClose={() => setShowModal(false)}
          onTaskAdded={refreshTasks}
        />
      )}

      {/* Render todo tasks only if array */}
      {todoTasks.length === 0 ? (
        <p
          className={`text-sm italic mt-2 ${
            theme === "dark" ? "text-zinc-500" : "text-zinc-400"
          }`}
        >
          No tasks to do!
        </p>
      ) : (
        todoTasks.map((task) => <TaskCard key={task._id} {...task} />)
      )}
    </div>
  );
}
