"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutHero() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative w-full h-[520px] md:h-[650px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-out"
        className="absolute inset-0"
      >
        <Image
          src="/aboutus-hero.png"
          alt="About Us"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Animated Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30"
        data-aos="fade-in"
        data-aos-delay="300"
      />

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center text-white max-w-3xl">
          {/* Main Title with Staggered Letters Animation */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <span className="inline-block overflow-hidden">
              <span className="inline-block animate-slide-up">About us</span>
            </span>
          </h1>

          {/* Subtitle with Typewriter Effect */}
          <p
            className="text-lg md:text-2xl lg:text-3xl text-white/90 mb-8"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <span className="inline-block overflow-hidden">
              <span className="inline-block animate-typewriter">
                Powering India's Clean Energy Transition
              </span>
            </span>
          </p>

     
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.7;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow:
              0 0 20px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.3);
          }
        }

        .animate-float {
          animation: float infinite linear;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }

        .animate-typewriter {
          animation: typewriter 2s steps(40) 1s forwards;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        /* AOS Custom Animations */
        [data-aos="fade-down"] {
          opacity: 0;
          transform: translateY(-50px);
          transition-property: transform, opacity;
        }

        [data-aos="fade-down"].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }

        [data-aos="fade-up"] {
          opacity: 0;
          transform: translateY(50px);
          transition-property: transform, opacity;
        }

        [data-aos="fade-up"].aos-animate {
          opacity: 1;
          transform: translateY(0);
        }

        [data-aos="zoom-in"] {
          opacity: 0;
          transform: scale(1.1);
          transition-property: transform, opacity;
        }

        [data-aos="zoom-in"].aos-animate {
          opacity: 1;
          transform: scale(1);
        }

        [data-aos="fade-in"] {
          opacity: 0;
          transition-property: opacity;
        }

        [data-aos="fade-in"].aos-animate {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
