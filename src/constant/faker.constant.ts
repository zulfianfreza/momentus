import { IFaq, IFeature } from "@/types/common.type";
import { TInvitation, TInvitationStyle } from "@/types/invitation.type";
import { Designtools } from "iconsax-react";

export const THEME_FAKER = [
  {
    thumbnail: "/images/theme/auto-scrolled-cinematic.jpg",
    name: "Auto Scrolled Cinematic",
    slug: "auto-scrolled-cinematic",
    plan: "stardust",
  },
  {
    thumbnail: "/images/theme/dark-boho.jpg",
    name: "Dark Boho",
    slug: "dark-boho",
    plan: "stardust",
  },
  {
    thumbnail: "/images/theme/snowfall-minimalist.jpeg",
    name: "Snowfall Minimalist",
    slug: "snowfall-minimalist",
    plan: "stardust",
  },
  {
    thumbnail: "/images/theme/romantic-delight.png",
    name: "Romantic Delight",
    slug: "romantic-delight",
    plan: "stardust",
  },
  {
    thumbnail: "/images/theme/calm-blue.jpeg",
    name: "Calm Blue",
    slug: "calm-blue",
    plan: "moonbeam",
  },
  {
    thumbnail: "/images/theme/elegant-leaves.jpeg",
    name: "Elegant Leaves",
    slug: "elegant-leaves",
    plan: "moonbeam",
  },
  {
    thumbnail: "/images/theme/minimalist-style.jpeg",
    name: "Minimalist Style",
    slug: "minimalist-style",
    plan: "moonbeam",
  },
  {
    thumbnail: "/images/theme/olive-flower-ornament.jpg",
    name: "Olive Flower Ornament",
    slug: "olive-flower-ornament",
    plan: "emberglow",
  },
  {
    thumbnail: "/images/theme/simple-minimalist-deep-purple.jpg",
    name: "Simple Minimalist Deep Purple",
    slug: "simple-minimalist-deep-purple",
    plan: "emberglow",
  },
  {
    thumbnail: "/images/theme/simple-clean.jpeg",
    name: "Simple Clean",
    slug: "simple-clean",
    plan: "moonbeam",
  },
  {
    thumbnail: "/images/theme/traditional-java.jpg",
    slug: "traditional-java",
    name: "Traditional Java",
    plan: "moonbeam",
  },
];

export const INVITATION_STYLE_FAKER: TInvitationStyle = {
  theme: "simple-clean",
  groom_first: true,
  hide_logo: false,
};

export const INVITATION_FAKER: TInvitation = {
  bride_name: "Adelia Wesaya",
  bride_instagram: "adelia_wesaya",
  bride_child_sequence: "Kedua",
  bride_father_name: "Dr. Andreas Sanusi S.E",
  bride_mother_name: "Dewi Yuliantara",
  groom_name: "Timothy Pardede S.Kom",
  groom_instagram: "timothy_pardd",
  groom_child_sequence: "Sulung",
  groom_father_name: "Bobby Pardede",
  groom_mother_name: "Jessica Putri",
  wedding_date: new Date("2024-10-23T10:00:00+07:00"),
  wedding_location:
    "Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia",
  wedding_reception_date: new Date("2024-10-26T10:00:00+07:00"),
  wedding_reception_location:
    "DoubleTree by Hilton Jakarta - Diponegoro Jakarta Pusat",
};

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
    feature_name: "Desain Kustom dan Personal",
    feature_description:
      "Tersedia berbagai template yang dapat disesuaikan dengan mudah, mulai dari tema klasik hingga modern.",
  },
  {
    icon: Designtools,
    feature_name: "Desain Kustom dan Personal",
    feature_description:
      "Tersedia berbagai template yang dapat disesuaikan dengan mudah, mulai dari tema klasik hingga modern.",
  },
  {
    icon: Designtools,
    feature_name: "Desain Kustom dan Personal",
    feature_description:
      "Tersedia berbagai template yang dapat disesuaikan dengan mudah, mulai dari tema klasik hingga modern.",
  },
  {
    icon: Designtools,
    feature_name: "Desain Kustom dan Personal",
    feature_description:
      "Tersedia berbagai template yang dapat disesuaikan dengan mudah, mulai dari tema klasik hingga modern.",
  },
  {
    icon: Designtools,
    feature_name: "Desain Kustom dan Personal",
    feature_description:
      "Tersedia berbagai template yang dapat disesuaikan dengan mudah, mulai dari tema klasik hingga modern.",
  },
  {
    icon: Designtools,
    feature_name: "Desain Kustom dan Personal",
    feature_description:
      "Tersedia berbagai template yang dapat disesuaikan dengan mudah, mulai dari tema klasik hingga modern.",
  },
  {
    icon: Designtools,
    feature_name: "Desain Kustom dan Personal",
    feature_description:
      "Tersedia berbagai template yang dapat disesuaikan dengan mudah, mulai dari tema klasik hingga modern.",
  },
  {
    icon: Designtools,
    feature_name: "Desain Kustom dan Personal",
    feature_description:
      "Tersedia berbagai template yang dapat disesuaikan dengan mudah, mulai dari tema klasik hingga modern.",
  },
];
