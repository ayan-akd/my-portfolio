import Introduction from "@/components/introduction/Introduction";
import Skills from "@/components/skills/Skills";
export default function Home() {
  return (
    <div
      className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth scrollbar-hide bg-[url('/initialLight.svg')] dark:bg-[url('/initialDark.svg')] bg-no-repeat bg-[length:150px_auto] md:bg-[length:200px_auto] lg:bg-[length:auto_auto] 2xl:bg-[position:200px_0]"
    >
      <div id="intro" className="relative min-h-screen snap-center">
        <Introduction />
      </div>
      <div id="skills" className="relative min-h-screen snap-center">
        <Skills />
      </div>
    </div>
  );
}
