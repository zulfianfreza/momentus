import { TMenu } from '@/types/common.type';
import {
  ArchiveBook,
  ArrangeVertical,
  Book,
  BookSaved,
  BrushBig,
  Calendar,
  Edit,
  Gallery,
  GalleryFavorite,
  Gift,
  Global,
  Home2,
  Instagram,
  Lovely,
  Magicpen,
  MessageFavorite,
  Music,
  Profile2User,
  QuoteDown,
  TagUser,
  TextBlock,
} from 'iconsax-react';
import { IoBagAddOutline, IoSettingsOutline } from 'react-icons/io5';
import { PiAddressBookTabs, PiDatabase, PiPaintBucket } from 'react-icons/pi';

export const NAVIGATIONS = [
  {
    icon: Lovely,
    label: 'Pasangan',
    target: 'couple',
  },
  {
    icon: Calendar,
    label: 'Acara',
    target: 'event',
  },
  {
    icon: Magicpen,
    label: 'Kisah Cinta',
    target: 'story',
  },
  {
    icon: GalleryFavorite,
    label: 'Galeri',
    target: 'gallery',
  },
  {
    icon: Edit,
    label: 'Ucapan',
    target: 'wish',
  },
];

/**
 * function for get sidebar menu
 * @param slug
 * @returns
 */
export const getSidebarMenu = (slug: string) => {
  const prefix = '/invitation/' + slug;

  return [
    {
      title: 'Dashboard',
      icon: Home2,
      path: prefix,
    },
    {
      title: 'Tampilan',
      icon: PiPaintBucket,
      path: prefix + '/appereance',
      submenu: [
        {
          title: 'Tema',
          icon: BrushBig,
          path: prefix + '/appereance/theme',
        },
        {
          title: 'Urutan',
          icon: ArrangeVertical,
          path: prefix + '/appereance/order',
        },
        {
          title: 'Font',
          icon: TextBlock,
          path: prefix + '/appereance/font',
        },
      ],
    },
    {
      title: 'Data',
      icon: PiDatabase,
      path: prefix + '/data',
      submenu: [
        {
          title: 'Sampul',
          icon: ArchiveBook,
          path: prefix + '/data/cover',
        },
        {
          title: 'Quote',
          icon: QuoteDown,
          path: prefix + '/data/quote',
        },
        {
          title: 'Pasangan',
          icon: Lovely,
          path: prefix + '/data/couple',
        },
        {
          title: 'Detail Acara',
          icon: Calendar,
          path: prefix + '/data/event',
        },
        {
          title: 'Galeri',
          icon: Gallery,
          path: prefix + '/data/gallery',
        },
        {
          title: 'Cerita',
          icon: Magicpen,
          path: prefix + '/data/story',
        },
        {
          title: 'Penutup',
          icon: Book,
          path: prefix + '/data/closing',
        },
        {
          title: 'Latar Musik',
          icon: Music,
          path: prefix + '/data/music',
        },
        {
          title: 'Hadiah',
          icon: Gift,
          path: prefix + '/data/gift',
        },
      ],
    },
    {
      title: 'Tamu',
      icon: PiAddressBookTabs,
      path: prefix + '/guest',
      submenu: [
        {
          title: 'Daftar Tamu',
          icon: Profile2User,
          path: prefix + '/guest/list',
        },
        {
          title: 'Konfirmasi Kehadiran',
          icon: TagUser,
          path: prefix + '/guest/confirmation',
        },
        {
          title: 'Buku Tamu',
          icon: BookSaved,
          path: prefix + '/guest/guest-book',
        },
        {
          title: 'Doa & Ucapan',
          icon: MessageFavorite,
          path: prefix + '/guest/prayer-and-saying',
        },
      ],
    },
    {
      title: 'Extra',
      icon: IoBagAddOutline,
      path: prefix + '/extra',
      submenu: [
        {
          title: 'Domain',
          icon: Global,
          path: prefix + '/extra/domain',
        },
        {
          title: 'Filter Instagram',
          icon: Instagram,
          path: prefix + '/extra/filter-instagram',
        },
      ],
    },
    // {
    //   title: 'Pengaturan',
    //   icon: IoSettingsOutline,
    //   path: prefix + '/setting',
    // },
  ] as Array<TMenu>;
};
