import Image from "next/image";
import Navbar from "@/components/Navbar";
import CalBooking from "@/components/CalBooking";
import ScrollReveal from "@/components/ScrollReveal";

const techItems = [
  {
    name: "Next.js",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128" className="h-6 w-6 text-current">
        <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm37.5 98.7L57 43.5v47.2H47V31.5h9.5l36 49.3V31.5h10v67.2h-1z" />
      </svg>
    )
  },
  {
    name: "React",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="h-6 w-6 text-current">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-current">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.597 15.153 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.203 14.849 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624.978.992 2.464 2.376 5.312 2.376 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.403 8.849 12 6.001 12z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-current">
        <path fill="currentColor" d="M1.125 0h21.75c.621 0 1.125.504 1.125 1.125v21.75c0 .621-.504 1.125-1.125 1.125H1.125C.504 24 0 23.496 0 22.875V1.125C0 .504.504 0 1.125 0zm17.063 15.268c-.18-.327-.373-.612-.58-.855-.207-.243-.45-.436-.73-.58-.28-.145-.612-.225-.997-.243-.385-.018-.846-.018-1.382 0-.252.009-.49.027-.715.054a4.01 4.01 0 0 0-.648.153 1.933 1.933 0 0 0-.54.306c-.144.117-.243.279-.297.486-.054.207-.081.472-.081.797 0 .288.027.522.081.702.054.18.144.333.27.459.126.126.297.234.513.324.216.09.486.171.81.243.324.072.711.144 1.161.216.45.072.936.162 1.458.27.522.108 1.026.27 1.512.486.486.216.909.522 1.269.918.36.396.639.909.837 1.539.198.63.297 1.395.297 2.295 0 .972-.126 1.8-.378 2.484-.252.684-.639 1.242-1.161 1.674-.522.432-1.17.747-1.944.945-.774.198-1.683.297-2.727.297-1.152 0-2.169-.135-3.051-.405-.882-.27-1.62-.684-2.214-1.242-.594-.558-1.026-1.278-1.296-2.16-.27-.882-.405-1.926-.405-3.132h3.024c.018.63.09 1.152.216 1.566.126.414.324.738.594.972.27.234.621.396 1.053.486.432.09.954.135 1.566.135.54 0 1.008-.036 1.404-.108.396-.072.72-.198.972-.378.252-.18.432-.423.54-.729.108-.306.162-.693.162-1.161 0-.414-.045-.756-.135-1.026-.09-.27-.243-.495-.459-.675-.216-.18-.513-.333-.891-.459-.378-.126-.855-.234-1.431-.324a30.93 30.93 0 0 1-1.782-.324c-.612-.117-1.17-.288-1.674-.513a5.558 5.558 0 0 1-1.404-.891c-.414-.378-.729-.891-.945-1.539-.216-.648-.324-1.467-.324-2.457 0-.918.135-1.701.405-2.349.27-.648.666-1.17 1.188-1.566.522-.396 1.161-.684 1.917-.864.756-.18 1.602-.27 2.538-.27.99 0 1.881.108 2.673.324.792.216 1.458.531 1.998.945.54.414.945.936 1.215 1.566.27.63.405 1.368.405 2.214h-3.024zM6.93 11.232H3.726V8.658h9.342v2.574H9.864v11.664H6.93V11.232z" />
      </svg>
    )
  },
  {
    name: "Framer Motion",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-current">
        <path fill="currentColor" d="M0 0l12 12L24 0H0zm0 12l12 12V12H0zm24 0H12v12l12-12z" />
      </svg>
    )
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-current">
        <path fill="currentColor" d="M0 0h24v24H0V0zm22.034 18.5c-.228-.97-.817-1.766-2.147-2.318-1.303-.541-2.415-.721-2.415-1.471 0-.619.48-1.013 1.31-1.013.801 0 1.378.349 1.716 1.012.18.337.525.434.787.243l1.214-.902c.241-.18.256-.47.075-.758-.756-1.2-1.956-1.912-3.791-1.912-2.315 0-3.931 1.385-3.931 3.516 0 2.22 1.695 2.925 3.795 3.734 1.56.6 2.025.901 2.025 1.741 0 .81-.689 1.29-1.725 1.29-1.275 0-1.905-.72-2.34-1.74-.105-.24-.316-.36-.571-.315l-1.396.241c-.27.045-.421.286-.345.556.705 2.505 2.37 3.57 4.651 3.57 2.805 0 4.74-1.636 4.74-4.275v-.016zM10.14 11.678h-2.91v8.835c0 1.215-.735 1.8-1.875 1.8-1.125 0-1.77-.66-1.77-1.8v-.24c0-.255-.195-.45-.45-.45H1.365c-.255 0-.45.195-.45.45v.24c0 3.015 1.8 4.485 4.545 4.485 2.91 0 4.68-1.545 4.68-4.485v-8.835z" />
      </svg>
    )
  },
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-current">
        <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625 11.203.002.233-2.625L5.75 4.5l.7 7.875h7.458l-.294 3.3-.292 3.3-3.132.851-3.136-.855-.198-2.221H4.254l.39 4.398L12 21.844l7.357-2.094.858-9.664H8.531z" />
      </svg>
    )
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-current">
        <path fill="currentColor" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.09 4.5l.233 2.625h12.57l-.233 2.625H7.291l.233 2.625h9.721l-.528 5.927L12 19.72l-4.717-1.418-.233-2.627H4.425l.466 5.25L12 21.844l7.109-2.083.92-10.386.233-2.625H6.59z" />
      </svg>
    )
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#EEEEE0] selection:bg-[#ff3b00]/10 selection:text-[#ff3b00]">
      {/* Dynamic Morphing Navbar */}
      <Navbar />

      {/* Hero Section — scoped wrapper for background art */}
      <section className="relative min-h-[82vh] overflow-hidden">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/hero-bg2.png"
            alt="Watercolor misty mountains background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Hero Content */}
        <main className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 md:pt-36 md:pb-24 min-h-[82vh] flex flex-col justify-center relative z-10">
          <div className="max-w-3xl flex flex-col items-start translate-y-4 md:translate-y-6">

            {/* Upper Subheading */}
            <div className="flex items-center gap-3 mb-6 select-none animate-fade-up">
              <span className="w-5 h-[1.25px] bg-[#ff3b00] rounded-full" />
              <span className="font-mono text-[11px] font-light tracking-[0.18em] text-[#3e3e3b] uppercase">
                An AI First Studio · Top 1% Creator
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-sans text-[40px] leading-[1.15] md:text-[80px] md:leading-[1.1] font-light tracking-tight text-[#111110] mb-8 select-text animate-fade-up animate-delay-200">
              Your landing page is<br className="hidden md:inline" />
              {" "}
              <span className="text-[#8aad4e] font-light font-sans">costing you</span><br />
              {" "}real money.
            </h1>

            {/* Description Subheading */}
            <p className="max-w-lg text-base md:text-[17px] text-[#6b6b66] font-normal leading-[1.65] mb-10 select-text animate-fade-up animate-delay-400">
              We help businesses design, build, and launch premium websites, landing pages, brands, products, and no-code experiences without slowing down.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-6 animate-fade-up animate-delay-600">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#111110] text-[#EEEEE0] text-[15px] font-light px-7 py-3 rounded-full hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300 shadow-sm"
              >
                Book a Call
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-[15px] font-light text-[#3e3e3b] hover:text-[#111110] transition-colors group"
              >
                See the work
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

          </div>
        </main>
      </section>

      {/* Tech Stack Marquee Section */}
      <section className="pt-16 pb-0 bg-[#EEEEE0] select-none border-t border-neutral-200/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="text-center mb-10">
            <p className="font-mono text-[11px] font-light tracking-[0.25em] text-[#6b6b66] uppercase">
              WORK WITH
            </p>
          </div>

          <div className="marquee-container relative w-full overflow-hidden flex py-4 mb-12">
            {/* Edge gradient mask for smooth fade out */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#EEEEE0] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#EEEEE0] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center w-max will-change-transform">
              {/* Set 1 */}
              <div className="flex items-center gap-16 pr-16 shrink-0">
                {techItems.map((tech, idx) => (
                  <div key={`tech-1-${idx}`} className="flex items-center gap-16 shrink-0">
                    <div className="flex items-center gap-3 text-[#3e3e3b] font-light text-[15px]">
                      {tech.icon}
                      <span className="tracking-wider font-sans font-light uppercase">{tech.name}</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00] shrink-0" />
                  </div>
                ))}
              </div>
              {/* Set 2 */}
              <div className="flex items-center gap-16 pr-16 shrink-0" aria-hidden="true">
                {techItems.map((tech, idx) => (
                  <div key={`tech-2-${idx}`} className="flex items-center gap-16 shrink-0">
                    <div className="flex items-center gap-3 text-[#3e3e3b] font-light text-[15px]">
                      {tech.icon}
                      <span className="tracking-wider font-sans font-light uppercase">{tech.name}</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Thin divider line matching the initial navbar size */}
          <div className="border-t border-[#111110]/10 w-full" />
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="pt-16 pb-24 md:pt-20 md:pb-32 bg-[#EEEEE0] text-[#111110]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <ScrollReveal>
          {/* Section Label */}
          <div className="flex items-center gap-1.5 mb-8 select-none">
            <span className="font-mono text-[#ff3b00] text-[13px] font-medium">/</span>
            <span className="font-mono text-[11px] font-light tracking-[0.2em] text-[#6b6b66] uppercase">
              SELECTED WORK
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sans text-[36px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-light tracking-tight text-[#111110] mb-6 max-w-md">
            A few things I've built recently.
          </h2>

          {/* Subheading Description */}
          <p className="max-w-2xl text-lg md:text-[19px] text-[#6b6b66] font-light leading-[1.6] select-text">
            Real clients, real positioning. Each page was built to earn trust.
          </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
          {/* Work Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mt-16">

            {/* Card 1 — Dr. Maya Reynolds */}
            <ScrollReveal delay={0} distance="far">
            <a href="https://interview-project-phi-dusky.vercel.app/" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative overflow-hidden rounded-2xl cursor-pointer mb-5">
                <Image
                  src="/work-1.png"
                  alt="Dr. Maya Reynolds — Therapy landing page"
                  width={720}
                  height={480}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#2a2a28] rounded-full flex items-center justify-center opacity-0 scale-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" stroke="#EEEEE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-3 py-1">Web Design</span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-3 py-1">Framer Dev</span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-3 py-1">Branding</span>
              </div>
              <h3 className="font-sans text-[20px] md:text-[22px] font-medium text-[#111110] mb-2 tracking-tight">Dr. Maya Reynolds</h3>
              <p className="text-[15px] text-[#6b6b66] font-light leading-[1.6] max-w-md">
                A therapist in Santa Monica needed a landing page that felt as warm as her practice. Built a serene, evidence-based page to turn visitors into consultations — without feeling clinical.
              </p>
            </a>
            </ScrollReveal>

            {/* Card 2 — SV Construction */}
            <ScrollReveal delay={150} distance="far">
            <a href="https://oblik-design-agency-3j81.arcada.app/" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative overflow-hidden rounded-2xl cursor-pointer mb-5">
                <Image
                  src="/work-2.png"
                  alt="SV Construction — Construction company landing page"
                  width={720}
                  height={480}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#2a2a28] rounded-full flex items-center justify-center opacity-0 scale-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" stroke="#EEEEE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-3 py-1">Web Design</span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-3 py-1">Framer Dev</span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-3 py-1">Positioning</span>
              </div>
              <h3 className="font-sans text-[20px] md:text-[22px] font-medium text-[#111110] mb-2 tracking-tight">SV Construction</h3>
              <p className="text-[15px] text-[#6b6b66] font-light leading-[1.6] max-w-md">
                A construction firm with 15+ years and 250+ projects had no online presence matching their reputation. Designed a bold, trust-first page that positions them as premium builder.
              </p>
            </a>
            </ScrollReveal>

            {/* Card 3 — Oasis (no live link) */}
            <ScrollReveal delay={0} distance="far">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-5">
                <Image
                  src="/work-3.png"
                  alt="Oasis — Mental health platform landing page"
                  width={720}
                  height={480}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-3 py-1">Web Design</span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-3 py-1">Framer Dev</span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-3 py-1">AI Apps</span>
              </div>
              <h3 className="font-sans text-[20px] md:text-[22px] font-medium text-[#111110] mb-2 tracking-tight">Oasis</h3>
              <p className="text-[15px] text-[#6b6b66] font-light leading-[1.6] max-w-md">
                A mental health startup wanted their landing page to feel like a deep breath. Crafted a calm, nature-inspired experience that earns trust at first glance — and drives demo bookings without pressure.
              </p>
            </div>
            </ScrollReveal>

            {/* Card 4 — CoinTracker */}
            <ScrollReveal delay={150} distance="far">
            <a href="https://coin-tracker1144.netlify.app/" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative overflow-hidden rounded-2xl cursor-pointer mb-5">
                <Image
                  src="/work-4.png"
                  alt="CoinTracker — Crypto price tracker landing page"
                  width={720}
                  height={480}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#2a2a28] rounded-full flex items-center justify-center opacity-0 scale-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5" stroke="#EEEEE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-3 py-1">Web Design</span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-3 py-1">Next.js Dev</span>
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-3 py-1">AI Apps</span>
              </div>
              <h3 className="font-sans text-[20px] md:text-[22px] font-medium text-[#111110] mb-2 tracking-tight">CoinTracker</h3>
              <p className="text-[15px] text-[#6b6b66] font-light leading-[1.6] max-w-md">
                A fintech product needed a fast, sharp interface for real-time crypto prices. Built a sleek dashboard landing with live search and interactive charts that feels native to the crypto space.
              </p>
            </a>
            </ScrollReveal>

          </div>
          </ScrollReveal>

        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-[#FAF9F5] text-[#111110] py-20 md:py-26">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <ScrollReveal>
          {/* Section Label */}
          <div className="flex items-center gap-1.5 mb-8 select-none">
            <span className="font-mono text-[#ff3b00] text-[13px] font-medium">/</span>
            <span className="font-mono text-[11px] font-light tracking-[0.2em] text-[#6b6b66] uppercase">
              HOW IT WORKS
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sans text-[36px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-light tracking-tight text-[#111110] mb-20 max-w-4xl">
            Four steps. No fluff.<br />
            Strategy before everything.
          </h2>
          </ScrollReveal>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">

            {/* Step 1 */}
            <ScrollReveal delay={0} distance="far">
            <div className="flex flex-col items-start h-full">
              <span className="font-serif text-[72px] md:text-[88px] leading-none font-extralight text-[#111110]/10 mb-6 select-none">
                01
              </span>
              <h3 className="font-sans text-[16px] font-medium text-[#111110] mb-3 tracking-tight">
                You book a 15-minute call
              </h3>
              <p className="text-[14px] text-[#6b6b66] font-light leading-[1.65] mb-6 flex-grow">
                I'll look at your current page — or where you're starting from — and tell you exactly what's costing you. No formalities, just an honest read on where you stand.
              </p>
              <span className="font-mono text-[11px] font-light tracking-wider text-[#ff3b00] uppercase mt-auto">
                Free &middot; No obligation
              </span>
            </div>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal delay={150} distance="far">
            <div className="flex flex-col items-start h-full">
              <span className="font-serif text-[72px] md:text-[88px] leading-none font-extralight text-[#111110]/10 mb-6 select-none">
                02
              </span>
              <h3 className="font-sans text-[16px] font-medium text-[#111110] mb-3 tracking-tight">
                We lock strategy before design
              </h3>
              <p className="text-[14px] text-[#6b6b66] font-light leading-[1.65] mb-6 flex-grow">
                We get clear on your goal, who your website is for and what you offer. Then we plan the must-have pages and what goes on each one.
              </p>
              <span className="font-mono text-[11px] font-light tracking-wider text-[#ff3b00] uppercase mt-auto">
                Day 1-2
              </span>
            </div>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal delay={300} distance="far">
            <div className="flex flex-col items-start h-full">
              <span className="font-serif text-[72px] md:text-[88px] leading-none font-extralight text-[#111110]/10 mb-6 select-none">
                03
              </span>
              <h3 className="font-sans text-[16px] font-medium text-[#111110] mb-3 tracking-tight">
                I design and build
              </h3>
              <p className="text-[14px] text-[#6b6b66] font-light leading-[1.65] mb-6 flex-grow">
                I design a clean, modern and professional layout that fits your brand and message. Then I build it fast, make it work on all devices, and test so it runs smooth.
              </p>
              <span className="font-mono text-[11px] font-light tracking-wider text-[#ff3b00] uppercase mt-auto">
                Day 3-5
              </span>
            </div>
            </ScrollReveal>

            {/* Step 4 */}
            <ScrollReveal delay={450} distance="far">
            <div className="flex flex-col items-start h-full">
              <span className="font-serif text-[72px] md:text-[88px] leading-none font-extralight text-[#111110]/10 mb-6 select-none">
                04
              </span>
              <h3 className="font-sans text-[16px] font-medium text-[#111110] mb-3 tracking-tight">
                You go live
              </h3>
              <p className="text-[14px] text-[#6b6b66] font-light leading-[1.65] mb-6 flex-grow">
                I launch your website and make sure everything works. You can add it to your domain, share it on your socials and start using it to get real results.
              </p>
              <span className="font-mono text-[11px] font-light tracking-wider text-[#ff3b00] uppercase mt-auto">
                Day 6
              </span>
            </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* Why Us — Features Section */}
      <section id="features" className="bg-[#EEEEE0] text-[#111110] py-20 md:py-26">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <ScrollReveal>
          {/* Section Label */}
          <div className="flex items-center gap-1.5 mb-8 select-none">
            <span className="font-mono text-[#ff3b00] text-[13px] font-medium">/</span>
            <span className="font-mono text-[11px] font-light tracking-[0.2em] text-[#6b6b66] uppercase">
              WHY US
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sans text-[36px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-light tracking-tight text-[#111110] mb-20 max-w-3xl">
            Built different.<br />
            Here's what you get.
          </h2>
          </ScrollReveal>

          {/* Features Grid — Single big box for all 6 features */}
          <ScrollReveal delay={100}>
          <div className="border border-[#111110]/12 rounded-2xl overflow-hidden bg-[#111110]/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
            {/* Feature 1 */}
            <div className="bg-[#FAF9F5] flex flex-col items-start p-8 md:p-10 h-full">
              <span className="font-sans text-[32px] md:text-[40px] font-light tracking-tight text-[#111110] mb-4 leading-none">
                &lt;1 week
              </span>
              <h3 className="font-sans text-[16px] font-medium text-[#111110] mb-2 tracking-tight">
                Landing page, delivered
              </h3>
              <p className="text-[14px] text-[#6b6b66] font-light leading-[1.65]">
                No months-long timelines. Your page goes from strategy to live in under 7 days — without cutting corners.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#FAF9F5] flex flex-col items-start p-8 md:p-10 h-full">
              <span className="font-sans text-[32px] md:text-[40px] font-light tracking-tight text-[#111110] mb-4 leading-none">
                1:1
              </span>
              <h3 className="font-sans text-[16px] font-medium text-[#111110] mb-2 tracking-tight">
                You work directly with me
              </h3>
              <p className="text-[14px] text-[#6b6b66] font-light leading-[1.65]">
                No account managers, no hand-offs. One designer-developer who owns your project from start to finish.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#FAF9F5] flex flex-col items-start p-8 md:p-10 h-full">
              <span className="font-sans text-[32px] md:text-[40px] font-light tracking-tight text-[#ff3b00] mb-4 leading-none">
                ✦
              </span>
              <h3 className="font-sans text-[16px] font-medium text-[#111110] mb-2 tracking-tight">
                Motion + interaction based
              </h3>
              <p className="text-[14px] text-[#6b6b66] font-light leading-[1.65]">
                Hover effects, scroll animations, micro-interactions — every page feels alive and premium, not flat and static.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#FAF9F5] flex flex-col items-start p-8 md:p-10 h-full">
              <span className="font-sans text-[32px] md:text-[40px] font-light tracking-tight text-[#111110] mb-4 leading-none">
                100%
              </span>
              <h3 className="font-sans text-[16px] font-medium text-[#111110] mb-2 tracking-tight">
                Fully responsive
              </h3>
              <p className="text-[14px] text-[#6b6b66] font-light leading-[1.65]">
                Your site looks flawless on every screen — mobile, tablet, desktop. No breakpoint is left behind.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#FAF9F5] flex flex-col items-start p-8 md:p-10 h-full">
              <span className="font-sans text-[32px] md:text-[40px] font-light tracking-tight text-[#111110] mb-4 leading-none">
                SEO
              </span>
              <h3 className="font-sans text-[16px] font-medium text-[#111110] mb-2 tracking-tight">
                Optimized from day one
              </h3>
              <p className="text-[14px] text-[#6b6b66] font-light leading-[1.65]">
                Clean markup, fast load times, proper meta tags — built so Google actually finds you and ranks you.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#FAF9F5] flex flex-col items-start p-8 md:p-10 h-full">
              <span className="font-sans text-[32px] md:text-[40px] font-light tracking-tight text-[#111110] mb-4 leading-none">
                ∞
              </span>
              <h3 className="font-sans text-[16px] font-medium text-[#111110] mb-2 tracking-tight">
                Free revision
              </h3>
              <p className="text-[14px] text-[#6b6b66] font-light leading-[1.65]">
                1 revision free. We iterate together until every pixel feels right and you're genuinely proud of it.
              </p>
            </div>
          </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#FAF9F5] text-[#111110] py-20 md:py-26">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <ScrollReveal>
          {/* Section Label */}
          <div className="flex items-center gap-1.5 mb-8 select-none">
            <span className="font-mono text-[#ff3b00] text-[13px] font-medium">/</span>
            <span className="font-mono text-[11px] font-light tracking-[0.2em] text-[#6b6b66] uppercase">
              PRICING
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sans text-[36px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-light tracking-tight text-[#111110] mb-6 max-w-3xl">
            Transparent pricing.<br />
            No surprises.
          </h2>

          {/* Subheading */}
          <p className="max-w-2xl text-[17px] text-[#6b6b66] font-light leading-[1.6] mb-12">
            One flat price for a premium website. Need something bigger? We'll scope it together.
          </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* Plan 1 — Premium Website */}
            <ScrollReveal delay={0} distance="far">
            <div className="border border-[#111110]/10 rounded-2xl bg-[#111110] text-[#EEEEE0] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Subtle accent glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#ff3b00]/8 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Badge */}
                <span className="inline-block font-mono text-[9px] tracking-[0.2em] text-[#ff3b00] uppercase border border-[#ff3b00]/30 rounded-full px-2.5 py-0.5 mb-5">
                  Most Popular
                </span>

                {/* Plan Name */}
                <h3 className="font-sans text-[20px] md:text-[22px] font-medium tracking-tight text-[#EEEEE0] mb-2">
                  Premium Website
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="font-sans text-[38px] md:text-[44px] font-light tracking-tight leading-none text-[#EEEEE0]">
                    $500
                  </span>
                  <span className="font-mono text-[11px] text-[#EEEEE0]/50 font-light tracking-wide">
                    / project
                  </span>
                </div>

                {/* Description */}
                <p className="text-[13px] text-[#EEEEE0]/60 font-light leading-[1.6] mb-6 max-w-xs">
                  A complete 5–7 page website, designed and built from scratch with premium quality.
                </p>

                {/* Feature List */}
                <ul className="space-y-3 mb-8">
                  {[
                    "5–7 custom-designed pages",
                    "Motion & scroll animations",
                    "Fully responsive across all devices",
                    "Micro-interactions on every element",
                    "SEO-optimized structure & meta tags",
                    "Fast load times & clean code",
                    "1 round of revisions included",
                    "Delivered in under 1 week",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#EEEEE0]/80 font-light leading-[1.4]">
                      <svg className="w-3.5 h-3.5 mt-0.5 text-[#ff3b00] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="relative z-10 inline-flex items-center justify-center w-full bg-[#EEEEE0] text-[#111110] text-[14px] font-medium px-6 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(238,238,224,0.2)] transition-all duration-300"
              >
                Get Started
              </a>
            </div>
            </ScrollReveal>

            {/* Plan 2 — Custom */}
            <ScrollReveal delay={200} distance="far">
            <div className="border border-[#111110]/10 rounded-2xl bg-[#EEEEE0] text-[#111110] p-6 md:p-8 flex flex-col justify-between">
              <div>
                {/* Badge */}
                <span className="inline-block font-mono text-[9px] tracking-[0.2em] text-[#6b6b66] uppercase border border-[#6b6b66]/20 rounded-full px-2.5 py-0.5 mb-5">
                  Flexible
                </span>

                {/* Plan Name */}
                <h3 className="font-sans text-[20px] md:text-[22px] font-medium tracking-tight text-[#111110] mb-2">
                  Custom Project
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span className="font-sans text-[38px] md:text-[44px] font-light tracking-tight leading-none text-[#111110]">
                    Custom
                  </span>
                </div>

                {/* Description */}
                <p className="text-[13px] text-[#6b6b66] font-light leading-[1.6] mb-6 max-w-xs">
                  For larger builds that need extra horsepower. We'll scope the project together and price it based on your needs.
                </p>

                {/* Feature List */}
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Premium Website",
                    "Advanced SEO strategy & services",
                    "Custom CMS or backend systems",
                    "E-commerce & payment integrations",
                    "Third-party API connections",
                    "Ongoing maintenance & support",
                    "Priority turnaround",
                    "Scoped together, no surprises",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#6b6b66] font-light leading-[1.4]">
                      <svg className="w-3.5 h-3.5 mt-0.5 text-[#111110] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full bg-[#111110] text-[#EEEEE0] text-[14px] font-medium px-6 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>
            </ScrollReveal>

          </div>

          {/* Subtext below pricing cards */}
          <p className="text-center font-mono text-[12px] text-[#6b6b66] font-light mt-10">
            A 1–2% lift in conversion pays for this in weeks.
          </p>
          </ScrollReveal>

        </div>
      </section>

      {/* Contact Section with Cal.com widget */}
      <section id="contact" className="bg-[#EEEEE0] text-[#111110] py-20 md:py-26 border-t border-[#111110]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <ScrollReveal>
          {/* Section Label */}
          <div className="flex items-center gap-1.5 mb-8 select-none">
            <span className="font-mono text-[#ff3b00] text-[13px] font-medium">/</span>
            <span className="font-mono text-[11px] font-light tracking-[0.2em] text-[#6b6b66] uppercase">
              BOOK A CALL
            </span>
          </div>
          </ScrollReveal>

          {/* Heading
          <h2 className="font-sans text-[36px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-light tracking-tight text-[#111110] mb-6 max-w-3xl">
            Let's build something<br />
            exceptional together.
          </h2> */}

          {/* Cal.com Widget Embed */}
          <div className="mt-12">
            <CalBooking />
          </div>

          {/* Subtext below booking widget */}
          <p className="text-center font-mono text-[12px] text-[#6b6b66] font-light mt-10 max-w-xl mx-auto leading-relaxed">
            Most clients come in with a rough idea and leave the call with a clear scope, timeline, and cost. No brief required.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#EEEEE0] text-[#111110] pt-0 pb-14 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Divider at the top */}
          <div className="border-t border-[#111110]/10 mb-14 md:mb-16" />

          {/* Top row — Logo + Tagline | Nav */}
          <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-10 mb-14">
            {/* Logo + Tagline */}
            <div className="flex flex-col gap-3">
              <a href="#" className="group">
                <Image
                  src="/logo.png"
                  alt="sleek.studio"
                  width={200}
                  height={0}
                  className="h-14 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
              <p className="font-sans text-[14px] text-[#6b6b66] font-light tracking-tight">
                Landing pages that get you more first users.
              </p>
            </div>

            {/* Nav Links */}
            <div className="flex items-center gap-8 md:pt-2">
              <a href="#work" className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#111110]/60 hover:text-[#111110] transition-colors duration-300">
                Work
              </a>
              <a href="#how-it-works" className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#111110]/60 hover:text-[#111110] transition-colors duration-300">
                Process
              </a>
              <a href="#pricing" className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#111110]/60 hover:text-[#111110] transition-colors duration-300">
                Pricing
              </a>
              <a href="#contact" className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#111110]/60 hover:text-[#111110] transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Bottom row — Copyright + Tagline */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-mono text-[11px] text-[#111110]/50 tracking-wide">
              © {new Date().getFullYear()} sleekstudio.live . All rights reserved.
            </span>
            <span className="font-mono text-[11px] text-[#111110]/50 tracking-wide">
              Built with precision.
            </span>
          </div>

        </div>
      </footer>
    </div>
  );
}
