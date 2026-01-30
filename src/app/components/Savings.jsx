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
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle slide change with animation
  const handleSlideChange = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActive(index);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // AUTO SLIDE LOGIC
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setActive((prev) => (prev + 1) % slides.length);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden font-montserrat py-12 sm:py-16 md:py-20">
      {/* Background with Fade */}
      <div className="absolute inset-0 -z-10 transition-opacity duration-500">
        <Image
          src="/solar-side.png"
          alt="Solar Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full px-4 sm:px-6 md:px-12 mt-8 sm:mt-16 md:mt-28">
        <div className="max-w-7xl">
          {/* Title - Fade Slide */}
          <div className="overflow-hidden">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-gray-900 leading-tight mb-4 sm:mb-6 transition-all duration-500"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "translateY(20px)" : "translateY(0)",
              }}
            >
              {slides[active].title}
            </h2>
          </div>

          {/* First Paragraph - Fade Slide */}
          <div className="overflow-hidden">
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-relaxed text-black max-w-6xl mb-20 sm:mb-32 md:mb-40 lg:mb-56 transition-all duration-500"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "translateY(20px)" : "translateY(0)",
                transitionDelay: "100ms",
              }}
            >
              {slides[active].desc1}
            </p>
          </div>

          {/* Slider Indicator */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`h-1 rounded-full cursor-pointer transition-all duration-300 
                ${active === index ? "w-16 sm:w-20 md:w-24 bg-red-500" : "w-6 sm:w-8 md:w-10 bg-gray-300"}`}
              ></span>
            ))}
          </div>

          {/* Subtitle - Fade Slide */}
          <div className="overflow-hidden">
            <h4
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[28px] font-semibold text-gray-900 mb-3 sm:mb-4 transition-all duration-500"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "translateY(20px)" : "translateY(0)",
                transitionDelay: "200ms",
              }}
            >
              {slides[active].subtitle}
            </h4>
          </div>

          {/* Second Paragraph - Fade Slide */}
          <div className="overflow-hidden">
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[22px] leading-relaxed text-black max-w-2xl transition-all duration-500"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? "translateY(20px)" : "translateY(0)",
                transitionDelay: "300ms",
              }}
            >
              {slides[active].desc2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
