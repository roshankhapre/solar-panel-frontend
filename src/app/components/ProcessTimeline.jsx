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
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      // Minimum swipe distance
      if (diff > 0) {
        // Swipe left - next
        handleStepChange((active + 1) % steps.length);
      } else {
        // Swipe right - previous
        handleStepChange((active - 1 + steps.length) % steps.length);
      }
    }
  };

  const handleStepChange = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive(index);

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section
      ref={sectionRef}
      className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white"
    >
      <div className="max-w-[1920px] mx-auto">
        {/* Top Image - HERO STYLE with Fade In */}
        <div
          className={`relative w-full h-64 sm:h-72 md:h-80 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 transition-opacity duration-700 ${sectionVisible ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={steps[active].img}
            alt={steps[active].title}
            fill
            className={`object-cover transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}
            sizes="(max-width: 700px) 100vw, (max-width: 1200px) 95vw, 1500px"
            priority
          />
          {/* Optional: Add a subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/5"></div>
        </div>

        {/* Progress Bar with Fade In */}
        <div
          className={`relative mb-8 sm:mb-12 px-4 transition-opacity duration-700 delay-100 ${sectionVisible ? "opacity-100" : "opacity-0"}`}
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
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 sm:-top-[5px] w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full shadow-md transition-all duration-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Desktop Grid with Fade Up */}
          <div
            className={`hidden md:grid md:grid-cols-3 gap-8 lg:gap-10 transition-all duration-700 delay-200 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
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
                <div
                  className={`transition-all duration-300 ${active === i ? "scale-105" : ""}`}
                >
                  <h4 className="font-semibold text-2xl text-black mb-4">
                    {step.title}
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Slider */}
          <div
            className={`md:hidden relative overflow-hidden rounded-2xl transition-opacity duration-700 delay-300 ${sectionVisible ? "opacity-100" : "opacity-0"}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Animated Slider */}
            <div className="relative h-full">
              {/* Slider Track with Animation */}
              <div className="relative overflow-hidden rounded-2xl">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`w-full flex-shrink-0 p-6 transition-all duration-500 ${
                      active === i
                        ? "opacity-100 translate-x-0"
                        : i < active
                          ? "opacity-0 -translate-x-full absolute"
                          : "opacity-0 translate-x-full absolute"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100">
                      <h4 className="font-semibold text-2xl text-black mb-6 text-center">
                        {step.title}
                      </h4>
                      <p className="text-gray-700 text-lg leading-relaxed text-center">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Swipe Hint */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="flex items-center gap-2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                  <span>Swipe</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-white/90 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-white/70 rounded-full animate-pulse delay-150"></div>
                    <div className="w-4 h-4 bg-white/50 rounded-full animate-pulse delay-300"></div>
                  </div>
                  <span>to navigate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Step Indicators */}
          <div
            className={`md:hidden mt-8 transition-opacity duration-700 delay-400 ${sectionVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col items-center gap-4">
              {/* Step Dots */}
              <div className="flex gap-3">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => handleStepChange(i)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                      active === i ? "bg-red-500 scale-125" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Step Counter */}
              <div className="text-center text-gray-600">
                {active + 1} / {steps.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
