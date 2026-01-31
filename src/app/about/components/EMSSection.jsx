"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EMSSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full bg-white py-20 font-montserrat">
      {/* WIDER CONTAINER */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Top Heading */}
        <h2
          data-aos="fade-down"
          className="text-center text-3xl md:text-5xl font-semibold text-black"
        >
          Energy Management System (EMS)
        </h2>

        {/* Content Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Title */}
          <h3
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-2xl md:text-4xl font-semibold text-black leading-snug"
          >
            Intelligent Control & Optimization
          </h3>

          {/* Right Description */}
          <p
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-lg md:text-2xl md:font-medium text-black leading-relaxed"
          >
            Our Energy Management System (EMS) provides real-time monitoring,
            analytics, and intelligent control of battery assets. By optimizing
            charge-discharge cycles, energy flows, and system performance, the
            EMS ensures maximum asset utilization, enhanced safety, and improved
            lifecycle economics.
          </p>
        </div>

        {/* PRIMARY IMAGE – BIGGER */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-20 mx-auto w-full max-w-[1500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/ems-system.png"
            alt="Energy Management System"
            width={1600}
            height={800}
            priority
            className="
              w-full object-cover
              h-[260px] sm:h-[320px] md:h-[420px] lg:h-auto
            "
          />
        </div>
      </div>

      {/* FULL-WIDTH SECOND IMAGE (UNCHANGED STYLE, JUST CLEANED) */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative w-full h-[360px] sm:h-[480px] md:h-[600px] lg:h-[750px] -mb-20 mt-24"
      >
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
