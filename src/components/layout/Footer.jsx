import Image from "next/image";
import Link from "next/link";
import { homestayInfo, navLinks } from "@/data/homestayData";

export default function Footer() {
  return (
    <footer className="w-full bg-[#081F18] text-white">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Brand · links · contact */}
        <div data-reveal="footer" className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-7 lg:gap-10 text-center lg:text-left">
          <Link href="#hero" className="inline-flex items-center gap-3.5 justify-self-center lg:justify-self-start group">
            <span className="relative w-14 h-14 rounded-full overflow-hidden border border-[#D7A75C]/50 shrink-0 transition-transform group-hover:scale-105">
              <Image src="/logo.jpg" alt="Nam Phon Homestay" fill sizes="56px" className="object-cover" />
            </span>
            <span className="text-left leading-tight">
              <span className="block font-serif text-[19px] font-bold tracking-[0.14em] text-white">NAM PHON HOMESTAY</span>
              <span className="block mt-1 text-[13px] text-white/75">Yên tĩnh • Ấm áp • Giữa lòng Huế</span>
            </span>
          </Link>

          {/* Same pill style as the header links (dark variant) */}
          <nav aria-label="Liên kết chân trang" className="flex flex-wrap justify-center gap-1.5 xl:gap-2.5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 lg:py-1 rounded-full border border-transparent text-[11px] xl:text-xs uppercase tracking-[0.14em] font-medium text-white/85 hover:text-[#F1D9A6] hover:bg-gradient-to-r hover:from-[#D7A75C]/30 hover:to-[#F1D9A6]/15 hover:border-[#D7A75C]/50 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="lg:text-right">
            <p className="text-[15px] text-white/75">
              Hotline:{" "}
              <a
                href={`tel:${homestayInfo.phone.replace(/\s/g, "")}`}
                className="font-bold text-white hover:text-[#D7A75C] transition-colors"
              >
                {homestayInfo.phoneDisplay}
              </a>
            </p>
            <p className="mt-1.5 text-[13px] text-white/60">{homestayInfo.address}</p>
          </div>
        </div>

        {/* Copyright */}
        <div data-reveal="footer" data-reveal-delay="150" className="border-t border-white/10 py-5 text-center text-[13px] text-white/55">
          © 2026 Nam Phon Homestay. Một khoảng nghỉ thật yên giữa lòng Huế.
        </div>
      </div>
    </footer>
  );
}
