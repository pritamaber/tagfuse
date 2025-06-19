// src/components/TagListInfo.jsx
import { TAG_COLORS } from "../constants/tagColors";

export default function TagListInfo({ selectedTag, setSelectedTag }) {
  return (
    <div className="w-full flex flex-col items-center mb-4">
      <h4 className="text-xs font-bold uppercase tracking-wide mb-2 text-zinc-400">
        Tags
      </h4>
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          className={`inline-block px-3 py-1 rounded-full border text-xs font-semibold capitalize ${
            !selectedTag
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-gray-100 text-zinc-600 border-gray-200 dark:bg-zinc-800 dark:text-zinc-300"
          }`}
          onClick={() => setSelectedTag(null)}
        >
          All
        </button>
        {Object.entries(TAG_COLORS).map(([tag, color]) => (
          <button
            key={tag}
            className={`inline-block px-3 py-1 rounded-full border text-xs font-semibold capitalize transition ${
              selectedTag === tag
                ? `${color} ring-2 ring-blue-400`
                : `${color} opacity-70 hover:opacity-100`
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
