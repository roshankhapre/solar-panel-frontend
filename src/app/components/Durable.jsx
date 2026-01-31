"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Durable() {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden font-montserrat"
      >
        {/* Background Image with Fade In */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            heroVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/solar-bg.jpeg"
            alt="Sleek Solar House"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 transition-opacity duration-1000 ${
            heroVisible ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Text Content */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-16 lg:bottom-32 left-3 sm:left-6 md:left-12 lg:left-24 z-20 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-7xl text-white pr-4 sm:pr-0">
          <div
            className={`transition-all duration-700 delay-100 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 sm:mb-3 md:mb-4 leading-tight">
              Sleek and Durable
            </h3>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-gray-50 text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
