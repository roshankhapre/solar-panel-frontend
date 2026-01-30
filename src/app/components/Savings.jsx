"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Savings() {
  const slides = [
    {
      title: "Save On Electricity Bills",
      desc1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      subtitle: "Monthly Bill Savings",
      desc2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      title: "Switch To Clean Solar Energy",
      desc1:
        "Solar energy is a powerful and sustainable source of energy that helps reduce carbon emissions and lowers dependency on fossil fuels for electricity generation.",
      subtitle: "Eco Friendly Power",
      desc2:
        "Solar panels convert sunlight into electricity, helping households and businesses move toward a greener and more sustainable future.",
    },
    {
      title: "Long Term Cost Benefits",
      desc1:
        "Investing in solar panels ensures long-term cost savings, energy independence, and protection against rising electricity prices.",
      subtitle: "Lifetime Savings",
      desc2:
        "With minimal maintenance and long lifespan, solar systems deliver consistent performance and financial benefits over decades.",
    },
  ];

  const [active, setActive] = useState(0);

  // AUTO SLIDE LOGIC
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden font-montserrat">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/solar-side.png"
          alt="Solar Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full px-12 mt-28">
        <div className="max-w-7xl">
          {/* Title */}
          <h2 className="text-[52px] font-bold text-gray-900 leading-tight mb-6 transition-all duration-500">
            {slides[active].title}
          </h2>

          {/* First Paragraph */}
          <p className="text-[24px] leading-relaxed text-black max-w-6xl mb-56 transition-all duration-500">
            {slides[active].desc1}
          </p>

          {/* Slider Indicator */}
          <div className="flex items-center gap-3 mb-6">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setActive(index)}
                className={`h-[4px] rounded-full cursor-pointer transition-all duration-300 
                ${active === index ? "w-24 bg-red-500" : "w-10 bg-gray-300"}`}
              ></span>
            ))}
          </div>

          {/* Subtitle */}
          <h4 className="text-[28px] font-semibold text-gray-900 mb-3 transition-all duration-500">
            {slides[active].subtitle}
          </h4>

          {/* Second Paragraph */}
          <p className="text-[22px] leading-relaxed text-black max-w-2xl transition-all duration-500">
            {slides[active].desc2}
          </p>
        </div>
      </div>
    </section>
  );
}
