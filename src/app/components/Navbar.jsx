"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Our Projects", href: "/projects" },
    { label: "Solutions", href: "/solutions" },
    { label: "Support & Services", href: "/support" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Show ONLY at very top
      if (currentScroll <= 20) {
        setShow(true);
      } else {
        setShow(false);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent py-6 md:py-8 font-montserrat transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="relative flex items-center justify-between">
          {/* LOGO - Smaller on medium screens */}
          <div className="flex items-center shrink-0 z-10">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Joulecube Logo"
                width={220}
                height={54}
                priority
                className="object-contain w-28 sm:w-32 md:w-36 lg:w-40 xl:w-48 2xl:w-56 h-auto"
              />
            </Link>
          </div>

          {/* CENTER MENU (DESKTOP) - Adjusted spacing */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 whitespace-nowrap z-0">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-wide text-white transition group px-1"
              >
                {item.label}
                <span className="absolute left-1/2 -bottom-2 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center shrink-0 gap-2 sm:gap-3 md:gap-4 z-10">
            <Link
              href="/contact"
              className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base lg:text-lg font-semibold bg-white text-black hover:bg-gray-100 transition whitespace-nowrap rounded-sm"
            >
              Contact Us
            </Link>

            {/* MOBILE MENU BUTTON */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-1.5"
              >
                {isOpen ? (
                  <X size={20} className="sm:w-6 sm:h-6" />
                ) : (
                  <Menu size={20} className="sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md">
          <div className="px-6 py-6 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-white text-lg font-medium py-3"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block w-full mt-4 py-4 bg-white text-black text-lg font-semibold text-center rounded"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
