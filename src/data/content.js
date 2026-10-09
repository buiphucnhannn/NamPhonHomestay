import {
  Zap,
  ShieldCheck,
  BarChart3,
  Globe,
  Layers,
  Sparkles,
} from "lucide-react";

export const navigation = [
  { label: "Tính năng", href: "#features" },
  { label: "Cách hoạt động", href: "#how-it-works" },
  { label: "Đánh giá", href: "#testimonials" },
  { label: "Bảng giá", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const logos = [
  "Vercel",
  "ShopBase",
  "Tiki",
  "Beamin",
  "GotIt",
  "Base.vn",
];

export const features = [
  {
    icon: Zap,
    title: "Tốc độ vượt trội",
    description:
      "Tối ưu Core Web Vitals, SSR + ISR giúp trang tải dưới 1s, tăng tỉ lệ chuyển đổi.",
  },
  {
    icon: Layers,
    title: "Component tái sử dụng",
    description:
      "Hệ thống UI tách lớp rõ ràng: ui / layout / sections, dễ mở rộng cho mọi chiến dịch.",
  },
  {
    icon: BarChart3,
    title: "SEO & Analytics sẵn sàng",
    description:
      "Metadata, OpenGraph, sitemap chuẩn Next.js App Router. Đo lường dễ dàng.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo mật & ổn định",
    description:
      "Deploy trên Vercel Edge, HTTPS mặc định, form có validate và chống spam.",
  },
  {
    icon: Globe,
    title: "Đa ngôn ngữ",
    description:
      "Cấu trúc content tập trung trong /data, sẵn sàng mở rộng i18n vi/en.",
  },
  {
    icon: Sparkles,
    title: "Hiệu ứng mượt mà",
    description:
      "Tailwind CSS v4 + animation tinh gọn, responsive mobile-first hoàn hảo.",
  },
];

export const steps = [
  {
    step: "01",
    title: "Chọn mẫu & cấu hình",
    description:
      "Clone project, sửa nội dung trong src/data/content.js, đổi màu trong globals.css là xong 80%.",
  },
  {
    step: "02",
    title: "Tùy biến component",
    description:
      "Mỗi section là 1 component độc lập. Thêm, xóa, đổi thứ tự trong app/page.js.",
  },
  {
    step: "03",
    title: "Deploy 1 click",
    description:
      "Push lên GitHub và import vào Vercel. Có preview URL cho từng pull request.",
  },
];

export const stats = [
  { value: "12k+", label: "Lượt truy cập / tháng" },
  { value: "3.2x", label: "Tăng tỉ lệ chuyển đổi" },
  { value: "0.8s", label: "Thời gian tải trung bình" },
  { value: "99/100", label: "Điểm PageSpeed" },
];

export const testimonials = [
  {
    name: "Anh Minh Tuấn",
    role: "Founder, SaaS Startup",
    content:
      "Cấu trúc component rất gọn. Team mình chỉ mất 1 buổi chiều để ra mắt landing mới cho chiến dịch Tết.",
    avatar: "MT",
  },
  {
    name: "Chị Lan Anh",
    role: "Marketing Lead",
    content:
      "Điểm SEO và tốc độ tăng rõ rệt. Tỉ lệ đăng ký dùng thử tăng gần gấp đôi sau khi chuyển qua template này.",
    avatar: "LA",
  },
  {
    name: "Bạn Đức Nam",
    role: "Freelance Developer",
    content:
      "Code JS thuần, dễ đọc, dễ bàn giao. Khách hàng không biết code vẫn tự sửa text trong file data được.",
    avatar: "DN",
  },
];

export const pricing = [
  {
    name: "Cơ bản",
    priceMonthly: "0đ",
    priceYearly: "0đ",
    description: "Cho dự án cá nhân, thử nghiệm ý tưởng.",
    cta: "Bắt đầu miễn phí",
    featured: false,
    features: ["1 landing page", "Component cơ bản", "Deploy Vercel", "Hỗ trợ cộng đồng"],
  },
  {
    name: "Chuyên nghiệp",
    priceMonthly: "199k",
    priceYearly: "1.990k",
    description: "Cho startup và team marketing cần bứt tốc.",
    cta: "Dùng thử 14 ngày",
    featured: true,
    features: [
      "Mọi thứ ở gói Cơ bản",
      "10+ section cao cấp",
      "Form + tích hợp CRM",
      "A/B testing",
      "Hỗ trợ ưu tiên",
    ],
  },
  {
    name: "Doanh nghiệp",
    priceMonthly: "Liên hệ",
    priceYearly: "Liên hệ",
    description: "Giải pháp riêng cho thương hiệu lớn.",
    cta: "Đặt lịch tư vấn",
    featured: false,
    features: ["Thiết kế riêng", "Đa ngôn ngữ", "SLA 99.9%", "Account manager riêng"],
  },
];

export const faqs = [
  {
    q: "Project này dùng công nghệ gì?",
    a: "Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + JavaScript thuần. Không dùng TypeScript để dễ tiếp cận nhất.",
  },
  {
    q: "Tôi không rành code có sửa được không?",
    a: "Được. Toàn bộ chữ, giá, đánh giá nằm trong file src/data/content.js. Bạn chỉ cần sửa text rồi save là web tự cập nhật.",
  },
  {
    q: "Có chuẩn SEO không?",
    a: "Có. Project đã cấu hình metadata, OpenGraph, semantic HTML, sitemap-ready và tối ưu tốc độ theo chuẩn Core Web Vitals.",
  },
  {
    q: "Deploy ở đâu?",
    a: "Khuyên dùng Vercel (miễn phí). Chỉ cần push code lên GitHub và bấm Import, 2 phút là có link live.",
  },
  {
    q: "Có hỗ trợ dark mode / responsive không?",
    a: "Có. Layout mobile-first, responsive đầy đủ từ 360px đến 1440px, kèm dark mode tự động theo hệ thống.",
  },
];

export const footerLinks = {
  product: [
    { label: "Tính năng", href: "#features" },
    { label: "Bảng giá", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  resources: [
    { label: "Tài liệu", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Cộng đồng", href: "#" },
  ],
  company: [
    { label: "Về chúng tôi", href: "#" },
    { label: "Liên hệ", href: "#cta" },
    { label: "Điều khoản", href: "#" },
  ],
};
