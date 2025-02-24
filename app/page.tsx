import IndexCard from "@/components/IndexCard";
import { indices } from "@/data/indices";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white p-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
            Global Economic Indices
          </span>
        </h1>

        <div className="flex justify-center mb-12">
          <Globe className="w-24 h-24 text-blue-400 animate-spin-slow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indices.map((index, i) => (
            <div
              key={index.id}
              className="transform transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <IndexCard {...index} />
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full animate-bounce">
        <span className="sr-only">New</span>
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      </div>
    </main>
  );
}
