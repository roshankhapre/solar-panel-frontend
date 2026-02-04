"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const mobileMenuRef = useRef(null);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Our Projects", href: "/projects" },
    { label: "Solutions", href: "/solutions" },
    { label: "Support & Services", href: "/support" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY <= 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('button[class*="lg:hidden"]')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-transparent py-6 md:py-8 font-montserrat transition-all duration-500 ${
          show ? "translate-y-0" : "-translate-y-full"
        } ${isOpen ? "bg-black/95 backdrop-blur-md" : ""}`}
      >
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="relative flex items-center justify-between">
            
            {/* LOGO */}
            <Link href="/" className="z-10 shrink-0">
              <Image
                src="/logo.png"
                alt="Joulecube Logo"
                width={220}
                height={54}
                priority
                className="object-contain w-28 sm:w-32 md:w-36 lg:w-40 xl:w-48 h-auto"
              />
            </Link>

            {/* CENTER MENU (DESKTOP) */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 whitespace-nowrap">
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
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center shrink-0 gap-2 sm:gap-3 md:gap-4 z-10">
              <Link
                href="/contact"
                className="hidden lg:block px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base lg:text-lg font-semibold bg-white text-black hover:bg-gray-100 transition whitespace-nowrap rounded-sm"
              >
                Contact Us
              </Link>

              {/* MOBILE TOGGLE */}
              <button
                className="lg:hidden text-white p-1.5 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 top-0 left-0 w-full h-full bg-black/95 backdrop-blur-md z-40 lg:hidden overflow-y-auto"
          style={{ paddingTop: "84px" }} // Adjust based on your navbar height
        >
          <div className="px-6 py-6 space-y-0">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-white text-lg font-medium py-4 border-b border-gray-700/50 hover:text-red-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="block w-full mt-6 py-4 bg-white text-black text-lg font-semibold text-center rounded hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}