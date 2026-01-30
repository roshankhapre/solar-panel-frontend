"use client";

import Image from "next/image";
import { useState } from "react";

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

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* TOP IMAGE */}
        <div className="relative w-full h-[520px] rounded-2xl overflow-hidden mb-24">
          <Image
            src={steps[active].img}
            alt="Timeline"
            fill
            className="object-cover transition-all duration-500"
          />
        </div>

        {/* INDICATOR BAR */}
        <div className="relative flex items-center justify-between mb-12">
          {steps.map((_, i) => (
            <div key={i} className="relative flex-1 flex items-center">
              {/* BAR */}
              <div
                className={`h-[5px] w-full rounded-full transition-all duration-500 ${
                  active === i ? "bg-red-500" : "bg-gray-300"
                }`}
              />

              {/* CENTER DOT */}
              {active === i && (
                <div className="absolute left-1/2 -translate-x-1/2 -top-[6px] w-4 h-4 bg-red-500 rounded-full shadow-md"></div>
              )}
            </div>
          ))}
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer transition-all duration-500 text-center "
              }`}
            >
              <h4 className="max-w-full font-semibold text-3xl text-black mb-3 whitespace-nowrap">
                {step.title}
              </h4>

              <p className="text-gray-900 text-lg leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
