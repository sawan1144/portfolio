"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up", // "up", "left", "right", "none"
  distance = "far",  // "near" (20px), "far" (40px)
  once = true
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -80px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [once]);

  const distancePx = distance === "near" ? "20px" : "40px";

  const hiddenTransform = {
    up: `translateY(${distancePx})`,
    left: `translateX(${distancePx})`,
    right: `translateX(-${distancePx})`,
    none: "translateY(0)"
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) translateX(0) scale(1)" : `${hiddenTransform[direction]} scale(0.97)`,
        filter: isVisible ? "blur(0px)" : "blur(4px)",
        transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform, filter"
      }}
    >
      {children}
    </div>
  );
}
