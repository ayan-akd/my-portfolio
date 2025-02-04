import type { Metadata } from "next";
import { Fira_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/shared/Navbar";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-fira-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Ayan Kumar Das",
  description:
    "MERN-stack developer specializing in Next.js, React, TypeScript, and Redux. Building scalable web applications with Express, Node.js, MongoDB, and Mongoose.",
  keywords: [
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Redux",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "Bangladesh",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Redux Developer",
    "Web Development",
    "Front-end Developer",
    "Backend Developer",
    "Express.js",
    "Node.js",
    "MongoDB",
    "Mongoose",
    "Scalable Web Apps",
    "Modern Web Technologies",
  ],
  authors: [{ name: "Ayan Kumar Das" }],
  creator: "Ayan Kumar Das",
  openGraph: {
    title: "Portfolio | Ayan Kumar Das",
    description:
      "MERN-stack developer skilled in Next.js, React, TypeScript, Redux, Express, Node.js, MongoDB, and Mongoose. Explore projects, technical skills, and experience in modern web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${firaSans.variable} ${firaCode.variable} font-fira-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
