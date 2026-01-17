import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <div className="relative">
        <Overlay />
        <ScrollyCanvas numFrames={120} />
      </div>
      <Projects />
      <Skills />
      <footer className="py-12 text-center text-gray-500 font-mono text-sm border-t border-white/5">
        <p className="mb-2">fawazv.business@gmail.com</p>
        <p>&copy; {new Date().getFullYear()} Mohammed Fawaz. All rights reserved.</p>
      </footer>
    </main>
  );
}
