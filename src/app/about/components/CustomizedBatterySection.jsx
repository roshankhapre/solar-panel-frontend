"use client";
import Image from "next/image";

export default function CustomizedBatterySection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-gray-900">
          Customized Battery Packs
        </h2>

        {/* Top Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
            Engineered to Your Application
          </h3>

          {/* Right Content */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We design and deliver customized battery packs tailored to specific
            power, energy, and integration requirements. From cell selection and
            thermal management to enclosure design and safety systems, our
            solutions are optimized for performance, compliance, and long-term
            operational reliability across diverse use cases.
          </p>
        </div>

        {/* Image */}
        <div className="mt-14 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/custom-battery.png"
            alt="Customized Battery Packs"
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
