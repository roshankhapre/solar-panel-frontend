"use client";
import Image from "next/image";

export default function EMSSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Heading */}
        <h2 className="text-center text-2xl md:text-5xl font-semibold text-gray-900">
          Energy Management System (EMS)
        </h2>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
            Intelligent Control & Optimization
          </h3>

          {/* Right Description */}
          <p className="text-base md:text-xl md:font-medium text-gray-900 leading-relaxed">
            Our Energy Management System (EMS) provides real-time monitoring,
            analytics, and intelligent control of battery assets. By optimizing
            charge-discharge cycles, energy flows, and system performance, the
            EMS ensures maximum asset utilization, enhanced safety, and improved
            lifecycle economics.
          </p>
        </div>

        {/* Image */}
        <div className="mt-14 rounded-2xl overflow-hidden shadow-xl">
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
      <div className="relative w-full h-[420px] md:h-[600px] lg:h-[750px] -mb-20">
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
