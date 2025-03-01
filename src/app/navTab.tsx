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
      className={`bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white py-2 px-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`} 
    >
      <div className="text-sm flex gap-4">
        {/* Clickable Email & Phone */}
        <a href="mailto:platecindustries@gmail.com" className="hover:underline">
          📧 Email: platecindustries@gmail.com
        </a>
        <a href="tel:+02228701900" className="hover:underline">
          📞 Phone: +022 28701900
        </a>
      </div>
    </div>
  );
}
