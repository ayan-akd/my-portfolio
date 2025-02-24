"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lightToggle from "@/assets/icons/lightToggle.svg";
import darkToggle from "@/assets/icons/darkToggle.svg";
import lightMenu from "@/assets/icons/lightMenu.svg";
import darkMenu from "@/assets/icons/darkMenu.svg";
export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const menuItems = [
    { name: "Intro", href: "#intro" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed left-0 top-0 w-full bg-transparent z-50">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="max-w-[1920px] mx-auto mt-[30px] flex w-[90%] md:w-[92%] lg:w-[88%] 2xl:w-[77%] items-center justify-between gap-6 md:mt-[42px] md:justify-end md:gap-5 md:px-0 lg:mt-[80px] lg:gap-6"
      >
        {/* dark mode and light mode toggle */}

        <Image
          onClick={handleTheme}
          src={resolvedTheme === "light" ? lightToggle : darkToggle}
          alt="Mode Toggle"
          width={30}
          height={30}
          className="h-10 w-10 cursor-pointer md:h-[60px] md:w-[60px] lg:h-16 lg:w-16"
        />
        {/* 2xl:h-[3.9vw] 2xl:w-[3.9vw] */}

        {/* Menu Icon */}
        <Image
          onClick={() => setMenuOpen(!menuOpen)}
          src={resolvedTheme === "light" ? lightMenu : darkMenu}
          alt="Menu"
          width={30}
          height={30}
          className="z-[60] h-10 w-10 cursor-pointer md:h-[60px] md:w-[60px] lg:h-16 lg:w-16"
        />
      </motion.div>
      <AnimatePresence mode="wait">
        {menuOpen && (
          <div>
            <motion.div
              key={menuOpen ? "menu-open" : "menu-closed"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-40 h-screen w-full shadow-lg"
              style={{
                background:
                  resolvedTheme === "light"
                    ? "linear-gradient(232deg, rgba(255, 248, 191, 0.60) 5.82%, rgba(191, 255, 228, 0.60) 94.38%)"
                    : "linear-gradient(232deg, rgba(35, 39, 73, 0.60) 5.82%, rgba(35, 21, 50, 0.60) 94.38%)",
                backdropFilter:
                  resolvedTheme === "light"
                    ? "blur(7.65px)"
                    : "blur(20.649999618530273px)",
                WebkitBackdropFilter:
                  resolvedTheme === "light"
                    ? "blur(7.65px)"
                    : "blur(20.649999618530273px)",
              }}
            >
              <div className="max-w-[1920px] mx-auto mt-[86px] w-[90%] md:mt-[118px] md:w-[98%] lg:mt-[167px] 2xl:mt-[10%] lg:w-[91.5%] 2xl:w-[80%]">
                <div className="grid grid-cols-1 justify-items-end lg:gap-4">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex h-[70px] w-[384px] items-center justify-end pr-2 text-right text-[40px] font-light transition-colors duration-200 hover:font-normal md:h-[111px] md:w-[700px] md:pr-[32px] md:text-6xl lg:h-[100px] lg:w-[857px] lg:text-[70px] 2xl:h-[12vh] 2xl:w-[60vw] 2xl:text-[8vh] ${
                        resolvedTheme === "light"
                          ? "hover:filter-[blur(0px)] hover:border-[#1A2231] hover:bg-[radial-gradient(209.05%_159.05%_at_86.46%_50%,_#28344C_0%,_#000_100%)] hover:text-[#EBF1FF]"
                          : "hover:filter-[blur(3.9000000953674316px)] text-[#DDEDE2] hover:rounded hover:bg-[radial-gradient(478.08%_363.74%_at_84.42%_49.62%,_#E2F1FF_0%,_#0F1027_100%)] hover:text-[#0F0E2B]"
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
