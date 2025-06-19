import TaskCard from "./TaskCard";

export default function ProgressColumn({ tasks }) {
  const progressTasks = tasks.filter((task) => task.status === "progress");
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">In Progress</h2>
      {progressTasks.map((task) => (
        <TaskCard key={task._id} {...task} />
      ))}
    </div>
  );
}
