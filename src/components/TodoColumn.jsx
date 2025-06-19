import TaskCard from "./TaskCard";
import { Plus } from "lucide-react";
import { useState, useContext } from "react";
import AddTaskModal from "./AddTaskModal";
import { TaskContext } from "../context/TaskContext";
import { ThemeContext } from "../context/ThemeContext"; // Import theme context

export default function TodoColumn({ tasks }) {
  const [showModal, setShowModal] = useState(false);

  // Access dispatch for updating task list globally
  const { dispatch } = useContext(TaskContext);
  // Access theme to apply correct text color for header
  const { theme } = useContext(ThemeContext);

  // Filter tasks for "todo" status only
  const todoTasks = tasks.filter((task) => task.status === "todo");

  // Function to refresh task list after adding a new task
  function refreshTasks() {
    fetch("https://api.impritam.com/api/tasks")
      .then((res) => res.json())
      .then((tasks) => dispatch({ type: "SET_TASKS", payload: tasks }));
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

      {/* Add Task Modal, shown only when showModal is true */}
      {showModal && (
        <AddTaskModal
          onClose={() => setShowModal(false)}
          onTaskAdded={refreshTasks}
        />
      )}

      {/* Map through todo tasks and render each TaskCard */}
      {todoTasks.map((task) => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  );
}
