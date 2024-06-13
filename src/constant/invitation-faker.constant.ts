import {
  TBackgroundMusic,
  TInvitation,
  TInvitationEvent,
  TInvitationGallery,
  TInvitationPrivate,
  TInvitationStory,
  TInvitationWish,
  TTheme,
} from '@/types/invitation.type';

export const INVITATION_STORIES_FAKER: Array<TInvitationStory> = [
  {
    id: 1,
    title: '2019',
    description: 'First time we meet.',
    image: '/images/traditional-java/story-image-1.jpg',
  },
  {
    id: 2,
    title: '2021',
    description: 'We decided to get engaged.',
    image: '/images/traditional-java/story-image-2.jpg',
  },
  {
    id: 3,
    title: '2022',
    description: 'Finally, we are husband and wife.',
    image: '/images/traditional-java/story-image-3.jpg',
  },
  {
    id: 4,
    title: 'Finally',
    description:
      'Akhirnya kita bersama didalam pernikahan yang sakral, semoga tuhan meridoi pernikahan kita.',
    image: '/images/traditional-java/story-image-4.jpg',
  },
];

export const INVITATION_GALLERIES_FAKER: Array<TInvitationGallery> = [
  {
    id: 1,
    url: '/images/dummy/dummy-7.jpeg',
  },
  {
    id: 2,
    url: '/images/dummy/dummy-10.jpeg',
  },
  {
    id: 3,
    url: '/images/dummy/dummy-9.jpeg',
  },
  {
    id: 4,
    url: '/images/dummy/dummy-10.jpeg',
  },
  {
    id: 5,
    url: '/images/dummy/dummy-12.jpeg',
  },
  {
    id: 6,
    url: '/images/dummy/dummy-1.jpeg',
  },
  {
    id: 7,
    url: '/images/dummy/dummy-13.jpeg',
  },
  {
    id: 8,
    url: '/images/dummy/dummy-15.jpeg',
  },
  {
    id: 9,
    url: '/images/dummy/dummy-17.jpeg',
  },
  {
    id: 10,
    url: '/images/dummy/dummy-12.jpeg',
  },
];

export const INVITATION_WISHES_FAKER: TInvitationWish[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    location: 'Jl. Mawar No. 10, Jakarta',
    message:
      'Selamat menempuh hidup baru! Semoga pernikahan kalian selalu diberkahi dengan cinta dan kebahagiaan.',
    created_at: '2024-06-01T10:00:00Z',
  },
  {
    id: 2,
    name: 'Siti Aminah',
    location: 'Jl. Melati No. 15, Bandung',
    message:
      'Semoga pernikahan kalian selalu diberkahi dan penuh dengan kebahagiaan. Selamat berbahagia!',
    created_at: '2024-06-01T11:00:00Z',
  },
  {
    id: 3,
    name: 'Ahmad Fauzi',
    location: 'Jl. Anggrek No. 20, Surabaya',
    message:
      'Doa terbaik untuk kalian berdua. Semoga cinta dan kebahagiaan selalu menyertai pernikahan kalian.',
    created_at: '2024-06-02T09:00:00Z',
  },
  {
    id: 4,
    name: 'Lina Setiawati',
    location: 'Jl. Kenanga No. 25, Yogyakarta',
    message:
      'Selamat menempuh hidup baru! Semoga cinta kalian selalu tumbuh dan berkembang seiring waktu.',
    created_at: '2024-06-02T10:30:00Z',
  },
  {
    id: 5,
    name: 'Dewi Kusuma',
    location: 'Jl. Bougenville No. 30, Semarang',
    message:
      'Semoga pernikahan kalian diberkahi dengan kebahagiaan, kesetiaan, dan cinta abadi.',
    created_at: '2024-06-03T08:45:00Z',
  },
  {
    id: 6,
    name: 'Rizki Hidayat',
    location: 'Jl. Flamboyan No. 35, Medan',
    message:
      'Selamat berbahagia! Semoga cinta dan kebahagiaan selalu menyertai perjalanan hidup kalian.',
    created_at: '2024-06-03T09:15:00Z',
  },
  {
    id: 7,
    name: 'Wulan Anggraini',
    location: 'Jl. Dahlia No. 40, Makassar',
    message:
      'Doa terbaik untuk kalian berdua. Semoga cinta dan kebahagiaan selalu menyertai pernikahan kalian.',
    created_at: '2024-06-04T07:00:00Z',
  },
  {
    id: 8,
    name: 'Dani Setiawan',
    location: 'Jl. Teratai No. 45, Palembang',
    message:
      'Selamat menempuh hidup baru! Semoga cinta kalian selalu tumbuh dan berkembang seiring waktu.',
    created_at: '2024-06-04T07:30:00Z',
  },
  {
    id: 9,
    name: 'Maya Putri',
    location: 'Jl. Kamboja No. 50, Denpasar',
    message:
      'Semoga pernikahan kalian selalu diberkahi dan penuh dengan kebahagiaan. Selamat berbahagia!',
    created_at: '2024-06-05T06:45:00Z',
  },
  {
    id: 10,
    name: 'Andi Pratama',
    location: 'Jl. Seroja No. 55, Balikpapan',
    message:
      'Selamat menempuh hidup baru! Semoga pernikahan kalian selalu diberkahi dengan cinta dan kebahagiaan.',
    created_at: '2024-06-05T07:15:00Z',
  },
];

export const INVITATION_EVENTS_FAKER: Array<TInvitationEvent> = [
  {
    id: 1,
    event_label: 'Akad',
    event_start: new Date('2024-10-23T10:00:00+07:00'),
    event_end: new Date('2024-10-23T10:00:00+07:00'),
    event_address:
      'Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia',
    event_maps_url: '',
    event_venue: 'Masjid Al-Quran',
    event_video_url: '',
  },
  {
    id: 2,
    event_label: 'Resepsi',
    event_start: new Date('2024-10-23T10:00:00+07:00'),
    event_end: new Date('2024-10-23T10:00:00+07:00'),
    event_address: 'DoubleTree by Hilton Jakarta - Diponegoro Jakarta Pusat',
    event_maps_url: '',
    event_venue: 'GOR Kertajaya',
    event_video_url: '',
  },
];

export const INVITATION_PRIVATE_FAKER: Array<TInvitationPrivate> = [
  {
    person_name: 'Adelia Wesaya',
    person_instagram: 'adelia_wesaya',
    person_child_sequence: 'Kedua',
    person_father_name: 'Dr. Andreas Sanusi S.E',
    person_mother_name: 'Dewi Yuliantara',
    id: 1,
    person_image: {
      id: 1,
      url: '/images/traditional-java/bride-image.jpeg',
    },
  },
  {
    id: 2,
    person_name: 'Timothy Pardede S.Kom',
    person_instagram: 'timothy_pardd',
    person_child_sequence: 'Sulung',
    person_father_name: 'Bobby Pardede',
    person_mother_name: 'Jessica Putri',
    person_image: {
      id: 1,
      url: '/images/traditional-java/bride-image.jpeg',
    },
  },
];

export const INVITATION_FAKER: Array<TInvitation> = [
  {
    id: 1,
    invitation_category: {
      id: 1,
      category_name: 'wedding',
    },
    invitation_status: 'active',
    slug: 'sekar-hilman',
    theme: {
      id: 1,
      cover: '/images/theme/simple-clean.jpeg',
      name: 'Black and White',
      code: 'black-and-white',
      plan: {
        id: 1,
        name: 'Fair',
      },
    },
    user_id: 1,
    invitation_style: {
      groom_first: true,
      hide_logo: false,
      gallery_style: 'slideshow',
    },
    invitation_private: INVITATION_PRIVATE_FAKER,
    quote:
      'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ Artinya: “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” (QS. Ar-Rum: 21)',
    invitation_events: INVITATION_EVENTS_FAKER,
    invitation_galleries: INVITATION_GALLERIES_FAKER,
    plan: {
      id: 1,
      name: 'Rarely',
    },
    plan_expired_at: '2024-05-31T10:00:00+07:00',
    invitation_stories: INVITATION_STORIES_FAKER,
    invitation_wishes: INVITATION_WISHES_FAKER,
  },
];
