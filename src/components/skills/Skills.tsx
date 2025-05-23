"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import htmlIcon from "@/assets/icons/skill-icons/html.svg";
import cssIcon from "@/assets/icons/skill-icons/css.svg";
import jsIcon from "@/assets/icons/skill-icons/javascript.svg";
import tailwindIcon from "@/assets/icons/skill-icons/tailwind.svg";
import reactIcon from "@/assets/icons/skill-icons/react.svg";
import nextIcon from "@/assets/icons/skill-icons/nextjs.svg";
import nodeIcon from "@/assets/icons/skill-icons/nodejs.svg";
import expressIcon from "@/assets/icons/skill-icons/express.svg";
import firebaseIcon from "@/assets/icons/skill-icons/firebase.svg";
import jwtIcon from "@/assets/icons/skill-icons/jwt.svg";
import githubIcon from "@/assets/icons/skill-icons/github.svg";
import figmaIcon from "@/assets/icons/skill-icons/figma.svg";
import netlifyIcon from "@/assets/icons/skill-icons/netlify.svg";
import vercelIcon from "@/assets/icons/skill-icons/vercel.svg";
import gitIcon from "@/assets/icons/skill-icons/git.svg";
import vscodeIcon from "@/assets/icons/skill-icons/vscode.svg";
import mongodbIcon from "@/assets/icons/skill-icons/mongodb.svg";
import SkillCard from "./SkillCard";

export interface ISkillCategory {
  title: string;
  skills: { name: string; icon: string }[];
}

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "React JS", icon: reactIcon },
      { name: "Next JS", icon: nextIcon },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", icon: nodeIcon },
      { name: "Express", icon: expressIcon },
      { name: "MongoDB", icon: mongodbIcon },
      { name: "Firebase", icon: firebaseIcon },
      { name: "JWT Authentication", icon: jwtIcon },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Github", icon: githubIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "Netlify", icon: netlifyIcon },
      { name: "Vercel", icon: vercelIcon },
      { name: "Git", icon: gitIcon },
      { name: "VS Code", icon: vscodeIcon },
    ],
  },
];
export default function Skills() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div>
      {/* Background Gradient */}
      <AnimatePresence mode="wait">
        <motion.div
          key={resolvedTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-[-1] h-full w-full"
          style={{
            background:
              resolvedTheme === "dark"
                ? "linear-gradient(117deg, #1C0028 1.59%, #09152D 97.24%)"
                : "linear-gradient(119deg, #FAF6FD 18.57%, #FFF0D9 93.92%)",
          }}
        />
      </AnimatePresence>
      <div className="max-w-[1920px] w-[90%] md:w-[92%] lg:w-[88%] 2xl:w-[77%] mx-auto pt-[80px] md:pt-[50px] lg:pt-[80px]">
        {/* Heading */}
      <h1 className="text-[40px] font-[900] dark:text-[#DDEDE2] lg:text-[62px]">
        Skills
      </h1>
      {/* Skill Categories */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 xl:flex-row-reverse xl:justify-between">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={
              index === 0 ? "xl:mt-0" : index === 1 ? "xl:mt-12 2xl:mt-[10vh]" : "xl:mt-24 2xl:mt-[20vh]"
            }
          >
            <SkillCard category={category} />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
