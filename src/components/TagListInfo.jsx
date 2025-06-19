import { TAG_COLORS } from "../constants/tagColors";

export default function TagListInfo() {
  return (
    <div className="w-full flex flex-col items-center mb-4">
      <h4 className="text-xs font-bold uppercase tracking-wide mb-2 text-zinc-400">
        Tags
      </h4>
      <div className="flex flex-wrap gap-2 justify-center">
        {Object.entries(TAG_COLORS).map(([tag, color]) => (
          <span
            key={tag}
            className={`inline-block px-3 py-1 rounded-full border text-xs font-semibold capitalize ${color}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
