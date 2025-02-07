"use client";
import Image from "next/image";
import { ISkillCategory } from "./Skills";
import initialIconDark from "@/assets/images/initialIconDark.svg";
import initialIconLight from "@/assets/images/initialIconLight.svg";
import underline from "@/assets/Underline.svg";
import { useTheme } from "next-themes";

export default function SkillCard({ category }: { category: ISkillCategory }) {
  const { resolvedTheme } = useTheme();
  return (
    <div className="h-[471px] w-[371px] rounded-[17px] border border-solid border-[#072d011f] bg-[#F8FFF6] p-[6px] dark:bg-[#DDEDE2] md:w-[340px] lg:w-[371px]">
      <h2 className="flex h-[48px] w-[359px] items-center justify-between rounded-[13px] bg-[#072600] px-4 text-[20px] font-bold text-[#F5FFF0] dark:bg-[#170629] dark:text-[#DDEDE2] md:w-[329px] lg:h-[48px] lg:w-[359px]">
        {category.title}
        <Image
          src={
            resolvedTheme === "light"
              ? initialIconLight
              : initialIconDark
          }
          alt="initial icon"
          width={30}
          height={30}
          className="h-[31px] w-[33px]"
        />
      </h2>

      <div className="mt-7">
        <ul>
          {category.skills.map((skill, i) => (
            <li key={i}>
              <div className="flex items-center gap-5 pl-5 font-fira-code text-[#072600] dark:text-[#170629]">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={20}
                  height={20}
                  className="h-[21px] w-[21px]"
                />
                {skill.name}
              </div>
              <Image
                src={underline}
                alt="underline"
                width={100}
                height={1}
                className="mx-auto my-4 w-[316px] md:w-[285px] lg:w-[316px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
