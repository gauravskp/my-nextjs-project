"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [darkMode]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#2c3e50] dark:bg-gray-900 text-white text-center py-6 mt-auto transition-colors duration-300 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-2xl font-bold">MyLogo</h2>
          <p className="mt-2 text-gray-300 dark:text-gray-400">Building a better future with our services.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {["Home", "About Us", "Products", "Contact Us", "Privacy Policy"].map((name, index) => (
              <li key={index}>
                <a href={`/${name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-400 dark:hover:text-blue-300 transition">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Social Media & Dark Mode */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube].map((Icon, index) => (
              <a key={index} href="#" target="_blank" rel="noopener noreferrer"
                 className="text-2xl text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition transform hover:-translate-y-1 hover:scale-110 duration-300 opacity-0 animate-fadeInUp"
                 style={{ animationDelay: `${index * 0.1}s` }}>
                <Icon />
              </a>
            ))}
          </div>

          {/* Light/Dark Mode Toggle */}
          <button onClick={() => setDarkMode(!darkMode)}
                  className="mt-4 flex items-center gap-2 text-sm bg-gray-700 hover:bg-gray-600 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-black text-white py-2 px-4 rounded transition duration-300">
            {darkMode ? <FiSun /> : <FiMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Back to Top Button */}
      {showScroll && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <FaArrowUp className="text-xl" />
        </button>
      )}

      {/* Copyright & Developer Credit */}
      <div className="text-center mt-8 border-t border-gray-600 dark:border-gray-500 pt-4 text-gray-300 dark:text-gray-400">
        &copy; {new Date().getFullYear()} MyLogo. All rights reserved.
        <br />
        Developed by <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500 transition">Mr. Gaurav</a>
      </div>

      {/* Keyframe Animation for Social Icons */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 0.4s ease-out forwards; }
        `}
      </style>
    </footer>
  );
}
