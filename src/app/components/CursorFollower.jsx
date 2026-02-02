"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const ringRef = useRef(null);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

   const addHover = () => {
  if (ringRef.current) {
    ringRef.current.classList.add("cursor-hover");
    ringRef.current.style.opacity = "0.7"; // Slightly fade when over clickable
  }
};

const removeHover = () => {
  if (ringRef.current) {
    ringRef.current.classList.remove("cursor-hover");
    ringRef.current.style.opacity = "1"; // Back to full opacity
  }
};
    window.addEventListener("mousemove", move);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input[type='button'], input[type='submit'], [role='button'], [onclick]"
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      
      // Clean up hover listeners
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div ref={ringRef} className="cursor-ring" aria-hidden="true" />;
}