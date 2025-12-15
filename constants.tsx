import React from 'react';
import { Layers, Grid, Bath, Utensils } from 'lucide-react';
import { Category, Product, NavItem } from './types';

export const COMPANY_INFO = {
  name: "Gạch Men Tân Đại Huy",
  hotline: "0918.214.353",
  email: "Congtythuandaihuy@gmail.com",
  address: "1275 tổ 2 khu phố 7a, phường Long Bình, Đồng Nai",
  zaloLink: "https://zalo.me/0918214353"
};

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Gạch Lát Nền",
    icon: <Layers size={48} className="text-primary mb-2" />,
    colorClass: "text-primary"
  },
  {
    id: 2,
    name: "Gạch Ốp Tường",
    icon: <Grid size={48} className="text-green-600 mb-2" />,
    colorClass: "text-green-600"
  },
  {
    id: 3,
    name: "Thiết Bị Vệ Sinh",
    icon: <Bath size={48} className="text-yellow-500 mb-2" />,
    colorClass: "text-yellow-500"
  },
  {
    id: 4,
    name: "Phụ Kiện Nhà Bếp",
    icon: <Utensils size={48} className="text-red-500 mb-2" />,
    colorClass: "text-red-500"
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "#" },
  { 
    label: "Gạch Ốp", 
    href: "#",
    children: [
      { 
        label: "Gạch Nhập Khẩu", 
        href: "#", 
        children: [
          { label: "Gạch 80x80", href: "#" },
          { label: "Gạch 60x120", href: "#" },
          { label: "Gạch 1200x1200", href: "#" }
        ]
      },
      { 
        label: "Gạch Việt Nam", 
        href: "#",
        children: [
          { label: "Gạch 30x60", href: "#" },
          { label: "Gạch 40x80", href: "#" },
          { label: "Gạch 80x80 VN", href: "#" }
        ]
      }
    ]
  },
  { 
    label: "Gạch Nền", 
    href: "#",
    children: [
      { label: "Nền Nhà 60x60", href: "#" },
      { label: "Nền Nhà Vệ Sinh 30x30", href: "#" }
    ]
  },
  { 
    label: "Gạch Sân Vườn", 
    href: "#",
    children: [
      { label: "Gạch 50x50", href: "#" },
      { label: "Gạch 40x60", href: "#" }
    ]
  },
  { label: "Thiết Bị Vệ Sinh", href: "#" },
  { 
    label: "Khác", 
    href: "#",
    children: [
      { label: "Sơn Nước", href: "#" },
      { label: "Chống Thấm", href: "#" },
      { label: "Keo Dán Gạch", href: "#" }
    ]
  }
];

// --- DANH SÁCH SẢN PHẨM ---
// LƯU Ý: Ảnh phải được lưu trong thư mục "img" cùng cấp với file index.html
// Tên file ảnh nên đặt theo mã sản phẩm (ví dụ: PL33414.jpg)

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. NHÓM GẠCH NHẬP KHẨU
  // ==========================================
  // --- GẠCH 80x80 ---
  { 
    id: 101, 
    name: "Gạch Ấn Độ 80x80 Men Mờ (Hot)", 
    image: "/img/ando_80x80_mo.jpg", 
    category: "Gạch 80x80", 
    isNew: true 
  },
  { 
    id: 102, 
    name: "Gạch Bóng Kiếng 80x80 Trắng Vân Mây", 
    image: "/img/80x80_trangvanmay.jpg", 
    category: "Gạch 80x80", 
    isNew: false 
  },
  { 
    id: 131, 
    name: "Gạch 80x80 GAM88003 - Bề Mặt Matt (Xám Xi Măng)", 
    image: "/img/GAM88003.jpg", 
    category: "Gạch 80x80", 
    isNew: true 
  },
  { 
    id: 132, 
    name: "Gạch 80x80 GAP88018 - Bóng Kiếng Vân Đá Xám", 
    image: "/img/GAP88018.jpg", 
    category: "Gạch 80x80", 
    isNew: true 
  },
  { 
    id: 133, 
    name: "Gạch 80x80 GAP88040 - Bóng Kiếng Trắng Vân Mây", 
    image: "/img/GAP88040.jpg", 
    category: "Gạch 80x80", 
    isNew: true 
  },
  { 
    id: 134, 
    name: "Gạch 80x80 GAP88036 - Bóng Kiếng Xám Nhạt", 
    image: "/img/GAP88036.jpg", 
    category: "Gạch 80x80", 
    isNew: true 
  },
  { 
    id: 135, 
    name: "Gạch 80x80 GAM88002 - Bề Mặt Matt (Kem Vàng)", 
    image: "/img/GAM88002.jpg", 
    category: "Gạch 80x80", 
    isNew: true 
  },
  { 
    id: 136, 
    name: "Gạch 80x80 GAP88038 - Bóng Kiếng Xám Vân Đá", 
    image: "/img/GAP88038.jpg", 
    category: "Gạch 80x80", 
    isNew: true 
  },
  { 
    id: 137, 
    name: "Gạch 80x80 GAP88004 - Bóng Kiếng Xám Đậm", 
    image: "/img/GAP88004.jpg", 
    category: "Gạch 80x80", 
    isNew: true 
  },
  { 
    id: 138, 
    name: "Gạch 80x80 GAP88005 - Bóng Kiếng Xám Khói", 
    image: "/img/GAP88005.jpg", 
    category: "Gạch 80x80", 
    isNew: true 
  },
  
  // --- GẠCH 60x120 ---
  { 
    id: 110, 
    name: "Gạch Nhập Khẩu 60x120 Đen Tia Chớp", 
    image: "/img/60120_dentia.jpg", 
    category: "Gạch 60x120", 
    isNew: true 
  },
  { 
    id: 141, 
    name: "Viglacera ASD 61251GP - Bóng Kiếng Trắng Vân", 
    image: "/img/ASD61251GP.jpg", 
    category: "Gạch 60x120", 
    isNew: true 
  },
  { 
    id: 142, 
    name: "Viglacera ASD 61255GP - Bóng Kiếng Kem Vân Đá", 
    image: "/img/ASD61255GP.jpg", 
    category: "Gạch 60x120", 
    isNew: true 
  },
  { 
    id: 143, 
    name: "Viglacera ASD 61254GP - Bóng Kiếng Xám Vân Đá", 
    image: "/img/ASD61254GP.jpg", 
    category: "Gạch 60x120", 
    isNew: true 
  },
  { 
    id: 144, 
    name: "Viglacera ASD 61253GP - Bóng Kiếng Trắng Khói", 
    image: "/img/ASD61253GP.jpg", 
    category: "Gạch 60x120", 
    isNew: true 
  },
  { 
    id: 145, 
    name: "Viglacera ASD 61256GM - Đá Mờ Xám Nhạt", 
    image: "/img/ASD61256GM.jpg", 
    category: "Gạch 60x120", 
    isNew: true 
  },
  { 
    id: 146, 
    name: "Viglacera ASD 61252GP - Bóng Kiếng Xám Xanh", 
    image: "/img/ASD61252GP.jpg", 
    category: "Gạch 60x120", 
    isNew: true 
  },
  { 
    id: 147, 
    name: "Viglacera ASD 61257GM - Đá Mờ Xám", 
    image: "/img/ASD61257GM.jpg", 
    category: "Gạch 60x120", 
    isNew: true 
  },
  { 
    id: 148, 
    name: "Gạch Ấn Độ 60x120 GAM62057 - Đá Mờ Kem Vân", 
    image: "/img/GAM62057.jpg", 
    category: "Gạch 60x120", 
    isNew: true 
  },
  { 
    id: 149, 
    name: "Gạch Ấn Độ 60x120 GAM62031 - Đá Mờ Trắng Vân", 
    image: "/img/GAM62031.jpg", 
    category: "Gạch 60x120", 
    isNew: true 
  },
  { 
    id: 150, 
    name: "Gạch Ấn Độ 60x120 GAM62060 - Đá Mờ Xám Vân", 
    image: "/img/GAM62060.jpg", 
    category: "Gạch 60x120", 
    isNew: true 
  },
  { 
    id: 151, 
    name: "Gạch Ấn Độ 60x120 GAM62037 - Đá Mờ Vàng Kem", 
    image: "/img/GAM62037.jpg", 
    category: "Gạch 60x120", 
    isNew: true 
  },

  // --- GẠCH 1200x1200 ---
  { 
    id: 120, 
    name: "Gạch Big Slab 1200x1200 Vân Cẩm Thạch", 
    image: "/img/bigslab_1200.jpg", 
    category: "Gạch 1200x1200", 
    isNew: true 
  },
  { 
    id: 121, 
    name: "Gạch Ấn Độ 1200x1200 GAP1212012 - Trắng Vân Mây", 
    image: "/img/GAP1212012.jpg", 
    category: "Gạch 1200x1200", 
    isNew: true 
  },
  { 
    id: 122, 
    name: "Gạch Ấn Độ 1200x1200 GAP1212004 - Vàng Kem Vân Đá", 
    image: "/img/GAP1212004.jpg", 
    category: "Gạch 1200x1200", 
    isNew: true 
  },
  { 
    id: 123, 
    name: "Gạch Ấn Độ 1200x1200 GAP1212015 - Xám Vân Đá", 
    image: "/img/GAP1212015.jpg", 
    category: "Gạch 1200x1200", 
    isNew: true 
  },

  // ==========================================
  // 2. NHÓM GẠCH VIỆT NAM
  // ==========================================
  // --- GẠCH 30x60 ---
  { 
    id: 201, 
    name: "Gạch Ốp Tường 30x60 Hoa Văn Cổ Điển", 
    image: "/img/op3060_codien.jpg", 
    category: "Gạch 30x60", 
    isNew: false 
  },
  { 
    id: 231, 
    name: "Gạch 30x60 GHC3606 - Men Bóng (Bộ Đậm Nhạt)", 
    image: "/img/GHC3606.jpg", 
    category: "Gạch 30x60", 
    isNew: true 
  },
  { 
    id: 232, 
    name: "Gạch 30x60 Platinum PL3601 - Men Mờ (Xám Lục Giác)", 
    image: "/img/PL3601.jpg", 
    category: "Gạch 30x60", 
    isNew: true 
  },
  { 
    id: 233, 
    name: "Gạch 30x60 Platinum PL3602 - Men Mờ (Xám Ghi)", 
    image: "/img/PL3602.jpg", 
    category: "Gạch 30x60", 
    isNew: true 
  },
  { 
    id: 234, 
    name: "Gạch 30x60 Platinum PL3603 - Men Mờ (Kem Vàng)", 
    image: "/img/PL3603.jpg", 
    category: "Gạch 30x60", 
    isNew: true 
  },
  { 
    id: 235, 
    name: "Gạch 30x60 GHC3604 - Men Bóng (Xám Vân Đá)", 
    image: "/img/GHC3604.jpg", 
    category: "Gạch 30x60", 
    isNew: true 
  },
  { 
    id: 236, 
    name: "Gạch 30x60 GHCM3603 - Men Mờ (Họa Tiết Hình Học)", 
    image: "/img/GHCM3603.jpg", 
    category: "Gạch 30x60", 
    isNew: true 
  },
  { 
    id: 237, 
    name: "Gạch 30x60 Platinum PT36004 - Men Bóng (Xám Vân Mây)", 
    image: "/img/PT36004.jpg", 
    category: "Gạch 30x60", 
    isNew: true 
  },
  { 
    id: 238, 
    name: "Gạch 30x60 Platinum PT36001 - Men Bóng (Trắng Vân Hoa)", 
    image: "/img/PT36001.jpg", 
    category: "Gạch 30x60", 
    isNew: true 
  },
  { 
    id: 239, 
    name: "Gạch 30x60 Platinum PT36002 - Men Bóng (Trắng Bình Hoa)", 
    image: "/img/PT36002.jpg", 
    category: "Gạch 30x60", 
    isNew: true 
  },
  { 
    id: 240, 
    name: "Gạch 30x60 Platinum PT36003 - Men Bóng (Trắng Họa Tiết)", 
    image: "/img/PT36003.jpg", 
    category: "Gạch 30x60", 
    isNew: true 
  },

  // --- GẠCH 40x80 ---
  { 
    id: 210, 
    name: "Gạch Ốp 40x80 Men Bóng Cao Cấp", 
    image: "/img/op4080_bong.jpg", 
    category: "Gạch 40x80", 
    isNew: false 
  },
  { 
    id: 251, 
    name: "Gạch 40x80 Italake ITL 4804 - Bộ Xám Đậm Nhạt", 
    image: "/img/ITL4804.jpg", 
    category: "Gạch 40x80", 
    isNew: true 
  },
  { 
    id: 252, 
    name: "Gạch 40x80 Italake ITL 4801 - Bộ Trắng Vân Hoa", 
    image: "/img/ITL4801.jpg", 
    category: "Gạch 40x80", 
    isNew: true 
  },
  { 
    id: 253, 
    name: "Gạch 40x80 World Tiles GWT.40101 - Bộ Trắng Điểm Vàng", 
    image: "/img/GWT40101.jpg", 
    category: "Gạch 40x80", 
    isNew: true 
  },
  { 
    id: 254, 
    name: "Gạch 40x80 World Tiles GWT.40102 - Bộ Trắng Xám", 
    image: "/img/GWT40102.jpg", 
    category: "Gạch 40x80", 
    isNew: true 
  },
  { 
    id: 255, 
    name: "Gạch 40x80 Italake ITL 4802 - Bộ Xám Vân Đá", 
    image: "/img/ITL4802.jpg", 
    category: "Gạch 40x80", 
    isNew: true 
  },
  { 
    id: 256, 
    name: "Gạch 40x80 TP48014 - Bộ Kem Vàng Geometric", 
    image: "/img/TP48014.jpg", 
    category: "Gạch 40x80", 
    isNew: true 
  },
  { 
    id: 257, 
    name: "Gạch 40x80 TP48012 - Bộ Xám Sọc", 
    image: "/img/TP48012.jpg", 
    category: "Gạch 40x80", 
    isNew: true 
  },
  { 
    id: 258, 
    name: "Gạch 40x80 TPV48000B - Bộ Hoa Xanh Dương", 
    image: "/img/TPV48000B.jpg", 
    category: "Gạch 40x80", 
    isNew: true 
  },
  { 
    id: 259, 
    name: "Gạch 40x80 TP48010 - Bộ Xám Hình Học", 
    image: "/img/TP48010.jpg", 
    category: "Gạch 40x80", 
    isNew: true 
  },
  { 
    id: 260, 
    name: "Gạch 40x80 TP48008 - Bộ Xám Lá Cây", 
    image: "/img/TP48008.jpg", 
    category: "Gạch 40x80", 
    isNew: true 
  },
  
  // --- GẠCH 80x80 VN ---
  { 
    id: 220, 
    name: "Gạch Lát 80x80 VN Giá Rẻ", 
    image: "/img/80x80vn_giare.jpg", 
    category: "Gạch 80x80 VN", 
    isNew: false 
  },
  { 
    id: 221, 
    name: "Gạch 80x80 HD8805 - Bóng Kiếng Vân Đá Xám", 
    image: "/img/HD8805.jpg", 
    category: "Gạch 80x80 VN", 
    isNew: true 
  },
  { 
    id: 222, 
    name: "Gạch 80x80 HD8801 - Bóng Kiếng Vân Mây", 
    image: "/img/HD8801.jpg", 
    category: "Gạch 80x80 VN", 
    isNew: true 
  },
  { 
    id: 223, 
    name: "Gạch 80x80 ECO 8802 - Bóng Kiếng Xám Đá", 
    image: "/img/ECO8802.jpg", 
    category: "Gạch 80x80 VN", 
    isNew: true 
  },
  { 
    id: 224, 
    name: "Gạch 80x80 HD8803 - Bóng Kiếng Xám Khói", 
    image: "/img/HD8803.jpg", 
    category: "Gạch 80x80 VN", 
    isNew: true 
  },
  { 
    id: 225, 
    name: "Gạch 80x80 TP8006 - Bóng Kiếng Xám Vân", 
    image: "/img/TP8006.jpg", 
    category: "Gạch 80x80 VN", 
    isNew: true 
  },
  { 
    id: 226, 
    name: "Gạch 80x80 TP8019 - Bóng Kiếng Trắng Vân", 
    image: "/img/TP8019.jpg", 
    category: "Gạch 80x80 VN", 
    isNew: true 
  },
  { 
    id: 227, 
    name: "Gạch 80x80 VP8005 - Bóng Kiếng Kem", 
    image: "/img/VP8005.jpg", 
    category: "Gạch 80x80 VN", 
    isNew: true 
  },
  { 
    id: 228, 
    name: "Gạch 80x80 VP8501M - Đá Mờ Kem Vàng", 
    image: "/img/VP8501M.jpg", 
    category: "Gạch 80x80 VN", 
    isNew: true 
  },
  { 
    id: 229, 
    name: "Gạch 80x80 VP8502M - Đá Mờ Xám Nhạt", 
    image: "/img/VP8502M.jpg", 
    category: "Gạch 80x80 VN", 
    isNew: true 
  },
  { 
    id: 230, 
    name: "Gạch 80x80 VP8503M - Đá Mờ Xám Đậm", 
    image: "/img/VP8503M.jpg", 
    category: "Gạch 80x80 VN", 
    isNew: true 
  },
  { 
    id: 241, 
    name: "Gạch 80x80 VP8505M - Đá Mờ Kem Nhạt", 
    image: "/img/VP8505M.jpg", 
    category: "Gạch 80x80 VN", 
    isNew: true 
  },

  // ==========================================
  // 3. NHÓM GẠCH NỀN NHÀ
  // ==========================================
  { 
    id: 301, 
    name: "Gạch Lát Nền 60x60 Màu Kem", 
    image: "/img/nen6060_kem.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: false 
  },
  { 
    id: 302, 
    name: "Gạch 60x60 TP6000 - Siêu Bóng Kính Trắng", 
    image: "/img/TP6000.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: true 
  },
  { 
    id: 303, 
    name: "Gạch 60x60 TP6002 - Siêu Bóng Kính Đen", 
    image: "/img/TP6002.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: true 
  },
  { 
    id: 304, 
    name: "Gạch 60x60 TP6003 - Siêu Bóng Kính Đỏ", 
    image: "/img/TP6003.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: true 
  },
  { 
    id: 305, 
    name: "Gạch 60x60 TP6005 - Vân Đá Trắng", 
    image: "/img/TP6005.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: true 
  },
  { 
    id: 306, 
    name: "Gạch 60x60 TP6006 - Vân Đá Xám", 
    image: "/img/TP6006.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: true 
  },
  { 
    id: 307, 
    name: "Gạch 60x60 TP6011 - Vân Đá Xám Nhạt", 
    image: "/img/TP6011.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: true 
  },
  { 
    id: 308, 
    name: "Gạch 60x60 TP6015 - Vân Mây Trắng", 
    image: "/img/TP6015.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: true 
  },
  { 
    id: 309, 
    name: "Gạch 60x60 TP6018 - Vân Đá Xanh Ngọc", 
    image: "/img/TP6018.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: true 
  },
  { 
    id: 312, 
    name: "Gạch 60x60 TP6019 - Vân Đá Xám Ghi", 
    image: "/img/TP6019.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: true 
  },
  { 
    id: 313, 
    name: "Gạch 60x60 TP6020 - Vân Đá Trắng Khói", 
    image: "/img/TP6020.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: true 
  },
  { 
    id: 314, 
    name: "Gạch 60x60 14.600600.61101 - Giả Gỗ", 
    image: "/img/61101.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: true 
  },
  { 
    id: 315, 
    name: "Gạch 60x60 14.600600.61103 - Vân Đá Trắng Mờ", 
    image: "/img/61103.jpg", 
    category: "Nền Nhà 60x60", 
    isNew: true 
  },
  { 
    id: 310, 
    name: "Gạch Toilet 30x30 Chống Trơn Giả Sỏi", 
    image: "/img/toilet3030.jpg", 
    category: "Nền Nhà Vệ Sinh 30x30", 
    isNew: false 
  },
  {
    id: 321,
    name: "Gạch 30x30 Platinum PL33414 - Men Mờ Xám",
    image: "/img/PL33414.jpg",
    category: "Nền Nhà Vệ Sinh 30x30",
    isNew: true
  },
  {
    id: 322,
    name: "Gạch 30x30 Platinum PL33413 - Men Mờ Xám Đậm",
    image: "/img/PL33413.jpg",
    category: "Nền Nhà Vệ Sinh 30x30",
    isNew: true
  },
  {
    id: 323,
    name: "Gạch 30x30 Platinum PL33412 - Men Mờ Xám Ghi",
    image: "/img/PL33412.jpg",
    category: "Nền Nhà Vệ Sinh 30x30",
    isNew: true
  },
  {
    id: 324,
    name: "Gạch 30x30 Platinum PL33804 - Hoa Văn Hình Học",
    image: "/img/PL33804.jpg",
    category: "Nền Nhà Vệ Sinh 30x30",
    isNew: true
  },
  {
    id: 325,
    name: "Gạch 30x30 Platinum PL33411 - Men Mờ Xám Nhạt",
    image: "/img/PL33411.jpg",
    category: "Nền Nhà Vệ Sinh 30x30",
    isNew: true
  },
  {
    id: 326,
    name: "Gạch 30x30 Platinum PL33803 - Hoa Văn Cổ Điển",
    image: "/img/PL33803.jpg",
    category: "Nền Nhà Vệ Sinh 30x30",
    isNew: true
  },
  {
    id: 327,
    name: "Gạch 30x30 Platinum PL33802 - Hoa Văn Bông Hoa",
    image: "/img/PL33802.jpg",
    category: "Nền Nhà Vệ Sinh 30x30",
    isNew: true
  },
  {
    id: 328,
    name: "Gạch 30x30 Platinum PL33801 - Hoa Văn Ghép",
    image: "/img/PL33801.jpg",
    category: "Nền Nhà Vệ Sinh 30x30",
    isNew: true
  },
  {
    id: 329,
    name: "Gạch 30x30 Platinum PL33410 - Matt Satin Trắng",
    image: "/img/PL33410.jpg",
    category: "Nền Nhà Vệ Sinh 30x30",
    isNew: true
  },

  // ==========================================
  // 4. NHÓM GẠCH SÂN VƯỜN
  // ==========================================
  { 
    id: 401, 
    name: "Gạch Sân Vườn 50x50 Hình Cỏ", 
    image: "/img/sanvuon50.jpg", 
    category: "Gạch 50x50", 
    isNew: false 
  },
  { 
    id: 410, 
    name: "Gạch Sân Vườn 40x60 Đá Cuội", 
    image: "/img/sanvuon4060.jpg", 
    category: "Gạch 40x60", 
    isNew: false 
  },
  {
    id: 421,
    name: "Gạch Sân Vườn 40x60 ITACA 4603 - Viền Cổ Điển",
    image: "/img/4603.jpg",
    category: "Gạch 40x60",
    isNew: true
  },
  {
    id: 422,
    name: "Gạch Sân Vườn 40x60 ITACA 4606 - Giả Đá Muối Tiêu",
    image: "/img/4606.jpg",
    category: "Gạch 40x60",
    isNew: true
  },
  {
    id: 423,
    name: "Gạch Sân Vườn 40x60 ITACA 4602 - Xám Vân Đá",
    image: "/img/4602.jpg",
    category: "Gạch 40x60",
    isNew: true
  },
  {
    id: 424,
    name: "Gạch Sân Vườn 40x60 Platinum AK4601PL04 - Vân Đá Xám Xanh",
    image: "/img/AK4601PL04.jpg",
    category: "Gạch 40x60",
    isNew: true
  },
  {
    id: 425,
    name: "Gạch Sân Vườn 40x60 Platinum AK4601PL05 - Vân Đá Xám Nhạt",
    image: "/img/AK4601PL05.jpg",
    category: "Gạch 40x60",
    isNew: true
  },
  {
    id: 426,
    name: "Gạch Sân Vườn 40x60 Platinum AK4601PL01 - Vân Đá Xám Đậm",
    image: "/img/AK4601PL01.jpg",
    category: "Gạch 40x60",
    isNew: true
  },
  {
    id: 427,
    name: "Gạch Sân Vườn 40x60 Platinum AK4601PL06 - Vân Đá Nâu Rusty",
    image: "/img/AK4601PL06.jpg",
    category: "Gạch 40x60",
    isNew: true
  },
  {
    id: 428,
    name: "Gạch Sân Vườn 40x60 Platinum AK4601PL03 - Vân Đá Xám Trắng",
    image: "/img/AK4601PL03.jpg",
    category: "Gạch 40x60",
    isNew: true
  },
  {
    id: 429,
    name: "Gạch Sân Vườn 40x60 Platinum AK4601PL02 - Vân Đá Đen",
    image: "/img/AK4601PL02.jpg",
    category: "Gạch 40x60",
    isNew: true
  },
  {
    id: 430,
    name: "Gạch Sân Vườn 40x60 ITACA 4607 - Xám Slate",
    image: "/img/4607.jpg",
    category: "Gạch 40x60",
    isNew: true
  },
  {
    id: 431,
    name: "Gạch Sân Vườn 40x60 ITACA 4601 - Xám Ghi Viền",
    image: "/img/4601.jpg",
    category: "Gạch 40x60",
    isNew: true
  },

  // ==========================================
  // 5. THIẾT BỊ VỆ SINH & KHÁC
  // ==========================================
  { 
    id: 501, 
    name: "Bồn Cầu 1 Khối Nano Kháng Khuẩn", 
    image: "/img/boncau_nano.jpg", 
    category: "Thiết Bị Vệ Sinh", 
    isNew: true 
  },
  { 
    id: 502, 
    name: "Lavabo Đặt Bàn Viền Vàng", 
    image: "/img/lavabo.jpg", 
    category: "Thiết Bị Vệ Sinh", 
    isNew: true 
  },
  { 
    id: 601, 
    name: "Sơn Nước Nội Thất Cao Cấp", 
    image: "/img/sonnuoc.jpg", 
    category: "Sơn Nước", 
    isNew: false 
  },
  { 
    id: 610, 
    name: "Sơn Chống Thấm Đa Năng", 
    image: "/img/chongtham.jpg", 
    category: "Chống Thấm", 
    isNew: false 
  },
  { 
    id: 620, 
    name: "Keo Dán Gạch Chuyên Dụng", 
    image: "/img/keodangach.jpg", 
    category: "Keo Dán Gạch", 
    isNew: false 
  },
];

export const BANNER_IMAGES = [
  "/img/banner1.jpg",
  "/img/banner2.jpg",
  "/img/banner3.jpg"
];