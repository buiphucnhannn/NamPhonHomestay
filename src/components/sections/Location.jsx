"use client";

import Image from "next/image";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { mapLandmarks, homestayInfo } from "@/data/homestayData";
import { BotanicalBranch } from "@/components/ui/Decorations";

// Nam Phon's position on the illustrated map, in % of the map area
const HOME = { x: 54, y: 46 };

// Deterministic pseudo-random city blocks (same output on server and client)
function buildBlocks() {
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const blocks = [];
  for (let row = -4; row < 22; row++) {
    for (let col = -4; col < 30; col++) {
      if (rand() < 0.12) continue; // leave a few gaps: squares, parks
      const w = 30 + rand() * 22;
      const h = 22 + rand() * 14;
      blocks.push({
        x: col * 46 + rand() * 6,
        y: row * 36 + rand() * 6,
        w,
        h,
        o: 0.45 + rand() * 0.55,
      });
    }
  }
  return blocks;
}
const blocks = buildBlocks();

function HueMap() {
  return (
    <svg viewBox="0 0 1000 600" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
      <rect width="1000" height="600" fill="#F3EEE5" />

      {/* Street blocks on a slightly turned grid */}
      <g transform="rotate(-16 500 300)">
        {blocks.map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} rx="3" fill="#E9E2D5" opacity={b.o * 0.75} />
        ))}
      </g>

      {/* Main roads */}
      <g stroke="#FBF8F3" strokeWidth="7" strokeLinecap="round" fill="none">
        <path d="M -20 250 C 200 230 420 200 1020 120" />
        <path d="M -20 470 C 260 420 520 380 1020 330" />
        <path d="M 260 -20 C 300 160 330 380 380 620" />
        <path d="M 700 -20 C 690 200 720 400 760 620" />
      </g>

      {/* Đại Nội citadel with its moat */}
      <g transform="rotate(-16 380 140)">
        <rect x="300" y="60" width="160" height="160" fill="none" stroke="#CFE3E6" strokeWidth="8" />
        <rect x="318" y="78" width="124" height="124" fill="#E2D8C6" />
      </g>

      {/* Sông Hương */}
      <path
        d="M 60 660 C 260 560 430 470 520 370 C 600 280 640 150 760 -40"
        fill="none"
        stroke="#BCD9E0"
        strokeWidth="72"
        strokeLinecap="round"
      />
      <path
        d="M 60 660 C 260 560 430 470 520 370 C 600 280 640 150 760 -40"
        fill="none"
        stroke="#CBE3E8"
        strokeWidth="46"
        strokeLinecap="round"
      />
      <path
        d="M 60 660 C 260 560 430 470 520 370 C 600 280 640 150 760 -40"
        fill="none"
        stroke="#A9CFD8"
        strokeWidth="2"
        strokeDasharray="10 9"
      />
    </svg>
  );
}

export default function Location() {
  const handleOpenMap = () => {
    window.open("https://maps.google.com/?q=Hue+Vietnam", "_blank");
  };

  return (
    <section
      id="location"
      className="relative w-full bg-[#FAF7F2] text-[#222E27] pt-8 md:pt-8 lg:pt-6 pb-20 md:pb-24 lg:pb-24 overflow-hidden"
    >
      {/* Leaf accents */}
      <div className="absolute top-10 -left-8 w-36 h-48 opacity-25 pointer-events-none z-0">
        <BotanicalBranch color="#1E4B38" />
      </div>
      <div className="hidden lg:block absolute top-2 left-[36%] w-24 h-32 opacity-50 pointer-events-none z-20 -rotate-[60deg]">
        <BotanicalBranch color="#1E4B38" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 pointer-events-none">
        {/* Left column; pointer-events restored so the map behind stays hoverable */}
        <div data-reveal="loc-text" className="lg:max-w-[440px] xl:max-w-[460px] pointer-events-auto">
          <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold text-[#C89B53] border-b border-[#C89B53]/40 pb-1">
            Vị trí
          </span>

          <h2 className="mt-4 font-serif font-medium text-[#0D2B22] text-[30px] sm:text-[40px] lg:text-[38px] xl:text-[44px] leading-[1.15] tracking-[-0.01em]">
            Huế ở rất gần
          </h2>

          <p className="mt-3 text-stone-600 text-[14px] sm:text-[15px] leading-[1.7]">
            Từ Nam Phon, bạn có thể dễ dàng bắt đầu hành trình khám phá những nét đặc trưng của cố đô Huế – từ kiến
            trúc, ẩm thực đến những góc phố bình yên.
          </p>

          {/* Info card */}
          <ul className="mt-5 px-5 py-4 sm:px-6 sm:py-5 rounded-2xl bg-white/75 backdrop-blur-sm border border-[#D7A75C]/20 shadow-[0_14px_30px_-20px_rgba(13,43,34,0.35)] space-y-3">
            {[
              { icon: MapPin, label: "Địa chỉ", value: homestayInfo.address },
              {
                icon: Phone,
                label: "Liên hệ",
                value: (
                  <a href={`tel:${homestayInfo.phone.replace(/\s/g, "")}`} className="hover:text-[#C89B53] transition-colors">
                    {homestayInfo.phoneDisplay}
                  </a>
                ),
              },
              { icon: Clock, label: "Thời gian di chuyển", value: "Gần các điểm tham quan nổi tiếng" },
            ].map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-3.5">
                <span className="w-9 h-9 rounded-full bg-[#D7A75C]/15 flex items-center justify-center text-[#C89B53] shrink-0">
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.6} />
                </span>
                <span className="leading-snug">
                  <span className="block text-[13px] font-semibold text-[#0D2B22]">{label}</span>
                  <span className="block text-[13px] text-stone-600 mt-0.5">{value}</span>
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={handleOpenMap}
            className="group mt-6 inline-flex items-center gap-3 pl-7 pr-6 py-3 rounded-full bg-[#D7A75C] hover:bg-[#C59648] text-[#0D2B22] text-[15px] font-medium shadow-[0_12px_24px_-12px_rgba(184,133,58,0.8)] transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Xem chỉ đường
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Illustrated map: in the flow on mobile, a full-bleed right half that fades into the page on desktop */}
      <div data-reveal="loc-map" className="relative mx-5 sm:mx-8 mt-10 aspect-square sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_40px_-24px_rgba(13,43,34,0.4)] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:mt-0 lg:w-[62%] lg:aspect-auto lg:rounded-none lg:shadow-none lg:[mask-image:linear-gradient(to_right,transparent,black_24%),linear-gradient(to_bottom,transparent,black_18%)] lg:[mask-composite:intersect]">
        <HueMap />

        {/* Landmarks */}
        {mapLandmarks.map((place, idx) => (
          <div
            key={place.name}
            data-reveal="loc-place"
            data-reveal-delay={500 + idx * 140}
            className="group absolute z-10 flex items-center gap-2.5 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${place.x}%`, top: `${place.y}%` }}
          >
            <span className="relative w-11 h-11 sm:w-14 sm:h-14 lg:w-[68px] lg:h-[68px] rounded-full overflow-hidden border-[3px] border-white shadow-[0_8px_18px_-6px_rgba(13,43,34,0.45)] bg-white shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image src={place.image} alt={place.name} fill sizes="72px" className="object-cover" />
            </span>
            <span className="leading-tight [text-shadow:0_0_6px_#F3EEE5,0_0_2px_#F3EEE5]">
              <span className="block font-serif font-semibold text-[12px] sm:text-[14px] lg:text-[15px] text-[#0D2B22] whitespace-nowrap">
                {place.name}
              </span>
              <span className="block text-[11px] sm:text-[12px] text-stone-500">{place.time}</span>
            </span>
          </div>
        ))}

        {/* Nam Phon pin */}
        <div
          data-reveal="loc-pin"
          data-reveal-delay="1000"
          className="absolute z-20 flex items-end gap-2 -translate-x-[14px] -translate-y-full"
          style={{ left: `${HOME.x}%`, top: `${HOME.y}%` }}
        >
          <span className="relative w-7 h-9 sm:w-8 sm:h-10 shrink-0">
            <span className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-6 h-2 rounded-full bg-[#0D2B22]/25 blur-[2px]" />
            <svg viewBox="0 0 32 40" className="relative w-full h-full drop-shadow-md">
              <path d="M16 39 C16 39 3 24 3 15 a13 13 0 0 1 26 0 C29 24 16 39 16 39Z" fill="#C89B53" stroke="#FFF" strokeWidth="2" />
              <circle cx="16" cy="15" r="5" fill="#0D2B22" />
            </svg>
          </span>
          <span className="mb-4 sm:mb-5 bg-white px-3 py-1 rounded-md shadow-[0_6px_14px_-6px_rgba(13,43,34,0.4)] font-semibold text-[11px] sm:text-[13px] tracking-[0.06em] text-[#0D2B22] whitespace-nowrap">
            NAM PHON<span className="hidden sm:inline"> HOMESTAY</span>
          </span>
        </div>
      </div>

      {/* Dark green wave rising over the map into Testimonials */}
      <div className="absolute bottom-0 inset-x-0 z-20 pointer-events-none">
        {/* Symmetric arc: dark green rises evenly toward the centre */}
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" className="block w-full h-12 md:h-16 lg:h-20">
          <path d="M0 100 V70 Q720 -30 1440 70 V100 Z" fill="#0D2B22" />
        </svg>
      </div>
    </section>
  );
}
