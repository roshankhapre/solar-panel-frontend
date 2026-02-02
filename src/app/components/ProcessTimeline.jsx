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

const AUTO_PLAY_DURATION = 5000;

export default function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);

  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  /* ================= SECTION ENTRANCE ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSectionVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ================= AUTOPLAY (FIXED) ================= */
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(timerRef.current);
  }, []);

  /* ================= STEP CHANGE ================= */
  const handleStepChange = (index) => {
    if (isAnimating || index === active) return;

    clearInterval(timerRef.current);
    setIsAnimating(true);
    setActive(index);

    setTimeout(() => {
      setIsAnimating(false);
      timerRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % steps.length);
      }, AUTO_PLAY_DURATION);
    }, 500);
  };

  /* ================= MOBILE SWIPE ================= */
  const handleTouchStart = (e) =>
    setTouchStart(e.targetTouches[0].clientX);

  const handleTouchEnd = (e) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      handleStepChange(
        diff > 0
          ? (active + 1) % steps.length
          : (active - 1 + steps.length) % steps.length
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      className="font-montserrat py-12 md:py-24 px-4 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= IMAGE SHOWCASE ================= */}
        <div
          className={`relative w-full h-[300px] md:h-[600px] rounded-[2rem] overflow-hidden mb-12 shadow-2xl transition-all duration-1000 ${
            sectionVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 ${
              isAnimating
                ? "scale-105 opacity-80"
                : "scale-100 opacity-100"
            }`}
          >
            <Image
              src={steps[active].img}
              alt={steps[active].title}
              fill
              priority
              className="object-cover animate-ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* ================= PROGRESS BAR ================= */}
        <div className="flex gap-4 mb-12">
          {steps.map((_, i) => (
            <div
              key={i}
              onClick={() => handleStepChange(i)}
              className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden cursor-pointer"
            >
              <div
                className={`h-full bg-red-500 ${
                  active === i ? "w-full" : "w-0"
                }`}
                style={{
                  transitionDuration:
                    active === i
                      ? `${AUTO_PLAY_DURATION}ms`
                      : "0ms",
                  transitionTimingFunction: "linear",
                }}
              />
            </div>
          ))}
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              onClick={() => handleStepChange(i)}
              className={`p-8 rounded-3xl cursor-pointer transition-all duration-500 border ${
                active === i
                  ? "bg-white border-gray-100 shadow-xl -translate-y-2"
                  : "bg-transparent border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <h4
                className={`text-2xl font-bold mb-4 ${
                  active === i ? "text-black" : "text-gray-400"
                }`}
              >
                {step.title}
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= MOBILE CARD ================= */}
        <div
          className="md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`p-8 bg-white rounded-3xl shadow-xl border border-gray-50 transition-all duration-500 ${
              isAnimating
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <h4 className="text-2xl font-bold text-black mb-4">
              {steps[active].title}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {steps[active].desc}
            </p>

            <div className="mt-6 flex justify-center gap-2">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i
                      ? "w-8 bg-red-500"
                      : "w-2 bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ================= GLOBAL CSS ================= */}
      <style jsx global>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        .animate-ken-burns {
          animation: ken-burns 20s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
}
