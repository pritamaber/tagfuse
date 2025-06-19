import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TagListInfo from "./TagListInfo";
import TodoColumn from "./TodoColumn";
import ProgressColumn from "./ProgressColumn";
import DoneColumn from "./DoneColumn";
import ProjectListInfo from "./ProjectListInfo";
import LoadingSpinner from "./LoadingSpinner";

export default function TaskBoard() {
  const { tasks } = useContext(TaskContext);
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedProject, setSelectedProject] = useState("");

  if (!tasks || !Array.isArray(tasks)) return <LoadingSpinner />;

  const filteredTasks = tasks.filter((task) => {
    const matchesProject = !selectedProject || task.project === selectedProject;
    const matchesTag =
      !selectedTag ||
      (Array.isArray(task.tags) && task.tags.includes(selectedTag));
    return matchesProject && matchesTag;
  });

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center">
      <ProjectListInfo
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <TagListInfo selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

      {/* Start Card */}
      <div
        className="
          max-w-5xl w-full mx-auto px-2 md:px-0
          rounded-2xl shadow-lg border
          bg-transparent
          transition
          mt-4
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 px-2 md:px-8">
          <TodoColumn tasks={filteredTasks} />
          <ProgressColumn tasks={filteredTasks} />
          <DoneColumn tasks={tasks} />
        </div>
      </div>
      {/* End Card */}
    </div>
  );
}
