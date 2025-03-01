"use client"; // Mark this as a client component

import "./globals.css";
import NavTab from "./navTab";
import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  // Auto-detect system theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <html lang="en" className={theme}>
      <head>
        {/* Metadata for SEO */}
        <title>Platec Industries</title>
        <meta name="description" content="Platec Industries - Leading Industry Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Platec Industries" />
        <meta property="og:description" content="Explore innovative industry solutions with Platec Industries." />
        <meta property="og:url" content="https://platec-industries.vercel.app" />
        <meta property="og:type" content="website" />
      </head>

      <body className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300">
        <NavTab />
        <Navbar />
        <main className="flex-grow mt-20">{children}</main> {/* Prevent navbar overlap */}
        <Footer />
      </body>
    </html>
  );
}
