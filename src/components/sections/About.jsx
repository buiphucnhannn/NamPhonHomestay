"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HueCitadelSketch from "@/components/ui/HueCitadelSketch";
import { BotanicalBranch } from "@/components/ui/Decorations";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#FAF7F2] text-[#222E27] pt-2 md:pt-4 pb-6 md:pb-10 overflow-hidden">
      {/* Botanical leaves accents on top-left edge */}
      <div className="absolute top-0 -left-8 w-28 h-40 opacity-20 pointer-events-none z-0">
        <BotanicalBranch color="#1E4B38" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 items-center">
          {/* Left Column: Heading, Text & Story */}
          {/* Same top/bottom offsets as the photo column (slogan band / pillow overhang) so the text centres on the photo itself */}
          <div className="lg:col-span-4 relative py-4 lg:pt-20 lg:pb-12">
            {/* Tag */}
            <div data-reveal="about-text" className="inline-block">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#C89B53] border-b border-[#C89B53]/40 pb-0.5">
                GIỚI THIỆU
              </span>
            </div>

            {/* Heading */}
            <h2 data-reveal="about-text" data-reveal-delay="120" className="mt-5 lg:mt-6 font-serif text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[40px] font-bold text-[#0D2B22] leading-[1.18] tracking-tight">
              {/* Brand name: warm gold gradient, a step larger, with a short brush underline */}
              <span className="relative inline-block pb-2 mb-1 text-[1.18em] leading-none tracking-[0.01em] bg-gradient-to-r from-[#9C6B26] via-[#C8964A] to-[#9C6B26] bg-clip-text text-transparent">
                Nam Phon
                <svg viewBox="0 0 120 10" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 w-full h-2.5 text-[#C89B53]" fill="none">
                  <path d="M2 6 C35 2.5 85 2.5 118 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
              <span className="block">Nơi để trở về</span>
              <span className="block italic font-normal text-[#1E4B38]">sau một ngày ở Huế</span>
            </h2>

            {/* Paragraph */}
            <p data-reveal="about-text" data-reveal-delay="240" className="mt-5 lg:mt-7 text-stone-700 text-[14px] xl:text-[15px] leading-[1.8] max-w-[360px]">
              Nam Phon Homestay mang đến không gian lưu trú hiện đại, tinh tế và ấm áp, giúp bạn cảm thấy thoải mái như đang ở chính ngôi nhà của mình.
            </p>

            {/* Link */}
            <div data-reveal="about-text" data-reveal-delay="360" className="mt-6 lg:mt-8">
              <Link
                href="#rooms"
                className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-[#0D2B22] hover:text-[#C89B53] transition-colors group underline underline-offset-6 decoration-[#C89B53]/50 hover:decoration-[#C89B53]"
              >
                <span>Khám phá câu chuyện của chúng tôi</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Huế Citadel sketch under the text; out of flow on desktop so it doesn't pull the text block off-centre */}
            <div className="relative lg:absolute lg:left-0 lg:top-full lg:-mt-7 max-w-[260px] sm:max-w-[300px] lg:max-w-[240px] lg:w-[240px] -ml-3 mt-6 opacity-50 pointer-events-none">
              <HueCitadelSketch className="w-full h-auto text-[#C89B53]" opacity={0.6} />
            </div>
          </div>

          {/* Right Column: Code-drawn Organic Photo Composition */}
          {/* On phones/tablets the photo block tucks up so the slogan band overlaps the Huế sketch instead of leaving a gap */}
          <div className="lg:col-span-8 relative flex items-center justify-center lg:justify-end -mt-28 sm:-mt-32 lg:mt-0">
            {/* pt reserves a band above the frame for the slogan; pb keeps the pillow badge inside the section */}
            <div className="relative w-full max-w-[700px] lg:max-w-[820px] xl:max-w-[880px] pt-16 sm:pt-20 pb-10 sm:pb-12">
              {/* Handwritten script slogan sits in the top-right band, clear of the photo */}
              <div data-reveal="about-script" data-reveal-delay="500" className="absolute -top-7 sm:-top-6 lg:top-2 right-2 sm:right-4 z-20 pointer-events-none select-none text-right -rotate-6 origin-right">
                <span className="font-script text-[#B88746] text-2xl sm:text-3xl block leading-tight tracking-wide">
                  More than a stay,
                </span>
                <span className="font-script text-[#996F38] text-xl sm:text-2xl block leading-tight mt-0.5 pr-6 sm:pr-8">
                  it&apos;s a feeling of home
                </span>
              </div>

              {/* Decorative botanical branch tucked behind the slogan */}
              <div className="hidden sm:block absolute -top-2 -right-6 w-24 h-32 opacity-25 pointer-events-none z-0 rotate-45">
                <BotanicalBranch color="#2D5A43" />
              </div>

              {/* Decorative botanical branch on left edge */}
              <div className="absolute top-24 sm:top-28 -left-6 sm:-left-8 w-24 sm:w-32 h-40 opacity-40 pointer-events-none z-20 -rotate-12">
                <BotanicalBranch color="#2D5A43" />
              </div>

              {/* Main Vector Organic Frame Container — leaves room on the right for the pillow badge to overlap */}
              <div data-reveal="about-frame" className="relative w-full sm:w-[90%] aspect-[860/540]">
                {/* SVG for clipping and drawing the organic wrapper path + contour stroke */}
                <svg
                  viewBox="0 0 860 540"
                  className="w-full h-full drop-shadow-xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="aboutOrganicClip">
                      <path d="M 140 85 C 290 20, 560 25, 720 85 C 800 115, 840 240, 800 370 C 765 445, 660 515, 500 505 C 340 495, 185 520, 100 425 C 30 340, 45 160, 140 85 Z" />
                    </clipPath>
                  </defs>

                  {/* Outer delicate wavy contour stroke */}
                  <path
                    d="M 120 75 C 275 8, 575 12, 745 75 C 830 108, 865 250, 820 390 C 780 470, 670 535, 490 525 C 320 515, 160 540, 75 440 C 5 350, 20 145, 120 75 Z"
                    stroke="#D7A75C"
                    strokeWidth="1.6"
                    strokeOpacity="0.45"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Main HD Image clipped by the organic shape */}
                  <g clipPath="url(#aboutOrganicClip)">
                    <image
                      href="/about/about_corner_hd.jpg"
                      x="40"
                      y="15"
                      width="780"
                      height="500"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </g>
                </svg>

                {/* Overlapping Pillow Badge (Bottom Right) — straddles the frame edge, stays inside the section */}
                <div data-reveal="about-pillow" data-reveal-delay="450" className="absolute -bottom-8 sm:-bottom-10 right-2 sm:-right-[8%] z-30 w-32 sm:w-44 md:w-52 aspect-square rounded-[46%_54%_58%_42%/44%_56%_44%_56%] border-[4px] sm:border-[5px] border-[#FAF7F2] shadow-2xl overflow-hidden group">
                  <Image
                    src="/about/about_pillow_hd.jpg"
                    alt="Gối thêu logo Nam Phon Homestay"
                    fill
                    sizes="(max-width: 768px) 160px, 240px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle inner shadow / border accent */}
                  <div className="absolute inset-0 ring-1 ring-black/10 rounded-[46%_54%_58%_42%/44%_56%_44%_56%] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
