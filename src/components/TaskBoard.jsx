import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TagListInfo from "./TagListInfo";
import TodoColumn from "./TodoColumn";
import ProgressColumn from "./ProgressColumn";
import DoneColumn from "./DoneColumn";
import ProjectListInfo from "./ProjectListInfo";

export default function TaskBoard() {
  const { tasks } = useContext(TaskContext);
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedProject, setSelectedProject] = useState("");

  if (!tasks) return <div>Loading...</div>;

  // Filter tasks by selectedProject and/or selectedTag
  const filteredTasks = tasks.filter((task) => {
    const matchesProject = !selectedProject || task.project === selectedProject;
    const matchesTag =
      !selectedTag ||
      (Array.isArray(task.tags) && task.tags.includes(selectedTag));
    return matchesProject && matchesTag;
  });

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center">
      {/* Project filter (buttons) */}
      <ProjectListInfo
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      {/* Tag filter (buttons) */}
      <TagListInfo selectedTag={selectedTag} setSelectedTag={setSelectedTag} />

      <div className="max-w-4xl w-full mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TodoColumn tasks={filteredTasks} />
          <ProgressColumn tasks={filteredTasks} />
          <DoneColumn tasks={filteredTasks} />
        </div>
      </div>
    </div>
  );
}
