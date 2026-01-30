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
  const heroRef = useRef(null);
  const sliderRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [sliderVisible, setSliderVisible] = useState(false);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const sliderObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSliderVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (sliderRef.current) sliderObserver.observe(sliderRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (sliderRef.current) sliderObserver.unobserve(sliderRef.current);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Background Image with Fade In */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${heroVisible ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src="/solar-bg.jpeg"
            alt="Sleek Solar House"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark Gradient Overlay with Fade In */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 transition-opacity duration-1000 ${heroVisible ? "opacity-100" : "opacity-0"}`}
        ></div>

        {/* Text Content with Slide Up */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-16 lg:bottom-32 left-3 sm:left-6 md:left-12 lg:left-24 z-20 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-7xl text-white pr-4 sm:pr-0">
          <div
            className={`transition-all duration-700 delay-100 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 sm:mb-3 md:mb-4 leading-tight">
              Sleek and Durable
            </h3>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-gray-50 text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE SLIDER SECTION */}
      <section
        ref={sliderRef}
        className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden"
      >
        <div className="max-w-[1900px] ml-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          {/* Swiper Container with Fade In */}
          <div
            className={`transition-opacity duration-700 delay-100 ${sliderVisible ? "opacity-100" : "opacity-0"}`}
          >
            <Swiper
              modules={[Pagination]}
              spaceBetween={80}
              slidesPerView={1.1}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                bulletClass: "custom-bullet",
                bulletActiveClass: "custom-bullet-active",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 40,
                },
                640: {
                  slidesPerView: 1.4,
                  spaceBetween: 50,
                },
                768: {
                  slidesPerView: 1.8,
                  spaceBetween: 60,
                },
                1024: {
                  slidesPerView: 2.5, // Show 2 full + half of third
                  spaceBetween: 80,
                },
                1280: {
                  slidesPerView: 2.5, // Maintain the half-hidden effect
                  spaceBetween: 80,
                },
                1536: {
                  slidesPerView: 2.5, // Maintain the half-hidden effect
                  spaceBetween: 80,
                },
              }}
            >
              {features.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="pr-4 sm:pr-6 md:pr-8">
                    {/* Image with Scale In */}
                    <div
                      className={`relative w-full h-40 sm:h-48 md:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden mb-4 sm:mb-8 md:mb-12 lg:mb-16 transition-all duration-500 delay-${200 + i * 100} ${sliderVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>

                    {/* Title with Slide Up */}
                    <div
                      className={`transition-all duration-500 delay-${300 + i * 100} ${sliderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    >
                      <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-3 md:mb-4">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description with Slide Up */}
                    <div
                      className={`transition-all duration-500 delay-${400 + i * 100} ${sliderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                    >
                      <p className="max-w-7xl text-gray-900 font-medium text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* LINE INDICATORS with Fade In */}
          <div
            className={`custom-pagination flex items-center gap-2 sm:gap-3 md:gap-4 mt-8 sm:mt-12 transition-opacity duration-700 delay-600 ${sliderVisible ? "opacity-100" : "opacity-0"}`}
          ></div>

          {/* Custom styles */}
          <style jsx global>{`
            .custom-bullet {
              width: 40px;
              height: 4px;
              background: #d1d5db;
              border-radius: 999px;
              transition: all 0.3s ease;
              cursor: pointer;
            }

            @media (min-width: 768px) {
              .custom-bullet {
                width: 52px;
                height: 6px;
              }
            }

            .custom-bullet-active {
              width: 36px;
              background: #ef4444;
            }

            @media (min-width: 768px) {
              .custom-bullet-active {
                width: 48px;
              }
            }

            /* Hide overflow only on the right side for desktop */
            @media (min-width: 1024px) {
              .swiper {
                overflow: visible;
              }

              .swiper-wrapper {
                overflow: visible;
              }
            }

            /* Delay classes */
            .delay-200 {
              transition-delay: 200ms;
            }
            .delay-300 {
              transition-delay: 300ms;
            }
            .delay-400 {
              transition-delay: 400ms;
            }
            .delay-500 {
              transition-delay: 500ms;
            }
            .delay-600 {
              transition-delay: 600ms;
            }
            .delay-700 {
              transition-delay: 700ms;
            }
            .delay-800 {
              transition-delay: 800ms;
            }
            .delay-900 {
              transition-delay: 900ms;
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
