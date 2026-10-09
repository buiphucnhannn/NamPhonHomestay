export const homestayInfo = {
  name: "Nam Phon Homestay",
  tagline: "Một khoảng nghỉ thật yên giữa lòng Huế",
  address: "Thành phố Huế, Việt Nam",
  phone: "0905 123 456",
  phoneDisplay: "0905 123 456",
  zalo: "https://zalo.me/0905123456",
  email: "namphonhomestay.hue@gmail.com",
};

// Shared by the header and the footer — keep in the same order as the sections on the page
export const navLinks = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Phòng", href: "#rooms" },
  { label: "Hình ảnh", href: "#gallery" },
  { label: "Trải nghiệm", href: "#experience" },
  { label: "Vị trí", href: "#location" },
];

export const stats = [
  { value: "20+", label: "Phòng nghỉ\nhiện đại" },
  { value: "5★", label: "Đánh giá\ntừ khách hàng" },
  { value: "Gần trung tâm", label: "Thuận tiện\ndi chuyển" },
];

// Mỗi phòng chỉ dùng ảnh trong public/room/pN_*.jpg của chính nó (P1 → p1_*, P2 → p2_*, ...).
export const rooms = [
  {
    id: "p1",
    tabCode: "P1",
    tabName: "Deluxe",
    subtitle: "/ 01",
    name: "Phòng Deluxe",
    tag: "Phòng Deluxe",
    title: "Gọn gàng, sáng sủa\nvà đủ đầy tiện nghi",
    guests: "2 khách",
    bed: "1 giường lớn",
    area: "25m²",
    price: "450.000đ",
    description:
      "Không gian tông trắng tinh tế với góc bếp nhỏ, bàn làm việc dài và tủ lạnh mini, phù hợp cho những chuyến công tác hay nghỉ ngơi ngắn ngày.",
    cover: "/room/p1_1.jpg",
    images: ["/room/p1_1.jpg", "/room/p1_3.jpg", "/room/p1_2.jpg"],
  },
  {
    id: "p2",
    tabCode: "P2",
    tabName: "Standard",
    subtitle: "/ 02",
    name: "Phòng Standard",
    tag: "Phòng Standard",
    title: "Rộng mở với ban công\nngập nắng và gió",
    guests: "2 khách",
    bed: "1 giường King",
    area: "35m²",
    price: "550.000đ",
    description:
      "Cửa kính lớn mở ra ban công xanh, ghế bập bênh thư giãn, sofa da ấm áp cùng góc bếp gỗ tiện lợi cho những ngày ở lâu tại Huế.",
    cover: "/room/p2_2.jpg",
    images: ["/room/p2_2.jpg", "/room/p2_4.jpg", "/room/p2_3.jpg", "/room/p2_1.jpg"],
  },
  {
    id: "p3",
    tabCode: "P3",
    tabName: "Family",
    subtitle: "/ 03",
    name: "Phòng Family",
    tag: "Phòng Family",
    title: "Rộng rãi cho kỳ nghỉ\ngia đình ấm cúng",
    guests: "4 khách",
    bed: "2 giường lớn",
    area: "40m²",
    price: "750.000đ",
    description:
      "Hai giường lớn, cửa kính kịch trần nhìn ra ban công cây xanh cùng góc sofa riêng, lựa chọn lý tưởng cho gia đình hoặc nhóm bạn thân.",
    cover: "/room/p3_3.jpg",
    images: ["/room/p3_3.jpg", "/room/p3_4.jpg", "/room/p3_1.jpg", "/room/p3_2.jpg"],
  },
  {
    id: "p4",
    tabCode: "P4",
    tabName: "Superior",
    subtitle: "/ 04",
    name: "Phòng Superior",
    tag: "Phòng Superior",
    title: "Riêng tư với bếp nhỏ\n& phòng tắm hoa văn",
    guests: "2 khách",
    bed: "1 giường lớn",
    area: "28m²",
    price: "500.000đ",
    description:
      "Góc bếp nhỏ đầy đủ dụng cụ, phòng tắm gạch hoa hoài niệm và bàn làm việc gỗ ấm áp, như một căn hộ thu nhỏ của riêng bạn.",
    cover: "/room/p4_5.jpg",
    images: ["/room/p4_5.jpg", "/room/p4_4.jpg", "/room/p4_2.jpg", "/room/p4_3.jpg", "/room/p4_1.jpg"],
  },
];

export const amenitiesList = [
  {
    id: "wifi",
    title: "Wi-Fi",
    desc: "tốc độ cao",
    iconName: "Wifi",
  },
  {
    id: "ac",
    title: "Điều hòa",
    desc: "không gian dễ chịu",
    iconName: "AirVent",
  },
  {
    id: "kitchen",
    title: "Bếp nhỏ",
    desc: "tiện lợi như ở nhà",
    iconName: "Utensils",
  },
  {
    id: "bath",
    title: "Phòng tắm riêng",
    desc: "sạch sẽ, hiện đại",
    iconName: "Bath",
  },
  {
    id: "tv",
    title: "TV",
    desc: "giải trí thoải mái",
    iconName: "Tv",
  },
];

// "featured" = the 4 photos shown in the collage under "Tất cả" (in slot order)
export const galleryItems = [
  { id: "g1", title: "Phòng ngủ nhìn ra ban công xanh", category: "Phòng nghỉ", image: "/room/p3_4.jpg", featured: 1 },
  { id: "g2", title: "Góc làm việc bên kệ gỗ", category: "Không gian chung", image: "/room/p4_1.jpg", featured: 2 },
  { id: "g3", title: "Phòng rộng với ghế bập bênh", category: "Phòng nghỉ", image: "/room/p2_2.jpg", featured: 3 },
  { id: "g4", title: "Góc lounge ấm áp", category: "Không gian chung", image: "/room/p3_2.jpg", featured: 4 },
  { id: "g5", title: "Phòng Family hai giường", category: "Phòng nghỉ", image: "/room/p3_3.jpg" },
  { id: "g6", title: "Phòng Superior ấm cúng", category: "Phòng nghỉ", image: "/room/p4_5.jpg" },
  { id: "g7", title: "Phòng khách và bếp gỗ", category: "Không gian chung", image: "/room/p2_1.jpg" },
  { id: "g8", title: "Bàn làm việc và góc trà", category: "Không gian chung", image: "/room/p1_2.jpg" },
  { id: "g9", title: "Phòng tắm gạch hoa", category: "Tiện nghi", image: "/room/p4_2.jpg" },
  { id: "g10", title: "Góc bếp nhỏ tiện lợi", category: "Tiện nghi", image: "/room/p1_3.jpg" },
  { id: "g11", title: "Phòng tắm kính và bếp", category: "Tiện nghi", image: "/room/p4_3.jpg" },
  { id: "g12", title: "Tủ quần áo và TV", category: "Tiện nghi", image: "/room/p4_4.jpg" },
];

export const daySchedule = [
  {
    time: "07:30",
    title: "Bình minh nhẹ nhàng",
    desc: "Thức dậy trong không gian tràn ngập ánh sáng tự nhiên.",
    image: "/room/p3_1.jpg",
  },
  {
    time: "10:00",
    title: "Khám phá Huế",
    desc: "Dễ dàng di chuyển đến các điểm tham quan nổi tiếng.",
    image: "/landmarks/dai_noi.jpg",
  },
  {
    time: "17:30",
    title: "Trở về Nam Phon",
    desc: "Nghỉ ngơi, thư giãn trong không gian riêng tư.",
    image: "/room/p4_5.jpg",
  },
  {
    time: "20:00",
    title: "Một buổi tối thật yên",
    desc: "Tận hưởng sự tĩnh lặng và cảm giác như ở nhà.",
    image: "/room/p3_2.jpg",
  },
];

// x / y = position on the illustrated map, in % of the map area
export const mapLandmarks = [
  { name: "Đại Nội", time: "~ 10 phút", image: "/landmarks/dai_noi.jpg", x: 38, y: 24 },
  { name: "Sông Hương", time: "~ 10 phút", image: "/landmarks/song_huong.jpg", x: 80, y: 28 },
  { name: "Chợ Đông Ba", time: "~ 8 phút", image: "/landmarks/cho_dong_ba.jpg", x: 28, y: 62 },
  { name: "Cầu Trường Tiền", time: "~ 8 phút", image: "/landmarks/truong_tien.jpg", x: 77, y: 70 },
];

export const testimonials = [
  {
    quote: "Phòng rất sạch, đẹp và yên tĩnh. Vị trí thuận tiện, chủ nhà thân thiện. Rất thích không gian ở đây!",
    name: "Nguyễn Minh Tuấn",
    from: "Hà Nội",
    rating: 5,
  },
  {
    quote: "Không gian hiện đại, ấm cúng, đầy đủ tiện nghi. Cảm giác như ở nhà. Sẽ quay lại khi có dịp đến Huế.",
    name: "Trần Thu Hà",
    from: "TP. Hồ Chí Minh",
    rating: 5,
  },
  {
    quote: "Ban công đẹp, nhiều ánh sáng. Thích hợp để nghỉ ngơi và làm việc. Trải nghiệm tuyệt vời!",
    name: "Lê Hoàng Phúc",
    from: "Đà Nẵng",
    rating: 5,
  },
  {
    quote: "Gia đình mình ở phòng Family 3 đêm, hai bé rất thích ban công cây xanh. Bếp nhỏ tiện để nấu cháo cho con.",
    name: "Phạm Ngọc Lan",
    from: "Hải Phòng",
    rating: 5,
  },
  {
    quote: "Chỉ mất vài phút để ra Đại Nội và chợ Đông Ba. Buổi tối về phòng yên tĩnh, ngủ rất ngon.",
    name: "Võ Thanh Bình",
    from: "Cần Thơ",
    rating: 5,
  },
  {
    quote: "Chủ nhà nhiệt tình chỉ chỗ ăn bún bò ngon và gợi ý lịch trình đi lăng. Phòng thơm, chăn ga trắng tinh.",
    name: "Đặng Khánh Linh",
    from: "Nha Trang",
    rating: 5,
  },
  {
    quote: "Mình ở một tuần để làm việc từ xa, wifi ổn định, bàn làm việc rộng. Không gian rất hợp để sống chậm.",
    name: "Hoàng Gia Huy",
    from: "Hà Nội",
    rating: 5,
  },
  {
    quote: "Phòng tắm gạch hoa xinh xắn, nội thất gỗ ấm áp. Check-in nhanh gọn, giá cả hợp lý so với chất lượng.",
    name: "Bùi Thảo Vy",
    from: "Vũng Tàu",
    rating: 5,
  },
];
