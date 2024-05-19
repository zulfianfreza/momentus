import { TMenu } from "@/types/common.type";
import {
  ArchiveAdd,
  ArchiveBook,
  ArrangeVertical,
  Book,
  BookSaved,
  Brush2,
  BrushBig,
  Calendar,
  Gallery,
  GalleryFavorite,
  Gift,
  Global,
  Home,
  Instagram,
  Location,
  Lovely,
  Magicpen,
  MessageFavorite,
  People,
  Profile2User,
  QuoteDown,
  Setting2,
  TagUser,
  TextBlock,
} from "iconsax-react";

export const SIDEBAR_MENU: Array<TMenu> = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/invitation/xyz",
  },
  {
    title: "Tampilan",
    icon: BrushBig,
    path: "/invitation/xyz/appereance",
    submenu: [
      {
        title: "Tema",
        icon: Brush2,
        path: "/invitation/xyz/appereance/theme",
      },
      {
        title: "Urutan",
        icon: ArrangeVertical,
        path: "/invitation/xyz/appereance/order",
      },
      {
        title: "Font",
        icon: TextBlock,
        path: "/invitation/xyz/appereance/font",
      },
    ],
  },
  {
    title: "Data",
    icon: GalleryFavorite,
    path: "/invitation/xyz/data",
    submenu: [
      {
        title: "Sampul",
        icon: ArchiveBook,
        path: "/invitation/xyz/data/cover",
      },
      {
        title: "Quote",
        icon: QuoteDown,
        path: "/invitation/xyz/data/quote",
      },
      {
        title: "Pasangan",
        icon: Lovely,
        path: "/invitation/xyz/data/couple",
      },
      {
        title: "Tanggal",
        icon: Calendar,
        path: "/invitation/xyz/data/date",
      },
      {
        title: "Lokasi",
        icon: Location,
        path: "/invitation/xyz/data/location",
      },
      {
        title: "Galeri",
        icon: Gallery,
        path: "/invitation/xyz/data/gallery",
      },
      {
        title: "Cerita",
        icon: Magicpen,
        path: "/invitation/xyz/data/story",
      },
      {
        title: "Penutup",
        icon: Book,
        path: "/invitation/xyz/data/closing",
      },
    ],
  },
  {
    title: "Tamu",
    icon: People,
    path: "/invitation/xyz/visitor",
    submenu: [
      {
        title: "Daftar Tamu",
        icon: Profile2User,
        path: "/invitation/xyz/visitor/list",
      },
      {
        title: "Konfirmasi Kehadiran",
        icon: TagUser,
        path: "/invitation/xyz/visitor/confirmation",
      },
      {
        title: "Buku Tamu",
        icon: BookSaved,
        path: "/invitation/xyz/visitor/book",
      },
      {
        title: "Hadiah",
        icon: Gift,
        path: "/invitation/xyz/visitor/gift",
      },
      {
        title: "Doa & Ucapan",
        icon: MessageFavorite,
        path: "/invitation/xyz/visitor/prayer-and-saying",
      },
    ],
  },
  {
    title: "Extra",
    icon: ArchiveAdd,
    path: "/invitation/xyz/extra",
    submenu: [
      {
        title: "Subdomain",
        icon: Global,
        path: "invitation/extra/domain",
      },
      {
        title: "Filter Instagram",
        icon: Instagram,
        path: "invitation/extra/filter-instagram",
      },
    ],
  },
  {
    title: "Pengaturan",
    icon: Setting2,
    path: "/invitation/xyz/setting",
  },
];
