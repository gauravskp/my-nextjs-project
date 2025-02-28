"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function NavTab() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white py-2 px-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="text-sm">
        📧 Email: contact@mywebsite.com | 📞 Phone: +123-456-7890
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 text-sm bg-gray-300 dark:bg-gray-700 p-2 rounded"
      >
        {darkMode ? <FiSun /> : <FiMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
