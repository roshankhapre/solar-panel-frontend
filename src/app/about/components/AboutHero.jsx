"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[520px] md:h-[650px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/aboutus-hero.png" // replace with your image path
        alt="About Us"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TEXT CONTENT */}
      <div className="absolute top-8 mt-10 left-0 w-full h-full flex items-start justify-center pt-16 md:pt-24 px-6">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">About us</h1>

          <p className="text-lg md:text-2xl text-white/90">
            Powering India's Clean Energy Transition
          </p>
        </div>
      </div>
    </section>
  );
}
