import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  // Choose colors based on theme
  const footerClass = `
    w-full
    border-t
    px-4 py-5
    mt-12
    text-center text-xs
    transition
    ${
      theme === "dark"
        ? "bg-zinc-950 border-zinc-800 text-zinc-400"
        : "bg-white border-gray-200 text-gray-500"
    }
  `;

  return (
    <footer className={footerClass}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <span>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold text-blue-600">tagfuse</span> for
          developers. All rights reserved.
        </span>
        <span>
          <a
            href="https://impritam.com"
            className="underline hover:text-blue-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            impritam.com
          </a>
        </span>
      </div>
    </footer>
  );
}
