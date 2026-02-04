"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Maintenance() {
  const sectionsRef = useRef([]);
  const [visible, setVisible] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);

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
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));

    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const anim =
    "transition-all duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)]";

  return (
    <section className="relative bg-white font-montserrat">
      {/* ================= STICKY HEADER ================= */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 text-center">
          <h2 className="text-[clamp(20px,5vw,48px)] font-bold text-gray-900 mb-3">
            Solar Maintenance Made Easy
          </h2>
          <p className="text-[clamp(13px,2.6vw,18px)] text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Experience peace of mind with our automated energy management system.
            Efficiency meets simplicity.
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="h-[2px] bg-red-500"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative py-16 sm:py-24 lg:py-28 space-y-24 sm:space-y-32 lg:space-y-48 bg-gray-50">
        
        {/* Desktop vertical progress line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden xl:block">
          <div
            className="absolute top-0 left-0 w-full bg-red-500"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* BLOCK TEMPLATE */}
        {[{
          key: "b1",
          title: "Generate Energy",
          text:
            "Clean, renewable power starts here. Our high-efficiency panels ensure you capture every drop of sunshine.",
          img: "/maintenance.jpeg",
          reverse: false,
        },
        {
          key: "b2",
          title: "Use Energy",
          text:
            "Smart distribution at your fingertips. Monitor usage in real-time and optimize performance.",
          img: "/energy-room.png",
          reverse: true,
        },
        {
          key: "b3",
          title: "Store Extra Energy",
          text:
            "Save excess energy in high-capacity storage for peak hours or outages.",
          img: "/battery-home.png",
          reverse: false,
        }].map((block, i) => (
          <div
            key={block.key}
            ref={(el) => (sectionsRef.current[i] = el)}
            data-key={block.key}
            className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center"
          >
            {/* Text */}
            <div
              className={`${anim} ${
                visible[block.key]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              } ${block.reverse ? "lg:order-2" : ""}`}
            >
              <span className="block w-16 h-[5px] bg-red-500 rounded-full mb-6" />
              <h3 className="text-[clamp(22px,5vw,46px)] font-bold mb-5 text-gray-900">
                {block.title}
              </h3>
              <p className="text-gray-700 text-[clamp(14px,2.6vw,18px)] font-medium leading-relaxed max-w-xl">
                {block.text}
              </p>
            </div>

            {/* Image */}
            <div
              className={`relative group overflow-hidden rounded-3xl shadow-2xl ${anim} ${
                visible[block.key]
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              } ${block.reverse ? "lg:order-1" : ""}`}
            >
              <div className="relative h-[220px] sm:h-[340px] md:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src={block.img}
                  alt={block.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 lg:group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
