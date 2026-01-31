"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductHighlightSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full bg-white py-20 font-montserrat">
      {/* WIDER CONTAINER */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Top Heading */}
        <h2
          data-aos="fade-down"
          className="text-center text-2xl md:text-5xl font-semibold text-black"
        >
          Hithium Hiner – 125 kW / 261 kWh
        </h2>

        {/* Top Grid Content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Title */}
          <h3
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-xl md:text-4xl font-semibold text-black leading-snug"
          >
            Standardized, Grid-Ready Energy Storage
          </h3>

          {/* Right Description */}
          <p
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-base md:text-2xl text-black md:font-medium leading-relaxed"
          >
            Joulecube Energy offers the Hithium Hiner 125 kW / 261 kWh Battery
            Energy Storage System, engineered for high performance, safety, and
            reliability. Designed for commercial and industrial applications,
            the system enables peak load management, backup power, and renewable
            integration with a compact, scalable architecture.
          </p>
        </div>

        {/* IMAGE – BIGGER & STRONGER */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="
            mt-20 mx-auto
            w-full max-w-[1500px]
            rounded-2xl overflow-hidden shadow-2xl
          "
        >
          <Image
            src="/hithium-hiner.png"
            alt="Battery Energy Storage System"
            width={1600}
            height={800}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
