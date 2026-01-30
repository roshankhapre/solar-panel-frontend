"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

export default function Maintenance() {
  const [inView2, setInView2] = useState(false);
  const section2Ref = useRef(null);

  const section0Ref = useRef(null);
  const lastScrollY = useRef(0);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView2(entry.isIntersecting),
      { threshold: 0.25 },
    );

    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* SECTION 0 – STICKY */}
      <section
        ref={section0Ref}
        className="sticky top-0 z-40 bg-white border-b-0 "
      >
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 lg:whitespace-nowrap">
            Solar Maintenance Made Easy: A Homeowner's Guide
          </h2>

          <p
            className="text-gray-900 text-base sm:text-lg md:text-2xl md:font-medium 
              max-w-7xl -mx-1 leading-relaxed 
              indent-[-7rem] pl-[7rem]
"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-[1700px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* TEXT */}
            <div className="lg:w-[42%] text-left mb-1">
              <span className="block w-20 h-[6px] bg-red-500 rounded mb-4"></span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 ">
                Generate Energy
              </h2>

              <p className="text-gray-900 text-base md:text-2xl md:font-medium max-w-xl">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            {/* IMAGE */}
            <div className="lg:w-[58%] flex justify-end">
              <div className="relative h-[280px] sm:h-[340px] md:h-[420px] lg:h-[580px] w-full max-w-[760px] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/maintenance.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1700px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            {/* IMAGE - LEFT */}
            <div className="lg:w-[58%] flex justify-start">
              <div className="relative h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px] w-full max-w-[760px] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/energy-room.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TEXT - RIGHT */}
            <div className="lg:w-[42%] min-w-xl text-left ml-20 mb-20">
              <span className="block w-20 h-[6px] bg-red-500 rounded mb-4"></span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5">
                Use Energy
              </h2>
              <p className="text-gray-900 text-base md:text-lg lg:text-2xl lg:font-medium max-w-xl">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1700px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1.4fr] gap-12 items-center">
            <div>
              <span className="block w-20 h-[6px] bg-red-500 rounded mb-4"></span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5">
                Store Any Extra
              </h2>
              <p className="text-gray-900 text-base md:text-lg lg:text-2xl lg:font-medium max-w-xl">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div className="relative h-[280px] sm:h-[340px] md:h-[420px] lg:h-[480px] w-full max-w-[760px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/battery-home.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – FULL WIDTH IMAGE */}
    </div>
  );
}
