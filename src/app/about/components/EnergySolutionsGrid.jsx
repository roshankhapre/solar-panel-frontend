"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const solutions = [
  {
    title: "Renewable energy integration",
    image: "/solution1.png",
  },
  {
    title: "Peak load shaving & demand response",
    image: "/solution2.png",
  },
  {
    title: "Reliable backup and power continuity",
    image: "/solution3.png",
  },
  {
    title: "Grid balancing & frequency regulation",
    image: "/solution4.png",
  },
];

export default function EnergySolutionsGrid() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center -mt-20">
        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-16">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative w-full h-[260px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Underline */}
              <div className="w-96 h-[6px] bg-black mx-auto mt-5" />

              {/* Title */}
              <h3 className="mt-3 text-lg md:text-2xl font-medium text-gray-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-16 text-base md:text-xl font-medium text-gray-900 max-w-4xl mx-auto"
        >
          Our EPC-driven approach ensures projects are engineered for
          performance, compliance, and long-term operational excellence.
        </p>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-8">
          <button className="px-8 py-3 border border-black text-lg font-medium rounded-md hover:bg-black hover:text-white transition">
            Explore Impact
          </button>
        </div>
      </div>

      {/* FULL WIDTH BOTTOM IMAGE */}
      <div
        data-aos="zoom-in"
        data-aos-delay="600"
        className="relative w-full h-[500px] md:h-screen mt-20"
      >
        <Image
          src="/about1.png"
          alt="Solar Power Infrastructure"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
