import Introduction from "@/components/introduction/Introduction";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory scrollbar-hide">
      <div id="intro" className="snap-center min-h-screen relative pl-2">
        <Introduction />
      </div>

      <div id="skills" className="snap-center min-h-screen relative pl-2">
        <Skills />
      </div>
    </div>
  );
}