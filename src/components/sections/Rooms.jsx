"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, UserRound, BedDouble, Scan } from "lucide-react";
import HueCitadelSketch from "@/components/ui/HueCitadelSketch";
import { LotusFlower, BotanicalBranch, SectionDivider } from "@/components/ui/Decorations";
import BookingModal from "@/components/ui/BookingModal";
import { rooms } from "@/data/homestayData";

const pad = (n) => String(n).padStart(2, "0");

// Small gold rhombus used before the eyebrow labels
function DiamondMark({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M8 1.5 14.5 8 8 14.5 1.5 8Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 5 11 8 8 11 5 8Z" fill="currentColor" />
    </svg>
  );
}

// Folder-tab silhouette: rounded top-left, sloping right edge that tucks under the next tab
function TabShape({ active }) {
  return (
    <svg
      viewBox="0 0 200 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full transition-all duration-500 ${
        active ? "drop-shadow-[0_10px_18px_rgba(13,43,34,0.28)]" : ""
      }`}
    >
      <path
        d="M0 80 V26 Q0 4 22 4 H138 Q156 4 164 20 L182 64 Q189 80 200 80 Z"
        fill={active ? "#0D2B22" : "rgba(246,239,227,0.75)"}
        stroke={active ? "#0D2B22" : "rgba(200,155,83,0.35)"}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function NextButton({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      aria-label="Ảnh tiếp theo"
      className={`shrink-0 w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-white text-[#0D2B22] border border-stone-200/80 shadow-[0_10px_24px_-10px_rgba(13,43,34,0.35)] hover:bg-[#0D2B22] hover:text-white flex items-center justify-center transition-colors cursor-pointer ${className}`}
    >
      <ChevronRight className="w-5 h-5" strokeWidth={1.6} />
    </button>
  );
}

export default function Rooms() {
  const [roomIndex, setRoomIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const touchStartX = useRef(null);

  const room = rooms[roomIndex];
  const total = room.images.length;

  const selectRoom = (idx) => {
    setRoomIndex(idx);
    setImageIndex(0);
  };
  const prevImage = () => setImageIndex((i) => (i - 1 + total) % total);
  const nextImage = () => setImageIndex((i) => (i + 1) % total);

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? prevImage : nextImage)();
    touchStartX.current = null;
  };

  return (
    <>
      <section
        id="rooms"
        className="relative w-full bg-[#FAF7F2] text-[#222E27] pt-12 sm:pt-16 lg:pt-24 lg:short:pt-[84px] pb-20 sm:pb-24 lg:pb-12 lg:short:pb-12 overflow-hidden"
      >
        <SectionDivider className="top-0" />

        {/* Background illustrations */}
        <div className="absolute top-2 right-0 w-72 sm:w-[380px] lg:w-[440px] opacity-30 pointer-events-none z-0 [mask-image:linear-gradient(to_left,black_55%,transparent)]">
          <HueCitadelSketch className="w-full h-auto" opacity={0.6} />
        </div>
        <div className="hidden lg:block absolute top-[46%] -right-28 xl:-right-20 w-[280px] xl:w-[320px] opacity-50 pointer-events-none z-0">
          <LotusFlower className="w-full h-auto" opacity={0.35} />
        </div>

        {/* Soft blurred foliage, bottom-left */}
        <div className="absolute bottom-0 -left-10 w-40 h-56 sm:w-52 sm:h-72 blur-[3px] opacity-60 pointer-events-none z-0 rotate-[-12deg] [mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
          <BotanicalBranch color="#1E4B38" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          {/* Section header */}
          <div data-reveal="rooms-head" className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,400px)] gap-5 xl:gap-10 items-end mb-10 lg:mb-11 lg:short:mb-9">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5 text-[#C89B53]">
                <DiamondMark className="w-3.5 h-3.5" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold">Phòng nghỉ</span>
              </div>

              <div className="mt-3 lg:mt-2 flex items-center gap-4">
                <h2 className="font-serif font-medium text-[#0D2B22] text-[32px] sm:text-[46px] text-balance lg:text-[48px] xl:text-[54px] lg:short:text-[44px] leading-[1.08] xl:whitespace-nowrap tracking-[-0.01em]">
                  Khám phá không gian nghỉ
                </h2>
                {/* Brush-stroke flourish */}
                <svg
                  viewBox="0 0 120 30"
                  aria-hidden="true"
                  className="hidden md:block w-24 xl:w-28 h-auto text-[#C89B53] shrink-0 mt-3"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                >
                  <path d="M4 20 C30 6 70 4 100 10 C82 22 40 28 6 22" strokeWidth="1.1" />
                  <circle cx="112" cy="10" r="2" fill="currentColor" stroke="none" />
                </svg>
              </div>

              <p className="mt-3 lg:mt-2 text-stone-600 text-sm sm:text-base lg:text-[16px] leading-relaxed">
                4 lựa chọn phòng được thiết kế ấm áp, tiện nghi, phù hợp cho từng nhu cầu lưu trú.
              </p>
            </div>

            <p className="text-stone-600 text-[13px] sm:text-sm leading-[1.75] max-w-[420px]">
              Mỗi căn phòng tại Nam Phon đều là một khoảng không riêng, nơi bạn có thể nghỉ ngơi, làm việc và tận hưởng
              trọn vẹn nhịp sống chậm của Huế.
            </p>
          </div>

          {/* Showcase: photo left, tabs + details right (tabs sit above the photo on mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] gap-x-10 xl:gap-x-14 gap-y-6 lg:gap-y-4">
            {/* Room tabs */}
            <div
              data-reveal="rooms-side"
              data-reveal-delay="150"
              role="tablist"
              aria-label="Chọn phòng"
              className="lg:col-start-2 lg:row-start-1 flex items-stretch pr-4"
            >
              {rooms.map((r, idx) => {
                const active = idx === roomIndex;
                return (
                  <button
                    key={r.id}
                    role="tab"
                    aria-selected={active}
                    aria-controls="room-panel"
                    onClick={() => selectRoom(idx)}
                    style={{ zIndex: active ? 10 : rooms.length - idx }}
                    className="group relative flex-1 min-w-0 -mr-3 sm:-mr-4 h-[60px] sm:h-[68px] lg:h-[58px] xl:h-[62px] lg:short:h-[54px] text-left cursor-pointer"
                  >
                    <TabShape active={active} />
                    <span className="relative flex flex-col justify-center h-full pl-3 sm:pl-5 lg:pl-3 xl:pl-5 pr-4 lg:pr-3 xl:pr-4">
                      <span className="flex items-baseline gap-1.5 font-serif text-[20px] sm:text-[26px] lg:text-[22px] xl:text-[24px] leading-none text-[#C89B53]">
                        <span
                          aria-hidden="true"
                          className={`text-[10px] transition-opacity ${
                            active ? "opacity-100" : "opacity-40 group-hover:opacity-80"
                          }`}
                        >
                          ✦
                        </span>
                        {r.tabCode}
                      </span>
                      <span
                        className={`mt-1 pl-4 text-[11px] sm:text-[13px] lg:text-[12px] xl:text-[13px] leading-none truncate transition-colors ${
                          active ? "text-white" : "text-stone-600 group-hover:text-[#0D2B22]"
                        }`}
                      >
                        {r.tabName}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Main photo */}
            <div className="relative lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:pl-2">
              {/* Curved brand text hugging the top-left arch */}
              <svg
                viewBox="0 0 260 260"
                aria-hidden="true"
                className="hidden lg:block absolute -top-9 -left-6 w-[260px] h-[260px] pointer-events-none z-10 overflow-visible"
              >
                <path
                  id="room-arch-text"
                  d="M16 250 V176 A156 156 0 0 1 172 20 H226"
                  fill="none"
                  stroke="#C89B53"
                  strokeOpacity="0.55"
                  strokeWidth="1"
                />
                <text fill="#C89B53" fontSize="11" letterSpacing="3.2" dy="-7">
                  <textPath href="#room-arch-text" startOffset="5%">
                    NAM PHON HOMESTAY — HUẾ
                  </textPath>
                </text>
              </svg>

              <div
                id="room-panel"
                data-reveal="rooms-photo"
                role="tabpanel"
                onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
                onTouchEnd={handleTouchEnd}
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[clamp(380px,calc(100dvh-290px),520px)] overflow-hidden bg-stone-200 rounded-[28px] sm:rounded-tl-[120px] sm:rounded-tr-[36px] sm:rounded-br-[96px] sm:rounded-bl-[48px] lg:rounded-tl-[140px] shadow-[0_30px_60px_-28px_rgba(13,43,34,0.45)] group"
              >
                {room.images.map((src, idx) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`${room.name} — ảnh ${idx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    loading={idx === 0 ? "eager" : "lazy"}
                    className={`object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.03] ${
                      idx === imageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

                {/* Counter + progress */}
                <div className="absolute bottom-5 left-6 sm:bottom-7 sm:left-10 lg:left-14 z-20 flex items-center gap-4">
                  <span className="text-[13px] sm:text-sm font-medium tabular-nums tracking-wider text-white bg-black/15 border border-white/70 backdrop-blur-sm px-3.5 py-1 rounded-full">
                    {pad(imageIndex + 1)} / {pad(total)}
                  </span>
                  <span className="relative w-32 sm:w-56 lg:w-72 h-[2px] bg-white/35 rounded-full overflow-hidden">
                    <span
                      className="absolute inset-y-0 left-0 bg-[#D7A75C] rounded-full transition-[width] duration-500"
                      style={{ width: `${((imageIndex + 1) / total) * 100}%` }}
                    />
                  </span>
                </div>
              </div>

              {/* Prev arrow straddling the photo's left edge */}
              <button
                onClick={prevImage}
                aria-label="Ảnh trước"
                className="absolute left-3 sm:left-0 lg:left-2 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 z-20 w-12 h-12 sm:w-16 sm:h-16 lg:w-16 lg:h-16 rounded-full bg-stone-900/20 hover:bg-stone-900/35 border border-white/80 text-white backdrop-blur-md shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={1.5} />
              </button>
            </div>

            {/* Room details */}
            <div key={room.id} data-reveal="rooms-side" data-reveal-delay="300" className="lg:col-start-2 lg:row-start-2 flex flex-col animate-room-fade">
              <div className="flex items-center gap-2 text-[#C89B53]">
                <DiamondMark className="w-3 h-3" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-semibold">{room.tag}</span>
              </div>

              <h3 className="mt-3 lg:mt-2 font-serif font-medium text-[#0D2B22] text-[28px] sm:text-[32px] lg:text-[28px] xl:text-[32px] lg:short:text-[26px] leading-[1.18] whitespace-pre-line">
                {room.title}
              </h3>

              <p className="mt-3 lg:mt-2 text-stone-600 text-[14px] leading-[1.65] max-w-[460px]">
                {room.description}
              </p>

              <ul className="mt-5 lg:mt-3.5 lg:short:mt-2.5 flex flex-wrap items-center gap-y-2 text-[14px] text-stone-700">
                {[
                  { icon: UserRound, label: room.guests },
                  { icon: BedDouble, label: room.bed },
                  { icon: Scan, label: room.area },
                ].map(({ icon: Icon, label }, i) => (
                  <li key={i} className="flex items-center">
                    {i > 0 && <span className="w-px h-5 bg-stone-300 mx-4 xl:mx-5" aria-hidden="true" />}
                    <Icon className="w-5 h-5 xl:w-6 xl:h-6 mr-2 text-stone-700" strokeWidth={1.2} />
                    {label}
                  </li>
                ))}
              </ul>

              <div className="mt-6 lg:mt-4 lg:short:mt-3">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="group inline-flex items-center gap-3 pl-7 pr-6 py-3.5 lg:py-3 lg:short:py-2.5 rounded-full bg-[#D7A75C] hover:bg-[#C59648] text-[#0D2B22] text-[15px] font-medium shadow-[0_12px_24px_-12px_rgba(184,133,58,0.8)] transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  Đặt phòng ngay
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
                </button>
              </div>

              {/* Thumbnails */}
              <div className={`mt-6 lg:mt-auto lg:pt-4 lg:short:pt-3 relative flex items-center ${total >= 4 ? "lg:pr-6" : ""}`}>
                {/* At least 4 columns so 3-photo rooms keep the same thumb size; the arrow takes the spare cell */}
                <div
                  className="flex-1 min-w-0 grid gap-2.5 sm:gap-3 p-1"
                  style={{ gridTemplateColumns: `repeat(${Math.max(4, total)}, minmax(0, 1fr))` }}
                >
                  {room.images.map((src, idx) => {
                    const selected = idx === imageIndex;
                    return (
                      <button
                        key={src}
                        onClick={() => setImageIndex(idx)}
                        aria-label={`Xem ảnh ${idx + 1}`}
                        aria-current={selected}
                        className={`relative aspect-[6/5] lg:aspect-[4/3] lg:short:aspect-[16/11] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                          selected
                            ? "ring-2 ring-[#0D2B22] ring-offset-2 ring-offset-[#FAF7F2]"
                            : "opacity-75 hover:opacity-100"
                        }`}
                      >
                        <Image src={src} alt="" fill sizes="140px" className="object-cover" />
                      </button>
                    );
                  })}
                  {total < 4 && (
                    <div className="flex items-center">
                      <NextButton onClick={nextImage} />
                    </div>
                  )}
                </div>

                {total >= 4 && (
                  <NextButton onClick={nextImage} className="ml-3 lg:ml-0 lg:absolute lg:-right-7 xl:-right-8" />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        key={room.id}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedRoomId={room.id}
      />
    </>
  );
}
