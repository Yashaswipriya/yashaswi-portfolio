import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between relative overflow-hidden">
      <div>
        <Navbar />
        <Hero />
      </div>

      {/* Optional bottom corner badge / logo icon from screenshot */}
      <div className="fixed bottom-6 left-6 w-8 h-8 rounded-full bg-[#1E2B24] text-[#FAF8ED] flex items-center justify-center font-bold text-xs shadow-md">
        N
      </div>
    </main>
  );
}
