"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PowerBackup() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const heroRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Hero section appears on load
    setHeroVisible(true);

    // Section 2 appears on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* SECTION 1 - HERO */}
      <section
        ref={heroRef}
        className="relative h-[90vh] xs:h-[85vh] sm:h-[80vh] md:h-[75vh] lg:h-[80vh] w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/power-bg.png"
            alt="House with solar panels at night"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Gradient Overlay with fade-in */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-1000 ${
            heroVisible ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Content Container */}
        <div className="relative h-full flex items-end">
          <div className="w-full mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              {/* Title with fade-up animation */}
              <h2
                className={`text-2xl xs:text-[26px] sm:text-2xl md:text-3xl lg:text-[50px] xl:text-[54px] font-semibold text-white mb-4 sm:mb-5 md:mb-6 leading-tight transition-all duration-700 delay-100 ${
                  heroVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Grid Goes Down,
                <br />
                Lights Stay On
              </h2>

              {/* Subtitle with fade-up animation */}
              <p
                className={`text-gray-100 text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-[28px] xl:text-[28px] leading-relaxed max-w-3xl md:max-w-4xl font-medium transition-all duration-700 delay-300 ${
                  heroVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - MONITORING WITH OVERLAP EFFECT */}
      <section
        ref={sectionRef}
        className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-visible"
      >
        <div className="max-w-[1920px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {/* Content Container - Always on left */}
          <div className="relative z-10 max-w-xl lg:max-w-2xl xl:max-w-3xl mb-12 lg:mb-0">
            {/* 24/7 Text with slide-in */}
            <h3
              className={`text-2xl xs:text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-medium text-gray-900 mb-6 sm:mb-7 md:mb-8 leading-tight transition-all duration-700 ${
                sectionVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <span
                className={`text-red-500 font-semibold inline-block transition-all duration-700 delay-100 ${
                  sectionVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                24/7
              </span>{" "}
              <span
                className={`inline-block transition-all duration-700 delay-200 ${
                  sectionVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Monitoring,
              </span>
              <br />
              <span
                className={`font-bold inline-block transition-all duration-700 delay-300 ${
                  sectionVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Maximum Control
              </span>
            </h3>

            {/* Description with fade-up */}
            <p
              className={`text-gray-800 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[34px] font-medium leading-relaxed max-w-lg lg:max-w-xl transition-all duration-700 delay-400 ${
                sectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          {/* Image Container - Overlapping on all screens */}
          <div
            className={`relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[55%] xl:w-[60%] 2xl:w-[65%] flex justify-center lg:justify-end mt-8 lg:mt-0 transition-all duration-1000 delay-500 ${
              sectionVisible
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-8 opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[750px] group">
              <div className="relative aspect-[4/5] lg:aspect-[5/6] xl:aspect-[4/5]">
                <Image
                  src="/monitor-man1.jpeg"
                  alt="Man monitoring solar system"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, (max-width: 1280px) 45vw, 750px"
                  priority
                />
              </div>
              {/* Subtle shadow effect on hover */}
              <div className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
