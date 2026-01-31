"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function InstallSection() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);
  const heroRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    // Hero appears on load
    setHeroVisible(true);

    // Images appear on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImagesVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (imagesRef.current) {
      observer.observe(imagesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white font-montserrat">
      {/* HERO SECTION */}
      <div
        ref={heroRef}
        className="
    grid grid-cols-1 lg:grid-cols-2
    min-h-[500px]
    md:min-h-[600px]
    lg:min-h-[600px]
  "
      >
        {/* LEFT: Black Content */}
        <div
          className={`bg-black text-white flex items-center
      px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24
      py-12 lg:py-0
      transition-all duration-700
      ${
        heroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
        >
          <div className="max-w-lg">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6
          transition-all duration-700 delay-100
          ${
            heroVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
            >
              Install Solar Panels
            </h2>

            <p
              className={`text-gray-300 mb-8 text-base sm:text-lg
          transition-all duration-700 delay-200
          ${
            heroVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
            >
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </p>

            <div
              className={`flex gap-4 flex-wrap
          transition-all duration-700 delay-300
          ${
            heroVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
            >
              <button className="border border-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
                Schedule consultation
              </button>
              <button className="bg-white text-black px-6 py-3 hover:bg-gray-200 transition-all duration-300">
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div
          className={`relative overflow-hidden
      min-h-[260px]
      sm:min-h-[320px]
      md:min-h-[420px]
      lg:min-h-full
      transition-all duration-1000
      ${heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        >
          <Image
            src="/install-bg.png"
            alt="Solar installation"
            fill
            className="object-cover object-left transition-transform duration-700 lg:hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>
      </div>

      {/* 4 IMAGES WITH ROUNDED TOPS */}
      <div ref={imagesRef} className="relative">
        {/* Top rounded white overlay */}
        <div className="absolute -top-6 left-0 right-0 h-12 bg-black"></div>
      </div>
    </section>
  );
}
