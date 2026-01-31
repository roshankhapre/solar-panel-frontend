"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const steps = [
  {
    title: "From Order to Design",
    desc: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    img: "/timeline-house.png",
  },
  {
    title: "From Install to Power On",
    desc: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    img: "/battery-home.png",
  },
  {
    title: "From Day One to Onward",
    desc: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    img: "/custom-battery.png",
  },
];

export default function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSectionVisible(true),
      { threshold: 0.1 },
    );

    const heroObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setHeroVisible(true),
      { threshold: 0.1 },
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    if (heroRef.current) heroObserver.observe(heroRef.current);

    return () => {
      sectionObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);

  const handleTouchEnd = (e) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      handleStepChange(
        diff > 0
          ? (active + 1) % steps.length
          : (active - 1 + steps.length) % steps.length,
      );
    }
  };

  const handleStepChange = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <>
      {/* ================= FULL WIDTH IMAGE ================= */}
      <section
        ref={heroRef}
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] -mt-20 overflow-hidden"
      >
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            heroVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/service-full.jpeg"
            alt="Solar Home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </section>

      {/* ================= PROCESS TIMELINE ================= */}
      <section
        ref={sectionRef}
        className="font-montserrat py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white"
      >
        <div className="max-w-[1920px] mx-auto">
          {/* Top Image */}
          <div
            className={`relative w-full h-64 sm:h-72 md:h-80 lg:h-[500px] xl:h-[600px] rounded-3xl overflow-hidden mb-12 sm:mb-16 md:mb-20 transition-opacity duration-700 ${
              sectionVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={steps[active].img}
              alt={steps[active].title}
              fill
              className={`object-cover transition-opacity duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/5" />
          </div>

          {/* ===== Progress Indicators (UNCHANGED) ===== */}
          <div
            className={`relative mb-8 sm:mb-12 px-4 transition-opacity duration-700 delay-100 ${
              sectionVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between">
              {steps.map((_, i) => (
                <div key={i} className="relative flex-1 flex items-center">
                  <div
                    className={`h-[3px] sm:h-[4px] w-full rounded-full transition-all duration-500 ${
                      active === i ? "bg-red-500" : "bg-gray-300"
                    }`}
                  />
                  {active === i && (
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1 sm:-top-[5px] w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full shadow-md transition-all duration-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ===== Desktop Content (UNCHANGED) ===== */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, i) => (
              <div
                key={i}
                onClick={() => handleStepChange(i)}
                className={`cursor-pointer transition-all duration-300 text-center px-6 py-8 rounded-xl hover:bg-gray-50 ${
                  active === i
                    ? "scale-[1.02] bg-white shadow-lg border border-gray-200"
                    : "bg-gray-50"
                }`}
              >
                <h4 className="font-semibold text-2xl text-black mb-4">
                  {step.title}
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ===== Mobile Swipe (UNCHANGED) ===== */}
          <div
            className="md:hidden relative overflow-hidden rounded-2xl mt-8"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100">
              <h4 className="font-semibold text-2xl text-black mb-6 text-center">
                {steps[active].title}
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                {steps[active].desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
