// src/components/TaskStatusDropdown.jsx
export default function TaskStatusDropdown({ status, onChange }) {
  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded px-2 py-1 text-xs"
    >
      <option value="todo">To Do</option>
      <option value="progress">Progress</option>
      <option value="done">Done</option>
    </select>
  );
}
