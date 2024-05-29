'use client';

import BaseImageLightbox from '@/components/common/base-image-lightbox';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  comfortaa,
  inter,
  italianno,
  roboto,
  rubik,
} from '@/constant/font.constant';
import { useCountdown } from '@/hooks/use-count-down';
import useScrollspy from '@/hooks/use-scroll-spy';
import { cn } from '@/lib/utils';
import { getFirstName, getInitials } from '@/utils/string';
import {
  Calendar,
  CalendarAdd,
  Clock,
  Gallery,
  Gift,
  Location,
  Lovely,
  Magicpen,
  Map1,
  Video,
} from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { RiDiscFill } from 'react-icons/ri';
import { SiInstagram, SiWhatsapp, SiYoutube } from 'react-icons/si';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

export default function DemoPage() {
  // state
  const [paused, setPaused] = useState(true);

  // navigation
  const navigations = [
    {
      label: 'Couple',
      target: 'couple',
      icon: Lovely,
    },
    {
      label: 'Gallery',
      target: 'gallery',
      icon: Gallery,
    },
    {
      label: 'Countdown',
      target: 'countdown',
      icon: Calendar,
    },
    {
      label: 'Event',
      target: 'event',
      icon: Map1,
    },
    {
      label: 'Wishes',
      target: 'wishes',
      icon: Magicpen,
    },
  ];

  // faker
  const [invitation] = useState({
    bride_name: 'Cantika Sukaseuri',
    bride_instagram: 'adelia_wesaya',
    bride_child_sequence: 'Kedua',
    bride_father_name: 'Dr. Andreas Sanusi S.E',
    bride_mother_name: 'Dewi Yuliantara',
    groom_name: 'Aji Gunawan',
    groom_instagram: 'timothy_pardd',
    groom_child_sequence: 'Sulung',
    groom_father_name: 'Bobby Pardede',
    groom_mother_name: 'Jessica Putri',
    wedding_date: '2024-10-23T10:00:00+07:00',
    wedding_location:
      'Plataran Menteng, Jalan HOS. Cokroaminoto, RT.6/RW.4, Gondangdia, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia',
    wedding_reception_date: '2024-10-26T10:00:00+07:00',
    wedding_reception_location:
      'DoubleTree by Hilton Jakarta - Diponegoro Jakarta Pusat',
  });

  const [invitationStyle] = useState({
    invitation_theme: 'traditional-java',
    groom_first: true,
  });

  const [invitationGallery] = useState([
    {
      id: 1,
      url: '/images/dummy/gallery-1.jpg',
    },
    {
      id: 2,
      url: '/images/dummy/gallery-2.jpg',
    },
    {
      id: 3,
      url: '/images/dummy/gallery-3.jpg',
    },
    {
      id: 4,
      url: '/images/dummy/gallery-4.jpg',
    },
    {
      id: 5,
      url: '/images/dummy/gallery-5.jpg',
    },
    {
      id: 6,
      url: '/images/dummy/gallery-6.jpg',
    },
    {
      id: 7,
      url: '/images/dummy/gallery-7.jpg',
    },
    {
      id: 8,
      url: '/images/dummy/gallery-8.jpg',
    },
    {
      id: 9,
      url: '/images/dummy/gallery-9.jpg',
    },
  ]);

  const [invitationStories] = useState([
    {
      title: '2019',
      description: 'First time we meet.',
      image: '/images/traditional-java/story-image-1.jpg',
    },
    {
      title: '2021',
      description: 'We decided to get engaged.',
      image: '/images/traditional-java/story-image-2.jpg',
    },
    {
      title: '2022',
      description: 'Finally, we are husband and wife.',
      image: '/images/traditional-java/story-image-3.jpg',
    },
    {
      title: 'Finally',
      description:
        'Akhirnya kita bersama didalam pernikahan yang sakral, semoga tuhan meridoi pernikahan kita.',
      image: '/images/traditional-java/story-image-4.jpg',
    },
  ]);

  const [invitationWishes] = useState([
    {
      id: 1,
      name: 'Dee',
      location: 'Bogor',
      message: 'Beautiful 💕',
    },
    {
      id: 2,
      name: 'Momentus',
      location: 'Bekasi',
      message:
        'Beatiful design matters. happy for all of you that want going to married',
    },
  ]);

  const activeId = useScrollspy(
    navigations.map((item) => item.target),
    5,
  );

  // handle scroll to element
  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.stopPropagation();
      e.preventDefault();

      const container = document.querySelector('#invitation-container');
      const el = document.getElementById(id);
      if (container) {
        if (el) {
          container.scrollTo({
            top: el.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    },
    [],
  );

  const [photoActiveIndex, setPhotoActiveIndex] = React.useState(-1);
  const photos = useMemo<SlideImage[]>(
    () => invitationGallery.map((item) => ({ src: item.url })),
    [invitationGallery],
  );

  const [days, hours, minutes, seconds] = useCountdown(
    new Date('2024-12-02T08:00:00+07:00'),
  );

  const [showCover, setShowCover] = useState<boolean>(false);
  const audio = useMemo(
    () => new Audio('/audio/luther-vandross-endless-love.mp3'),
    [],
  );

  const toggleAudio = useCallback(() => {
    if (paused) {
      setPaused(false);
      audio.play();
    } else {
      setPaused(true);
      audio.pause();
    }
  }, [paused, audio]);

  return (
    <>
      <div
        className={cn(
          ' fixed z-[999] h-screen w-full bg-[url(/images/dummy/gallery-1.jpg)] bg-cover bg-center transition-all duration-1000',
          { '-translate-y-full opacity-0': showCover },
        )}
      >
        <div className=" flex h-full w-full items-center justify-center bg-black/50 p-20">
          <div className=" flex h-full w-full flex-col">
            <div className="flex flex-col items-center text-white">
              <p className=" text-sm">The Wedding of</p>
              <div className=" text-center">
                <h1
                  className={cn(
                    'flex items-center text-[56px]',
                    italianno.className,
                  )}
                >
                  <span>{getFirstName(invitation.bride_name)}</span>
                  <span>&nbsp;&&nbsp;</span>
                  <span>{getFirstName(invitation.groom_name)}</span>
                </h1>
                <p className=" text-sm">12 December 2024</p>
              </div>
            </div>
            <div className=" mt-auto flex flex-col items-center gap-6 text-center text-white">
              <div className="">
                <p className=" text-xs">Kepada:</p>
                <p className=" text-sm font-medium">La Gandras</p>
              </div>
              <p className=" text-sm">
                Kami berharap anda menjadi bagian dari hari istimewa kami
              </p>
              <Button
                className=" h-8 rounded-full bg-black/90 hover:bg-black/80"
                onClick={() => {
                  toggleAudio();
                  setShowCover((prev) => !prev);
                }}
              >
                Buka Undangan
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          ' fixed flex h-screen w-full',
          inter.className,
          'text-neutral-950',
        )}
      >
        <div className=" hidden h-screen flex-1 bg-[url(/images/dummy/gallery-2.jpg)] bg-cover bg-center lg:block">
          <div className=" flex h-full w-full items-center justify-center bg-black/50">
            <h1
              className={cn(
                italianno.className,
                'text-center text-[56px] text-white',
              )}
            >
              {getFirstName(invitation.bride_name)} &{' '}
              {getFirstName(invitation.groom_name)}
            </h1>
          </div>
        </div>
        <div className=" relative h-screen w-full lg:w-[536px]">
          <div
            onClick={toggleAudio}
            className={cn(
              ' absolute bottom-24 right-4 z-[9] aspect-square animate-spin cursor-pointer rounded-full bg-black p-3 min-[512px]:right-[calc(50%-250px)]',
              { paused: paused },
            )}
            style={{ animationDuration: '10s' }}
          >
            <audio src="/audio/wedding-1.mp3" />
            <RiDiscFill
              className=" text-white"
              size={20}
            />
          </div>
          <div className=" absolute bottom-4 left-1/2 z-[9] flex  w-fit -translate-x-1/2 items-center gap-2 rounded-full border bg-[#fff] px-2 py-2 shadow-md">
            {navigations.map((navigation, i) => (
              <Link
                href={`#${navigation.target}`}
                onClick={(e) => handleScrollTo(e, navigation.target)}
                className={cn(
                  'flex h-8 items-center gap-2 rounded-full px-2.5 text-[#000] transition-all',
                  {
                    'bg-[#000] text-white': activeId === navigation.target,
                  },
                )}
                key={i}
              >
                <navigation.icon size={16} />
                {activeId === navigation.target && (
                  <p className=" text-xs">{navigation.label}</p>
                )}
              </Link>
            ))}
          </div>
          <div className=" absolute z-[1] block h-screen w-full bg-[url(/images/dummy/gallery-2.jpg)] bg-cover bg-center blur-sm brightness-[.25] lg:hidden" />
          <div
            className=" absolute z-[2] h-screen w-full overflow-y-scroll"
            id="invitation-container"
          >
            <div className=" relative mx-auto h-screen w-full max-w-[536px]">
              <div className=" z-[2] w-full bg-[#d8d8d8]">
                <section
                  id="cover"
                  className=" h-screen min-h-screen w-full bg-[url(/images/dummy/gallery-1.jpg)] bg-cover bg-center bg-no-repeat text-white"
                >
                  <div className=" h-full w-full bg-black/60 px-16 py-20">
                    <div className=" flex h-full w-full flex-col gap-20">
                      <div className="flex flex-1 flex-col items-center">
                        <p className=" text-sm">The Wedding of</p>
                        <div className=" text-center">
                          <h1
                            className={cn(
                              'flex items-center text-[56px]',
                              italianno.className,
                            )}
                          >
                            <span>{getFirstName(invitation.bride_name)}</span>
                            <span>&nbsp;&&nbsp;</span>
                            <span>{getFirstName(invitation.groom_name)}</span>
                          </h1>
                          <p className=" text-sm">12 December 2024</p>
                        </div>
                      </div>

                      <div className=" mx-auto flex flex-col items-center gap-2">
                        <div className=" relative flex h-9 w-6 items-center justify-center rounded-full border-2 border-white">
                          <div className=" -mt-2 h-2.5 w-1 animate-bounce rounded-full bg-white" />
                        </div>
                        <p className=" text-xs font-medium text-white">
                          scroll
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  id="quote"
                  className=" w-full bg-neutral-950 bg-cover bg-center p-6 text-white"
                >
                  <div className=" h-full w-full border-2 border-white p-8">
                    <div className="mx-auto flex max-w-md flex-col items-center text-center">
                      <div className="">
                        <p className={cn(rubik.className)}>
                          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ
                          أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ
                          مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ
                          لِقَوْمٍ يَتَفَكَّرُونَ{' '}
                        </p>
                        <p>
                          Artinya: “Dan di antara tanda-tanda kekuasaan-Nya
                          ialah Dia menciptakan untukmu isteri-isteri dari
                          jenismu sendiri, supaya kamu cenderung dan merasa
                          tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
                          kasih dan sayang. Sesungguhnya pada yang demikian itu
                          benar-benar terdapat tanda-tanda bagi kaum yang
                          berfikir.” (QS. Ar-Rum: 21)
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="couple">
                  <div className=" bg-white p-6">
                    <h1 className={cn('text-[56px]', italianno.className)}>
                      The Bride
                    </h1>
                    <div className=" grid w-full grid-cols-2 gap-4 bg-[#fff]">
                      <div className=" relative aspect-[210/235] w-full">
                        <Image
                          src="/images/traditional-java/bride-image.jpeg"
                          fill
                          alt=""
                          className=" object-cover object-center"
                        />
                      </div>
                      <div className="">
                        <h1 className={cn(' text-5xl', italianno.className)}>
                          {invitation.bride_name}
                        </h1>

                        <div className="flex items-center gap-2">
                          <SiInstagram size={12} />
                          <p className=" text-sm">
                            {invitation.bride_instagram}
                          </p>
                        </div>
                        <div className=" mt-4 text-sm">
                          <p>Putri {invitation.bride_child_sequence} dari</p>
                          <p>Bapak {invitation.bride_father_name}</p>
                          <p>& Ibu {invitation.bride_mother_name}</p>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-12">
                      <h1
                        className={cn(
                          'text-right text-[56px]',
                          italianno.className,
                        )}
                      >
                        The Groom
                      </h1>
                      <div className=" grid grid-cols-2 gap-4">
                        <div className=" ">
                          <h1 className={cn(' text-5xl', italianno.className)}>
                            {invitation.groom_name}
                          </h1>

                          <div className="flex items-center gap-2">
                            <SiInstagram size={12} />
                            <p className=" text-sm">
                              {invitation.groom_instagram}
                            </p>
                          </div>
                          <div className=" mt-4 text-sm">
                            <p>Putri {invitation.groom_child_sequence} dari</p>
                            <p>Bapak {invitation.groom_father_name}</p>
                            <p>& Ibu {invitation.groom_mother_name}</p>
                          </div>
                        </div>
                        <div className=" relative aspect-[210/235] w-full">
                          <Image
                            src="/images/traditional-java/groom-image.jpeg"
                            fill
                            alt=""
                            className=" object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* <section
                  id="story"
                  className=" w-full bg-white bg-[url(/images/simple-clean/bg-1.png)] bg-contain"
                >
                  <div className=" flex w-full flex-col px-16 py-20">
                    <h1
                      className={cn(
                        ' text-center text-3xl',
                        comfortaa.className,
                      )}
                    >
                      Our Love Story
                    </h1>
                    <div className="mt-16 flex flex-col gap-8">
                      {invitationStories.map((story, i) => (
                        <div
                          key={i}
                          className=" w-full rounded-[120px] bg-[url(/images/traditional-java/quote-background.jpg)] bg-cover bg-center p-6"
                        >
                          <div className=" relative aspect-square w-full overflow-hidden rounded-t-[96px]">
                            <Image
                              src={story.image}
                              fill
                              alt=""
                              className=" object-cover object-center"
                            />
                          </div>
                          <div className=" space-y-4 p-8 text-center">
                            <h1
                              className={cn(' text-4xl', comfortaa.className)}
                            >
                              {story.title}
                            </h1>
                            <p className="">{story.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section> */}
                <section
                  id="gallery"
                  className=" w-full bg-white bg-contain bg-center"
                >
                  <div className=" flex w-full flex-col px-8 py-20">
                    <div className="flex flex-col text-center">
                      <h1
                        className={cn(
                          ' text-[56px] leading-relaxed',
                          italianno.className,
                        )}
                      >
                        Moment Yang Berharga
                      </h1>
                      <p className=" text-center text-sm">
                        &apos;Menciptakan kenangan adalah hadiah yang tak
                        ternilai harganya. Kenangan akan bertahan seumur hidup;
                        benda-benda hanya dalam waktu singkat.&apos;
                      </p>
                    </div>

                    <div className=" mt-8 grid grid-cols-3 gap-2">
                      {invitationGallery.map((image, i) => (
                        <div
                          key={image.id}
                          className={cn(
                            ' relative aspect-square h-full w-full cursor-pointer',
                            {
                              'row-span-2 aspect-[1/2]': i % 3 === 0,
                            },
                          )}
                        >
                          <Image
                            src={image.url}
                            alt=""
                            fill
                            className=" object-cover object-center"
                            onClick={() => {
                              setPhotoActiveIndex(i);
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                {/* <section
                  id="date"
                  className=" w-full bg-[#525252] "
                >
                  <div className=" h-fit w-full ">
                    <div className=" flex w-full flex-col items-center px-8 py-20">
                      <div className=" w-full bg-white p-10 py-16">
                        <h1
                          className={cn(
                            ' text-center text-3xl',
                            comfortaa.className,
                          )}
                        >
                          Save The Date
                        </h1>
                        <div className=" relative mt-16">
                          <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center text-[#3b1f0e]">
                            <p className=" text-sm">Sabtu, 19 Oktober 2024</p>
                            <div className="flex items-center justify-center gap-4">
                              <div className=" text-2xl">
                                <p>10</p>
                                <p className=" text-sm">Hari</p>
                              </div>
                              <div className="text-2xl">
                                <p>12</p>
                                <p className=" text-sm">Jam</p>
                              </div>
                              <div className="text-2xl">
                                <p>31</p>
                                <p className=" text-sm">Menit</p>
                              </div>
                              <div className="text-2xl">
                                <p>24</p>
                                <p className=" text-sm">Detil</p>
                              </div>
                            </div>
                            <div className=" mt-8">
                              <Button
                                size="lg"
                                className="rounded-none bg-[#000] font-normal"
                              >
                                <CalendarAdd size={16} />
                                Tambah ke Kalendar
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section> */}
                <section id="countdown">
                  <div className=" min-h-screen w-full bg-[url(/images/dummy/gallery-3.jpg)] bg-cover bg-center bg-no-repeat">
                    <div className=" flex min-h-screen w-full items-end justify-center bg-black/50 px-8 py-24">
                      <div className="flex flex-col text-center text-white">
                        <p className=" text-sm">The Wedding of</p>
                        <h1 className={cn(' text-[56px]', italianno.className)}>
                          Cantika & Aji
                        </h1>
                        <p className=" text-sm">12 Desember 2024</p>
                        <div className="mt-4 flex justify-center gap-2">
                          <div className="flex h-20 w-16 flex-col items-center justify-center border border-white">
                            <p className=" text-lg font-medium">{days}</p>
                            <p className=" text-sm">Hari</p>
                          </div>
                          <div className="flex h-20 w-16 flex-col items-center justify-center border border-white">
                            <p className=" text-lg font-medium">{hours}</p>
                            <p className=" text-sm">Jam</p>
                          </div>
                          <div className="flex h-20 w-16 flex-col items-center justify-center border border-white">
                            <p className=" text-lg font-medium">{minutes}</p>
                            <p className=" text-sm">Menit</p>
                          </div>
                          <div className="flex h-20 w-16 flex-col items-center justify-center border border-white">
                            <p className=" text-lg font-medium">{seconds}</p>
                            <p className=" text-sm">Detik</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="event">
                  <div className=" w-full bg-white p-12">
                    <p className=" text-center text-sm">
                      Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala,
                      kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara
                      pernikahan kami yang akan dilaksanakan pada :
                    </p>

                    <div className="mt-6 flex flex-col gap-8">
                      <div className=" flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-neutral-100 p-6 text-center text-sm shadow-lg">
                        <h1 className={cn('text-3xl', italianno.className)}>
                          Akad Nikah
                        </h1>
                        <div className="">
                          <p className="">Minggu, 12 Desember 2024</p>
                          <p className="">Pukul 08:00 WIB</p>
                        </div>
                        <div className="">
                          <p className="">Tempat: Lapangan Voli RW 10</p>
                          <p className="">Perumahan Sukamaju</p>
                        </div>
                      </div>
                      <div className=" flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-neutral-100 p-6 text-center text-sm shadow-lg">
                        <h1 className={cn('text-3xl', italianno.className)}>
                          Resepsi
                        </h1>
                        <div className="">
                          <p className="">Minggu, 12 Desember 2024</p>
                          <p className="">Pukul 11:00 s/d selesai</p>
                        </div>
                        <div className="">
                          <p className="">Tempat: Lapangan Voli RW 10</p>
                          <p className="">Perumahan Sukamaju</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* <section id="extra">
                  <div className=" flex w-full flex-col items-center gap-6 bg-white bg-[url(/images/simple-clean/bg-1.png)] bg-cover bg-center p-8 py-16 shadow-lg">
                    <h1 className={cn(' text-3xl', comfortaa.className)}>
                      Live Streaming
                    </h1>
                    <p className="">Silahkan untuk join live streaming.</p>
                    <Button className=" rounded-none bg-[#000]">
                      <Video size={16} />
                      Live Streaming
                    </Button>
                  </div>
                  <div className=" flex w-full flex-col items-center gap-6 bg-[#d8d8d8] p-8 py-16 shadow-lg">
                    <h1 className={cn(' text-3xl', comfortaa.className)}>
                      Kirim Hadiah
                    </h1>
                    <p className="">
                      Catatan kado atau kata kata terimakasih untuk yang
                      memberikan hadiah.
                    </p>
                    <Button className=" rounded-none bg-[#000]">
                      <Gift size={16} />
                      Kirim Hadiah
                    </Button>
                  </div>
                </section> */}

                <section id="wishes">
                  <div className=" w-full bg-neutral-950 p-8">
                    <h1
                      className={cn(
                        'text-center text-[56px] text-white',
                        italianno.className,
                      )}
                    >
                      Wedding Wishes
                    </h1>
                    <div className=" mt-8 flex flex-col gap-4">
                      <Input
                        className=" rounded-none"
                        placeholder="Nama Lengkap"
                      />
                      <Input
                        className=" rounded-none"
                        placeholder="Alamat"
                      />
                      <Textarea
                        className=" rounded-none"
                        placeholder="Ucapan"
                      />
                      <Button
                        className=" rounded-none border-2 border-white bg-black text-white hover:bg-black/90"
                        size="lg"
                      >
                        Kirim
                      </Button>
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                      <div className=" w-full border-b border-white py-2">
                        <h1 className=" text-white">Apdul</h1>
                        <p className=" text-sm text-white">di Ciburuy</p>

                        <p className=" mt-4 text-sm text-white">
                          “Semoga lancar sampai hari H dan menjadi keluarga yang
                          samawa, aamiin..”
                        </p>
                      </div>
                      <div className=" w-full border-b border-white py-2">
                        <h1 className=" text-white">Dilan</h1>
                        <p className=" text-sm text-white">di Bandung</p>

                        <p className=" mt-4 text-sm text-white">
                          “Semoga lancar sampai hari H dan menjadi keluarga yang
                          samawa, aamiin..”
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <div className=" flex w-full flex-col items-center justify-center gap-2 bg-neutral-950 pb-20 pt-6 text-white">
                  <p className=" text-xs">Powered by</p>
                  <div className="flex items-center gap-1">
                    <div className=" relative aspect-square w-6">
                      <Image
                        src="/images/logo.png"
                        fill
                        alt=""
                        className=" object-contain object-center"
                      />
                    </div>
                    <p className="">Momentus</p>
                  </div>
                  <div className="flex gap-2">
                    <SiInstagram
                      className=" text-pink-600"
                      size={12}
                    />
                    <SiWhatsapp
                      className=" text-pink-600"
                      size={12}
                    />
                    <SiYoutube
                      className=" text-pink-600"
                      size={12}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        styles={{
          container: { backgroundColor: '#000' },
          icon: { color: '#FFF', boxShadow: 'none' },
        }}
        index={photoActiveIndex}
        slides={photos}
        plugins={[Thumbnails, Counter]}
        counter={{ container: { style: { top: 0 } } }}
        open={photoActiveIndex >= 0}
        close={() => setPhotoActiveIndex(-1)}
        render={{ slide: BaseImageLightbox }}
      />
    </>
  );
}
