"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Maintenance() {
  const sectionsRef = useRef([]);
  const [visible, setVisible] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    // 1. Intersection Observer for trigger animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({
              ...prev,
              [entry.target.dataset.key]: true,
            }));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));

    // 2. Scroll listener for the progress line
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const anim = "transition-all duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)]";

  return (
    <section className="relative bg-white font-montserrat">
      {/* ================= STICKY HEADER ================= */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Solar Maintenance Made Easy
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Experience peace of mind with our automated energy management system. 
            Efficiency meets simplicity.
          </p>
        </div>
        {/* Horizontal progress bar under header */}
        <div 
          className="h-[2px] bg-red-500 transition-all duration-150 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative py-24 space-y-48 bg-gray-50">
        
        {/* Floating Vertical Progress Line (Desktop) */}
        <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gray-200 hidden xl:block">
          <div 
            className="absolute top-0 left-0 w-full bg-red-500 transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* BLOCK 1 */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          data-key="b1"
          className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className={`${anim} ${visible.b1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <span className="block w-20 h-[6px] bg-red-500 rounded-full mb-8 shadow-sm" />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Generate Energy
            </h3>
            <p className="text-gray-700 text-lg font-medium leading-relaxed max-w-xl">
              Clean, renewable power starts here. Our high-efficiency panels 
              ensure you capture every drop of sunshine, even on cloudy days.
            </p>
          </div>

          <div 
            className={`relative group overflow-hidden rounded-[2.5rem] ${anim} ${visible.b1 ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
            onMouseEnter={() => setHoveredImage('b1')}
            onMouseLeave={() => setHoveredImage(null)}
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-[2px] bg-gradient-to-br from-red-500 via-orange-500 to-red-600 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
            
            {/* Main container with shadow */}
            <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden bg-white p-1">
              {/* Image wrapper */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-[2.3rem] overflow-hidden">
                {/* Image with zoom effect */}
                <Image
                  src="/maintenance.jpeg"
                  alt="Maintenance"
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-transparent to-orange-500/0 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-700" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                
                {/* Corner highlights */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Floating particles */}
                {hoveredImage === 'b1' && (
                  <>
                    <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-float-particle opacity-70" />
                    <div className="absolute top-32 right-24 w-1.5 h-1.5 bg-white rounded-full animate-float-particle-delayed opacity-60" />
                    <div className="absolute bottom-32 left-28 w-1 h-1 bg-white rounded-full animate-float-particle-slow opacity-50" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          data-key="b2"
          className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div 
            className={`order-2 lg:order-1 relative group overflow-hidden rounded-[2.5rem] ${anim} ${visible.b2 ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
            onMouseEnter={() => setHoveredImage('b2')}
            onMouseLeave={() => setHoveredImage(null)}
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-[2px] bg-gradient-to-bl from-orange-500 via-red-500 to-orange-600 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
            
            {/* Main container with shadow */}
            <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden bg-white p-1">
              {/* Image wrapper */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-[2.3rem] overflow-hidden">
                {/* Image with zoom effect */}
                <Image
                  src="/energy-room.png"
                  alt="Energy Room"
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-1"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/0 via-transparent to-red-500/0 group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-700" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                
                {/* Corner highlights */}
                <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Floating particles */}
                {hoveredImage === 'b2' && (
                  <>
                    <div className="absolute top-24 right-20 w-2 h-2 bg-white rounded-full animate-float-particle opacity-70" />
                    <div className="absolute top-36 left-24 w-1.5 h-1.5 bg-white rounded-full animate-float-particle-delayed opacity-60" />
                    <div className="absolute bottom-28 right-28 w-1 h-1 bg-white rounded-full animate-float-particle-slow opacity-50" />
                  </>
                )}
              </div>
            </div>
          </div>

          <div className={`order-1 lg:order-2 ${anim} ${visible.b2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <span className="block w-20 h-[6px] bg-red-500 rounded-full mb-8 shadow-sm" />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Use Energy
            </h3>
            <p className="text-gray-700 text-lg font-medium leading-relaxed max-w-xl">
              Smart distribution at your fingertips. Monitor your usage in 
              real-time and optimize your home's performance automatically.
            </p>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          data-key="b3"
          className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className={`${anim} ${visible.b3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <span className="block w-20 h-[6px] bg-red-500 rounded-full mb-8 shadow-sm" />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Store Extra Energy
            </h3>
            <p className="text-gray-700 text-lg font-medium leading-relaxed max-w-xl">
              Don't let power go to waste. Save excess energy in your 
              high-capacity storage system for use during peak hours or outages.
            </p>
          </div>

          <div 
            className={`relative group overflow-hidden rounded-[2.5rem] ${anim} ${visible.b3 ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
            onMouseEnter={() => setHoveredImage('b3')}
            onMouseLeave={() => setHoveredImage(null)}
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-[2px] bg-gradient-to-tr from-red-600 via-orange-500 to-red-500 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
            
            {/* Main container with shadow */}
            <div className="relative rounded-[2.5rem] shadow-2xl overflow-hidden bg-white p-1">
              {/* Image wrapper */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-[2.3rem] overflow-hidden">
                {/* Image with zoom effect */}
                <Image
                  src="/battery-home.png"
                  alt="Battery"
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/0 via-transparent to-orange-500/0 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-700" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                
                {/* Corner highlights */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Floating particles */}
                {hoveredImage === 'b3' && (
                  <>
                    <div className="absolute top-28 left-24 w-2 h-2 bg-white rounded-full animate-float-particle opacity-70" />
                    <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-white rounded-full animate-float-particle-delayed opacity-60" />
                    <div className="absolute bottom-36 left-32 w-1 h-1 bg-white rounded-full animate-float-particle-slow opacity-50" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }
        
        @keyframes float-particle-delayed {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-15px) translateX(-8px);
            opacity: 0.9;
          }
        }
        
        @keyframes float-particle-slow {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.5;
          }
          50% { 
            transform: translateY(-12px) translateX(5px);
            opacity: 0.8;
          }
        }
        
        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }
        
        .animate-float-particle-delayed {
          animation: float-particle-delayed 3.5s ease-in-out infinite;
        }
        
        .animate-float-particle-slow {
          animation: float-particle-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}