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

      // scroll down → hide
      if (currentScroll > lastScroll.current && currentScroll > 120) {
        setShow(false);
      }
      // scroll up → show
      else {
        setShow(true);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-transparent py-12 font-montserrat transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="relative flex items-center">
          {/* LOGO */}
          <div className="flex items-center shrink-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Joulecube Logo"
                width={220}
                height={54}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* CENTER MENU (DESKTOP) */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-20 whitespace-nowrap">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-[18px] font-medium tracking-wide text-white transition group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-3 h-[3px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center shrink-0 ml-auto">
            <Link
              href="/contact"
              className="px-9 py-3.5 text-[18px] font-semibold bg-white text-black hover:bg-gray-100 transition whitespace-nowrap"
            >
              Contact Us
            </Link>

            {/* MOBILE MENU BUTTON */}
            <div className="lg:hidden ml-4">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md">
          <div className="px-6 py-6 space-y-5">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-white text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block w-full mt-4 py-4 bg-white text-black text-xl font-semibold text-center"
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
