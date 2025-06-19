import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-700 mb-6">
        404
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
