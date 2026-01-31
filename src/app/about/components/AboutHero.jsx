"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[520px] md:h-[650px] overflow-hidden font-Kumbh Sans"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/aboutus-hero.png"
          alt="About Us"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30 z-[1]
        transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* TOP RIGHT RED BAR */}
      <div
        className={`hidden md:block absolute right-2 sm:right-6 md:right-10 z-[2]
        transition-all duration-700 delay-200
        ${isVisible ? "opacity-50 translate-x-0" : "opacity-0 translate-x-10"}`}
        style={{ top: "50%", transform: "translateY(-450px)" }}
      >
        <Image
          src="/top-red-line.png"
          alt="top red line"
          width={110}
          height={220}
          className="object-contain w-[70px] sm:w-[90px] md:w-[110px]"
        />
      </div>

      {/* BOTTOM RIGHT RED BAR */}
      <div
        className={`hidden md:block absolute right-2 sm:right-6 md:right-10 z-[2]
        transition-all duration-700 delay-300
        ${isVisible ? "opacity-50 translate-x-0" : "opacity-0 translate-x-10"}`}
        style={{ top: "50%", transform: "translateY(-200px)" }}
      >
        <Image
          src="/down-red-line.png"
          alt="down red line"
          width={110}
          height={360}
          className="object-contain w-[70px] sm:w-[90px] md:w-[110px]"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden z-[2]">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center px-6 z-[3]">
        <div className="text-center text-white max-w-3xl">
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight
            transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            About us
          </h1>

          <p
            className={`text-lg md:text-2xl lg:text-3xl text-white/90
            transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Powering India's Clean Energy Transition
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.7;
          }
        }

        .animate-float {
          animation: float infinite linear;
        }
      `}</style>
    </section>
  );
}
