"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, CheckCircle, BedDouble, UserRound, Scan } from "lucide-react";
import { rooms, homestayInfo } from "@/data/homestayData";

export default function BookingModal({ isOpen, onClose, selectedRoomId }) {
  const [selectedRoom, setSelectedRoom] = useState(selectedRoomId || "p1");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestCount, setGuestCount] = useState("2");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // While open: lock page scroll (without layout jump) and close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;
    const prev = { overflow: html.style.overflow, paddingRight: document.body.style.paddingRight };
    html.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbar}px`;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prev.overflow;
      document.body.style.paddingRight = prev.paddingRight;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentRoom = rooms.find((r) => r.id === selectedRoom) || rooms[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleZaloRedirect = () => {
    const text = `Xin chào Nam Phon Homestay, tôi muốn đặt phòng ${currentRoom.name} từ ngày ${checkIn || "..."} đến ${checkOut || "..."} cho ${guestCount} khách. SĐT: ${phone}`;
    const url = `https://zalo.me/${homestayInfo.phone.replace(/\s+/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-room-fade"
    >
      {/* Sized to fit one screen; scrolls internally only on very short phones */}
      <div className="relative w-full max-w-2xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#D7A75C]/40 text-[#222E27]">
        {/* Header */}
        <div className="sticky top-0 z-10 relative px-12 sm:px-14 py-3 sm:py-3.5 bg-[#0D2B22] text-white text-center">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 max-w-full">
            <div className="hidden min-[360px]:block w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#D7A75C]/50 relative shrink-0">
              <Image src="/logo.jpg" alt="Logo" fill sizes="36px" className="object-cover" />
            </div>
            <div className="text-left min-w-0">
              <h3 id="booking-title" className="font-serif text-[15px] min-[360px]:text-base sm:text-lg font-semibold text-[#D7A75C] leading-tight text-balance">
                Đặt phòng tại Nam Phon
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-300 leading-snug text-balance">Huế thương — Nhẹ nhàng từng khoảnh khắc</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng"
            className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 text-stone-300 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#0D2B22]">
              Cảm ơn {fullName || "quý khách"}!
            </h4>
            <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
              Yêu cầu đặt phòng <strong>{currentRoom.name}</strong> đã được ghi nhận. Nam Phon Homestay sẽ liên hệ lại qua số điện thoại <strong>{phone || homestayInfo.phoneDisplay}</strong> để xác nhận và gửi thông tin chi tiết.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={handleZaloRedirect}
                className="px-6 py-3 bg-[#D7A75C] hover:bg-[#c59648] text-[#0D2B22] font-semibold rounded-full text-sm transition-all shadow-md"
              >
                Nhắn tin Zalo trực tiếp
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 border border-stone-300 hover:bg-stone-100 rounded-full text-sm font-medium transition-all"
              >
                Đóng
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-4 sm:px-6 py-4 space-y-3 sm:space-y-3.5">
            {/* Room selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
                Chọn phòng nghỉ
              </label>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setSelectedRoom(room.id)}
                    className={`px-1.5 sm:px-2.5 py-2 rounded-xl border text-center sm:text-left cursor-pointer transition-all flex flex-col justify-between min-w-0 ${
                      selectedRoom === room.id
                        ? "border-[#0D2B22] bg-[#0D2B22] text-white shadow-sm"
                        : "border-stone-200 bg-white hover:border-[#D7A75C] text-stone-700"
                    }`}
                  >
                    <span className="text-[10px] font-mono opacity-80">{room.subtitle}</span>
                    {/* Short name on phones so 4 rooms fit in one row */}
                    <span className="text-[11px] min-[360px]:text-xs font-bold font-serif leading-tight break-words">
                      <span className="sm:hidden">{room.tabName}</span>
                      <span className="hidden sm:inline">{room.name}</span>
                    </span>
                    <span className={`text-[10px] sm:text-[11px] mt-0.5 whitespace-nowrap ${selectedRoom === room.id ? "text-[#D7A75C]" : "text-stone-500"}`}>
                      {room.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Room highlight banner */}
            <div className="flex items-center gap-3 sm:gap-3.5 p-2.5 bg-stone-100/70 rounded-2xl border border-stone-200">
              <div className="w-14 h-14 relative rounded-xl overflow-hidden shrink-0">
                <Image src={currentRoom.cover} alt={currentRoom.name} fill sizes="56px" className="object-cover" />
              </div>
              <div className="text-xs min-w-0">
                <p className="font-serif font-bold text-sm text-[#0D2B22]">{currentRoom.name}</p>
                <p className="text-stone-500 mt-0.5 leading-snug">{currentRoom.description}</p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1 text-[11px] text-stone-600">
                  <span className="inline-flex items-center gap-1 whitespace-nowrap"><UserRound className="w-3.5 h-3.5 text-[#C89B53]" strokeWidth={1.6} />{currentRoom.guests}</span>
                  <span className="inline-flex items-center gap-1 whitespace-nowrap"><BedDouble className="w-3.5 h-3.5 text-[#C89B53]" strokeWidth={1.6} />{currentRoom.bed}</span>
                  <span className="inline-flex items-center gap-1 whitespace-nowrap"><Scan className="w-3.5 h-3.5 text-[#C89B53]" strokeWidth={1.6} />{currentRoom.area}</span>
                </div>
              </div>
            </div>

            {/* Date inputs */}
            <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-x-2 sm:gap-x-3 gap-y-3">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Ngày nhận phòng</label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-2.5 sm:px-3.5 py-2 text-[16px] sm:text-xs bg-white border border-stone-300 rounded-xl focus:outline-none focus:border-[#0D2B22]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Ngày trả phòng</label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-2.5 sm:px-3.5 py-2 text-[16px] sm:text-xs bg-white border border-stone-300 rounded-xl focus:outline-none focus:border-[#0D2B22]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Họ và tên</label>
                <input
                  type="text"
                  required
                  placeholder="Nguyễn Văn A"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-2.5 sm:px-3.5 py-2 text-[16px] sm:text-xs bg-white border border-stone-300 rounded-xl focus:outline-none focus:border-[#0D2B22]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Số điện thoại / Zalo</label>
                <input
                  type="tel"
                  required
                  placeholder="0912 345 678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-2.5 sm:px-3.5 py-2 text-[16px] sm:text-xs bg-white border border-stone-300 rounded-xl focus:outline-none focus:border-[#0D2B22]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Ghi chú (Tùy chọn)</label>
              <textarea
                rows={1}
                placeholder="Yêu cầu giờ check-in, số lượng khách bổ sung..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                // Drag the corner to enlarge; content still scrolls by wheel/touch but no scrollbar is drawn
                className="block w-full min-h-[66px] sm:min-h-[38px] max-h-48 px-2.5 sm:px-3.5 py-2 text-[16px] sm:text-xs bg-white border border-stone-300 rounded-xl resize-y [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none focus:border-[#0D2B22]"
              />
            </div>

            {/* Submit & Contact buttons */}
            <div className="pt-1 flex flex-col sm:flex-row gap-2 sm:gap-2.5">
              <button
                type="submit"
                className="flex-1 py-3 sm:py-2.5 whitespace-nowrap bg-[#D7A75C] cursor-pointer hover:bg-[#c59648] text-[#0D2B22] font-bold text-sm rounded-full transition-all shadow-md text-center"
              >
                GỬI YÊU CẦU ĐẶT PHÒNG
              </button>
              <button
                type="button"
                onClick={handleZaloRedirect}
                className="px-5 py-2.5 whitespace-nowrap border border-[#0D2B22] cursor-pointer hover:bg-[#0D2B22] hover:text-white text-[#0D2B22] font-semibold text-xs rounded-full transition-all text-center"
              >
                Nhắn Zalo ngay
              </button>
            </div>
            <p className="text-[11px] text-center text-stone-500">
              Hoặc gọi Hotline trực tiếp: <a href={`tel:${homestayInfo.phone.replace(/\s/g, "")}`} className="font-semibold text-[#0D2B22] underline">{homestayInfo.phoneDisplay}</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
