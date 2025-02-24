"use client";

import Introduction from "@/components/introduction/Introduction";
import Skills from "@/components/skills/Skills";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  
  // Wrap sections array in useMemo to prevent it from changing on every render
  const sections = useMemo(() => ["intro", "skills"], []);
  
  // Adjust these values to control the smoothness
  const scrollDuration = 1.2; // Seconds for scroll transition (longer = smoother)
  const debounceThreshold = 30; // Lower value = more responsive, higher = prevents accidental scrolls
  const wheelCooldown = 800; // Milliseconds to wait before allowing another scroll
  
  // Handle wheel events to control section changes
  useEffect(() => {
    let isScrolling = false;
    
    const handleWheel = (e: { deltaY: number; }) => {
      // Return if already scrolling
      if (isScrolling) return;
      
      // Debounce scrolling
      if (Math.abs(e.deltaY) < debounceThreshold) return;
      
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        // Scrolling down
        isScrolling = true;
        setCurrentSection(currentSection + 1);
        
        // Reset the scrolling flag after cooldown
        setTimeout(() => {
          isScrolling = false;
        }, wheelCooldown);
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scrolling up
        isScrolling = true;
        setCurrentSection(currentSection - 1);
        
        // Reset the scrolling flag after cooldown
        setTimeout(() => {
          isScrolling = false;
        }, wheelCooldown);
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, sections, debounceThreshold, wheelCooldown]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: { key: string; }) => {
      if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, sections]);

  // Section transition variants for smoother animations
  const sectionVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };

  return (
    <div className="h-screen overflow-hidden bg-[url('/initialLight.svg')] bg-[length:150px_auto] bg-fixed bg-no-repeat dark:bg-[url('/initialDark.svg')] md:bg-[length:200px_auto] lg:bg-[length:auto_auto]">
      <div className="relative h-full">
        <motion.div 
          id="intro" 
          className="min-h-screen absolute top-0 left-0 w-full"
          initial="hidden"
          animate={currentSection === 0 ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ 
            duration: scrollDuration, 
            ease: [0.43, 0.13, 0.23, 0.96] // Custom cubic bezier for smoother motion
          }}
        >
          <Introduction />
        </motion.div>
        <motion.div 
          id="skills" 
          className="min-h-screen absolute top-0 left-0 w-full"
          initial="hidden"
          animate={currentSection === 1 ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ 
            duration: scrollDuration, 
            ease: [0.43, 0.13, 0.23, 0.96] // Custom cubic bezier for smoother motion
          }}
        >
          <Skills />
        </motion.div>
      </div>
    </div>
  );
}