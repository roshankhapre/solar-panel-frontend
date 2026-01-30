"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EMSSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Top Heading - Slide down */}
          <h2
            className="text-center text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Energy Management System (EMS)
          </h2>

          {/* Content Grid - Split animation */}
          <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
            {/* Left Title - Slide from left */}
            <h3
              className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              Intelligent Control & Optimization
            </h3>

            {/* Right Description - Slide from right */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed">
                Our Energy Management System (EMS) provides real-time
                monitoring, analytics, and intelligent control of battery
                assets.
              </p>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed">
                By optimizing charge-discharge cycles, energy flows, and system
                performance, the EMS ensures maximum asset utilization, enhanced
                safety, and improved lifecycle economics.
              </p>
            </div>
          </div>

          {/* Image - Zoom and fade */}
          <div
            className="mt-14 md:mt-20 rounded-2xl overflow-hidden shadow-2xl relative"
            data-aos="zoom-in-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src="/ems-system.png"
                alt="Energy Management System"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Image - Parallax effect */}
      <div
        className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="2000"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
        <Image
          src="/about2.png"
          alt="Battery Energy Storage System"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{ objectPosition: "center 30%" }}
        />
      </div>
    </section>
  );
}
