"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Maintenance() {
  const [inView2, setInView2] = useState(false);
  const section2Ref = useRef(null);
  const section0Ref = useRef(null);
  const section1Ref = useRef(null);
  const section3Ref = useRef(null);
  const [visibleSections, setVisibleSections] = useState({
    section0: false,
    section1: false,
    section2: false,
    section3: false,
  });

  useEffect(() => {
    // Set up intersection observers for all sections
    const observers = [];
    const sections = [
      { ref: section0Ref, key: "section0" },
      { ref: section1Ref, key: "section1" },
      { ref: section2Ref, key: "section2" },
      { ref: section3Ref, key: "section3" },
    ];

    sections.forEach(({ ref, key }) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => ({
                ...prev,
                [key]: true,
              }));
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.1 },
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <div className="relative">
      {/* SECTION 0 – STICKY HEADER */}
      <section
        ref={section0Ref}
        className={`sticky top-0 z-40 bg-white border-b-0 shadow-sm transition-all duration-700 ${
          visibleSections.section0
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-center">
            <h2 className="text-2xl xs:text-[28px] sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-[56px] font-semibold text-gray-900 mb-4 sm:mb-4 md:mb-5 lg:mb-6 leading-tight sm:leading-snug">
              Solar Maintenance Made Easy: A Homeowner's Guide
            </h2>

            <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              <p className="text-gray-900 text-base xs:text-[17px] sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] font-medium leading-relaxed sm:leading-relaxed md:leading-relaxed px-1 sm:px-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section
        ref={section1Ref}
        className={`py-12 xs:py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-white transition-all duration-700 ${
          visibleSections.section1
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            {/* TEXT CONTENT */}
            <div className="lg:w-[45%] xl:w-[42%] 2xl:w-[40%] text-left mb-8 lg:mb-0">
              <span
                className={`block w-14 xs:w-16 sm:w-18 md:w-20 lg:w-22 xl:w-24 2xl:w-26 h-[4px] xs:h-[5px] sm:h-[6px] md:h-[7px] lg:h-[8px] bg-red-500 rounded mb-5 sm:mb-6 md:mb-7 lg:mb-8 transition-all duration-1000 ${
                  visibleSections.section1
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
              ></span>

              <h2
                className={`text-2xl xs:text-[28px] sm:text-3xl md:text-[38px] lg:text-[44px] xl:text-5xl 2xl:text-[56px] font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight transition-all duration-1000 delay-100 ${
                  visibleSections.section1
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Generate Energy
              </h2>

              <div className="max-w-lg lg:max-w-xl">
                <p
                  className={`text-gray-900 text-base xs:text-[17px] sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] font-medium leading-relaxed transition-all duration-1000 delay-200 ${
                    visibleSections.section1
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div
              className={`lg:w-[55%] xl:w-[58%] 2xl:w-[60%] flex justify-center lg:justify-end w-full transition-all duration-1000 delay-300 ${
                visibleSections.section1
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[450px] xl:h-[520px] 2xl:h-[600px] w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[760px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/maintenance.jpeg"
                  alt="Maintenance"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 760px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        ref={section2Ref}
        className={`py-12 xs:py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-white transition-all duration-700 ${
          visibleSections.section2
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            {/* IMAGE - LEFT */}
            <div
              className={`lg:w-[55%] xl:w-[58%] 2xl:w-[60%] flex justify-center lg:justify-start w-full order-2 lg:order-1 transition-all duration-1000 delay-100 ${
                visibleSections.section2
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[450px] xl:h-[520px] 2xl:h-[600px] w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[760px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/energy-room.png"
                  alt="Energy Room"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 760px"
                />
              </div>
            </div>

            {/* TEXT - RIGHT */}
            <div className="lg:w-[45%] xl:w-[42%] 2xl:w-[40%] text-left order-1 lg:order-2 mb-8 lg:mb-0">
              <span
                className={`block w-14 xs:w-16 sm:w-18 md:w-20 lg:w-22 xl:w-24 2xl:w-26 h-[4px] xs:h-[5px] sm:h-[6px] md:h-[7px] lg:h-[8px] bg-red-500 rounded mb-5 sm:mb-6 md:mb-7 lg:mb-8 transition-all duration-1000 delay-200 ${
                  visibleSections.section2
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              ></span>

              <h2
                className={`text-2xl xs:text-[28px] sm:text-3xl md:text-[38px] lg:text-[44px] xl:text-5xl 2xl:text-[56px] font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight transition-all duration-1000 delay-300 ${
                  visibleSections.section2
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Use Energy
              </h2>

              <div className="max-w-lg lg:max-w-xl">
                <p
                  className={`text-gray-900 text-base xs:text-[17px] sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] font-medium leading-relaxed transition-all duration-1000 delay-400 ${
                    visibleSections.section2
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section
        ref={section3Ref}
        className={`py-12 xs:py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-white transition-all duration-700 ${
          visibleSections.section3
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* TEXT CONTENT */}
            <div className="lg:w-full mb-8 lg:mb-0">
              <span
                className={`block w-14 xs:w-16 sm:w-18 md:w-20 lg:w-22 xl:w-24 2xl:w-26 h-[4px] xs:h-[5px] sm:h-[6px] md:h-[7px] lg:h-[8px] bg-red-500 rounded mb-5 sm:mb-6 md:mb-7 lg:mb-8 transition-all duration-1000 ${
                  visibleSections.section3
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
              ></span>

              <h2
                className={`text-2xl xs:text-[28px] sm:text-3xl md:text-[38px] lg:text-[44px] xl:text-5xl 2xl:text-[56px] font-semibold mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-tight transition-all duration-1000 delay-100 ${
                  visibleSections.section3
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Store Any Extra
              </h2>

              <div className="max-w-lg lg:max-w-xl">
                <p
                  className={`text-gray-900 text-base xs:text-[17px] sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] font-medium leading-relaxed transition-all duration-1000 delay-200 ${
                    visibleSections.section3
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div
              className={`relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[450px] xl:h-[520px] 2xl:h-[600px] w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-[760px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl lg:ml-auto transition-all duration-1000 delay-300 ${
                visibleSections.section3
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <Image
                src="/battery-home.png"
                alt="Battery Home"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 760px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Add more breathing room at the bottom on mobile */}
      <div className="h-8 sm:h-12 md:h-16 lg:h-20 bg-white"></div>
    </div>
  );
}
