"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
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
    { name: "Home", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Project", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact with me", href: "#" },
  ];

  if (!mounted) return null;

  return (
    <>
      <div className="fixed md:top-[49px] md:right-[51px] lg:top-[89px] lg:right-[91px] flex items-center gap-6 z-50">
        {/* dark mode and light mode toggle */}

        <Image
          onClick={handleTheme}
          src={
            resolvedTheme === "light" ? "/lightToggle.svg" : "/darkToggle.svg"
          }
          alt="Mode Toggle"
          width={30}
          height={30}
          className="mr-2 cursor-pointer md:w-14 md:h-14 lg:w-16 lg:h-16"
        />

        {/* Menu Icon */}
        <Image
          onClick={() => setMenuOpen(!menuOpen)}
          src={resolvedTheme === "light" ? "/lightMenu.svg" : "/darkMenu.svg"}
          alt="Menu"
          width={30}
          height={30}
          className="md:w-14 md:h-14 lg:w-16 lg:h-16 cursor-pointer"
        />
      </div>
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
            <div className="fixed right-5 top-0 h-screen space-y-4 lg:space-y-0 z-40 md:pt-32 lg:pt-44 lg:px-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`flex justify-end items-center lg:gap-0 md:w-[600px] lg:w-[857px] lg:h-[131px] py-4 md:text-6xl lg:text-[70px] font-medium px-10 rounded-lg transition-all duration-200  ${
                    resolvedTheme === "light"
                      ? "hover:bg-[radial-gradient(158.52%_120.61%_at_50.06%_50.38%,_#28344C_0%,_#000_100%)] hover:border-[#1A2231] hover:filter-[blur(0px)] hover:text-[#EBF1FF]"
                      : "hover:bg-[radial-gradient(455.51%_346.56%_at_50.06%_50.38%,_#E2F1FF_0%,_#0F1027_100%)] hover:rounded hover:filter-[blur(3.9000000953674316px)] hover:text-[#0F0E2B]"
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
