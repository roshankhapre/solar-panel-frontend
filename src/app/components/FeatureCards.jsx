"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
    const sliderObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSliderVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sliderRef.current) sliderObserver.observe(sliderRef.current);
    return () => {
      if (sliderRef.current) sliderObserver.unobserve(sliderRef.current);
    };
  }, []);

  return (
    <>
      <section
        ref={sliderRef}
        className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden font-montserrat"
      >
        <div className="max-w-[1900px] ml-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div
            className={`transition-all duration-1000 ${sliderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={80}
              slidesPerView={1.1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                bulletClass: "custom-bullet",
                bulletActiveClass: "custom-bullet-active",
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 30 },
                480: { slidesPerView: 1.2, spaceBetween: 40 },
                640: { slidesPerView: 1.4, spaceBetween: 50 },
                768: { slidesPerView: 1.8, spaceBetween: 60 },
                1024: { slidesPerView: 2.5, spaceBetween: 80 },
              }}
            >
              {features.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="pr-4 sm:pr-6 md:pr-8 group">
                    {/* ENHANCED IMAGE CONTAINER */}
                    <div
                      className={`relative w-full md:max-w-[clamp(480px,42vw,650px)] h-56 sm:h-64 md:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden mb-4 sm:mb-8 md:mb-12 transition-all duration-[1.2s] ease-out
                        ${sliderVisible ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-90 -translate-x-10"}`}
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      {/* Shine Effect Overlay */}
                      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                      
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                      />
                      
                      {/* Subtle Bottom Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* TEXT CONTENT WITH STAGGERED FADE */}
                    <div
                      className={`transition-all duration-700 ease-out ${sliderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                      style={{ transitionDelay: `${400 + i * 150}ms` }}
                    >
                      <h3 className="relative inline-block text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-3 md:mb-4 tracking-tight">
                        {item.title}
                        {/* THE RED LINE */}
                        <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-red-500 transition-all duration-500 ease-out group-hover:w-full" />
                      </h3>
                      
                      <p className="max-w-7xl text-black font-medium text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* PAGINATION INDICATORS */}
          <div
            className={`custom-pagination flex items-center gap-2 sm:gap-3 md:gap-4 mt-8 sm:mt-12 transition-all duration-1000 delay-700 ${sliderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          ></div>

          {/* GLOBAL STYLES */}
          <style jsx global>{`
            .custom-bullet {
              width: 30px;
              height: 4px;
              background: #e5e7eb;
              border-radius: 999px;
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              cursor: pointer;
            }

            @media (min-width: 768px) {
              .custom-bullet { width: 60px; height: 5px; }
            }

            .custom-bullet-active {
              width: 50px;
              background: #ef4444; /* Your brand red */
              box-shadow: 0 0 15px rgba(239, 68, 68, 0.3);
            }

            @media (min-width: 768px) {
              .custom-bullet-active { width: 100px; }
            }

            .swiper { overflow: visible !important; }
            
            /* Ensures images look crisp and smooth during transform */
            .swiper-slide {
              backface-visibility: hidden;
              -webkit-font-smoothing: subpixel-antialiased;
            }
          `}</style>
        </div>
      </section>
    </>
  );
}