"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lightToggle from "@/assets/icons/lightToggle.svg";
import darkToggle from "@/assets/icons/darkToggle.svg";
import lightMenu from "@/assets/icons/lightMenu.svg";
import darkMenu from "@/assets/icons/darkMenu.svg";


const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolling(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsScrolling(false), 500); // Delay increased to 500ms for better UX
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
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
    <>
      <motion.div
      animate={{ opacity: isScrolling ? 0 : 1, y: isScrolling ? -20 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
        className="
  fixed flex items-center gap-6 md:gap-5 lg:gap-6 z-50
  /* Mobile styles - spread elements across width */
  justify-between w-full px-5 top-[3.5%]
  /* Tablet styles - revert to right-aligned */
  md:justify-end md:w-auto  md:px-0 md:top-[5.1%] md:right-[3.4%]
  /* Desktop styles */
  lg:top-[9.8%] lg:right-[5%]
  /*Larger Desktop styles */
  2xl:max-w-screen-2xl 2xl:mx-auto 2xl:top-[8.4%] 2xl:px-[11.2%]
"
      > 
        {/* dark mode and light mode toggle */}

        <Image
          onClick={handleTheme}
          src={
            resolvedTheme === "light" ? lightToggle: darkToggle 
          }
          alt="Mode Toggle"
          width={30}
          height={30}
          className="mr-2 cursor-pointer w-10 h-10 md:w-[60px] md:h-[60px] lg:w-16 lg:h-16"
        />

        {/* Menu Icon */}
        <Image
          onClick={() => setMenuOpen(!menuOpen)}
          src={resolvedTheme === "light" ? lightMenu : darkMenu}
          alt="Menu"
          width={30}
          height={30}
          className="w-10 h-10 md:w-[60px]  md:h-[60px]  lg:w-16 lg:h-16 cursor-pointer"
        />
      </motion.div> 
      {/* Background Animation */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            key={menuOpen ? "menu-open" : "menu-closed"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 w-full h-screen z-40 shadow-lg"
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
            <div className="fixed text-end right-1 md:right-2 md:top-0 h-screen
            space-y-2 md:space-y-1 lg:space-y-0 2xl:space-y-5 z-40 pt-20 md:pt-28 lg:pt-40 2xl:pt-44 lg:px-8 2xl:pr-[265px]">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex justify-end items-center font-light hover:font-normal lg:gap-0 w-[394px] h-[70px] md:w-[710px] md:h-[111px] lg:w-[857px] lg:h-[100px] py-4 text-[40px] md:text-6xl lg:text-[70px] px-5 lg:px-10 transition-colors duration-200  ${
                    resolvedTheme === "light"
                      ? "hover:bg-[radial-gradient(209.05%_159.05%_at_86.46%_50%,_#28344C_0%,_#000_100%)] hover:border-[#1A2231] hover:filter-[blur(0px)] hover:text-[#EBF1FF]"
                      : "hover:bg-[radial-gradient(478.08%_363.74%_at_84.42%_49.62%,_#E2F1FF_0%,_#0F1027_100%)] hover:rounded hover:filter-[blur(3.9000000953674316px)] text-[#DDEDE2] hover:text-[#0F0E2B]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
