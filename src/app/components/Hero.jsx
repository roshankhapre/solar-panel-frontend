"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [titleDisplay, setTitleDisplay] = useState("");
  const [subtitleDisplay, setSubtitleDisplay] = useState("");
  const [showTitleCursor, setShowTitleCursor] = useState(false);
  const [showSubtitleCursor, setShowSubtitleCursor] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const sectionRef = useRef(null);

  const titleText = "Solar Panels";
  const subtitleText = "Save on Energy, Power Your Home";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typewriter effect for title
  useEffect(() => {
    if (!isVisible) return;

    setShowTitleCursor(true);
    let i = 0;
    const typeTitle = () => {
      if (i < titleText.length) {
        setTitleDisplay(titleText.substring(0, i + 1));
        i++;
        setTimeout(typeTitle, 100); // Speed of typing
      } else {
        // Title complete - hide cursor after a moment
        setTimeout(() => {
          setShowTitleCursor(false);
        }, 500);
      }
    };

    // Start typing after 500ms
    setTimeout(() => {
      typeTitle();
    }, 500);
  }, [isVisible]);

  // Typewriter effect for subtitle
  useEffect(() => {
    if (!isVisible || titleDisplay !== titleText) return;

    // Wait for title to complete
    setTimeout(() => {
      setShowSubtitleCursor(true);
      let j = 0;
      const typeSubtitle = () => {
        if (j < subtitleText.length) {
          setSubtitleDisplay(subtitleText.substring(0, j + 1));
          j++;
          setTimeout(typeSubtitle, 50); // Faster typing for subtitle
        } else {
          // Subtitle complete - hide cursor and show arrow
          setTimeout(() => {
            setShowSubtitleCursor(false);
            setShowArrow(true);
            // Show buttons after arrow appears
            setTimeout(() => {
              setShowButtons(true);
            }, 300);
          }, 500);
        }
      };
      typeSubtitle();
    }, 300); // Short pause after title
  }, [isVisible, titleDisplay]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden font-montserrat"
    >
      {/* Background with Fade In */}
      <div
        className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src="/solar-hero.jpeg"
          alt="Solar Panels"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 z-[1] transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      />

      {/* TOP RIGHT RED SHAPE - Slide In */}
      <div
        className={`hidden md:block absolute right-2 sm:right-6 md:right-10 z-[2]
  transition-all duration-700 delay-200
  ${isVisible ? "opacity-50 translate-x-0" : "opacity-0 translate-x-10"}`}
        style={{
          top: "50%",
          transform: "translateY(-480px)", // ⬅️ MORE UP
        }}
      >
        <Image
          src="/top-red-line.png"
          alt="top red line"
          width={110}
          height={220}
          className="object-contain w-[70px] sm:w-[90px] md:w-[110px]"
        />
      </div>

      {/* BOTTOM RIGHT RED SHAPE - Slide In */}
      <div
        className={`hidden md:block absolute right-2 sm:right-6 md:right-10 z-[2]
  transition-all duration-700 delay-300
  ${isVisible ? "opacity-50 translate-x-0" : "opacity-0 translate-x-10"}`}
        style={{
          top: "50%",
          transform: "translateY(-200px)", // ⬅️ MOVED UP
        }}
      >
        <Image
          src="/down-red-line.png"
          alt="down red line"
          width={110}
          height={360}
          className="object-contain w-[70px] sm:w-[90px] md:w-[110px]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-[3] min-h-screen flex">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-between">
          {/* CENTER TEXT */}
          <div className="flex-1 flex items-center">
            <div className="max-w-xl text-white">
              {/* Title - Typewriter Effect */}
              <div
                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h1 className="text-[36px] sm:text-[44px] md:text-[60px] lg:text-[78px] font-semibold leading-tight">
                  {titleDisplay}
                  {/* Blinking cursor - only shows while typing */}
                  {showTitleCursor && (
                    <span className="inline-block w-[3px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] bg-white ml-1 animate-pulse align-middle"></span>
                  )}
                </h1>
              </div>

              {/* Subtitle - Typewriter Effect */}
              <div
                className={`transition-all duration-700 mt-3 sm:mt-4 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ minHeight: "1.5em" }}
              >
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white/90">
                  {subtitleDisplay}
                  {/* Blinking cursor for subtitle - only shows while typing */}
                  {showSubtitleCursor && (
                    <span className="inline-block w-[2px] h-[24px] sm:h-[28px] md:h-[32px] bg-white ml-1 animate-pulse align-middle"></span>
                  )}
                </p>
              </div>

              {/* Arrow - Fade In with Bounce (only after subtitle completes) */}
              <div
                className={`transition-all duration-300 mt-3 sm:mt-4 ${showArrow ? "opacity-100" : "opacity-0"}`}
              >
                <div className="animate-bounce">
                  <Image
                    src="/arrow.png"
                    alt="arrow"
                    width={40}
                    height={40}
                    className="w-8 sm:w-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BUTTONS - Fade Up (only after arrow appears) */}
          <div
            className={`mb-10 sm:mb-14 lg:mb-20 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-12 transition-all duration-500 ${
              showButtons
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="border border-white/90 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-md text-[14px] sm:text-[16px] lg:text-[18px] text-white backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black transition-all">
              Schedule consultation
            </button>

            <button className="bg-white text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-md text-[14px] sm:text-[16px] lg:text-[18px] hover:bg-gray-200 transition-all">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
