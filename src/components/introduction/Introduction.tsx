"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import GlowText from "../ui/GlowText";
import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import githubIcon from "@/assets/icons/github.svg";
import lightBulb from "@/assets/icons/lightBulb.svg";
import darkBulb from "@/assets/icons/darkBulb.svg";
import downloadIcon from "@/assets/icons/download.svg";
import profile from "@/assets/images/profile.png";

const socialIcons = [
  {
    icon: facebookIcon,
    link: "https://www.facebook.com/akd444/",
  },
  {
    icon: instagramIcon,
    link: "https://www.instagram.com/akd420v2",
  },
  {
    icon: linkedinIcon,
    link: "https://www.linkedin.com/in/ayan-kumar-akd/",
  },
  {
    icon: githubIcon,
    link: "https://github.com/ayan-akd",
  },
];
export default function Introduction() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDownloadClick = () => {
    const dummyAnchor = document.createElement("a");
    dummyAnchor.download = "Ayan_Kumar_Resume.pdf";
    dummyAnchor.href =
      "https://drive.usercontent.google.com/download?id=1bS_XY8-sQIApl6hg1LVmMSatbI4OcNaM";
    document.body.appendChild(dummyAnchor);
    dummyAnchor.click();
    document.body.removeChild(dummyAnchor);
  };
  if (!mounted) return null;
  return (
    <div>
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
                : "linear-gradient(116deg, #FDFFE0 5.9%, #FFEDEB 93.07%)",
          }}
        />
      </AnimatePresence>
       <div className="w-[90%] grid grid-cols-1 lg:grid-cols-2  md:w-[92%] lg:w-[88%] 2xl:w-[77%] mx-auto pt-[105px] md:pt-[63px] lg:pt-[104px]">
        <div>
          {/* social icons  */}
        <div className="flex gap-[37px] md:gap-[20px]">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block md:mr-4"
              aria-label={`${icon.icon} social link`}
            >
              <Image
                src={icon.icon}
                alt={`${icon.icon} icon`}
                width={10}
                height={10}
                className="h-6 w-6 cursor-pointer"
              />
            </a>
          ))}
        </div>
        {/* introduction  */}
        <div className="mt-2 lg:mt-7">
          <div className="flex items-center">
            <h1 className="text-[40px] dark:text-[#DDEDE2] md:text-6xl lg:text-[60px] xl:text-[62px]">
              Hi, I&apos;m{" "}
              <span className={`font-[900] text-[#171717]`}>
                <GlowText
                  text="Ayan,"
                  theme={resolvedTheme as "light" | "dark"}
                />
              </span>
            </h1>
            <Image
              src={resolvedTheme === "light" ? lightBulb : darkBulb}
              alt="Bulb"
              width={40}
              height={40}
              className="hidden md:mb-2 md:block md:h-[73px] md:w-[73px] lg:mb-5 lg:h-[107px] lg:w-[107px]"
            />
          </div>
          <p className="mt-[18px] max-w-[373px] text-[17px] 2xl:text-lg dark:text-[#DDEDE2] md:mt-5 md:max-w-[599px] lg:mt-0 lg:max-w-[530px]">
            I&apos;m passionate about developing web applications that meet
            technical requirements and deliver delightful user experiences.
            Proficient in React.js, Redux, Next.js.{" "}
          </p>
          <button
            onClick={handleDownloadClick}
            className="mt-[15px] flex h-[60px] w-[217px] flex-shrink-0 items-center justify-center gap-[13px] rounded-[50px] bg-[#05F] px-[14px] py-0 text-white md:mt-[17px] md:w-[320px] md:gap-5 md:rounded-[45px] lg:mt-10 lg:h-[50px] lg:w-[480px]"
          >
            Resume
            <Image
              src={downloadIcon}
              alt="Download"
              width={20}
              height={20}
              className="ml-2"
            />
          </button>
        </div>
        </div>
        <Image src={profile} alt="Profile" width={200} height={200} className="w-[280px] md:w-[300px] lg:w-[400px] justify-self-end md:justify-self-center lg:justify-self-auto md:ml-20 lg:ml-0 lg:mt-28" />
      </div>
    </div>
  );
}
