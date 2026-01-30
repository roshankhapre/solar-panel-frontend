"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/solar-bg.jpeg"
            alt="Sleek Solar House"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>

        {/* Text Content */}
        <div className="absolute bottom-8 sm:bottom-12 md:bottom-32 left-4 sm:left-8 md:left-24 z-20 max-w-xs sm:max-w-lg md:max-w-7xl text-white">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
            Sleek and Durable
          </h3>

          <p className="text-gray-50 text-sm sm:text-base md:text-3xl leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </section>

      {/* FEATURE SLIDER SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1800px] ml-auto px-6 ]">
          <Swiper
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1.1}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            breakpoints={{
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 2.1 },
              1024: { slidesPerView: 2.6 },
              1280: { slidesPerView: 3.15 },
            }}
          >
            {features.map((item, i) => (
              <SwiperSlide key={i}>
                <div>
                  <div className="relative w-[] h-[260px] sm:h-[300px] md:h-[600px] rounded-3xl overflow-hidden mb-16">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-4xl font-semibold mb-4">{item.title}</h3>

                  <p className="max-w-7xl  text-gray-900 font-medium text-2xl leading-relaxed ">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* LINE INDICATORS */}
          <div className="custom-pagination flex items-center gap-4 mt-12"></div>

          {/* Custom styles */}
          <style jsx global>{`
            .custom-bullet {
              width: 32px;
              height: 4px;
              background: #d1d5db;
              border-radius: 999px;
              transition: all 0.3s ease;
              cursor: pointer;
            }

            .custom-bullet-active {
              width: 48px;
              background: #ef4444;
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
