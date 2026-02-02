"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function PowerBackup() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const heroRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setHeroVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* SECTION 1 - HERO (Restored Original BG & Colors) */}
      <section
        ref={heroRef}
        className="relative h-[90vh] xs:h-[85vh] sm:h-[80vh] md:h-[75vh] lg:h-[80vh] w-full overflow-hidden font-montserrat"
      >
        <div className="absolute inset-0">
          <Image
            src="/power-bg.png"
            alt="House with solar panels at night"
            fill
            className="object-cover transition-transform duration-[2s] scale-105"
            style={{ transform: heroVisible ? "scale(1)" : "scale(1.1)" }}
            priority
            sizes="100vw"
          />
        </div>

        {/* Original Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-1000 ${
            heroVisible ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div className="relative h-full flex items-end">
          <div className="w-full mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              {/* Fluid Responsive Title */}
              <h2
                className={`text-[clamp(24px,5vw,42px)] font-semibold text-white mb-4 sm:mb-5 md:mb-6 leading-tight transition-all duration-1000 ease-out ${
                  heroVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
              >
                Grid Goes Down,
                <br />
                Lights Stay On
              </h2>

              <p
                className={`text-gray-100 text-[clamp(14px,2vw,21px)] leading-relaxed max-w-3xl md:max-w-4xl font-medium transition-all duration-1000 delay-300 ease-out ${
                  heroVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - MONITORING (Restored Layout & Overlap) */}
      <section
        ref={sectionRef}
        className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-visible"
      >
        <div className="max-w-[1920px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col lg:flex-row items-center">
          
          {/* Content Container */}
          <div className="relative z-10 w-full lg:w-1/2 mb-12 lg:mb-0">
            <h3
              className={`text-[clamp(24px,4vw,46px)] font-medium text-black mb-6 sm:mb-7 md:mb-8 leading-tight transition-all duration-700 ${
                sectionVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <span className="text-red-500 font-semibold inline-block transition-all duration-700 delay-100">
                24/7
              </span>{" "}
              <span className="inline-block transition-all duration-700 delay-200">
                Monitoring,
              </span>
              <br />
              <span className="font-semibold inline-block transition-all duration-700 delay-300">
                Maximum Control
              </span>
            </h3>

            <p
              className={`text-black text-[clamp(16px,2.5vw,34px)] font-medium leading-relaxed max-w-lg lg:max-w-xl transition-all duration-700 delay-500 ${
                sectionVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          {/* Image Container - The Praise-Worthy Overlap */}
          <div
            className={`relative w-full lg:w-1/2 flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${
              sectionVisible ? "translate-x-0 opacity-100 scale-100" : "translate-x-12 opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full max-w-[350px] xs:max-w-[450px] md:max-w-[550px] lg:max-w-[750px] xl:max-w-[950px] group">
              <div className="relative aspect-[4/5] lg:aspect-[5/6] xl:aspect-[16/10]">
                <Image
                  src="/1.png"
                  alt="Man monitoring solar system"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
              {/* Soft glow behind image on hover */}
              <div className="absolute inset-0 bg-red-500/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}