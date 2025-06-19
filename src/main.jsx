import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// import theme provider
import ThemeProvider from "./context/ThemeProvider.jsx";

// import task provider
import { TaskProvider } from "./context/TaskProvider.jsx";

// import auth provider
import { AuthProvider } from "./context/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
