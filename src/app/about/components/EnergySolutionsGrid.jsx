"use client";
import Image from "next/image";

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
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-medium text-gray-800 max-w-4xl mx-auto">
          At Joulecube Energy, we design and execute utility-scale and C&I
          Battery Energy Storage Solutions that enable:
        </h2>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-16">
          {solutions.map((item, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Underline */}
              <div className="w-20 h-[3px] bg-black mx-auto mt-5" />

              {/* Title */}
              <h3 className="mt-3 text-lg md:text-xl font-medium text-gray-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="mt-16 text-base md:text-lg text-gray-600 max-w-4xl mx-auto">
          Our EPC-driven approach ensures projects are engineered for
          performance, compliance, and long-term operational excellence.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <button className="px-8 py-3 border border-black text-sm font-medium rounded-md hover:bg-black hover:text-white transition">
            Explore Impact
          </button>
        </div>
      </div>
    </section>
  );
}
