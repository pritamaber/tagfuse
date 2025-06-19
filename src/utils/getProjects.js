// utils/getProjects.js
export function getAllProjects(tasks) {
  const set = new Set();
  tasks.forEach((t) => t.project && set.add(t.project));
  return Array.from(set);
}
