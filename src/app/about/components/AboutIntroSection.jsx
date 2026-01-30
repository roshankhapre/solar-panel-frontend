"use client";
import Image from "next/image";

export default function AboutIntroSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
          Delivering Reliable Energy Storage Infrastructure for India
        </h2>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Joulecube Energy is a specialized EPC solutions and long-term service
          provider for Battery Energy Storage Systems (BESS), supporting India’s
          transition to a resilient, flexible, and low-carbon power ecosystem.
        </p>

        {/* Image Card */}
        <div className="mt-14 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/about-section.jpeg"
            alt="Renewable Energy"
            width={1400}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Bottom Content */}
        <p className="mt-12 text-base md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
          We deliver end-to-end battery energy storage projects—from engineering
          and procurement to construction, commissioning, and life cycle
          services—helping utilities, commercial, and industrial consumers
          achieve grid stability, peak demand management, and energy security.
        </p>
      </div>
    </section>
  );
}
