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
    <section className="bg-white">
      {/* HERO SECTION */}
      <div
        ref={heroRef}
        className="grid grid-cols-1 lg:grid-cols-2 h-[500px] md:h-[600px]"
      >
        {/* LEFT: Black Content */}
        <div
          className={`bg-black text-white flex items-center px-8 md:px-16 lg:px-24 transition-all duration-700 ${
            heroVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="max-w-lg">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
                heroVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Install Solar Panels
            </h2>
            <p
              className={`text-gray-300 mb-8 text-lg transition-all duration-700 delay-200 ${
                heroVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages.
            </p>
            <div
              className={`flex gap-4 flex-wrap transition-all duration-700 delay-300 ${
                heroVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <button className="border border-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 group relative overflow-hidden">
                <span className="relative z-10">Schedule consultation</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </button>
              <button className="bg-white text-black px-6 py-3 hover:bg-gray-200 transition-all duration-300 group relative overflow-hidden">
                <span className="relative z-10">Order Now</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent"></div>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Image with gradient */}
        <div
          className={`relative overflow-hidden transition-all duration-1000 ${
            heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src="/install-bg.png"
              alt="Solar installation"
              fill
              className="object-cover object-left transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Circular gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>
      </div>

      {/* 4 IMAGES WITH ROUNDED TOPS */}
      <div ref={imagesRef} className="relative">
        {/* Top rounded white overlay */}
        <div className="absolute -top-6 left-0 right-0 h-12 bg-black"></div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {["/G1.png", "/G2.png", "/G3.png", "/G4.png"].map((img, i) => (
            <div
              key={i}
              className={`relative h-[200px] md:h-[300px] lg:h-[350px] rounded-t-3xl transition-all duration-500 ${
                imagesVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                overflow: "hidden",
              }}
            >
              <div className="absolute inset-0 group">
                <Image
                  src={img}
                  alt={`Solar ${i + 1}`}
                  fill
                  className="object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
