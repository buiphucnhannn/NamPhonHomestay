"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BookingModal from "@/components/ui/BookingModal";

export default function CTA() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      {/* Full width 100vw, NO rounded corners, bounded vertical height per user request */}
      <section className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] overflow-hidden flex items-center justify-center text-center text-white">
        {/* Full-bleed warm bedroom photo (3:1, bed sits right of centre so text never covers the pillows' focal point) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/welcome/WelcomeNamPhon.png"
            alt="Phòng ngủ ấm áp ánh đèn vàng tại Nam Phon Homestay"
            fill
            // Large backdrop: it becomes the LCP whenever the page opens near the bottom
            loading="eager"
            quality={90}
            sizes="100vw"
            className="object-cover object-[60%_55%]"
          />
          {/* Soft dark pool behind the text only, keeping the lamps' warm glow at the edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_50%_55%,rgba(9,35,27,0.72),rgba(9,35,27,0.35)_70%,rgba(9,35,27,0.15))]" />
          {/* Blend the bottom into the dark footer */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#081F18]/90 to-transparent" />
        </div>

        {/* Symmetric arc mirroring the top of Testimonials: dark green dips evenly into the photo */}
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" className="absolute top-0 inset-x-0 z-[5] w-full h-12 md:h-16 lg:h-20 pointer-events-none">
          <path d="M0 0 V30 Q720 130 1440 30 V0 Z" fill="#0D2B22" />
        </svg>

        {/* Content Centered - shifted down slightly for better visual balance */}
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-8 sm:pt-12 md:pt-16 space-y-4 sm:space-y-6">
          <h2 data-reveal="cta-title" className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#FAF7F2] tracking-tight leading-tight drop-shadow-md">
            Hẹn gặp bạn tại Nam Phon
          </h2>

          <p data-reveal="cta-rise" data-reveal-delay="250" className="text-stone-200 text-sm sm:text-lg font-light tracking-wide max-w-xl mx-auto drop-shadow">
            Một căn phòng đẹp. Một nhịp nghỉ chậm. Một Huế thật gần.
          </p>

          <div data-reveal="cta-rise" data-reveal-delay="420" className="pt-2">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="group inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 bg-[#D7A75C] hover:bg-[#c59648] text-[#0D2B22] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-2xl hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>ĐẶT PHÒNG NGAY</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
