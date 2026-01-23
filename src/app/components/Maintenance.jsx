"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Maintenance() {
  const [inView1, setInView1] = useState(false);
  const [inView2, setInView2] = useState(false);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === section1Ref.current) {
            setInView1(entry.isIntersecting);
          }
          if (entry.target === section2Ref.current) {
            setInView2(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
    };
  }, []);

  return (
    <div>
      {/* SECTION 1: Maintenance Guide */}
      <section
        ref={section1Ref}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-8 md:mb-12 lg:mb-16 transition-all duration-1000 transform ${
              inView1 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-3 md:mb-4 lg:mb-6 leading-tight">
              Solar Maintenance Made Easy: <br />A Homeowner&apos;s Guide
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
          </div>

          <div
            className={`flex justify-center mb-8 md:mb-10 lg:mb-12 transition-all duration-1000 delay-300 ${
              inView1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-16 h-[1px] bg-gray-300"></div>
          </div>

          <div
            className={`grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center transition-all duration-1000 delay-500 ${
              inView1 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="order-2 md:order-1">
              <div className="flex gap-2 mb-4 md:mb-5 lg:mb-6">
                <span className="w-8 h-[2px] bg-red-500"></span>
                <span className="w-4 h-[2px] bg-gray-300"></span>
                <span className="w-4 h-[2px] bg-gray-300"></span>
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-3 lg:mb-4">
                Generate Energy
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg md:rounded-xl overflow-hidden shadow-lg order-1 md:order-2 transition-transform duration-500 hover:scale-105">
              <Image
                src="/maintenance.jpeg"
                alt="Solar Panel Maintenance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Sleek and Durable - Full width image */}
      <section
        ref={section2Ref}
        className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/solar-bg.jpeg"
            alt="Sleek Solar Panels"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        {/* Text overlay */}
        <div
          className={`absolute bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-16 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 max-w-xs sm:max-w-sm md:max-w-md text-white transition-all duration-1000 transform ${
            inView2 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-2 sm:mb-3 md:mb-4 leading-tight">
            Sleek and Durable
          </h3>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
    </div>
  );
}
