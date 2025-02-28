"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-12 left-0 w-full z-50">
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
          className={`absolute md:static top-14 left-0 w-full md:w-auto bg-white md:flex md:space-x-6 items-center shadow-md md:shadow-none transition-all ${
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
