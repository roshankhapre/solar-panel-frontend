"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutIntroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full bg-white py-16 md:py-24 font-montserrat">
      {/* EXTRA WIDE CONTAINER */}
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Top Heading – FORCE ONE LINE */}
        <h2
          data-aos="fade-down"
          className="
    text-2xl sm:text-3xl md:text-5xl
    font-semibold text-black leading-tight
    text-center
    max-w-full
    break-words
  "
        >
          Delivering Reliable Energy Storage Infrastructure for India
        </h2>

        {/* Description – FULL WIDTH FEEL */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="
            mt-6 text-lg md:text-3xl md:font-medium text-black leading-relaxed
            w-full text-center
          "
        >
          Joulecube Energy is a specialized EPC solutions and long-term service
          provider for Battery Energy Storage Systems (BESS), supporting India’s
          transition to a resilient, flexible, and low-carbon power ecosystem.
        </p>

        {/* IMAGE – WIDER & MORE LEFT/RIGHT */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="
            mt-16 mx-auto
            w-full max-w-[1500px]
            rounded-2xl overflow-hidden shadow-xl
          "
        >
          <Image
            src="/about-section.jpeg"
            alt="Renewable Energy"
            width={1600}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Bottom Content – SAME FULL WIDTH */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="
            mt-12 text-lg md:text-3xl md:font-medium text-black leading-relaxed
            w-full text-center
          "
        >
          We deliver end-to-end battery energy storage projects—from engineering
          and procurement to construction, commissioning, and life cycle
          services—helping utilities, commercial, and industrial consumers
          achieve grid stability, peak demand management, and energy security.
        </p>
      </div>
    </section>
  );
}
