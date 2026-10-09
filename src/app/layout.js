import { Playfair_Display, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Nam Phon Homestay | Một khoảng nghỉ thật yên giữa lòng Huế",
  description:
    "Không gian lưu trú hiện đại, ấm áp và riêng tư cho những ngày bạn muốn sống chậm tại thành phố Huế.",
  keywords: "Nam Phon Homestay, homestay Huế, khách sạn Huế, đặt phòng Huế, du lịch Huế",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Nam Phon Homestay — Một khoảng nghỉ thật yên giữa lòng Huế",
    description: "Không gian lưu trú hiện đại, ấm áp và riêng tư cho những ngày bạn muốn sống chậm.",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "Nam Phon Homestay Huế",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the head script below adds reveal classes to <html> before hydration
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${playfair.variable} ${jakarta.variable} ${dancingScript.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Hide [data-reveal] elements before first paint (no flash); if the app never starts, show everything */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;d.classList.add('reveal-on');setTimeout(function(){if(!window.__revealReady)d.classList.add('reveal-fallback')},3500)})();",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF7F2] text-[#222E27] antialiased selection:bg-[#D7A75C] selection:text-[#0D2B22]">
        <Navbar />
        <main className="flex-1 flex flex-col w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
