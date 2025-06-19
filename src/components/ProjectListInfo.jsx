// src/components/ProjectListInfo.jsx
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { getAllProjects } from "../utils/getProjects";

export default function ProjectListInfo({
  selectedProject,
  setSelectedProject,
}) {
  const { tasks } = useContext(TaskContext);
  const projects = getAllProjects(tasks);

  return (
    <div className="w-full flex flex-col items-center mb-4">
      <h4 className="text-xs font-bold uppercase tracking-wide mb-2 text-zinc-400">
        Your Projects
      </h4>
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          className={`px-3 py-1 rounded-full border text-xs font-semibold capitalize
            ${
              !selectedProject
                ? "bg-blue-100 text-blue-600 border-blue-200"
                : ""
            }
          `}
          onClick={() => setSelectedProject("")}
        >
          All
        </button>
        {projects.map((project) => (
          <button
            key={project}
            className={`px-3 py-1 rounded-full border text-xs font-semibold capitalize
              ${
                selectedProject === project
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-50 text-gray-700 border-gray-200"
              }
            `}
            onClick={() => setSelectedProject(project)}
          >
            {project}
          </button>
        ))}
      </div>
    </div>
  );
}
