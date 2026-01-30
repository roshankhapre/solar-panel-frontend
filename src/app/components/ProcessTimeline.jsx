"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ProcessTimeline() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveStep(1);
          setTimeout(() => setActiveStep(2), 400);
          setTimeout(() => setActiveStep(3), 800);
        }
      },
      { threshold: 0.35 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* TOP IMAGE */}
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden mb-24">
          <Image
            src="/timeline-house.png"
            alt="Solar House"
            fill
            className="object-cover"
          />
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* LINE */}
          <div className="absolute top-3 left-0 w-full h-[2px] bg-gray-300"></div>

          {/* MOVING RED DOT */}
          <div
            className="absolute top-[5px] w-4 h-4 bg-red-500 rounded-full transition-all duration-700"
            style={{
              left:
                activeStep === 1
                  ? "10%"
                  : activeStep === 2
                    ? "48%"
                    : activeStep === 3
                      ? "85%"
                      : "0%",
            }}
          />

          {/* STEPS */}
          <div className="grid md:grid-cols-3 gap-14 mt-14">
            <TimelineItem
              active={activeStep >= 1}
              title="From Order to Design"
              desc="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />

            <TimelineItem
              active={activeStep >= 2}
              title="From Install to Power On"
              desc="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />

            <TimelineItem
              active={activeStep >= 3}
              title="From Day One to Onward"
              desc="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, desc, active }) {
  return (
    <div
      className={`transition-all duration-700 ease-out transform ${
        active ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <h4 className="font-semibold text-lg text-black mb-3 text-center">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed text-center">
        {desc}
      </p>
    </div>
  );
}
