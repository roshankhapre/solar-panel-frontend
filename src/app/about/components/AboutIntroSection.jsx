"use client";
import Image from "next/image";

export default function AboutIntroSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top Heading */}
        <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 leading-tight whitespace-nowrap">
          Delivering Reliable Energy Storage Infrastructure for India
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg md:text-3xl md:font-medium text-gray-900 max-w-6xl mx-auto leading-relaxed">
          Joulecube Energy is a specialized EPC solutions and long-term service
          provider for Battery Energy Storage Systems (BESS), supporting India’s
          transition to a resilient, flexible, and low-carbon power ecosystem.
        </p>

        {/* Image Card */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/about-section.jpeg"
            alt="Renewable Energy"
            width={1600}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Bottom Content */}
        <p className="mt-12 text-lg md:text-3xl md:font-medium text-gray-900 max-w-6xl mx-auto leading-relaxed">
          We deliver end-to-end battery energy storage projects—from engineering
          and procurement to construction, commissioning, and life cycle
          services—helping utilities, commercial, and industrial consumers
          achieve grid stability, peak demand management, and energy security.
        </p>
      </div>
    </section>
  );
}
