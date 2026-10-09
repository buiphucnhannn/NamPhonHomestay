"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { WaveHeroBottom } from "@/components/ui/WaveDividers";
import BookingModal from "@/components/ui/BookingModal";

const heroRooms = [
  {
    id: "p3",
    image: "/hero/hero_xl_1.jpg",
    thumb: "/hero/thumb_hd_1.jpg",
    label: "Phòng Deluxe Ánh Sáng",
  },
  {
    id: "p2",
    image: "/hero/hero_xl_2.jpg",
    thumb: "/hero/thumb_hd_2.jpg",
    label: "Phòng Superior Ban Công",
  },
  {
    id: "p4",
    image: "/hero/hero_xl_3.jpg",
    thumb: "/hero/thumb_hd_3.jpg",
    label: "Phòng Signature Khép Kín",
  },
  {
    id: "p1",
    image: "/hero/hero_xl_4.jpg",
    thumb: "/hero/thumb_hd_4.jpg",
    label: "Phòng Tiêu Chuẩn Hiện Đại",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Auto-switch background image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroRooms.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Extra height = WaveHeroBottom height, so the photo fills the whole first screen and the wave only shows on scroll */}
      <section
        id="hero"
        className="relative w-full h-[calc(100dvh+3.5rem)] md:h-[calc(100dvh+5rem)] lg:h-[calc(100dvh+6rem)] min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#09231B] text-white"
      >
        {/* Full-width Stacked Crossfading Background Images */}
        <div className="absolute inset-0 z-0">
          {heroRooms.map((room, idx) => (
            <div
              key={room.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeIndex === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              <Image
                src={room.image}
                alt={room.label}
                fill
                preload={idx === 0}
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}

          {/* Layered Gradient Overlays: Dark on left for readability, bright & clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071d16]/90 via-[#071d16]/65 md:w-3/5 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071d16]/50 via-transparent to-[#071d16]/30 pointer-events-none" />
        </div>

        {/* Top spacer for fixed navbar */}
        <div className="h-20 md:h-28 shrink-0" />

        {/* Main Content Area */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full my-auto">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            {/* Tagline / Eyebrow */}
            <div data-reveal="hero" className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] rounded-full bg-[#E8BE74] shadow-[0_1px_6px_rgba(4,18,13,0.6)]" />
              <span className="text-halo text-xs md:text-sm uppercase tracking-[0.28em] text-[#EEC57E] font-bold">
                NAM PHON HOMESTAY – HUẾ
              </span>
            </div>

            {/* Main Heading with 2 Fonts: Playfair Display + Dancing Script */}
            <h1 data-reveal="hero" data-reveal-delay="150" className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.18] tracking-tight text-halo-strong">
              <span className="font-display font-bold block text-[#FFFDF8]">Một khoảng nghỉ</span>
              {/* Brighter, heavier gold so the thin script strokes don't dissolve into the photo */}
              <span className="font-script text-[#F2CB82] text-[1.12em] sm:text-[1.18em] font-semibold block -mt-1 sm:-mt-2">
                thật yên giữa lòng Huế
              </span>
            </h1>

            {/* Subtitle */}
            <p data-reveal="hero" data-reveal-delay="320" className="text-halo text-white/95 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed">
              Không gian lưu trú hiện đại, ấm áp và riêng tư cho những ngày bạn muốn sống chậm.
            </p>

            {/* CTA Button */}
            <div data-reveal="hero" data-reveal-delay="470" className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="group inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 bg-[#D7A75C] hover:bg-[#c59648] text-[#0D2B22] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-[0_10px_30px_-6px_rgba(4,18,13,0.7)] ring-1 ring-[#F2CB82]/40 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>ĐẶT PHÒNG NGAY</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Area: 4-Thumbnail Auto-slider Indicator & Smooth Wave Transition */}
        <div className="relative z-10 w-full shrink-0">
          {/* Thumbnails pinned to the screen's bottom-right corner with equal right/bottom gaps
              (this block's bottom edge = bottom of the first screen, since the wave below is extra height) */}
          <div className="flex justify-end pr-6 pb-6 sm:pr-7 sm:pb-7 lg:pr-8 lg:pb-8">
            <div data-reveal="hero-thumbs" data-reveal-delay="650" className="flex items-center gap-2.5 p-2 bg-black/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
              {heroRooms.map((room, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={room.id}
                    onClick={() => setActiveIndex(idx)}
                    title={room.label}
                    className={`relative w-14 h-10 sm:w-18 sm:h-12 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-2 border-[#D7A75C] scale-105 shadow-md shadow-[#D7A75C]/30"
                        : "opacity-60 hover:opacity-90 border border-white/10"
                    }`}
                  >
                    <Image
                      src={room.thumb}
                      alt={room.label}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Seamless full-width wave transition to cream background */}
          <WaveHeroBottom fill="#FAF7F2" />
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
