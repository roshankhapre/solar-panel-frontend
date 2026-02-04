"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FutureStorageSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="w-full bg-white overflow-hidden font-montserrat">
      {/* Top Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 text-center py-10 sm:py-14 md:py-20">
        <h2
          data-aos="fade-down"
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight"
        >
          The Future Is Storage-Led
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl lg:text-3xl md:font-medium text-black leading-relaxed max-w-5xl mx-auto"
        >
          As renewable penetration increases, energy storage is becoming the
          backbone of India's power infrastructure.
        </p>
      </div>

      {/* Image Section */}
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="
          relative w-full 
          h-[240px] 
          sm:h-[320px] 
          md:h-[420px] 
          lg:h-[560px] 
          xl:h-[680px]
        "
      >
        <Image
          src="/future-storage.jpeg"
          alt="Solar Power Infrastructure"
          fill
          priority
          className="object-cover"
        />

        {/* Bottom White Fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-white to-transparent z-[2]" />
      </div>

      {/* Bottom Text */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 text-center py-10 sm:py-14 md:py-20">
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-base sm:text-lg md:text-2xl lg:text-3xl md:font-medium text-black leading-relaxed max-w-5xl mx-auto"
        >
          At Joulecube Energy, we design and execute utility-scale and C&I Battery
          Energy Storage Solutions that enable:
        </p>
      </div>
    </section>
  );
}
