import { useAuth } from "../hooks/useAuth";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Profile() {
  const { user } = useAuth();
  const { theme } = useContext(ThemeContext);

  if (!user) return null;

  // Theme-aware classes
  const cardClass = `max-w-md w-full mx-auto rounded-2xl shadow-xl border p-8 transition ${
    theme === "dark"
      ? "bg-zinc-900 text-zinc-100 border-zinc-700"
      : "bg-white text-zinc-900 border-gray-200"
  }`;
  const labelClass = `block text-xs uppercase font-semibold mb-1 ${
    theme === "dark" ? "text-zinc-400" : "text-zinc-500"
  }`;
  const donateBox = `mt-6 rounded-lg px-4 py-3 text-sm ${
    theme === "dark"
      ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
      : "bg-gray-50 text-gray-600 border border-gray-200"
  }`;

  return (
    <div className="flex items-center justify-center w-full">
      <div className={cardClass}>
        <h2
          className="text-2xl font-bold mb-6 text-center"
          aria-label="Profile"
        >
          Profile
        </h2>
        {/* Display Name */}
        <div className="mb-4">
          <span className={labelClass}>Name</span>
          <div className="text-lg font-medium">
            {user.displayName || user.email?.split("@")[0] || "User"}
          </div>
        </div>
        {/* Email */}
        <div className="mb-4">
          <span className={labelClass}>Email</span>
          <div className="text-base">{user.email}</div>
        </div>
        {/* Donation info */}
        <div className={donateBox}>
          <p>
            If you found TaskJet useful,{" "}
            <b>
              please consider a humble donation to support the project and
              server cost
            </b>
            .
          </p>
          <div className="mt-2 text-xs">
            <div>
              <b>PhonePe/UPI:</b> <span className="select-all">6291616198</span>
            </div>
            <div>
              <b>Email:</b>{" "}
              <span className="select-all">pritam.aber@gmail.com</span>
            </div>
            <div>
              <b>Website:</b>{" "}
              <a
                href="https://impritam.com"
                className="underline text-blue-500"
              >
                impritam.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
