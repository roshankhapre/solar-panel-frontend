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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] sm:min-h-[80vh] lg:min-h-[85vh] w-full overflow-hidden font-montserrat"
      >
        <div className="absolute inset-0">
          <Image
            src="/power-bg.png"
            alt="House with solar panels at night"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-[2000ms]"
            style={{ transform: heroVisible ? "scale(1)" : "scale(1.1)" }}
          />
        </div>

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent transition-opacity duration-1000 ${
            heroVisible ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Content */}
        <div className="relative h-full flex items-end">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 pb-10 sm:pb-16 lg:pb-24">
            <div className="max-w-3xl lg:max-w-4xl">
              <h2
                className={`text-[clamp(22px,6vw,46px)] font-semibold text-white leading-tight mb-4 transition-all duration-1000 ${
                  heroVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                Grid Goes Down,
                <br />
                Lights Stay On
              </h2>

              <p
                className={`text-gray-200 text-[clamp(14px,2.4vw,22px)] leading-relaxed max-w-2xl transition-all duration-1000 delay-300 ${
                  heroVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MONITORING SECTION */}
      <section
        ref={sectionRef}
        className="relative py-14 sm:py-20 lg:py-28 bg-white overflow-hidden"
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text */}
          <div className="relative z-10 w-full lg:w-1/2">
            <h3
              className={`text-[clamp(22px,4.5vw,46px)] font-medium text-black leading-tight mb-6 transition-all duration-700 ${
                sectionVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              <span className="text-red-500 font-semibold">24/7</span>{" "}
              Monitoring,
              <br />
              <span className="font-semibold">Maximum Control</span>
            </h3>

            <p
              className={`text-black text-[clamp(15px,2.6vw,28px)] font-medium leading-relaxed max-w-xl transition-all duration-700 delay-300 ${
                sectionVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          {/* Image */}
          <div
            className={`w-full lg:w-1/2 flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${
              sectionVisible
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-12 opacity-0 scale-95"
            }`}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[700px] xl:max-w-[900px] group">
              <div className="relative aspect-[4/5] lg:aspect-[5/6] xl:aspect-[16/10]">
                <Image
                  src="/1.png"
                  alt="Man monitoring solar system"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Glow */}
              <div className="absolute inset-0 bg-red-500/10 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
