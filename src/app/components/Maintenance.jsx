"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Maintenance() {
  const sectionsRef = useRef([]);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({
              ...prev,
              [entry.target.dataset.key]: true,
            }));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const anim = "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <section className="relative bg-white">
      {/* ================= STICKY HEADER ================= */}
      <div className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Solar Maintenance Made Easy
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-black font-medium max-w-4xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="py-24 space-y-40 bg-gray-50">
        {/* BLOCK 1 */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          data-key="b1"
          className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div
            className={`${anim} ${
              visible.b1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block w-20 h-[6px] bg-red-500 rounded mb-6" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              Generate Energy
            </h3>
            <p className="text-black text-lg font-semibold sm:text-xl max-w-xl">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout{" "}
            </p>
          </div>

          <div
            className={`${anim} ${
              visible.b1 ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } relative h-[280px] sm:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-xl`}
          >
            <Image
              src="/maintenance.jpeg"
              alt="Maintenance"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* BLOCK 2 */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          data-key="b2"
          className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div
            className={`${anim} ${
              visible.b2 ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } order-2 lg:order-1 relative h-[280px] sm:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-xl`}
          >
            <Image
              src="/energy-room.png"
              alt="Energy Room"
              fill
              className="object-cover"
            />
          </div>

          <div
            className={`${anim} ${
              visible.b2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } order-1 lg:order-2`}
          >
            <span className="block w-20 h-[6px] bg-red-500 rounded mb-6" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              Use Energy
            </h3>
            <p className="text-black text-lg font-semibold sm:text-xl max-w-xl">
              It is a long established fact that a reader will be distracted by the readable countent of a page when looking at its layout
            </p>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          data-key="b3"
          className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div
            className={`${anim} ${
              visible.b3
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block w-20 h-[6px] bg-red-500 rounded mb-6" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              Store Extra Energy
            </h3>
            <p className="text-black text-lg font-semibold sm:text-xl max-w-xl">
                            It is a long established fact that a reader will be distracted by the readable countent of a page when looking at its layout

            </p>
          </div>

          <div
            className={`${anim} ${
              visible.b3 ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } relative h-[280px] sm:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-xl`}
          >
            <Image
              src="/battery-home.png"
              alt="Battery"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
