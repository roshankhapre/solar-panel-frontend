"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background with Fade In */}
      <div
        className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src="/solar-hero.jpeg"
          alt="Solar Panels"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 z-[1] transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      />

      {/* TOP RIGHT RED SHAPE - Slide In */}
      <div
        className={`absolute top-0 right-2 sm:right-6 md:right-10 z-[2] transition-all duration-700 delay-200 ${isVisible ? "opacity-50 translate-x-0" : "opacity-0 translate-x-10"}`}
      >
        <Image
          src="/top-red-line.png"
          alt="top red line"
          width={110}
          height={220}
          priority
          className="object-contain w-[70px] sm:w-[90px] md:w-[110px]"
        />
      </div>

      {/* BOTTOM RIGHT RED SHAPE - Slide In */}
      <div
        className={`absolute bottom-0 right-2 sm:right-6 md:right-10 z-[2] transition-all duration-700 delay-300 ${isVisible ? "opacity-50 translate-x-0" : "opacity-0 translate-x-10"}`}
      >
        <Image
          src="/down-red-line.png"
          alt="down red line"
          width={110}
          height={360}
          priority
          className="object-contain w-[70px] sm:w-[90px] md:w-[110px]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-[3] min-h-screen flex">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-between">
          {/* CENTER TEXT */}
          <div className="flex-1 flex items-center">
            <div className="max-w-xl text-white">
              {/* Title - Fade Up */}
              <div
                className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h1 className="text-[36px] sm:text-[44px] md:text-[60px] lg:text-[78px] font-semibold leading-tight">
                  Solar Panels
                </h1>
              </div>

              {/* Subtitle - Fade Up with Delay */}
              <div
                className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <p className="mt-3 sm:mt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white/90">
                  Save on Energy, Power Your Home
                </p>
              </div>

              {/* Arrow - Fade In with Bounce */}
              <div
                className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
              >
                <div className="mt-3 sm:mt-4">
                  <div className="animate-bounce">
                    <Image
                      src="/arrow.png"
                      alt="arrow"
                      width={40}
                      height={40}
                      className="w-8 sm:w-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BUTTONS - Fade Up */}
          <div
            className={`mb-10 sm:mb-14 lg:mb-20 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-12 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button className="border border-white/90 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-md text-[14px] sm:text-[16px] lg:text-[18px] text-white backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black transition-all">
              Schedule consultation
            </button>

            <button className="bg-white text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-md text-[14px] sm:text-[16px] lg:text-[18px] hover:bg-gray-200 transition-all">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
