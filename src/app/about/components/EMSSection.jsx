"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EMSSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Heading */}
        <h2
          data-aos="fade-down"
          className="text-center text-2xl md:text-5xl font-semibold text-gray-900"
        >
          Energy Management System (EMS)
        </h2>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Title */}
          <h3
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug"
          >
            Intelligent Control & Optimization
          </h3>

          {/* Right Description */}
          <p
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-base md:text-xl md:font-medium text-gray-900 leading-relaxed"
          >
            Our Energy Management System (EMS) provides real-time monitoring,
            analytics, and intelligent control of battery assets. By optimizing
            charge-discharge cycles, energy flows, and system performance, the
            EMS ensures maximum asset utilization, enhanced safety, and improved
            lifecycle economics.
          </p>
        </div>

        {/* Image */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-14 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/ems-system.png"
            alt="Energy Management System"
            width={1400}
            height={720}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* FULL SCREEN IMAGE */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative w-full h-[420px] md:h-[600px] lg:h-[750px] -mb-20"
      >
        <Image
          src="/about2.png"
          alt="Battery Energy Storage System"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
