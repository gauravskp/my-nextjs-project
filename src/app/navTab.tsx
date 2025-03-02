"use client";

import { useState, useEffect } from "react";

export default function NavTab() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide when scrolling down, show when scrolling up
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white py-2 px-4 md:px-8 flex flex-wrap justify-center md:justify-between items-center fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="text-sm flex flex-wrap gap-2 md:gap-4 text-center justify-center w-full md:w-auto">
        <a
          href="mailto:platecindustries@gmail.com"
          className="hover:underline hover:text-blue-500 transition-colors duration-200"
          aria-label="Email Platec Industries"
        >
          📧 platecindustries@gmail.com
        </a>
        <span className="hidden md:inline">|</span> {/* Separator on larger screens */}
        <a
          href="tel:+02228701900"
          className="hover:underline hover:text-blue-500 transition-colors duration-200"
          aria-label="Call Platec Industries"
        >
          📞 +022 28701900
        </a>
      </div>
    </div>
  );
}
