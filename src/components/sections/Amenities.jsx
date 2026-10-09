"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionDivider } from "@/components/ui/Decorations";

function WifiIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" />
    </svg>
  );
}

function AcIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="9" rx="2" />
      <line x1="5" y1="8.5" x2="19" y2="8.5" />
      <path d="M6 17c1.5 2 3 2 4 0s3-2 4 0 3 2 4 0" strokeDasharray="2 2" />
    </svg>
  );
}

function KitchenIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 11h16v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6z" />
      <line x1="12" y1="4" x2="12" y2="11" />
      <path d="M8 7c0-2 4-2 4 0" />
      <line x1="2" y1="11" x2="22" y2="11" />
    </svg>
  );
}

function BathIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2.12 0 1.5 1.5 0 0 0 0 2.12L6.5 7.74" />
      <path d="m2 15 2 2h16l2-2" />
      <path d="M4 17v3" />
      <path d="M20 17v3" />
      <path d="M4 12v3h16v-3" />
    </svg>
  );
}

function TvIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="15" x="2" y="3" rx="2" />
      <line x1="12" y1="18" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  );
}

const amenities = [
  {
    icon: WifiIcon,
    name: "Wi-Fi",
    detail: "tốc độ cao",
  },
  {
    icon: AcIcon,
    name: "Điều hòa",
    detail: "không gian dễ chịu",
  },
  {
    icon: KitchenIcon,
    name: "Bếp nhỏ",
    detail: "tiện lợi như ở nhà",
  },
  {
    icon: BathIcon,
    name: "Phòng tắm riêng",
    detail: "sạch sẽ, hiện đại",
  },
  {
    icon: TvIcon,
    name: "TV",
    detail: "giải trí thoải mái",
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="relative w-full bg-[#FAF7F2] text-[#222E27] pt-12 sm:pt-16 lg:pt-24 pb-10 sm:pb-14 lg:pb-12 overflow-hidden"
    >
      <SectionDivider className="top-0" />

      {/* Delicate Botanical Lotus Flower Watermark on Right Edge */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-56 sm:w-72 lg:w-80 h-auto opacity-35 pointer-events-none z-0 [mask-image:radial-gradient(closest-side,black_55%,transparent)]">
        <Image
          src="/amenities_lotus_pure.png"
          alt="Lotus Decoration"
          width={280}
          height={350}
          className="object-contain mix-blend-multiply"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: organic photo frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start">
            <div data-reveal="amen-frame" className="relative w-full max-w-[520px] px-2 sm:px-0">
              {/* Organic pebble frame: curved evenly on every side, gold contour hugging it */}
              <svg
                viewBox="-30 -20 700 540"
                className="w-full h-auto overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Phòng khách với sofa và góc bếp gỗ tại Nam Phon"
              >
                <defs>
                  <clipPath id="amenitiesPebbleClip">
                    <path d="M 130 38 C 270 8, 470 18, 562 82 C 632 130, 642 252, 612 342 C 582 432, 482 482, 332 477 C 192 472, 82 467, 42 392 C 6 322, 12 182, 46 112 C 66 72, 96 50, 130 38 Z" />
                  </clipPath>
                  <filter id="amenitiesShadow" x="-20%" y="-20%" width="140%" height="150%">
                    <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#0D2B22" floodOpacity="0.22" />
                  </filter>
                </defs>

                {/* Gold contour: same shape, slightly larger and turned, so it peeks out all around */}
                <path
                  d="M 130 38 C 270 8, 470 18, 562 82 C 632 130, 642 252, 612 342 C 582 432, 482 482, 332 477 C 192 472, 82 467, 42 392 C 6 322, 12 182, 46 112 C 66 72, 96 50, 130 38 Z"
                  transform="rotate(-3 327 250) translate(327 250) scale(1.06) translate(-327 -250)"
                  stroke="#D7A75C"
                  strokeWidth="1.6"
                  strokeOpacity="0.55"
                  vectorEffect="non-scaling-stroke"
                />

                {/* White mat + shadow under the photo */}
                <path d="M 130 38 C 270 8, 470 18, 562 82 C 632 130, 642 252, 612 342 C 582 432, 482 482, 332 477 C 192 472, 82 467, 42 392 C 6 322, 12 182, 46 112 C 66 72, 96 50, 130 38 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="14" filter="url(#amenitiesShadow)" />

                <g clipPath="url(#amenitiesPebbleClip)">
                  <image
                    href="/room/p2_1.jpg"
                    x="0"
                    y="0"
                    width="660"
                    height="500"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Right Column: Title, Description, Single Horizontal Row of 5 Amenities & CTA */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4">
            {/* Tag */}
            <div data-reveal="amen-text" className="inline-block">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C89B53] border-b border-[#C89B53]/40 pb-0.5">
                TIỆN NGHI
              </span>
            </div>

            {/* Heading */}
            <h2 data-reveal="amen-text" data-reveal-delay="120" className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0D2B22] leading-[1.2] tracking-tight">
              Mọi thứ bạn cần <br />
              <span className="italic font-normal">cho một kỳ nghỉ nhẹ nhàng</span>
            </h2>

            {/* Description */}
            <p data-reveal="amen-text" data-reveal-delay="240" className="text-stone-600 text-sm sm:text-base leading-relaxed font-light max-w-xl">
              Được trang bị đầy đủ tiện nghi hiện đại, đáp ứng trọn vẹn nhu cầu sinh hoạt và nghỉ ngơi.
            </p>

            {/* Single Horizontal Row of 5 Amenities Matching Mockup 100% */}
            {/* Flex-wrap so a shorter last row (2 of 5 on phones) sits centred */}
            <div className="flex flex-wrap justify-center sm:justify-between gap-y-4 pt-2">
              {amenities.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.name} data-reveal="amen-icon" data-reveal-delay={300 + idx * 110} className="basis-1/3 sm:basis-auto sm:flex-1 px-1 flex flex-col items-center text-center space-y-2 group">
                    <div className="w-11 h-11 rounded-2xl bg-[#C89B53]/10 border border-[#C89B53]/30 flex items-center justify-center text-[#C89B53] group-hover:bg-[#0D2B22] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-xs sm:text-[13px] text-[#0D2B22] leading-tight">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-stone-500 font-light mt-0.5 leading-tight">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div data-reveal="amen-text" data-reveal-delay="850" className="pt-2">
              <Link
                href="#rooms"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#D7A75C] hover:bg-[#c59648] text-[#0D2B22] font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Xem thêm tiện nghi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
