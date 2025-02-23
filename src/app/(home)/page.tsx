import Introduction from "@/components/introduction/Introduction";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth scrollbar-hide bg-[url('/initialLight.svg')] bg-[length:150px_auto] bg-fixed bg-no-repeat dark:bg-[url('/initialDark.svg')] md:bg-[length:200px_auto] lg:bg-[length:auto_auto]">
      <div id="intro" className="min-h-screen snap-center">
        <Introduction />
      </div>
      <div id="skills" className="min-h-screen snap-center">
        <Skills />
      </div>
    </div>
  );
}
