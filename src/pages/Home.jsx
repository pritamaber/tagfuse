import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import your ThemeContext

// Example: Replace with your actual image imports if copying locally
const screenshots = [
  {
    src: "/public/signup.png",
    alt: "Signup Dark Theme",
    caption: "Beautiful dark theme – clean, focused onboarding for developers.",
  },
  {
    src: "/public/darkmode.png",
    alt: "Kanban Dashboard Dark",
    caption:
      "Organize all your tasks in a minimal, developer-first Kanban board.",
  },
  {
    src: "/public/tags_project_filter.png",
    alt: "Tag and Project Filters",
    caption:
      "Instantly filter by project or tag. Color-coded and lightning-fast.",
  },
  {
    src: "/public/lightmode.png",
    alt: "Light Theme – Kanban",
    caption: "Switch between dark and light mode anytime.",
  },
  {
    src: "/public/task_form.png",
    alt: "Add Task Modal",
    caption:
      "Quick-add tasks with keyboard shortcuts and real-time tag color preview.",
  },
  {
    src: "/public/dropdown.png",
    alt: "Responsive UI",
    caption:
      "100% responsive. Tagfuse works beautifully on desktop and mobile.",
  },
];

export default function Home() {
  const { theme } = useContext(ThemeContext);

  // Dynamically set class for tagfuse heading based on theme context
  const tagfuseClass =
    theme === "dark"
      ? "text-white font-extrabold drop-shadow"
      : "text-zinc-900 font-extrabold drop-shadow";

  return (
    <div className="w-full flex flex-col items-center mt-6 mb-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
        <span className={tagfuseClass}>
          {" "}
          Welcome to <span className="text-blue-600">tagfuse</span>
        </span>
      </h1>
      <p className="text-base md:text-lg text-gray-700 dark:text-zinc-600 mb-8 text-center max-w-2xl">
        <span className="font-semibold text-blue-700 dark:text-blue-400">
          The Kanban for Developers.
        </span>{" "}
        Organize, filter, and manage all your dev projects with blazing-fast tag
        and project filters.
        <br />
        <span className="text-xs text-zinc-400">
          (Made by developers, for developers.)
        </span>
      </p>

      {/* Feature Screenshots */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-10 mx-auto">
        {screenshots.map((img) => (
          <div
            key={img.src}
            className="rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden shadow-lg flex flex-col bg-white dark:bg-zinc-900"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover"
              style={{ minHeight: 220, background: "#f6f8fa" }}
              loading="lazy"
            />
            <div className="p-4 text-sm text-gray-700 dark:text-zinc-300 border-t border-gray-100 dark:border-zinc-800">
              {img.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
