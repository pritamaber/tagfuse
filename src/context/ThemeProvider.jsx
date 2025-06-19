import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  // Initialize theme from localStorage, or fallback to "light"
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // 3. Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    // Optionally update <html> for Tailwind's dark mode
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // 4. Toggle function
  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  // 5. Provide context value
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
