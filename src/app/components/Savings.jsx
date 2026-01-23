"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Savings() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image - FULL SCREEN */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/solar-side.jpeg"
          alt="Solar Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Soft White Overlay - EXACTLY 70% opacity */}
      <div className="absolute inset-0 "></div>

      {/* Content Wrapper - Left side only */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            className="savings-slider"
          >
            <SwiperSlide>
              <SlideContent
                title="Save On Electricity Bills"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                subTitle="Monthly Bill Savings"
                subDesc="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              />
            </SwiperSlide>

            <SwiperSlide>
              <SlideContent
                title="Clean Renewable Energy"
                desc="Switching to solar power reduces your carbon footprint significantly. Our high-efficiency panels generate clean energy while protecting the environment for future generations."
                subTitle="Environmental Impact"
                subDesc="Each solar installation reduces carbon emissions equivalent to planting hundreds of trees annually. Join the green revolution today."
              />
            </SwiperSlide>

            <SwiperSlide>
              <SlideContent
                title="Increase Home Value"
                desc="Solar panel installations can increase your property value by up to 4.1%. Homes with solar sell faster and at premium prices in today's market."
                subTitle="Property Investment"
                subDesc="Beyond energy savings, solar panels are a smart financial investment that pays dividends when you decide to sell your property."
              />
            </SwiperSlide>

            <SwiperSlide>
              <SlideContent
                title="Energy Independence"
                desc="Protect yourself from rising electricity prices and grid outages. Generate your own power and gain control over your energy costs."
                subTitle="Power Security"
                subDesc="With battery storage options, you can store excess energy for use during peak hours or power outages, ensuring uninterrupted power supply."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Custom CSS for exact design */}
      <style jsx global>{`
        .savings-slider {
          overflow: visible !important;
        }

        .savings-slider .swiper-slide {
          opacity: 0 !important;
          transition: opacity 0.8s ease;
        }

        .savings-slider .swiper-slide-active {
          opacity: 1 !important;
        }

        /* Custom pagination bullets */
        .custom-bullet {
          width: 30px;
          height: 3px;
          background-color: rgba(107, 114, 128, 0.3);
          border-radius: 0;
          display: inline-block;
          margin: 0 3px !important;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .custom-bullet.swiper-pagination-bullet-active {
          background-color: #ef4444 !important;
          width: 40px;
        }

        /* Hide default pagination container styles */
        .swiper-pagination-bullets {
          bottom: -40px !important;
          text-align: left !important;
          padding-left: 10px;
        }

        /* Make sure image covers entire background */
        .absolute.inset-0.-z-10 {
          z-index: 0;
        }
      `}</style>
    </section>
  );
}

function SlideContent({ title, desc, subTitle, subDesc }) {
  return (
    <div className="pt-8">
      {/* Main Title */}
      <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h2>

      {/* Main Description */}
      <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-lg">
        {desc}
      </p>

      {/* Progress Indicator - RED LINE */}
      <div className="flex items-center gap-2 mb-8">
        <span className="w-103 bg-red-500"></span>
        <span className="w-6  bg-gray-300"></span>
        <span className="w-6  bg-gray-300"></span>
        <span className="w-6  bg-gray-300"></span>
      </div>

      {/* Sub Title */}
      <h4 className="font-semibold text-xl text-gray-900 mb-4">{subTitle}</h4>

      {/* Sub Description */}
      <p className="text-gray-600 leading-relaxed max-w-lg">{subDesc}</p>
    </div>
  );
}
