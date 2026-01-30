"use client";
import Image from "next/image";

export default function ProductHighlightSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Heading */}
        <h2 className="text-center text-2xl md:text-5xl font-semibold text-gray-900">
          Hithium Hiner – 125 kW / 261 kWh
        </h2>

        {/* Top Grid Content */}
        <div className=" mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Title */}
          <h3 className=" text-xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Standardized, Grid-Ready Energy Storage
          </h3>

          {/* Right Description */}
          <p className=" text-base md:text-lg text-gray-900 md:font-medium leading-relaxed">
            Joulecube Energy offers the Hithium Hiner 125 kW / 261 kWh Battery
            Energy Storage System, engineered for high performance, safety, and
            reliability. Designed for commercial and industrial applications,
            the system enables peak load management, backup power, and renewable
            integration with a compact, scalable architecture.
          </p>
        </div>

        {/* Image */}
        <div className="mt-14 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/hithium-hiner.png"
            alt="Battery Energy Storage System"
            width={1400}
            height={720}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
