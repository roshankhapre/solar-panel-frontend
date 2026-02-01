"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Simple Aesthetic",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "/feature1.jpeg",
  },
  {
    title: "Easy Installation",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "/feature2.png",
  },
  {
    title: "Weather Resistant",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "/feature3.png",
  },
  {
    title: "Long Lasting",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "/feature4.png",
  },
];

export default function FeatureCards() {
  const sliderRef = useRef(null);
  const [sliderVisible, setSliderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSliderVisible(true),
      { threshold: 0.1 },
    );

    if (sliderRef.current) observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sliderRef}
        className="py-12 sm:py-16 md:py-24 bg-white font-montserrat overflow-x-hidden"
      >
        {/* ✅ FIX: ml-auto only on desktop */}
        <div className="max-w-[1900px] mx-auto lg:ml-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-opacity duration-700 ${
              sliderVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={24}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                bulletClass: "custom-bullet",
                bulletActiveClass: "custom-bullet-active",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 32,
                },
                768: {
                  slidesPerView: 1.6,
                  spaceBetween: 48,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 80,
                },
              }}
            >
              {features.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="pr-4 sm:pr-6 md:pr-8">
                    {/* IMAGE */}
                    <div
                      className={`
                        relative
                        w-full
                        h-48 sm:h-56 md:h-[420px] lg:h-[480px]
                        rounded-2xl sm:rounded-3xl
                        overflow-hidden
                        mb-4 sm:mb-8 md:mb-12
                        transition-all duration-500
                        ${sliderVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                      `}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-4">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-gray-900 font-medium text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* PAGINATION */}
          <div className="custom-pagination flex gap-2 sm:gap-4 mt-8 sm:mt-12" />

          {/* STYLES */}
          <style jsx global>{`
            .custom-bullet {
              width: 32px;
              height: 4px;
              background: #d1d5db;
              border-radius: 999px;
              transition: all 0.3s ease;
            }

            .custom-bullet-active {
              background: #ef4444;
              width: 40px;
            }

            @media (min-width: 1024px) {
              .swiper,
              .swiper-wrapper {
                overflow: visible;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
