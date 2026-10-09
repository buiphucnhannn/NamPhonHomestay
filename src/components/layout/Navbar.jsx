"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookingModal from "@/components/ui/BookingModal";
import { navLinks as navItems } from "@/data/homestayData";

// Walks up from the element behind the capsule to the first painted background and checks its luminance
function isLightBehind(x, y) {
  const behind = document.elementsFromPoint(x, y).find((el) => !el.closest("header"));
  for (let el = behind; el && el !== document.documentElement; el = el.parentElement) {
    const color = getComputedStyle(el).backgroundColor;
    const match = color.match(/[\d.]+%?/g);
    if (!match) continue;
    // Tailwind v4 palette colors compute to lab()/lch() (L 0–100) or oklab()/oklch() (L 0–1); first channel is lightness
    if (/^(ok)?l(ab|ch)\(/.test(color)) {
      const [l, , , a = "1"] = match;
      if (parseFloat(a) < 0.5) continue;
      const scale = color.startsWith("ok") && !l.endsWith("%") ? 1 : 100;
      return parseFloat(l) / scale > 0.7;
    }
    const [r, g, b, a = 1] = match.map(Number);
    if (a < 0.5) continue;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b > 160;
  }
  return false;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // true while a light (cream) section scrolls behind the capsule
  const [onLight, setOnLight] = useState(false);
  const [activeHref, setActiveHref] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const isScrolled = window.scrollY > 25;
      setScrolled(isScrolled);
      setOnLight(isLightBehind(window.innerWidth / 2, isScrolled ? 34 : 42));

      // Scroll-spy: the last section whose top has passed ~45% of the screen (none while on the hero).
      // Works with smooth-scroll landings that centre short sections below the header.
      let current = null;
      const line = window.innerHeight * 0.45;
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section && section.getBoundingClientRect().top <= line) current = item.href;
      }
      setActiveHref(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const linkIdle = onLight
    ? "text-stone-700 hover:text-[#0D2B22] hover:bg-[#D7A75C]/12"
    : "text-white/85 hover:text-white hover:bg-white/10";
  const linkActive = onLight
    ? "bg-gradient-to-r from-[#D7A75C]/25 to-[#F1D9A6]/35 text-[#7A5A1E] border border-[#D7A75C]/60 shadow-sm"
    : "bg-gradient-to-r from-[#D7A75C]/30 to-[#F1D9A6]/15 text-[#F1D9A6] border border-[#D7A75C]/50 shadow-sm";

  const openBooking = () => {
    setMobileMenuOpen(false);
    setIsBookingOpen(true);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 pointer-events-none">
        {/* Floating capsule navigation */}
        <div
          className={`max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 transition-all duration-300 ${
            scrolled ? "pt-2" : "pt-3 sm:pt-4"
          }`}
        >
          {/* One-shot drop-in on load (not data-reveal: this className changes while scrolling, which would wipe the reveal class) */}
          <div
            className={`animate-[rv-nav_0.8s_var(--rv-ease)_both] pointer-events-auto rounded-full flex items-center justify-between gap-3 pl-2 pr-2 sm:pl-2.5 sm:pr-2.5 lg:pl-3 transition-all duration-500 ${
              onLight ? "glass-capsule glass-capsule-light" : scrolled ? "glass-capsule glass-capsule-scrolled" : "glass-capsule"
            } ${scrolled ? "py-1.5" : "py-2"}`}
          >
            {/* Logo */}
            <Link href="#hero" className="flex items-center gap-2.5 group shrink-0">
              <span className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D7A75C]/60 shadow-md group-hover:scale-105 transition-transform">
                {/* Always above the fold; on phones it can be the LCP element */}
                <Image src="/logo.jpg" alt="Nam Phon Homestay Huế" fill sizes="40px" loading="eager" className="object-cover" />
              </span>
              <span className="block leading-tight">
                <span className="block font-serif text-[13px] sm:text-[15px] font-bold tracking-[0.1em] sm:tracking-[0.12em] text-[#D7A75C]">NAM PHON</span>
                <span
                  className={`block text-[9px] sm:text-[10px] tracking-[0.22em] sm:tracking-[0.3em] uppercase transition-colors ${
                    onLight ? "text-stone-500" : "text-white/70"
                  }`}
                >
                  Homestay – Huế
                </span>
              </span>
            </Link>

            {/* Desktop nav pills */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1 rounded-full border border-transparent text-[11px] xl:text-xs uppercase tracking-[0.14em] font-medium transition-all duration-200 ${
                    activeHref === item.href ? linkActive : linkIdle
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={openBooking}
                aria-label="Đặt phòng"
                className="group shrink-0 whitespace-nowrap inline-flex items-center gap-2 sm:gap-2.5 rounded-full pl-1.5 min-[380px]:pl-3 sm:pl-4 pr-1.5 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#0D2B22] bg-gradient-to-r from-[#F1D9A6] via-[#D7A75C] to-[#B8853A] hover:from-[#F7E6C2] hover:to-[#C59648] shadow-[0_4px_15px_rgba(215,167,92,0.4)] hover:shadow-[0_6px_20px_rgba(215,167,92,0.6)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {/* Label hidden on very narrow phones; the arrow pill still reads as the booking button */}
                <span className="hidden min-[380px]:inline">Đặt phòng</span>
                <span className="w-6 h-6 rounded-full bg-[#0D2B22] text-[#D7A75C] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#081F18] transition-all">
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.2} />
                </span>
              </button>

              {/* Mobile hamburger pill */}
              <button
                onClick={() => setMobileMenuOpen((open) => !open)}
                className={`lg:hidden shrink-0 w-9 h-9 rounded-full border border-[#D7A75C]/40 hover:border-[#D7A75C] flex items-center justify-center transition-all cursor-pointer ${
                  onLight ? "bg-white/70 text-stone-800" : "bg-[#0D2B22]/60 text-white"
                }`}
                aria-label="Mở menu điều hướng"
                aria-expanded={mobileMenuOpen}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile dropdown panel */}
          {mobileMenuOpen && (
            <div className="pointer-events-auto lg:hidden mt-2 p-5 rounded-2xl bg-[#0D2B22]/95 border border-[#D7A75C]/30 shadow-2xl backdrop-blur-2xl animate-nav-drop">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between text-sm font-medium py-2 border-b border-white/10 transition-colors ${
                      activeHref === item.href ? "text-[#F1D9A6]" : "text-white/85 hover:text-[#F1D9A6]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[#D7A75C] text-xs">→</span>
                  </Link>
                ))}

                <div className="pt-3 flex flex-col gap-3">
                  <button
                    onClick={openBooking}
                    className="w-full py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0D2B22] bg-gradient-to-r from-[#F1D9A6] via-[#D7A75C] to-[#B8853A] shadow-md cursor-pointer"
                  >
                    Đặt phòng ngay
                  </button>
                  <div className="flex items-center justify-between text-xs text-white/60 pt-1 px-1">
                    <span>Nam Phon Homestay</span>
                    <span>Huế, Việt Nam</span>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Global Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
