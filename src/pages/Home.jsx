import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import your ThemeContext

// Example: Replace with your actual image imports if copying locally
const screenshots = [
  {
    src: "/signup.png",
    alt: "Signup Dark Theme",
    caption: "Beautiful dark theme – clean, focused onboarding for developers.",
  },
  {
    src: "/darkmode.png",
    alt: "Kanban Dashboard Dark",
    caption:
      "Organize all your tasks in a minimal, developer-first Kanban board.",
  },
  {
    src: "/tags_project_filter.png",
    alt: "Tag and Project Filters",
    caption:
      "Instantly filter by project or tag. Color-coded and lightning-fast.",
  },
  {
    src: "/lightmode.png",
    alt: "Light Theme – Kanban",
    caption: "Switch between dark and light mode anytime.",
  },
  {
    src: "/task_form.png",
    alt: "Add Task Modal",
    caption:
      "Quick-add tasks with keyboard shortcuts and real-time tag color preview.",
  },
  {
    src: "/dropdown.png",
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

      {/* {why tagfuse section} */}
      <div>
        <section className="w-full max-w-4xl mx-auto py-12 px-4 bg-white dark:bg-zinc-900 rounded-2xl shadow">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
            Why{" "}
            <span className="text-blue-700 dark:text-blue-400">tagfuse</span>?
          </h2>
          <div className="text-lg text-zinc-900 dark:text-zinc-50 mb-6">
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              Built for developers.
            </span>
            <br />
            Tagfuse is the Kanban board that cuts through the noise. No bloat.
            No endless settings. No unnecessary features.
            <br />
            <br />
            Unlike Trello, Jira, and other generic tools, Tagfuse focuses on
            what developers actually need:{" "}
            <span className="font-semibold">
              clarity, speed, and minimal context switching
            </span>
            .
            <br />
            <br />
            Forget complicated automations and endless notifications. With
            Tagfuse, you get:
          </div>
          <ul className="list-disc list-inside mt-3 space-y-2 text-base text-zinc-900 dark:text-zinc-50 font-medium">
            <li>
              <b>Minimal UI</b> – Clean, distraction-free, and
              keyboard-friendly.
            </li>
            <li>
              <b>Project & Tag Filters</b> – Instantly group your tasks the way
              you want.
            </li>
            <li>
              <b>Built for coders</b> – No marketing features, just
              productivity.
            </li>
            <li>
              <b>Dark mode by default</b> – For late-night coding sprints.
            </li>
            <li>
              <b>Zero learning curve</b> – Ship your next project, not another
              tool.
            </li>
          </ul>
        </section>
      </div>
      {/* {testimonials } */}
      <div>
        <section className="w-full max-w-4xl mx-auto py-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
            What developers say
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 rounded-xl p-6 shadow">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-zinc-50">
                    Siddharth T.
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    Backend Engineer, Bangalore
                  </div>
                </div>
              </div>
              <div className="text-zinc-800 dark:text-zinc-100 italic">
                “Finally, a Kanban tool that doesn't feel like project
                management overhead. Tagfuse is fast, minimal, and just works
                for my coding workflow.”
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 rounded-xl p-6 shadow">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-zinc-50">
                    Anjali M.
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    Full Stack Dev, Pune
                  </div>
                </div>
              </div>
              <div className="text-zinc-800 dark:text-zinc-100 italic">
                “With Trello I always got lost in columns. Tagfuse keeps me
                focused. Tag filters are a game changer for managing
                side-projects.”
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 rounded-xl p-6 shadow">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/90.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-zinc-50">
                    Arjun R.
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    Indie Hacker
                  </div>
                </div>
              </div>
              <div className="text-zinc-800 dark:text-zinc-100 italic">
                “Most kanban apps are cluttered. Tagfuse is refreshingly simple.
                It’s the first tool I open after my code editor.”
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-700 rounded-xl p-6 shadow">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-zinc-50">
                    Manoj P.
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400">
                    Open Source Contributor
                  </div>
                </div>
              </div>
              <div className="text-zinc-800 dark:text-zinc-100 italic">
                “The keyboard shortcuts and instant project filters are
                brilliant. Tagfuse is exactly what devs need — no distractions.”
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
