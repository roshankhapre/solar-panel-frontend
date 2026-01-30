"use client";
import Image from "next/image";

export default function Durable() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/solar-bg.jpeg"
          alt="Sleek Solar House"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>

      {/* Text Content */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-32 left-4 sm:left-8 md:left-24 z-20 max-w-xs sm:max-w-lg md:max-w-7xl text-white">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
          Sleek and Durable
        </h3>

        <p className="text-gray-50 text-sm sm:text-base md:text-3xl leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </section>
  );
}
