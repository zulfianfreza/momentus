import {
  IAbout,
  IFaq,
  IFeature,
  IPortofolio,
  ITestimonial,
} from "@/types/common.type";
import {
  TBackgroundMusic,
  TInvitation,
  TInvitationGallery,
  TInvitationStory,
  TInvitationWish,
  TTheme,
} from "@/types/invitation.type";
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
} from "iconsax-react";

export const THEME_FAKER: Array<TTheme> = [
  {
    id: 1,
    cover: "/images/theme/simple-clean.jpeg",
    name: "Simple Clean",
    code: "F001",
    plan: {
      id: 1,
      name: "Splendid",
    },
  },
  {
    id: 1,
    cover: "/images/theme/traditional-java.jpg",
    code: "F002",
    name: "Traditional Java",
    plan: {
      id: 1,
      name: "Splendid",
    },
  },
];

export const INVITATION_FAKER: Array<TInvitation> = [
  {
    id: 1,
    invitation_category: {
      id: 1,
      category_name: "wedding",
    },
    invitation_status: "actvie",
    slug: "sekar-hilman",
    theme: {
      id: 1,
      cover: "/images/theme/simple-clean.jpeg",
      name: "Simple Clean",
      code: "F001",
      plan: {
        id: 1,
        name: "Fair",
      },
    },
    user_id: 1,
    invitation_style: {
      groom_first: true,
      hide_logo: false,
      gallery_style: "slideshow",
    },
    invitation_private: [
      {
        person_name: "Adelia Wesaya",
        person_instagram: "adelia_wesaya",
        person_child_sequence: "Kedua",
        person_father_name: "Dr. Andreas Sanusi S.E",
        person_mother_name: "Dewi Yuliantara",
        id: 1,
        person_image: {
          id: 1,
          url: "/images/traditional-java/bride-image.jpeg",
        },
      },
      {
        id: 2,
        person_name: "Timothy Pardede S.Kom",
        person_instagram: "timothy_pardd",
        person_child_sequence: "Sulung",
        person_father_name: "Bobby Pardede",
        person_mother_name: "Jessica Putri",
        person_image: {
          id: 1,
          url: "/images/traditional-java/bride-image.jpeg",
        },
      },
    ],
    quote:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ Artinya: “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” (QS. Ar-Rum: 21)",
    invitation_events: [
      {
        id: 1,
        event_label: "Akad",
        event_start: new Date("2024-10-23T10:00:00+07:00"),
        event_end: new Date("2024-10-23T10:00:00+07:00"),
        event_address:
          "Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia",
        event_maps_url: "",
        event_venue: "Masjid Al-Quran",
        event_video_url: "",
      },
      {
        id: 2,
        event_label: "Resepsi",
        event_start: new Date("2024-10-23T10:00:00+07:00"),
        event_end: new Date("2024-10-23T10:00:00+07:00"),
        event_address:
          "DoubleTree by Hilton Jakarta - Diponegoro Jakarta Pusat",
        event_maps_url: "",
        event_venue: "GOR Kertajaya",
        event_video_url: "",
      },
    ],
    invitation_galleries: [
      {
        id: 1,
        url: "/images/dummy/gallery-1.jpg",
      },
      {
        id: 2,
        url: "/images/dummy/gallery-2.jpg",
      },
      {
        id: 3,
        url: "/images/dummy/gallery-3.jpg",
      },
      {
        id: 4,
        url: "/images/dummy/gallery-4.jpg",
      },
      {
        id: 5,
        url: "/images/dummy/gallery-5.jpg",
      },
      {
        id: 6,
        url: "/images/dummy/gallery-6.jpg",
      },
      {
        id: 7,
        url: "/images/dummy/gallery-7.jpg",
      },
      {
        id: 8,
        url: "/images/dummy/gallery-8.jpg",
      },
      {
        id: 9,
        url: "/images/dummy/gallery-9.jpg",
      },
    ],
    plan: {
      id: 1,
      name: "Rarely",
    },
    plan_expired_at: "2024-05-31T10:00:00+07:00",
    invitation_stories: [
      {
        id: 1,
        title: "2019",
        description: "First time we meet.",
        image: "/images/traditional-java/story-image-1.jpg",
      },
      {
        id: 2,
        title: "2021",
        description: "We decided to get engaged.",
        image: "/images/traditional-java/story-image-2.jpg",
      },
      {
        id: 3,
        title: "2022",
        description: "Finally, we are husband and wife.",
        image: "/images/traditional-java/story-image-3.jpg",
      },
      {
        id: 4,
        title: "Finally",
        description:
          "Akhirnya kita bersama didalam pernikahan yang sakral, semoga tuhan meridoi pernikahan kita.",
        image: "/images/traditional-java/story-image-4.jpg",
      },
    ],
    invitation_wishes: [
      {
        id: 1,
        name: "Dee",
        location: "Bogor",
        message: "Beautiful 💕",
      },
      {
        id: 2,
        name: "Momentus",
        location: "Bekasi",
        message:
          "Beatiful design matters. happy for all of you that want going to married",
      },
    ],
  },
];

export const MUSIC_FAKER: TBackgroundMusic[] = [
  {
    id: 1,
    name: "Luther Vandross - Endless Love",
    url: "/audio/luther-vandross-endless-love.mp3",
  },
  {
    id: 2,
    name: "Tiara Andini, Arsy Widianto - Lagu Pernikahan Kita",
    url: "/audio/tiara-andini-arsy-widianto-lagu-pernikahan-kita.mp3",
  },
];

export const INVITATION_STORIES_FAKER: Array<TInvitationStory> = [
  {
    id: 1,
    title: "2019",
    description: "First time we meet.",
    image: "/images/traditional-java/story-image-1.jpg",
  },
  {
    id: 2,
    title: "2021",
    description: "We decided to get engaged.",
    image: "/images/traditional-java/story-image-2.jpg",
  },
  {
    id: 3,
    title: "2022",
    description: "Finally, we are husband and wife.",
    image: "/images/traditional-java/story-image-3.jpg",
  },
  {
    id: 4,
    title: "Finally",
    description:
      "Akhirnya kita bersama didalam pernikahan yang sakral, semoga tuhan meridoi pernikahan kita.",
    image: "/images/traditional-java/story-image-4.jpg",
  },
];

export const INVITATION_GALLERIES_FAKER: Array<TInvitationGallery> = [
  {
    id: 1,
    url: "/images/dummy/gallery-1.jpg",
  },
  {
    id: 2,
    url: "/images/dummy/gallery-2.jpg",
  },
  {
    id: 3,
    url: "/images/dummy/gallery-3.jpg",
  },
  {
    id: 4,
    url: "/images/dummy/gallery-4.jpg",
  },
  {
    id: 5,
    url: "/images/dummy/gallery-5.jpg",
  },
  {
    id: 6,
    url: "/images/dummy/gallery-6.jpg",
  },
  {
    id: 7,
    url: "/images/dummy/gallery-7.jpg",
  },
  {
    id: 8,
    url: "/images/dummy/gallery-8.jpg",
  },
  {
    id: 9,
    url: "/images/dummy/gallery-9.jpg",
  },
];

export const INVITATION_WISHES_FAKER: TInvitationWish[] = [
  {
    id: 1,
    name: "Dee",
    location: "Bogor",
    message: "Beautiful 💕",
  },
  {
    id: 2,
    name: "Momentus",
    location: "Bekasi",
    message:
      "Beatiful design matters. happy for all of you that want going to married",
  },
];

export const QUOTES_FAKER = [
  {
    quote:
      "The best and most beautiful things in this world cannot ne see or even heard, but must be felt the heart",
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
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ Artinya: “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” (QS. Ar-Rum: 21)",
  },
];

export const FAQ_FAKER: Array<IFaq> = [
  {
    item: 1,
    trigger: "Apa itu undangan pernikahan digital?",
    content:
      "A Undangan pernikahan digital adalah undangan yang dibuat dalam format digital dan dikirimkan kepada tamu melalui email, media sosial, atau aplikasi pesan. Ini adalah alternatif modern dan ramah lingkungan dibandingkan dengan undangan cetak tradisional.",
  },
  {
    item: 2,
    trigger: "Apakah saya bisa memilih desain sendiri?",
    content:
      "Ya, kami menawarkan berbagai template dan desain yang dapat disesuaikan dengan tema pernikahan Anda. Anda juga dapat bekerja sama dengan desainer kami untuk membuat desain khusus sesuai keinginan Anda.",
  },
  {
    item: 3,
    trigger:
      "Berapa lama waktu yang dibutuhkan untuk membuat undangan digital?",
    content:
      "Waktu pembuatan dapat bervariasi tergantung pada kompleksitas desain dan jumlah revisi yang diperlukan. Secara umum, proses ini memakan waktu antara 3 hingga 7 hari kerja.",
  },
  {
    item: 4,
    trigger: "Apakah saya bisa memasukkan RSVP digital dalam undangan?",
    content:
      "Ya, undangan pernikahan digital dapat mencakup fitur RSVP online yang memudahkan tamu untuk mengonfirmasi kehadiran mereka. Kami dapat menyertakan tautan ke formulir RSVP atau situs web pernikahan Anda.",
  },
  {
    item: 5,
    trigger: " Bagaimana cara mengirim undangan digital kepada tamu?",
    content:
      "Setelah undangan selesai, kami akan memberikan file digital dalam format yang sesuai. Anda dapat mengirimkannya melalui email, aplikasi pesan, atau membagikannya di media sosial. Kami juga menyediakan layanan pengiriman undangan jika diperlukan.",
  },
  {
    item: 6,
    trigger: "Bagaimana dengan privasi dan keamanan data undangan saya?",
    content:
      "Kami sangat menghargai privasi Anda. Data dan informasi yang Anda berikan akan dijaga kerahasiaannya dan hanya digunakan untuk keperluan pembuatan undangan pernikahan Anda. Kami menggunakan teknologi enkripsi untuk memastikan keamanan data.",
  },
  {
    item: 7,
    trigger:
      "Apakah saya bisa mencetak undangan digital tersebut jika diperlukan?",
    content:
      " Ya, meskipun undangan ini dirancang untuk format digital, kami dapat menyediakan file berkualitas tinggi yang dapat dicetak jika Anda memutuskan untuk memiliki beberapa salinan fisik.",
  },
  {
    item: 8,
    trigger:
      "Bagaimana cara memesan layanan pembuatan undangan pernikahan digital?",
    content:
      "Anda dapat memesan layanan kami dengan menghubungi kami melalui situs web, email, atau nomor telepon yang tersedia. Tim kami akan mengatur konsultasi awal untuk memulai proses pembuatan undangan Anda.",
  },
];

export const FEATURE_WEB_FAKER: Array<IFeature> = [
  {
    icon: Designtools,
    feature_name: "Desain Kreatif",
    feature_description:
      "Menyediakan beragam desain undangan pernikahan digital yang menarik dan kreatif sesuai dengan tema atau keinginan pengantin.",
  },
  {
    icon: Personalcard,
    feature_name: "Personalisasi",
    feature_description:
      "Memungkinkan untuk menyesuaikan teks, gambar, dan detail lainnya sesuai dengan preferensi pengantin, seperti nama pengantin, dan lain-lain.",
  },
  {
    icon: Share,
    feature_name: "Berbagai Format",
    feature_description:
      "Tersedia berbagai template yang dapat disesuaikan dengan mudah, mulai dari tema klasik hingga modern.",
  },
  {
    icon: Send2,
    feature_name: "Sistem Pengiriman Massal",
    feature_description:
      "Memungkinkan pengiriman undangan secara massal kepada daftar tamu melalui email atau pesan teks untuk efisiensi dan kenyamanan.",
  },
  {
    icon: VideoOctagon,
    feature_name: "Animasi dan Video",
    feature_description:
      "Menyediakan opsi animasi atau video pendek untuk membuat undangan lebih interaktif dan menarik.",
  },
  {
    icon: Image,
    feature_name: "Galeri Foto",
    feature_description:
      "Menyediakan fitur galeri foto yang memungkinkan pengantin untuk membagikan foto pre-wedding atau cerita perjalanan cinta mereka kepada tamu.",
  },
  {
    icon: ArchiveBook,
    feature_name: "RSVP Online",
    feature_description:
      "Menyediakan fitur RSVP online yang memudahkan tamu untuk mengkonfirmasi kehadiran mereka secara digital melalui formulir atau tautan RSVP.",
  },
  {
    icon: Map,
    feature_name: "Integrasi Peta Lokasi",
    feature_description:
      "Memasukkan peta lokasi acara pernikahan secara digital, sehingga tamu dapat dengan mudah menemukan lokasi pernikahan anda.",
  },
];

export const TESTIMONIAL_FAKER: Array<ITestimonial> = [
  {
    tesimonial_image: "/images/dummy/gallery-11.jpg",
    icon_quotation: QuoteUp,
    testimonial_name: "Sari & Dion",
    testimonial:
      "Desainnya simpel tapi aesthethik, pngerjaan jugaa cepet. Kalo kita kurang ngerti juga di kasih tau cara caranya",
  },
  {
    tesimonial_image: "/images/dummy/gallery-1.jpg",
    icon_quotation: QuoteUp,
    testimonial_name: "Linda & Arya",
    testimonial:
      "Undangan digital kami sangat indah dan praktis! Kami bisa mengirimnya dengan mudah dan cepat kepada semua teman dan keluarga. Desainnya juga modern dan elegan.",
  },
  {
    tesimonial_image: "/images/dummy/gallery-12.jpg",
    icon_quotation: QuoteUp,
    testimonial_name: "Rina & Budi",
    testimonial:
      "Menggunakan undangan digital sangat memudahkan kami. Tidak perlu repot dengan percetakan dan pengiriman, cukup beberapa klik dan semuanya beres!",
  },
  {
    tesimonial_image: "/images/dummy/gallery-4.jpg",
    icon_quotation: QuoteUp,
    testimonial_name: "Dewi & Andi",
    testimonial:
      "Kami sangat puas dengan undangan digital kami. Bisa menambahkan video pesan singkat untuk tamu adalah fitur yang luar biasa!",
  },
  {
    tesimonial_image: "/images/dummy/gallery-10.jpg",
    icon_quotation: QuoteUp,
    testimonial_name: "Maya & Fajar",
    testimonial:
      "Undangan digital ini sangat eco-friendly. Kami merasa lebih baik karena mengurangi penggunaan kertas dan membantu lingkungan.",
  },
];

export const PORTOFOLIO_FAKER: Array<IPortofolio> = [
  {
    background_image: "/images/dummy/gallery-10.jpg",
    bride_icon: "/images/dummy/gallery-7.jpg",
    groom_icon: "/images/dummy/gallery-8.jpg",
    name: "Ado & Ayu",
    date: new Date("2024-10-23T10:00:00+07:00"),
    theme: "Dark Boho",
  },
  {
    background_image: "/images/dummy/gallery-11.jpg",
    bride_icon: "/images/dummy/gallery-7.jpg",
    groom_icon: "/images/dummy/gallery-8.jpg",
    name: "Ado & Ayu",
    date: new Date("2024-10-23T10:00:00+07:00"),
    theme: "Simple Clean",
  },
  {
    background_image: "/images/dummy/gallery-12.jpg",
    bride_icon: "/images/dummy/gallery-7.jpg",
    groom_icon: "/images/dummy/gallery-8.jpg",
    name: "Ado & Ayu",
    date: new Date("2024-10-23T10:00:00+07:00"),
    theme: "Olive Flower Ornament",
  },
  {
    background_image: "/images/dummy/gallery-13.jpg",
    bride_icon: "/images/dummy/gallery-7.jpg",
    groom_icon: "/images/dummy/gallery-8.jpg",
    name: "Ado & Ayu",
    date: new Date("2024-10-23T10:00:00+07:00"),
    theme: "Minimmalist Style",
  },
  {
    background_image: "/images/dummy/gallery-3.jpg",
    bride_icon: "/images/dummy/gallery-7.jpg",
    groom_icon: "/images/dummy/gallery-8.jpg",
    name: "Ado & Ayu",
    date: new Date("2024-10-23T10:00:00+07:00"),
    theme: "Elegant Leaves",
  },
  {
    background_image: "/images/dummy/gallery-5.jpg",
    bride_icon: "/images/dummy/gallery-7.jpg",
    groom_icon: "/images/dummy/gallery-8.jpg",
    name: "Ado & Ayu",
    date: new Date("2024-10-23T10:00:00+07:00"),
    theme: "Calm Blue",
  },
];

export const ABOUT_FAKER: Array<IAbout> = [
  {
    thumbnail: "/images/state/about-state-1.png",
    title: "100% Youth",
    description:
      "Momentus 100% terdiri dari anak muda yang mempunyai passion di dunia kreatif industri, baik wedding, design dan web development, sehingga kami senantiasa memberikan ide-ide baru untuk kita.",
  },
  {
    thumbnail: "/images/state/about-state-2.png",
    title: "Privacy First",
    description:
      "Momentus memberikan keleluasaan untuk kamu mengisi informasi undangan online yang akan dibagikan secara mandiri. Seperti tamu undangan, waktu, alamat, foto, video dan quote. Sehingga membuat privasimu dapat terjaga.",
  },
  {
    thumbnail: "/images/state/about-state-3.png",
    title: "Technology Innovation",
    description:
      "Momentus sangat fokus pada teknologi untuk memastikan undangan dapat di akses pada mobile dan desktop dengan cepat dan sesuai harapan.",
  },
];
