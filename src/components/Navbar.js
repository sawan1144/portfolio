"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed z-50 left-1/2 -translate-x-1/2 flex items-center justify-between will-change-[width,top,border-radius,background-color,box-shadow] animate-fade-down ${isScrolled
          ? "top-8 w-[90%] max-w-5xl bg-[#EEEEE0]/85 border border-neutral-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-lg py-3 px-6 rounded-full transition-all duration-500 ease-in-out"
          : "top-0 w-full max-w-7xl py-6 px-6 md:px-12 bg-transparent border border-transparent rounded-none transition-all duration-500 ease-in-out"
        }`}
    >
      {/* Logo Section */}
      <a href="#" className="flex items-center gap-3 group">
        <Image
          src="/logo.png"
          alt="sleek.studio"
          width={180}
          height={0}
          priority
          className="h-12 w-auto object-contain transition-transform duration-500"
        />
      </a>

      {/* Nav Links */}
      <div className="hidden sm:flex items-center gap-8">
        <a
          href="#work"
          onClick={(e) => scrollTo(e, "work")}
          className="text-sm font-light tracking-wide text-[#3e3e3b] hover:text-[#111110] transition-colors"
        >
          Work
        </a>
        <a
          href="#pricing"
          onClick={(e) => scrollTo(e, "pricing")}
          className="text-sm font-light tracking-wide text-[#3e3e3b] hover:text-[#111110] transition-colors"
        >
          Pricing
        </a>
        <a
          href="#features"
          onClick={(e) => scrollTo(e, "features")}
          className="text-sm font-light tracking-wide text-[#3e3e3b] hover:text-[#111110] transition-colors"
        >
          Why Us
        </a>
      </div>

      {/* CTA Button */}
      <div>
        <a
          href="#contact"
          onClick={(e) => scrollTo(e, "contact")}
          className="inline-flex items-center justify-center bg-[#111110] text-[#EEEEE0] text-sm font-light px-5 py-2.5 rounded-full hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300 shadow-sm"
        >
          Book a Call
        </a>
      </div>
    </nav>
  );
}
