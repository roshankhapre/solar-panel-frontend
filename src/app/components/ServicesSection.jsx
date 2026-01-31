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
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 🔑 trigger once only
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cardBase =
    "will-change-transform will-change-opacity transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <>
      {/* ================= SERVICES SECTION ================= */}
      <section
        ref={sectionRef}
        className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-white font-montserrat"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">
          {/* LEFT CONTENT */}
          <div className="sticky top-24 h-fit">
            <div
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }`}
            >
              <span className="text-sm text-gray-500">Service</span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 leading-tight text-black">
                Complete home service <br />
                solutions you can trust
              </h2>

              <button className="mt-8 border-2 border-gray-800 px-8 py-4 text-base font-medium hover:bg-gray-100 transition-all duration-300 text-black group">
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
          <div className="relative h-[950px] lg:h-[1200px]">
            {/* CARD 1 */}
            <div className="sticky top-16 z-30">
              <div
                className={`${cardBase} ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <ServiceCard
                  icon={<Home />}
                  title="Customize Preferences"
                  text="It is a long established fact that a reader will be distracted by the readable content."
                />
              </div>
            </div>

            {/* CARD 2 */}
            <div className="sticky top-48 sm:top-48 z-40 mt-10">
              <div
                className={`${cardBase} delay-150 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <ServiceCard
                  red
                  icon={<Zap />}
                  title="Monitor Energy Flow"
                  text="It is a long established fact that a reader will be distracted by the readable content."
                />
              </div>
            </div>

            {/* CARD 3 */}
            <div className="sticky top-72 sm:top-80 z-50 mt-12">

              <div
                className={`${cardBase} delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <ServiceCard
                  icon={<Wrench />}
                  title="Get Urgent Alerts"
                  text="It is a long established fact that a reader will be distracted by the readable content."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      

    </>
  );
}

/* ================= CARD COMPONENT ================= */
function ServiceCard({ icon, title, text, red }) {
  return (
    <div
      className={`rounded-3xl
      p-8 sm:p-10 lg:p-12
      pr-20 sm:pr-28 lg:pr-36
      w-full
      flex flex-col gap-6
      ${red ? "bg-red-600 text-white" : "bg-gray-50 text-black"}`}
    >
      {/* ICON */}
      <div
        className={`w-18 h-18 sm:w-20 sm:h-20
        rounded-full flex items-center justify-center
        ${red ? "bg-white text-red-600" : "bg-black text-white"}`}
      >
        {icon}
      </div>

      {/* TEXT + ARROW LAYOUT */}
      <div className="flex justify-between gap-12">
        {/* TEXT BLOCK */}
        <div className="flex-1">
          {/* TITLE — ONE LINE ONLY */}
          <h4 className="text-xl sm:text-3xl lg:text-4xl font-semibold mb-3 whitespace-nowrap">
            {title}
          </h4>

          {/* DESCRIPTION */}
          <p className="text-sm sm:font-medium lg:text-xl leading-relaxed opacity-90">
            {text}
          </p>
        </div>

        {/* ARROW — BOTTOM RIGHT */}
        <div className="flex items-end">
          <div
            className={`w-16 h-16 rounded-full border
            flex items-center justify-center shrink-0
            ${red ? "border-white" : "border-gray-400"}`}
          >
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
