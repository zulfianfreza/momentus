import {
  IAbout,
  IFaq,
  IFeature,
  IPortofolio,
  ITestimonial,
} from '@/types/common.type';
import { TBackgroundMusic, TTheme } from '@/types/invitation.type';
import {
  ArchiveBook,
  Designtools,
  Image,
  Map,
  Personalcard,
  QuoteUp,
  Send2,
  Share,
  VideoOctagon,
} from 'iconsax-react';

export const THEME_FAKER: Array<TTheme> = [
  {
    id: 1,
    cover: '/images/theme/basic-flamingo.png',
    name: 'Basic Flamingo',
    code: 'F001',
    plan: {
      id: 1,
      name: 'Basic',
    },
  },
  {
    id: 2,
    cover: '/images/theme/basic-emerald.png',
    code: 'F002',
    name: 'Basic Emerald',
    plan: {
      id: 1,
      name: 'Basic',
    },
  },
  {
    id: 3,
    cover: '/images/theme/basic-bluesky.png',
    code: 'F002',
    name: 'Basic Bluesky',
    plan: {
      id: 1,
      name: 'Basic',
    },
  },
  {
    id: 4,
    cover: '/images/theme/basic-sweet-Brown.png',
    code: 'F002',
    name: 'Basic Sweet Brown',
    plan: {
      id: 1,
      name: 'Basic',
    },
  },
];

export const MUSIC_FAKER: TBackgroundMusic[] = [
  {
    id: 1,
    name: 'Luther Vandross - Endless Love',
    url: '/audio/luther-vandross-endless-love.mp3',
  },
  {
    id: 2,
    name: 'Tiara Andini, Arsy Widianto - Lagu Pernikahan Kita',
    url: '/audio/tiara-andini-arsy-widianto-lagu-pernikahan-kita.mp3',
  },
];

export const QUOTES_FAKER = [
  {
    quote:
      'The best and most beautiful things in this world cannot ne see or even heard, but must be felt the heart',
  },
  {
    quote:
      '"Pernikahan itu sekali seumur hidup. Pasangan yang kamu pilih adalah pasanganmu sampai mati. Salah atau benar, itulah pasanganmu."',
  },
  {
    quote:
      '"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” (QS. Ar-Rum: 21)',
  },
  {
    quote:
      'Matius 19:6 "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.”',
  },
  {
    quote:
      'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ Artinya: “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” (QS. Ar-Rum: 21)',
  },
];

export const FAQ_FAKER: Array<IFaq> = [
  {
    item: 1,
    trigger: 'Apa itu undangan pernikahan digital?',
    content:
      'A Undangan pernikahan digital adalah undangan yang dibuat dalam format digital dan dikirimkan kepada tamu melalui email, media sosial, atau aplikasi pesan. Ini adalah alternatif modern dan ramah lingkungan dibandingkan dengan undangan cetak tradisional.',
  },
  {
    item: 2,
    trigger: 'Apakah saya bisa memilih desain sendiri?',
    content:
      'Ya, kami menawarkan berbagai template dan desain yang dapat disesuaikan dengan tema pernikahan Anda. Anda juga dapat bekerja sama dengan desainer kami untuk membuat desain khusus sesuai keinginan Anda.',
  },
  {
    item: 3,
    trigger:
      'Berapa lama waktu yang dibutuhkan untuk membuat undangan digital?',
    content:
      'Waktu pembuatan dapat bervariasi tergantung pada kompleksitas desain dan jumlah revisi yang diperlukan. Secara umum, proses ini memakan waktu antara 3 hingga 7 hari kerja.',
  },
  {
    item: 4,
    trigger: 'Apakah saya bisa memasukkan RSVP digital dalam undangan?',
    content:
      'Ya, undangan pernikahan digital dapat mencakup fitur RSVP online yang memudahkan tamu untuk mengonfirmasi kehadiran mereka. Kami dapat menyertakan tautan ke formulir RSVP atau situs web pernikahan Anda.',
  },
  {
    item: 5,
    trigger: ' Bagaimana cara mengirim undangan digital kepada tamu?',
    content:
      'Setelah undangan selesai, kami akan memberikan file digital dalam format yang sesuai. Anda dapat mengirimkannya melalui email, aplikasi pesan, atau membagikannya di media sosial. Kami juga menyediakan layanan pengiriman undangan jika diperlukan.',
  },
  {
    item: 6,
    trigger: 'Bagaimana dengan privasi dan keamanan data undangan saya?',
    content:
      'Kami sangat menghargai privasi Anda. Data dan informasi yang Anda berikan akan dijaga kerahasiaannya dan hanya digunakan untuk keperluan pembuatan undangan pernikahan Anda. Kami menggunakan teknologi enkripsi untuk memastikan keamanan data.',
  },
  {
    item: 7,
    trigger:
      'Apakah saya bisa mencetak undangan digital tersebut jika diperlukan?',
    content:
      ' Ya, meskipun undangan ini dirancang untuk format digital, kami dapat menyediakan file berkualitas tinggi yang dapat dicetak jika Anda memutuskan untuk memiliki beberapa salinan fisik.',
  },
  {
    item: 8,
    trigger:
      'Bagaimana cara memesan layanan pembuatan undangan pernikahan digital?',
    content:
      'Anda dapat memesan layanan kami dengan menghubungi kami melalui situs web, email, atau nomor telepon yang tersedia. Tim kami akan mengatur konsultasi awal untuk memulai proses pembuatan undangan Anda.',
  },
];

export const FEATURE_WEB_FAKER: Array<IFeature> = [
  {
    icon: Designtools,
    feature_name: 'Desain Kreatif',
    feature_description:
      'Menyediakan beragam desain undangan pernikahan digital yang menarik dan kreatif sesuai dengan tema atau keinginan pengantin.',
  },
  {
    icon: Personalcard,
    feature_name: 'Personalisasi',
    feature_description:
      'Memungkinkan untuk menyesuaikan teks, gambar, dan detail lainnya sesuai dengan preferensi pengantin, seperti nama pengantin, dan lain-lain.',
  },
  {
    icon: Share,
    feature_name: 'Berbagai Format',
    feature_description:
      'Tersedia berbagai template yang dapat disesuaikan dengan mudah, mulai dari tema klasik hingga modern.',
  },
  {
    icon: Send2,
    feature_name: 'Sistem Pengiriman Massal',
    feature_description:
      'Memungkinkan pengiriman undangan secara massal kepada daftar tamu melalui email atau pesan teks untuk efisiensi dan kenyamanan.',
  },
  {
    icon: VideoOctagon,
    feature_name: 'Animasi dan Video',
    feature_description:
      'Menyediakan opsi animasi atau video pendek untuk membuat undangan lebih interaktif dan menarik.',
  },
  {
    icon: Image,
    feature_name: 'Galeri Foto',
    feature_description:
      'Menyediakan fitur galeri foto yang memungkinkan pengantin untuk membagikan foto pre-wedding atau cerita perjalanan cinta mereka kepada tamu.',
  },
  {
    icon: ArchiveBook,
    feature_name: 'RSVP Online',
    feature_description:
      'Menyediakan fitur RSVP online yang memudahkan tamu untuk mengkonfirmasi kehadiran mereka secara digital melalui formulir atau tautan RSVP.',
  },
  {
    icon: Map,
    feature_name: 'Integrasi Peta Lokasi',
    feature_description:
      'Memasukkan peta lokasi acara pernikahan secara digital, sehingga tamu dapat dengan mudah menemukan lokasi pernikahan anda.',
  },
];

export const TESTIMONIAL_FAKER: Array<ITestimonial> = [
  {
    tesimonial_image: '/images/dummy/gallery-11.jpg',
    icon_quotation: QuoteUp,
    testimonial_name: 'Sari & Dion',
    testimonial:
      'Desainnya simpel tapi aesthethik, pngerjaan jugaa cepet. Kalo kita kurang ngerti juga di kasih tau cara caranya',
  },
  {
    tesimonial_image: '/images/dummy/gallery-1.jpg',
    icon_quotation: QuoteUp,
    testimonial_name: 'Linda & Arya',
    testimonial:
      'Undangan digital kami sangat indah dan praktis! Kami bisa mengirimnya dengan mudah dan cepat kepada semua teman dan keluarga. Desainnya juga modern dan elegan.',
  },
  {
    tesimonial_image: '/images/dummy/gallery-12.jpg',
    icon_quotation: QuoteUp,
    testimonial_name: 'Rina & Budi',
    testimonial:
      'Menggunakan undangan digital sangat memudahkan kami. Tidak perlu repot dengan percetakan dan pengiriman, cukup beberapa klik dan semuanya beres!',
  },
  {
    tesimonial_image: '/images/dummy/gallery-4.jpg',
    icon_quotation: QuoteUp,
    testimonial_name: 'Dewi & Andi',
    testimonial:
      'Kami sangat puas dengan undangan digital kami. Bisa menambahkan video pesan singkat untuk tamu adalah fitur yang luar biasa!',
  },
  {
    tesimonial_image: '/images/dummy/gallery-10.jpg',
    icon_quotation: QuoteUp,
    testimonial_name: 'Maya & Fajar',
    testimonial:
      'Undangan digital ini sangat eco-friendly. Kami merasa lebih baik karena mengurangi penggunaan kertas dan membantu lingkungan.',
  },
];

export const PORTOFOLIO_FAKER: Array<IPortofolio> = [
  {
    background_image: '/images/dummy/gallery-10.jpg',
    bride_icon: '/images/dummy/gallery-7.jpg',
    groom_icon: '/images/dummy/gallery-8.jpg',
    name: 'Ado & Ayu',
    date: new Date('2024-10-23T10:00:00+07:00'),
    theme: 'Dark Boho',
  },
  {
    background_image: '/images/dummy/gallery-11.jpg',
    bride_icon: '/images/dummy/gallery-7.jpg',
    groom_icon: '/images/dummy/gallery-8.jpg',
    name: 'Ado & Ayu',
    date: new Date('2024-10-23T10:00:00+07:00'),
    theme: 'Simple Clean',
  },
  {
    background_image: '/images/dummy/gallery-12.jpg',
    bride_icon: '/images/dummy/gallery-7.jpg',
    groom_icon: '/images/dummy/gallery-8.jpg',
    name: 'Ado & Ayu',
    date: new Date('2024-10-23T10:00:00+07:00'),
    theme: 'Olive Flower Ornament',
  },
  {
    background_image: '/images/dummy/gallery-13.jpg',
    bride_icon: '/images/dummy/gallery-7.jpg',
    groom_icon: '/images/dummy/gallery-8.jpg',
    name: 'Ado & Ayu',
    date: new Date('2024-10-23T10:00:00+07:00'),
    theme: 'Minimmalist Style',
  },
  {
    background_image: '/images/dummy/gallery-3.jpg',
    bride_icon: '/images/dummy/gallery-7.jpg',
    groom_icon: '/images/dummy/gallery-8.jpg',
    name: 'Ado & Ayu',
    date: new Date('2024-10-23T10:00:00+07:00'),
    theme: 'Elegant Leaves',
  },
  {
    background_image: '/images/dummy/gallery-5.jpg',
    bride_icon: '/images/dummy/gallery-7.jpg',
    groom_icon: '/images/dummy/gallery-8.jpg',
    name: 'Ado & Ayu',
    date: new Date('2024-10-23T10:00:00+07:00'),
    theme: 'Calm Blue',
  },
];

export const ABOUT_FAKER: Array<IAbout> = [
  {
    thumbnail: '/images/state/about-state-1.png',
    title: '100% Youth',
    description:
      'Momentus 100% terdiri dari anak muda yang mempunyai passion di dunia kreatif industri, baik wedding, design dan web development, sehingga kami senantiasa memberikan ide-ide baru untuk kita.',
  },
  {
    thumbnail: '/images/state/about-state-2.png',
    title: 'Privacy First',
    description:
      'Momentus memberikan keleluasaan untuk kamu mengisi informasi undangan online yang akan dibagikan secara mandiri. Seperti tamu undangan, waktu, alamat, foto, video dan quote. Sehingga membuat privasimu dapat terjaga.',
  },
  {
    thumbnail: '/images/state/about-state-3.png',
    title: 'Technology Innovation',
    description:
      'Momentus sangat fokus pada teknologi untuk memastikan undangan dapat di akses pada mobile dan desktop dengan cepat dan sesuai harapan.',
  },
];
