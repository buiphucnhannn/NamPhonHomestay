"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/homestayData";
import { BotanicalBranch } from "@/components/ui/Decorations";

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [paused, setPaused] = useState(false);

  // Cards visible at once = track width / card width (1 on mobile, 2 on tablet, 3 on desktop)
  const measure = useCallback(() => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !card) return null;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
    const perView = Math.max(1, Math.round((track.clientWidth + 1) / step));
    return { track, step, pages: testimonials.length - perView + 1 };
  }, []);

  const goTo = useCallback(
    (target) => {
      const m = measure();
      if (!m) return;
      const next = ((target % m.pages) + m.pages) % m.pages; // wrap around at both ends
      m.track.scrollTo({ left: next * m.step, behavior: "smooth" });
    },
    [measure]
  );

  // Keep the dots in sync with native swipes / trackpad scrolling
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const sync = () => {
      frame = 0;
      const m = measure();
      if (!m) return;
      setPageCount(m.pages);
      setPage(Math.min(m.pages - 1, Math.round(track.scrollLeft / m.step)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(sync);
    };
    sync();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [measure]);

  // Gentle autoplay; pauses while the visitor hovers, focuses or touches the carousel
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => goTo(page + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, page, goTo]);

  const arrowClass =
    "hidden lg:flex absolute top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-[#09231B] text-stone-300 hover:text-[#0D2B22] hover:bg-[#D7A75C] hover:border-[#D7A75C] items-center justify-center transition-all duration-300 cursor-pointer shadow-lg";

  return (
    <section id="testimonials" className="relative w-full bg-[#0D2B22] text-white pt-8 md:pt-10 pb-14 md:pb-16 overflow-hidden">
      <div className="absolute -top-10 right-0 w-48 h-64 opacity-20 pointer-events-none z-0">
        <BotanicalBranch flip color="#D7A75C" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div data-reveal="testi-head" className="mb-8 md:mb-10">
          <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#D7A75C] border-b border-[#D7A75C]/40 pb-1">
            Cảm nhận từ khách hàng
          </span>
          <h2 className="mt-4 font-serif font-medium text-[30px] sm:text-[40px] lg:text-[38px] xl:text-[44px] text-white leading-[1.15] tracking-[-0.01em] text-balance">
            Những lời chia sẻ chân thật
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <button onClick={() => goTo(page - 1)} className={`${arrowClass} -left-5`} aria-label="Đánh giá trước">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <ul
            ref={trackRef}
            aria-label="Đánh giá của khách"
            className="flex gap-5 lg:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth overscroll-x-contain -mx-1 px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item, idx) => (
              <li
                key={item.name}
                data-reveal="testi-card"
                data-reveal-delay={(idx % 3) * 140}
                className="snap-start shrink-0 basis-[86%] sm:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-48px)/3)] flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#12382C]/70 border border-white/10 hover:border-[#D7A75C]/40 hover:-translate-y-1 transition-all duration-500 shadow-lg"
              >
                <div>
                  <Quote className="w-7 h-7 fill-[#D7A75C]/20 stroke-[#D7A75C]" />
                  <p className="mt-3 text-stone-200 text-[14px] sm:text-[15px] font-light leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-end justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1 mb-1.5" aria-label={`${item.rating} sao`}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#D7A75C] text-[#D7A75C]" />
                      ))}
                    </div>
                    <p className="font-serif font-semibold text-[15px] text-white">{item.name}</p>
                    <p className="text-[12px] text-stone-400 mt-0.5">{item.from}</p>
                  </div>
                  <span className="text-[11px] text-stone-400 uppercase tracking-widest shrink-0">Đã lưu trú</span>
                </div>
              </li>
            ))}
          </ul>

          <button onClick={() => goTo(page + 1)} className={`${arrowClass} -right-5`} aria-label="Đánh giá tiếp">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress dots */}
        <div className="mt-4 flex justify-center">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Trang đánh giá ${i + 1}`}
              aria-current={i === page}
              className="group p-2.5 cursor-pointer"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  i === page ? "w-7 bg-[#D7A75C]" : "w-1.5 bg-white/25 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
