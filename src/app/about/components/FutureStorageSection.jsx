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
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto px-6 text-center py-14">
        <h2
          data-aos="fade-down"
          className="text-2xl md:text-5xl font-bold text-gray-900"
        >
          The Future Is Storage-Led
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-4 text-base md:text-2xl md:font-medium text-gray-900 max-w-4xl mx-auto"
        >
          As renewable penetration increases, energy storage is becoming the
          backbone of India's power infrastructure.
        </p>
      </div>

      {/* Main Image Section */}
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="relative w-full h-[380px] md:h-[520px] lg:h-[650px]"
      >
        <Image
          src="/future-storage.jpeg"
          alt="Solar Power Infrastructure"
          fill
          priority
          className="object-cover"
        />

        {/* Bottom White Fade */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent z-[2]" />
      </div>

      {/* Bottom Text */}
      <div className="max-w-7xl mx-auto px-6 text-center py-14">
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-base md:text-2xl md:font-medium text-gray-900 max-w-4xl mx-auto"
        >
          At Joulecube Energy, we design and execute utility-scale and C&I
          Battery Energy Storage Solutions that enable:
        </p>
      </div>
    </section>
  );
}
