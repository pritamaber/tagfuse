import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { HeartHandshake, Phone, Mail, Globe } from "lucide-react";

export default function Support() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div
        className={`rounded-2xl shadow-xl max-w-lg w-full p-8 mt-8
          ${
            theme === "dark"
              ? "bg-zinc-900 text-zinc-100"
              : "bg-white text-zinc-900"
          }
        `}
      >
        <div className="flex items-center gap-2 mb-2">
          <HeartHandshake className="w-7 h-7 text-pink-600" />
          <h2 className="font-bold text-2xl">Support This Project</h2>
        </div>
        <p className="mb-4 text-base">
          If you found <span className="font-bold">TaskJet</span> useful or
          inspiring, please consider a humble donation.
          <br />
          Your support helps keep the project open, independent, and improving!
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">PhonePe UPI:</span>
            <span className="ml-1 select-all">6291616198 - </span>
            <span> Pritam Das</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-green-500" />
            <span className="font-semibold">Email:</span>
            <span className="ml-1 select-all">pritam.aber@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-violet-500" />
            <span className="font-semibold">Website:</span>
            <a
              href="https://impritam.com"
              className="ml-1 underline text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              impritam.com
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-center text-zinc-400">
          Thank you for supporting independent, open-source software. Every
          contribution (big or small) is deeply appreciated! 🙏
        </p>
      </div>
    </div>
  );
}
