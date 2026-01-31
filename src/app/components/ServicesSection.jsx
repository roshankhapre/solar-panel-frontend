"use client";

import { ArrowUpRight, Home, Zap, Wrench } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= SERVICES SECTION ================= */}
      <section
        ref={sectionRef}
        className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
          {/* LEFT CONTENT - STICKY */}
          <div className="sticky top-24 h-fit">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <span className="text-sm text-gray-500">Service</span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 sm:mt-3 leading-tight text-black">
                Complete home service <br />
                solutions you can trust
              </h2>

              <button className="mt-6 sm:mt-8 md:mt-10 border-2 border-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-gray-100 transition-all duration-300 text-black group">
                <span className="flex items-center gap-2">
                  Explore More Services
                  <ArrowUpRight
                    className="group-hover:rotate-45 transition-transform duration-300"
                    size={18}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* ================= RIGHT STICKY STACK ================= */}
          <div className="relative h-[800px] sm:h-[900px] md:h-[1000px] lg:h-[1100px]">
            {/* CARD 1 - TOP */}
            <div className="sticky top-24 z-30">
              <div
                className={`transition-all duration-500 delay-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 md:gap-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-start w-full sm:max-w-[75%]">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-black text-white flex items-center justify-center shrink-0 aspect-square transition-transform duration-300 hover:scale-110">
                      <Home className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-1 sm:mb-2 text-black">
                        Customize Preferences
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-600">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border border-gray-400 text-black flex items-center justify-center transition-all duration-300 hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 - MIDDLE */}
            <div className="sticky top-36 sm:top-40 z-40 mt-8 sm:mt-10">
              <div
                className={`transition-all duration-500 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="bg-red-600 text-white rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 md:gap-8 shadow-red-500/30">
                  <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-start w-full sm:max-w-[75%]">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-white text-red-600 flex items-center justify-center shrink-0 aspect-square">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-1 sm:mb-2 text-white">
                        Monitor Energy Flow
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-white/90">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border border-white text-white flex items-center justify-center transition-all duration-300 hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3 - BOTTOM */}
            <div className="sticky top-48 sm:top-56 z-50 mt-8 sm:mt-10">
              <div
                className={`transition-all duration-500 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 md:gap-8">
                  <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-start w-full sm:max-w-[75%]">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-black text-white flex items-center justify-center shrink-0 aspect-square">
                      <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-1 sm:mb-2 text-black">
                        Get Urgent Alerts
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-600">
                        It is long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border border-gray-400 text-black flex items-center justify-center transition-all duration-300 hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FULL WIDTH IMAGE ================= */}
      <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] -mt-16 sm:-mt-20 md:-mt-24">
        <div
          className={`transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/service-full.jpeg"
            alt="Solar Home"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* ================= TEXT BELOW IMAGE ================= */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-12 xl:gap-16">
            {/* LEFT TITLE */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black whitespace-nowrap">
              Getting to Power On
            </h3>

            {/* RIGHT DESCRIPTION */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-900 max-w-5xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
