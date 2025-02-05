import Introduction from "@/components/introduction/Introduction";
import Skills from "@/components/skills/Skills";
import initialForBackground from "@/assets/images/initial.svg";
export default function Home() {
  return (
    <div
      className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth bg-no-repeat scrollbar-hide"
      style={{ backgroundImage: `url(${initialForBackground.src})` }}
    >
      <div id="intro" className="relative min-h-screen snap-center pl-2">
        <Introduction />
      </div>
      <div id="skills" className="relative min-h-screen snap-center pl-2">
        <Skills />
      </div>
    </div>
  );
}
