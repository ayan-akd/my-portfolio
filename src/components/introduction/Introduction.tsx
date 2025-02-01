"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import GlowText from "../ui/GlowText";

const socialIcons = [
  {
    icon: "/facebook.svg",
    link: "https://www.facebook.com/akd444/",
  },
  {
    icon: "/instagram.svg",
    link: "https://www.instagram.com/akd420v2",
  },
  {
    icon: "/linkedin.svg",
    link: "https://www.linkedin.com/in/ayan-kumar-akd/",
  },
  {
    icon: "/github.svg",
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
    <div
      className="bg-no-repeat"
      style={{ backgroundImage: "url('/initial.png')" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={resolvedTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full z-[-1]"
          style={{
            background:
              resolvedTheme === "dark"
                ? "linear-gradient(117deg, #1C0028 1.59%, #09152D 97.24%)"
                : "linear-gradient(116deg, #FDFFE0 5.9%, #FFEDEB 93.07%)",
          }}
        />
      </AnimatePresence>

      <div className=" min-h-screen mx-auto px-4 md:pt-[65px] md:pl-[4 0px] lg:pt-[104px] lg:pl-[97px]">
        <div className="flex gap-[30px]">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-4"
            >
              <Image
                src={icon.icon}
                alt={`${icon.icon} icon`}
                width={10}
                height={10}
                className="w-6 h-6"
              />
            </a>
          ))}
        </div>
        <div className="mt-2 lg:mt-7">
          <div className="flex items-center">
            <h1 className="md:text-5xl lg:text-[62px]">
              Hi, I&apos;m <span className={`font-extrabold text-[#171717]`}><GlowText text="Ayan," theme={resolvedTheme as "light" | "dark"}/></span>
            </h1>
            <Image
              src={
                resolvedTheme === "light" ? "/lightBulb.svg" : "/darkBulb.svg"
              }
              alt="Bulb" 
              width={40}
              height={40}
              className="md:w-[67px] md:h-[67px] lg:w-[107px] lg:h-[107px] lg:mb-5"
            />
          </div>
          <p className="text-xl mt-5 lg:mt-0 md:max-w-[430px] lg:max-w-[530px]">I&apos;m passionate about developing web applications that meet technical requirements and deliver delightful user experiences. Proficient in React.js, Redux, Next.js. </p>
          <button onClick={handleDownloadClick} className=" mt-5 lg:mt-10 bg-[#05F] text-white px-4 py-2 rounded-[50px] lg:rounded-[45px] w-[217px] h-[60px] lg:w-[480px] lg:h-[67px] flex items-center justify-center gap-3 lg:gap-5">
            Resume 
            <Image src={"/download.svg"} alt="Download" width={20} height={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
 