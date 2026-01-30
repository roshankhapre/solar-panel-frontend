"use client";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/aboutus-hero.png"
        alt="Solar Panels"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* TOP RIGHT RED SHAPE */}
      <div className="absolute top-[0px] right-[40px] z-[2] -mt-30 mr-18 ">
        <Image
          src="/top-red-line.png"
          alt="top red line"
          width={130}
          height={240}
          priority
          className="object-contain opacity-50"
        />
      </div>

      {/* BOTTOM RIGHT RED SHAPE */}
      <div className="absolute bottom-[0px] right-[40px] z-[2] mr-18 ">
        <Image
          src="/down-red-line.png"
          alt="down red line"
          width={120}
          height={420}
          priority
          className="object-contain opacity-50"
        />
      </div>
      <div className="relative z-[3] h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          About us
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl">
          Powering India’s Clean Energy Transition
        </p>
      </div>
    </section>
  );
}
