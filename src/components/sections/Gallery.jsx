"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import HueCitadelSketch from "@/components/ui/HueCitadelSketch";
import { BotanicalBranch, SectionDivider } from "@/components/ui/Decorations";
import { galleryItems } from "@/data/homestayData";

const filters = ["Tất cả", "Phòng nghỉ", "Không gian chung", "Tiện nghi"];

// Collage slots (desktop): two tall tilted cards framing a stacked middle pair, like the mockup.
// On mobile the same cards fall back to a plain 2x2 grid.
const slots = [
  "lg:left-[0%] lg:top-[5%] lg:w-[31%] lg:h-[82%] lg:-rotate-[4deg] rounded-[22px] lg:rounded-tl-[90px]",
  "lg:left-[33.5%] lg:top-[0%] lg:w-[31%] lg:h-[44%] lg:rotate-[2.5deg] rounded-[22px] lg:rounded-tr-[48px]",
  "lg:left-[33.5%] lg:top-[47%] lg:w-[31%] lg:h-[50%] lg:-rotate-[2deg] rounded-[22px] lg:rounded-b-[999px]",
  "lg:left-[67.5%] lg:top-[8%] lg:w-[31%] lg:h-[80%] lg:rotate-[6deg] rounded-[22px] lg:rounded-tr-[90px] lg:rounded-bl-[36px]",
];

const pad = (n) => String(n).padStart(2, "0");

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  // Lightbox: the list being browsed + current index (null = closed)
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeFilter === "Tất cả" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);
  const collage =
    activeFilter === "Tất cả"
      ? galleryItems.filter((item) => item.featured).sort((a, b) => a.featured - b.featured)
      : filtered.slice(0, 4);

  const openLightbox = (list, index) => setLightbox({ list, index });
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir) => setLightbox((lb) => lb && { ...lb, index: (lb.index + dir + lb.list.length) % lb.list.length }),
    []
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, step]);

  const current = lightbox && lightbox.list[lightbox.index];

  return (
    <>
      <section
        id="gallery"
        className="relative w-full bg-gradient-to-b from-[#FAF7F2] via-[#F8F3EC] to-[#F5EFEB] text-[#222E27] pt-16 md:pt-20 lg:pt-28 pb-20 md:pb-20 lg:pb-24 overflow-hidden"
      >
        <SectionDivider className="top-2 md:top-3 lg:top-1.5" />

        {/* Soft leafy sprig drifting in from the right edge, just under the divider */}
        <div aria-hidden="true" className="hidden md:block absolute top-6 -right-8 w-32 h-44 opacity-25 rotate-[35deg] pointer-events-none z-0">
          <BotanicalBranch flip color="#1E4B38" />
        </div>

        {/* Huế skyline sketch fading into the bottom-left corner */}
        <div className="absolute bottom-10 -left-10 w-[520px] lg:w-[680px] opacity-40 pointer-events-none z-0 [mask-image:linear-gradient(to_right,black_45%,transparent),linear-gradient(to_top,black_60%,transparent)] [mask-composite:intersect]">
          <HueCitadelSketch className="w-full h-auto" opacity={0.55} />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 lg:gap-14 xl:gap-20 items-center">
            {/* Left: heading, filters, description, CTA */}
            <div data-reveal="gallery-text">
              <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#C89B53] border-b border-[#C89B53]/40 pb-1">
                Hình ảnh
              </span>

              <h2 className="mt-4 font-serif font-medium text-[#0D2B22] text-[30px] sm:text-[42px] lg:text-[38px] xl:text-[44px] leading-[1.15] text-balance tracking-[-0.01em]">
                Những góc nhỏ,
                <span className="block">những khoảnh khắc rất&nbsp;Huế</span>
              </h2>

              {/* Filter pills */}
              <div role="tablist" aria-label="Lọc hình ảnh" className="mt-6 -mx-5 px-5 sm:mx-0 sm:px-0 flex sm:flex-wrap gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {filters.map((filter) => {
                  const active = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveFilter(filter)}
                      className={`shrink-0 whitespace-nowrap px-4 py-2 sm:py-1.5 rounded-full text-[13px] transition-all cursor-pointer border ${
                        active
                          ? "bg-[#0D2B22] border-[#0D2B22] text-white shadow-[0_6px_14px_-6px_rgba(13,43,34,0.6)]"
                          : "border-transparent text-stone-600 hover:text-[#0D2B22] hover:border-[#D7A75C]/40 hover:bg-white/60"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>

              <p className="mt-6 text-stone-600 text-[14px] sm:text-[15px] leading-[1.75] max-w-[440px]">
                Mỗi không gian tại Nam Phon đều được chăm chút tỉ mỉ để mang lại cảm giác dễ chịu và gần gũi nhất.
              </p>

              <button
                onClick={() => openLightbox(filtered, 0)}
                className="group mt-8 inline-flex items-center gap-3 pl-7 pr-6 py-3.5 rounded-full bg-[#D7A75C] hover:bg-[#C59648] text-[#0D2B22] text-[15px] font-medium shadow-[0_12px_24px_-12px_rgba(184,133,58,0.8)] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Xem toàn bộ hình ảnh
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
              </button>
            </div>

            {/* Right: tilted photo collage */}
            <div className="relative lg:pr-4">
              <div
                key={activeFilter}
                className="grid grid-cols-2 gap-3 sm:gap-4 lg:block lg:relative lg:aspect-[16/11] animate-room-fade"
              >
                {collage.map((item, idx) => (
                  <button
                    key={item.id}
                    data-reveal="gallery-card"
                    data-reveal-delay={idx * 140}
                    onClick={() => openLightbox(filtered, Math.max(0, filtered.indexOf(item)))}
                    aria-label={`Xem ảnh: ${item.title}`}
                    className={`group relative aspect-[4/5] lg:aspect-auto lg:absolute overflow-hidden border-[5px] border-white bg-stone-200 shadow-[0_22px_40px_-18px_rgba(13,43,34,0.45)] transition-transform duration-500 hover:z-20 hover:scale-[1.03] cursor-pointer ${slots[idx]}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 22vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-x-0 bottom-0 p-3 pt-10 bg-gradient-to-t from-black/55 to-transparent text-left text-white text-[12px] leading-snug opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Handwritten note under the tall left card */}
              <p data-reveal="gallery-note" data-reveal-delay="700" className="hidden lg:block absolute left-[3%] -bottom-12 xl:-bottom-14 -rotate-[8deg] font-script text-[#B88746] text-[26px] xl:text-[30px] leading-tight pointer-events-none select-none">
                A place
                <span className="block pl-6">with a peaceful soul.</span>
              </p>

              {/* Leafy accent tucked behind the right card */}
              <div className="hidden lg:block absolute -right-10 -bottom-16 w-36 h-48 opacity-60 pointer-events-none -z-10 rotate-[18deg]">
                <BotanicalBranch flip color="#1E4B38" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#081F18]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10 animate-room-fade"
        >
          <div className="relative w-full max-w-5xl h-[75vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={current.image} alt={current.title} fill sizes="90vw" className="object-contain" />
          </div>

          <div className="absolute bottom-5 inset-x-0 flex flex-col items-center gap-1 text-white pointer-events-none">
            <span className="font-serif text-lg">{current.title}</span>
            <span className="text-xs tracking-[0.2em] text-[#D7A75C] tabular-nums">
              {pad(lightbox.index + 1)} / {pad(lightbox.list.length)}
            </span>
          </div>

          {lightbox.list.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Ảnh trước"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 bg-white/10 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Ảnh tiếp theo"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/40 bg-white/10 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <button
            onClick={closeLightbox}
            aria-label="Đóng"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/40 text-white flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
}
