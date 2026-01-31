"use client";
import Image from "next/image";

export default function CustomizedBatterySection() {
  return (
    <section className="w-full bg-white py-20 font-montserrat">
      {/* WIDER CONTAINER */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Top Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-semibold text-black">
          Customized Battery Packs
        </h2>

        {/* Top Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Title */}
          <h3 className="text-2xl md:text-5xl font-semibold text-black leading-snug">
            Engineered to Your Application
          </h3>

          {/* Right Content */}
          <p className="text-lg md:text-2xl md:font-medium text-black leading-relaxed">
            We design and deliver customized battery packs tailored to specific
            power, energy, and integration requirements. From cell selection and
            thermal management to enclosure design and safety systems, our
            solutions are optimized for performance, compliance, and long-term
            operational reliability across diverse use cases.
          </p>
        </div>

        {/* Image – Wider & Stronger */}
        <div className="mt-20 mx-auto w-full max-w-[1500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/custom-battery.png"
            alt="Customized Battery Packs"
            width={1600}
            height={800}
            priority
            className="
      w-full object-cover
      h-[260px]          /* mobile taller */
      sm:h-[320px]
      md:h-[420px]
      lg:h-auto          /* desktop keeps original ratio */
    "
          />
        </div>
      </div>
    </section>
  );
}
