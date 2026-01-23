"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "About Us",
    "Partners",
    "Our Projects",
    "Solutions",
    "Support & Services",
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              joulecube
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-green-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {item}
              </a>
            ))}

            <button
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isScrolled
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 shadow-lg ${
            isScrolled ? "bg-white" : "bg-black/95 backdrop-blur-md"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                    : "text-white hover:text-gray-300 hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}

            <button
              className={`w-full mt-4 py-3 px-4 rounded-lg text-base font-medium ${
                isScrolled
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
