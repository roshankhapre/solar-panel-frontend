"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PartnersHero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[520px] md:h-[750px] overflow-hidden font-kumbh"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/partner-hero-bg.png" // 🔁 replace with your image
          alt="Joulecube Partners"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* TOP RIGHT RED BAR */}
      <div
        className={`hidden md:block absolute right-4 md:right-10 z-[2]
        transition-all duration-700 delay-200
        ${isVisible ? "opacity-50 translate-x-0" : "opacity-0 translate-x-10"}`}
        style={{ top: "50%", transform: "translateY(-420px)" }}
      >
        <Image
          src="/top-red-line.png"
          alt="decorative red bar"
          width={110}
          height={220}
          className="object-contain w-[80px] md:w-[110px]"
        />
      </div>

      {/* BOTTOM RIGHT RED BAR */}
      <div
        className={`hidden md:block absolute right-4 md:right-10 z-[2]
        transition-all duration-700 delay-300
        ${isVisible ? "opacity-50 translate-x-0" : "opacity-0 translate-x-10"}`}
        style={{ top: "50%", transform: "translateY(-120px)" }}
      >
        <Image
          src="/down-red-line.png"
          alt="decorative red bar"
          width={110}
          height={360}
          className="object-contain w-[80px] md:w-[110px]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-[3] min-h-screen flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Joulecube Partners
          </h1>

          <p
            className={`mt-6 text-base sm:text-lg md:text-2xl text-white/90 max-w-3xl mx-auto transition-all duration-700 delay-150
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            We’ve integrated with the below partners and more
          </p>
        </div>
      </div>
    </section>
  );
}
