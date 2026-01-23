"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden group">
      {/* Background Image */}
      <Image
        src="/solar-hero.jpeg"
        alt="Solar Panels"
        fill
        priority
        className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[3500ms] ease-out"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-10 max-w-3xl text-white animate-fadeSlide">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Solar Panels
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Save on Energy, Power Your Home
        </p>

        <div className="mt-10 flex flex-wrap gap-6">
          <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
            Schedule consultation
          </button>

          <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-all duration-300 hover:scale-105">
            Order Now
          </button>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeSlide {
          animation: fadeSlide 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
