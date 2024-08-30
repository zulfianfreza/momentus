'use client';

import BackgroundMusic from '@/components/theme/shared/background-music';
import InvitationGallery from '@/components/theme/shared/invitation-gallery';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { NAVIGATIONS } from '@/constant/navigation.constant';
import { italianno, jost } from '@/constant/font.constant';
import {
  INVITATION_GALLERIES_FAKER,
  INVITATION_WISHES_FAKER,
} from '@/constant/invitation-faker.constant';
import { useCountdown } from '@/hooks/use-count-down';
import useScrollspy from '@/hooks/use-scroll-spy';
import { cn, disableRightClick } from '@/lib/utils';
import { formatDistance, subDays } from 'date-fns';
import { CalendarAdd, Copy, CopySuccess, Warning2 } from 'iconsax-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';
import { toast } from 'sonner';
import { id } from 'date-fns/locale';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Variants, motion } from 'framer-motion';

type TPageParams = {
  searchParams: {
    active_section: string | undefined;
    show_cover: string | undefined;
  };
  params: {
    slug: string;
  };
};

export default function GreenCurvaNord({ searchParams, params }: TPageParams) {
  // font title
  const fontTitle = italianno.className;

  // state
  const [showCover, setShowCover] = useState<boolean>(true);
  const [playAudio, setPlayAudio] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState(false);

  // active id section
  const activeId = useScrollspy(
    NAVIGATIONS.map((item) => item.target),
    5,
  );

  // countdown
  const [days, hours, minutes, seconds] = useCountdown(
    new Date('2024-12-12T08:00:00+07:00'),
  );

  // handle scroll to element
  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
      e.stopPropagation();
      e.preventDefault();

      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth',
        });
      }
    },
    [],
  );

  // handle copy
  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
        toast.success('Text berhasil disalin.');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * update data every changes in dashboard
   * and change active section every route change in dashboard
   */
  useEffect(() => {
    window.addEventListener(
      'message',
      (
        event: MessageEvent<{
          type: string;
          active_section: string;
          show_cover: boolean;
        }>,
      ) => {
        const type = event.data.type;
        const data = event.data;
        if (type === 'actived-section-updated') {
          setShowCover(data.show_cover);
          const el = document.getElementById(data.active_section);
          if (el) {
            window.scrollTo({
              top: el.offsetTop,
              behavior: 'smooth',
            });
          }
        }
      },
    );
  }, []);

  /**
   * set active section in first render
   */
  useEffect(() => {
    if (searchParams.active_section) {
      setShowCover(searchParams.active_section === 'cover' ? true : false);
      const el = document.getElementById(searchParams.active_section);
      if (el) {
        window.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (showCover) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showCover]);

  const coverVariants: Variants = {
    initial: {
      translateY: '0%',
    },
    animate: {
      translateY: '0%',
      transition: {
        duration: 1,
        ease: 'easeIn',
      },
    },
    exit: {
      translateY: '-100%',
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const fadeInUpVariants: Variants = {
    initial: { opacity: 0, translateY: '25%', transition: { duration: 1 } },
    whileInView: {
      opacity: 1,
      translateY: '0%',
      transition: { duration: 1 },
    },
  };

  return (
    <div
      className={cn(jost.className, `tracking-normal text-black`)}
      onContextMenu={disableRightClick}
    >
      {/* begin: cover */}
      <motion.div
        className={cn(
          ' fixed inset-0 z-[39] h-screen w-full bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center text-white transition-all duration-1000',
          // { ' -translate-y-full opacity-0': !showCover },
        )}
        variants={coverVariants}
        initial="initial"
        animate={showCover ? 'animate' : 'exit'}
      >
        <div className=" flex h-full w-full flex-col items-center justify-center bg-black/60 p-20">
          <div className=" text-center">
            <p className={cn(' text-sm')}>The Wedding of</p>
            <div className=" relative flex justify-center text-[120px] leading-none">
              <h1 className={cn(fontTitle, '  top-0 ')}>R</h1>
              <h1 className={cn(fontTitle, ' mx-6 mt-[48px] text-[60px]')}>
                &
              </h1>
              <h1 className={cn(fontTitle, '  mt-[72px] ')}>R</h1>
            </div>
            <p className=" text-sm">12 Desember 2024</p>
          </div>
          <div className=" mt-auto space-y-4 text-center">
            <div>
              <p className=" text-sm">Kepada:</p>
              <p className="  text-sm font-bold">La Gandras</p>
            </div>
            <div className=" mt-6">
              <Button
                className=" rounded-full bg-black px-6 hover:bg-black/90"
                onClick={() => {
                  setPlayAudio((prev) => !prev);
                  setShowCover((prev) => !prev);
                }}
                disabled={!showCover}
              >
                Buka Undangan
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* <div
        className={cn(
          ' fixed inset-0 z-[9999] h-screen w-full bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center text-white transition-all duration-1000',
          { ' -translate-y-full opacity-0': !showCover },
        )}
      >
        <div className=" flex h-full w-full flex-col items-center justify-center bg-black/60 p-20">
          <div className=" space-y-1 text-center">
            <p className={cn(' text-sm')}>The Wedding of</p>
            <h1 className={cn(fontTitle, 'text-[56px] leading-none')}>
              Rachel & Ross
            </h1>
            <p className=" text-sm">12 Desember 2024</p>
          </div>
          <div className=" mt-auto space-y-4 text-center">
            <div>
              <p className=" text-sm">Kepada:</p>
              <p className="  text-sm font-bold">La Gandras</p>
            </div>
            <div className=" mt-6">
              <Button
                className=" rounded-full bg-black px-6 hover:bg-black/90"
                onClick={() => {
                  setPlayAudio((prev) => !prev);
                  setShowCover((prev) => !prev);
                }}
                disabled={!showCover}
              >
                Buka Undangan
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* end: cover */}

      <div className=" flex w-full">
        {/* begin: left */}
        <div className=" fixed hidden h-screen w-[calc(100%-472px)] flex-1 bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center text-white lg:block">
          <div className=" absolute right-0 h-full w-1 bg-black/50 backdrop-blur-sm" />
          <div className=" flex h-full w-full items-center justify-center bg-gradient-to-b from-black/60 p-20">
            <div className="flex flex-col items-center">
              <motion.h1
                initial={{}}
                className={cn(fontTitle, 'text-[56px]')}
              >
                Rachel & Ross
              </motion.h1>
            </div>
          </div>
        </div>
        {/* end: left */}
        <div className=" flex w-full justify-center bg-white text-black lg:justify-end">
          {/* <div className=" fixed block h-screen  w-full bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center lg:hidden">
            <div className=" h-full w-full bg-[#EBDEC8]/60 backdrop-blur-lg" />
          </div> */}
          <div className=" z-[31] min-h-screen w-full sm:w-[472px]">
            <div className=" fixed bottom-4 right-1/2 z-[32] flex translate-x-1/2 gap-1 rounded-full bg-black/25 p-1 shadow-lg backdrop-blur-md lg:right-[236px]">
              {NAVIGATIONS.map((navigation) => (
                <Button
                  key={navigation.target}
                  size={activeId === navigation.target ? 'default' : 'icon'}
                  className={cn(
                    ' rounded-full bg-black/10 text-white transition-all hover:bg-black/15 hover:text-white',
                    {
                      'bg-black hover:bg-black/90':
                        activeId === navigation.target,
                    },
                  )}
                  variant="ghost"
                  onClick={(e) => handleScrollTo(e, navigation.target)}
                >
                  <navigation.icon size={16} />{' '}
                  <span
                    className={cn('hidden transition-all', {
                      block: activeId === navigation.target,
                    })}
                  >
                    {navigation.label}
                  </span>
                </Button>
              ))}
            </div>

            <BackgroundMusic
              play={playAudio}
              setPlay={setPlayAudio}
            />

            <section id="opening">
              <div className=" min-h-screen w-full bg-[url(/images/dummy/dummy-14.jpeg)] bg-cover bg-center text-white">
                <div className=" flex min-h-screen w-full flex-col items-center justify-end bg-black/[0.44] px-6 py-20">
                  <div className=" flex flex-col text-center">
                    <p className=" text-sm">The Wedding of</p>
                    <h1 className={cn(' text-[56px] leading-tight', fontTitle)}>
                      Rachel & Ross
                    </h1>
                    <p className=" text-sm">12 Desember 2024</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="quote">
              <div className=" w-full bg-black p-6">
                <div className=" mx-auto mt-auto flex w-full items-center justify-center border-2 border-white p-8 py-12">
                  <p className=" text-center text-sm text-white">
                    &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                    menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                    agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                    menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
                    yang demikian itu benar-benar terdapat tanda-tanda
                    (kebesaran Allah) bagi kaum yang berpikir.&quot;
                  </p>
                </div>
              </div>
            </section>

            <section id="couple">
              <div className=" flex w-full flex-col gap-10 p-6">
                <div className="flex flex-col">
                  <h1
                    // variants={fadeInUpVariants}
                    // initial="initial"
                    // whileInView="whileInView"
                    data-aos="fade-up"
                    className={cn(fontTitle, 'text-[56px]')}
                  >
                    The Bride
                  </h1>
                  <div className="flex gap-4">
                    <div className=" relative aspect-[3/4] h-[256px]">
                      <Image
                        src="/images/dummy/dummy-12.jpeg"
                        fill
                        alt="bride"
                        className=" object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <motion.h1
                        variants={fadeInUpVariants}
                        initial="initial"
                        whileInView="whileInView"
                        className={cn(fontTitle, 'text-[46px] leading-none')}
                      >
                        Rachel Taylor
                      </motion.h1>
                      <div className=" text-sm">
                        <p className="">Putra Sulung dari</p>
                        <p className="">Bapak Anthony Hornet</p>
                        <p className="">dan Ibu Lisa Hornet</p>
                        <div className="flex items-center gap-1">
                          <SiInstagram />
                          <p className="">hornetdeclan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <motion.h1
                    variants={fadeInUpVariants}
                    initial="initial"
                    whileInView="whileInView"
                    className={cn(fontTitle, 'text-end text-[56px]')}
                  >
                    The Groom
                  </motion.h1>
                  <div className="flex gap-4">
                    <div className="flex flex-1 flex-col items-end text-end">
                      <motion.h1
                        variants={fadeInUpVariants}
                        initial="initial"
                        whileInView="whileInView"
                        className={cn(fontTitle, 'text-[46px] leading-none')}
                      >
                        Ross Chamberlain
                      </motion.h1>
                      <div className=" text-sm">
                        <p className="">Putra Sulung dari</p>
                        <p className="">Bapak Anthony Hornet</p>
                        <p className="">dan Ibu Lisa Hornet</p>
                        <div className="flex items-center justify-end gap-1">
                          <SiInstagram />
                          <p className="">hornetdeclan</p>
                        </div>
                      </div>
                    </div>
                    <div className=" relative aspect-[3/4] h-[256px]">
                      <Image
                        src="/images/dummy/dummy-11.jpeg"
                        fill
                        alt="bride"
                        className=" object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="countdown">
              <div className=" w-full bg-[url(/images/dummy/dummy-3.jpeg)] bg-cover bg-center text-white">
                <div className=" flex h-full w-full flex-col items-center gap-6 bg-black/60 px-8 py-12">
                  <h1 className={cn(fontTitle, 'text-center text-[56px]')}>
                    Save The Date
                  </h1>
                  <p>12 Desember 2024</p>
                  <div className=" flex items-center justify-center gap-4 ">
                    <div className="flex h-[88px] w-16 flex-col items-center justify-center border border-white text-center">
                      <p className=" text-lg font-semibold">
                        {days.toString().padStart(2, '0')}
                      </p>
                      <p className=" text-sm">Hari</p>
                    </div>
                    <div className="flex h-[88px] w-16 flex-col items-center justify-center border border-white text-center">
                      <p className=" text-lg font-semibold">
                        {hours.toString().padStart(2, '0')}
                      </p>
                      <p className=" text-sm">Jam</p>
                    </div>
                    <div className="flex h-[88px] w-16 flex-col items-center justify-center border border-white text-center">
                      <p className=" text-lg font-semibold">
                        {minutes.toString().padStart(2, '0')}
                      </p>
                      <p className=" text-sm">Menit</p>
                    </div>
                    <div className="flex h-[88px] w-16 flex-col items-center justify-center border border-white text-center">
                      <p className=" text-lg font-semibold">
                        {seconds.toString().padStart(2, '0')}
                      </p>
                      <p className=" text-sm">Detik</p>
                    </div>
                  </div>
                  <Button
                    className=" rounded-none bg-white text-black"
                    variant="outline"
                  >
                    <CalendarAdd size={20} />
                    Add to Calendar
                  </Button>
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
                    <p className="">
                      Tempat: Lapangan Voli RW 10 Perumahan Sukamaju
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className=" rounded-none border-black bg-transparent"
                    >
                      Lihat Map
                    </Button>
                  </div>
                  <div className=" flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-neutral-100 p-6 text-center text-sm shadow-lg">
                    <h1 className={cn('text-3xl', italianno.className)}>
                      Resepsi
                    </h1>
                    <div className="">
                      <p className="">Minggu, 12 Desember 2024</p>
                      <p className="">Pukul 11:00 s/d selesai</p>
                    </div>
                    <p className="">
                      Tempat: Lapangan Voli RW 10 Perumahan Sukamaju
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className=" rounded-none border-black bg-transparent"
                    >
                      Lihat Map
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section id="story">
              <div className=" w-full bg-[url(/images/dummy/dummy-6.jpeg)] bg-cover bg-center text-white">
                <div className=" w-full bg-black/80 px-12 py-20">
                  <h1
                    className={cn(
                      ' text-center text-[56px] font-extrabold',
                      fontTitle,
                    )}
                  >
                    Our Story
                  </h1>
                  <div className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-col">
                      <p className=" text-sm font-semibold">Awal Bertemu</p>
                      <p className=" text-sm">
                        Kami bertemu pertama kali saat masih duduk di bangku
                        SMA. Karena berada di kelas yang sama, kami seringkali
                        mengobrol dan bercanda bersama. Namun, kami tidak
                        menyadari jika ada perasaan sayang.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className=" text-sm font-semibold">Perpisahan</p>
                      <p className=" text-sm">
                        Waktu memisahkan kami begitu lama. Empat tahun lamanya
                        setelah lulus sekolah menengah, kami tidak pernah saling
                        berkomunikasi.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className=" text-sm font-semibold">
                        Pertemuan Kembali
                      </p>
                      <p className=" text-sm">
                        Acara reuni mempertemukan kami dan membuat kami semakin
                        dekat. Hingga kami merasa memiliki perasaan yang sama
                        dan menjalin hubungan.
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className=" text-sm font-semibold">Pernikahan</p>
                      <p className=" text-sm">
                        Perasaan cinta yang kuat membuat kami yakin menuju
                        jenjang pernikahan. Untuk menjalani hari-hari bersama
                        dan berbahagia dalam jalinan rumah tangga.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="gallery">
              <div className=" w-full px-[30px] py-20 ">
                <div className="flex flex-col text-center">
                  <h1 className={cn(' text-[46px]', fontTitle)}>
                    Moment yang Berbahagia
                  </h1>
                  <p className=" text-sm">
                    Menciptakan kenangan adalah hadiah yang tak ternilai
                    harganya. Kenangan akan bertahan seumur hidup; benda-benda
                    hanya dalam waktu singkat.
                  </p>
                </div>
                <div className=" mt-8">
                  <InvitationGallery
                    type="grid"
                    galleries={INVITATION_GALLERIES_FAKER}
                  />
                </div>
              </div>
            </section>

            <section id="external">
              <div className=" w-full bg-black px-8 py-12 text-white">
                <div className="flex flex-col items-center gap-12 text-center">
                  <div className=" space-y-6">
                    <div>
                      <h1
                        className={cn(
                          ' text-center text-[46px] leading-none',
                          fontTitle,
                        )}
                      >
                        Live Streaming
                      </h1>
                      <p>Silahkan untuk join live streaming</p>
                    </div>
                    <Button
                      variant="outline"
                      className=" rounded-none border-black text-black"
                    >
                      Menuju Live Streaming
                    </Button>
                  </div>
                  <div className=" space-y-6">
                    <div>
                      <h1
                        className={cn(
                          ' text-center text-[46px] leading-none',
                          fontTitle,
                        )}
                      >
                        Filter Instagram
                      </h1>
                      <p>
                        Bagikan momentmu pakai Instagram Filter dan bagikan
                        Bersama kami
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className=" rounded-none border-black text-black"
                    >
                      Link Instagram Filter
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section id="gift">
              <div className=" w-full px-10 py-20 text-[#271B11]">
                <h1 className={cn(fontTitle, 'text-center text-[46px]')}>
                  Send Gift
                </h1>

                <RadioGroup
                  defaultValue="transfer"
                  className=""
                >
                  <div className="flex space-x-2">
                    <RadioGroupItem
                      value="address"
                      id="address"
                    />
                    <Label htmlFor="address">
                      <div className=" space-y-1">
                        <p>Kirim Kado</p>
                        <p className=" font-normal">
                          Kirim kado ke alamat yang tertera
                        </p>
                      </div>
                    </Label>
                  </div>
                  <div className="flex space-x-2">
                    <RadioGroupItem
                      value="transfer"
                      id="transfer"
                    />
                    <Label htmlFor="transfer">
                      <div className=" space-y-1">
                        <p>Transfer</p>
                        <p className=" font-normal">
                          Transfer ke rekening yang tertera
                        </p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                <div className=" mt-6 flex w-full flex-col">
                  <div className=" relative ">
                    {/* <div className=" absolute right-0 top-0">
                      <Image
                        src="/images/logo-bca.png"
                        width={84}
                        height={36}
                        className=" object-contain object-center"
                        alt="bca"
                      />
                    </div> */}
                    <p className=" text-lg">BCA</p>
                    <div className=" flex items-center gap-1">
                      <p className=" font-semibold">01234567890</p>
                      <button onClick={() => handleCopy('01234567890')}>
                        {isCopied ? (
                          <CopySuccess
                            size={16}
                            className=" text-green-500"
                          />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                    <p className="">a/n Rachel Taylor</p>
                  </div>
                  <hr className=" my-6 border-[#034405]" />
                  <div className=" relative ">
                    {/* <div className=" absolute right-0 top-0">
                      <Image
                        src="/images/logo-bri.png"
                        width={84}
                        height={36}
                        className=" object-contain object-center"
                        alt="bca"
                      />
                    </div> */}
                    <p className=" text-lg">BRI</p>
                    <div className=" flex items-center gap-1">
                      <p className=" font-semibold">01234567890</p>
                      <button onClick={() => handleCopy('01234567890')}>
                        {isCopied ? (
                          <CopySuccess
                            size={16}
                            className=" text-green-500"
                          />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                    <p className="">a/n Rachel Taylor</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="wish">
              <div className=" w-full bg-black px-12 py-20">
                <h1
                  className={cn(
                    ' text-center text-[64px] text-white',
                    fontTitle,
                  )}
                >
                  Wedding Wishes
                </h1>
                <div className=" mt-8 flex flex-col gap-4">
                  <Input
                    className=" rounded-none border-none "
                    placeholder="Nama Lengkap"
                  />
                  <Input
                    className=" rounded-none border-none "
                    placeholder="Alamat"
                  />
                  <Textarea
                    className=" rounded-none border-none "
                    placeholder="Ucapan"
                  />
                  <Button
                    className=" rounded-none bg-transparent text-[#fff]"
                    variant="outline"
                  >
                    Kirim
                  </Button>
                </div>

                <div className=" mt-8 flex flex-col gap-6 text-white">
                  {INVITATION_WISHES_FAKER.slice(0, 5).map((wish) => (
                    <div
                      key={wish.id}
                      className=" space-y-2 border-b pb-2.5"
                    >
                      <div>
                        <h1 className=" font-bold">{wish.name}</h1>
                        <p className=" text-sm">
                          {wish.created_at &&
                            formatDistance(
                              new Date(wish.created_at),
                              new Date(),
                              {
                                addSuffix: true,
                                includeSeconds: true,
                                locale: id,
                              },
                            )}
                        </p>
                      </div>
                      <p className=" text-sm">{wish.message}</p>
                    </div>
                  ))}
                  <Dialog>
                    <DialogTrigger>
                      <p className=" mt-4 cursor-pointer text-center text-sm text-white hover:underline">
                        Lihat Semua
                      </p>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Ucapan & Do&apos;a</DialogTitle>
                      </DialogHeader>
                      <div className="flex h-[40vh] flex-col gap-6 overflow-y-scroll">
                        {INVITATION_WISHES_FAKER.map((wish) => (
                          <div
                            key={wish.id}
                            className=" space-y-2 border-b pb-2.5"
                          >
                            <div>
                              <h1 className=" font-bold">{wish.name}</h1>
                              <p className=" text-sm">
                                {wish.created_at &&
                                  formatDistance(
                                    new Date(wish.created_at),
                                    new Date(),
                                    {
                                      addSuffix: true,
                                      includeSeconds: true,
                                      locale: id,
                                    },
                                  )}
                              </p>
                            </div>
                            <p className=" text-sm">{wish.message}</p>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </section>

            <section id="footer">
              <div className=" w-full bg-black py-6 pb-20 text-center text-white">
                <p className=" text-xs ">Powered by</p>
                <h1 className="">Momentus</h1>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <SiWhatsapp size={12} />
                  <SiInstagram size={12} />
                  <SiFacebook size={12} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
