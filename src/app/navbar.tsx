"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling down, move Navbar up but keep part of it visible
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
    className={`bg-white shadow-md fixed top-[2.5rem] left-0 w-full md:mx-5 md:w-[calc(100%-2.5rem)] md:rounded-lg z-50 transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-8"
    }`}
  >
  
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          MyLogo
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-12 left-0 w-full md:w-auto bg-white md:flex md:space-x-6 items-center shadow-md md:shadow-none transition-all ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "Contact Us", path: "/contact" },
          ].map((link) => (
            <li key={link.name} className="text-lg p-4 md:p-0 text-gray-700 hover:text-blue-600">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
