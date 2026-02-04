"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const solutions = [
  { title: "Renewable energy integration", image: "/solution1.png" },
  { title: "Peak load shaving & demand response", image: "/solution2.png" },
  { title: "Reliable backup and power continuity", image: "/solution3.png" },
  { title: "Grid balancing & frequency regulation", image: "/solution4.png" },
];

export default function EnergySolutionsGrid() {
  const [visibleItems, setVisibleItems] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) {
              setVisibleItems((prev) => ({ ...prev, [id]: true }));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.15 },
    );

    const elements = sectionRef.current?.querySelectorAll("[data-id]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getRevealClass = (id) =>
    `transition-all duration-1000 ease-out ${
      visibleItems[id]
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    }`;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-14 xs:py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14 lg:gap-20">
          {solutions.map((item, index) => {
            const id = `item-${index}`;
            return (
              <div
                key={id}
                data-id={id}
                className={`flex flex-col items-center ${getRevealClass(id)}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Image */}
                <div className="relative w-full max-w-[560px] h-[220px] xs:h-[260px] sm:h-[300px] md:h-[360px] lg:h-[420px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Line */}
                <div
                  className={`mt-5 sm:mt-7 h-[4px] bg-black transition-all duration-700 ${
                    visibleItems[id] ? "w-24 sm:w-32" : "w-0"
                  }`}
                />

                {/* Title */}
                <h3 className="mt-4 sm:mt-6 text-lg xs:text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug max-w-md">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Footer Text */}
        <div
          data-id="footer-text"
          className={`mt-16 sm:mt-24 ${getRevealClass("footer-text")}`}
        >
          <p className="text-base xs:text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Our EPC-driven approach ensures projects are engineered for
            performance, compliance, and long-term operational excellence.
          </p>

          <button className="mt-8 px-8 py-3 sm:px-10 sm:py-4 border-2 border-black text-base sm:text-lg rounded-md hover:bg-black hover:text-white transition-all">
            Explore Impact
          </button>
        </div>
      </div>

      {/* Bottom Full Image */}
      <div
        data-id="bottom-image"
        className={`relative mt-16 sm:mt-24 w-full h-[260px] xs:h-[320px] sm:h-[420px] md:h-[520px] lg:h-[85vh] transition-all duration-[1.2s] ${
          visibleItems["bottom-image"]
            ? "opacity-100 scale-100"
            : "opacity-0 scale-105"
        }`}
      >
        <Image
          src="/about1.png"
          alt="Solar Power Infrastructure"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
