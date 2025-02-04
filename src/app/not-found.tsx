"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
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
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-opacity-10 p-8 text-center shadow-xl backdrop-blur-lg">
          <h1 className="mb-4 text-6xl font-bold">404</h1>
          <h2 className="mb-6 text-2xl">Page Not Found</h2>
          <p className="mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link href="/">
              <button className="h-[60px] w-[217px] rounded-[50px] bg-[#05F] px-4 py-2 text-white">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
