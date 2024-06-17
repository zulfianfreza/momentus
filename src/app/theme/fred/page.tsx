'use client';

import BackgroundMusic from '@/components/theme/shared/background-music';
import InvitationGallery from '@/components/theme/shared/invitation-gallery';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { NAVIGATIONS } from '@/constant/common.constant';
import { italianno, jost, notable, poppins } from '@/constant/font.constant';
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
import Divider from '@/components/theme/shared/divider';

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
  const fontTitle = notable.className;

  // state
  const [showCover, setShowCover] = useState<boolean>(true);
  const [playAudio, setPlayAudio] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState(false);

  // active section
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

  return (
    <div
      className={cn(poppins.className, `tracking-normal text-black`)}
      onContextMenu={disableRightClick}
    >
      {/* begin: cover */}
      <div
        className={cn(
          ' fixed inset-0 z-[39] hidden h-screen w-full bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center text-white transition-all duration-1000',
          { ' -translate-y-full opacity-0': !showCover },
        )}
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
      </div>
      {/* end: cover */}

      <div className=" flex w-full">
        {/* begin: left */}
        <div className=" fixed hidden h-screen w-[calc(100%-472px)] flex-1 bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center text-[#D0CABA] lg:block">
          <div className=" relative flex h-full w-full items-center justify-center bg-[#546595] p-20">
            <p
              className={cn(
                'fred-text-stroke-cream absolute right-10 top-10 z-[5] text-[120px] leading-none',
              )}
            >
              *
            </p>
            <p
              className={cn(
                'fred-text-stroke-cream absolute left-10 top-1/2 z-[5] -translate-y-1/2 text-[120px] leading-none',
              )}
            >
              *
            </p>
            <Divider />
            <div className="flex flex-col items-center">
              <div className=" relative">
                {/* <div className=" absolute top-0 z-[1] h-[560px] w-[533px] bg-[url(/images/dummy/decoration-7.png)] bg-contain bg-center"></div> */}
                <div
                  className=" z-[2] h-[450px] w-[410px]"
                  style={{
                    maskImage: 'url(/images/mask/mask-4.png)',
                    maskSize: '100%',
                    maskRepeat: 'no-repeat',
                  }}
                >
                  <div className=" relative h-full w-full">
                    <Image
                      src="/images/dummy/dummy-16.jpeg"
                      alt=""
                      fill
                      className=" object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <p className=" text-sm">The Wedding of</p>
              <h1 className={cn(fontTitle, ' text-[56px] leading-none')}>
                Rachel & Ross
              </h1>
            </div>
          </div>
        </div>
        {/* end: left */}
        <div className=" flex w-full justify-center bg-[#2f2f2f] text-[#546595] lg:justify-end">
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
              <div className=" min-h-screen w-full">
                <div className=" flex min-h-screen w-full flex-col items-center bg-[#D0CABA] px-6 py-20">
                  <p className=" text-sm leading-none">The Wedding of</p>
                  <div className=" -mt-2 flex w-full flex-col items-center">
                    <svg
                      viewBox="0 0 500 500"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Define the pattern with an image */}
                      <defs>
                        <pattern
                          id="imgPattern"
                          patternUnits="userSpaceOnUse"
                          width={500}
                          height={500}
                        >
                          <image
                            href="/images/dummy/dummy-2.jpeg"
                            x={0}
                            y={0}
                            width={500}
                            height={500}
                          />
                        </pattern>
                        <path
                          id="test"
                          d="M 90,481 L 90,230.5 A 153,153 0 0 1 416,230.5 L 416,481 L 10,481 Z"
                        />
                      </defs>
                      {/* Draw the combined shape and fill it with the pattern */}
                      <path
                        d="M 100,230.5 A 153,153 0 0 1 406,230.5 L 406,481 L 100,481 Z"
                        fill="url(#imgPattern)"
                        stroke=""
                      />
                      {/* Add the text following the path */}
                      <text
                        fill="#546595"
                        className={cn(notable.className, 'text-[40px]')}
                      >
                        <textPath
                          href="#test"
                          startOffset="33.5%"
                          textAnchor="middle"
                          // className={cn(notable.className, 'text-[#546595]')}
                        >
                          WIRAATMAJA & PANDUWINATA
                        </textPath>
                      </text>
                    </svg>
                    <div className=" relative w-full ">
                      <Image
                        src="/images/decoration/decoration-6.png"
                        height={40}
                        width={40}
                        alt=""
                        className=" absolute -top-4 left-20"
                      />
                      <h1
                        className={cn(
                          fontTitle,
                          ' fred-text-stroke stroke-black text-center text-[20px]',
                        )}
                      >
                        Selasa <br /> 10 Oktober 2024
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="quote">
              <div className=" relative w-full p-6">
                <Image
                  src="/images/decoration/decoration-6.png"
                  height={50}
                  width={50}
                  alt=""
                  className=" absolute bottom-0 right-0 z-[2]"
                />
                <div className=" mx-auto mt-auto flex w-full items-center justify-center border-2 border-[#546595] p-8">
                  <p className=" text-center text-sm text-[#546595]">
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
              <div className=" flex w-full flex-col gap-10 overflow-hidden p-8 py-20">
                <div className="relative flex flex-col">
                  <h1
                    className={cn(
                      fontTitle,
                      'fred-text-stroke absolute -left-[184px] top-40 z-[3]  -rotate-90 text-[48px]',
                    )}
                  >
                    The Groom
                  </h1>
                  <h1
                    className={cn(
                      fontTitle,
                      ' absolute -left-[168px] top-[180px] z-[2] -rotate-90  text-[48px] opacity-[.35]',
                    )}
                  >
                    The Groom
                  </h1>
                  <div className="flex gap-4">
                    <div
                      className=" relative h-[373px] w-[204px] overflow-hidden"
                      style={{
                        maskImage:
                          'url(/images/decoration/decoration-mask-3.png)',
                        maskSize: '100%',
                        maskRepeat: 'no-repeat',
                      }}
                    >
                      <Image
                        src="/images/dummy/dummy-11.jpeg"
                        fill
                        alt="bride"
                        className=" object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start gap-6">
                      <h1 className={cn('text-[48px] leading-none')}>
                        Declan Hornet
                      </h1>
                      <div className=" text-sm">
                        <p className="">
                          Daughter of Charlie Hornet and Betty Hornet
                        </p>
                      </div>
                      <div className=" relative -rotate-90">
                        <div className="absolute right-0 flex items-center gap-1">
                          <SiInstagram />
                          <p className=" leading-none">hornetdeclan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col">
                  <h1
                    className={cn(
                      fontTitle,
                      'fred-text-stroke absolute -right-[168px] top-40 z-[3]  rotate-90 text-[48px]',
                    )}
                  >
                    The Bride
                  </h1>
                  <h1
                    className={cn(
                      fontTitle,
                      ' absolute -right-[152px] top-[180px] z-[2] rotate-90  text-[48px] opacity-[.35]',
                    )}
                  >
                    The Bride
                  </h1>
                  <div className="flex flex-row-reverse gap-4">
                    <div
                      className=" relative h-[373px] w-[204px] scale-x-[-1] overflow-hidden"
                      style={{
                        maskImage:
                          'url(/images/decoration/decoration-mask-3.png)',
                        maskSize: '100%',
                        maskRepeat: 'no-repeat',
                      }}
                    >
                      <Image
                        src="/images/dummy/dummy-12.jpeg"
                        fill
                        alt="bride"
                        className=" object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-end gap-6 text-end">
                      <h1 className={cn('text-[48px] leading-none')}>
                        Aideen Danes
                      </h1>
                      <div className=" text-sm">
                        <p className="">
                          Daughter of Charlie Hornet and Betty Hornet
                        </p>
                      </div>
                      <div className=" relative rotate-90">
                        <div className="absolute left-0 flex items-center gap-1">
                          <SiInstagram />
                          <p className="">hornetdeclan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="countdown">
              <div className=" w-full bg-[#546595] text-[#D0CABA]">
                <div className=" flex h-full w-full flex-col items-center gap-6 px-8 py-12">
                  <h1 className={cn(fontTitle, 'text-center text-[56px]')}>
                    Save The Date
                  </h1>
                  <p>12 Desember 2024</p>
                  <div className=" flex items-center justify-center gap-4 ">
                    <div className="flex h-[88px] w-16 flex-col items-center justify-center rounded-t-full border border-[#D0CABA] text-center">
                      <p className=" text-lg font-semibold">
                        {days.toString().padStart(2, '0')}
                      </p>
                      <p className=" text-sm">Hari</p>
                    </div>
                    <div className="flex h-[88px] w-16 flex-col items-center justify-center rounded-t-full border border-[#D0CABA] text-center">
                      <p className=" text-lg font-semibold">
                        {hours.toString().padStart(2, '0')}
                      </p>
                      <p className=" text-sm">Jam</p>
                    </div>
                    <div className="flex h-[88px] w-16 flex-col items-center justify-center rounded-t-full border border-[#D0CABA] text-center">
                      <p className=" text-lg font-semibold">
                        {minutes.toString().padStart(2, '0')}
                      </p>
                      <p className=" text-sm">Menit</p>
                    </div>
                    <div className="flex h-[88px] w-16 flex-col items-center justify-center rounded-t-full border border-[#D0CABA] text-center">
                      <p className=" text-lg font-semibold">
                        {seconds.toString().padStart(2, '0')}
                      </p>
                      <p className=" text-sm">Detik</p>
                    </div>
                  </div>
                  <Button
                    className=" rounded-none bg-[#D0CABA] text-[#546595]"
                    variant="outline"
                  >
                    <CalendarAdd size={20} />
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </section>

            <section id="event">
              <div className=" w-full overflow-hidden bg-[#D0CABA] p-8">
                <div className="relative mt-6 flex flex-col">
                  <p
                    className={cn(
                      'fred-text-stroke absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2 text-[60px] leading-none',
                    )}
                  >
                    *
                  </p>
                  <div className=" absolute left-1/2 top-1/2 h-[180px] w-[538px] -translate-x-1/2 -translate-y-1/2 -rotate-[45deg] rounded-[75%] border border-[#546595]" />
                  <div className=" relative z-[3] flex w-[272px] flex-col items-center justify-center gap-2 rounded-bl-[120px] rounded-tr-[120px] border border-[#546595] bg-[#D0CABA] p-6 py-16 text-center text-sm">
                    <p
                      className={cn(
                        'fred-text-stroke absolute left-0 top-0 text-[60px] leading-none',
                      )}
                    >
                      *
                    </p>
                    <h1 className={cn('text-2xl', fontTitle)}>Akad Nikah</h1>
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
                  <div className="relative z-[2] -mt-8 ml-auto flex w-[272px] flex-col items-center justify-center gap-2 rounded-bl-[120px] rounded-tr-[120px] border border-[#546595] bg-[#D0CABA] p-6 py-16 text-center text-sm">
                    <p
                      className={cn(
                        'fred-text-stroke absolute -bottom-6 right-0 text-[60px] leading-none',
                      )}
                    >
                      *
                    </p>
                    <h1 className={cn('text-2xl', fontTitle)}>Resepsi</h1>
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
              <div className=" w-full bg-[#546595] text-[#D0CABA]">
                <div className=" w-full overflow-hidden pt-20">
                  <h1
                    className={cn(
                      ' text-center text-[40px] font-extrabold',
                      fontTitle,
                    )}
                  >
                    Our Story
                  </h1>
                  <div className=" w-full overflow-auto">
                    <div className=" mt-8 flex snap-x snap-mandatory items-stretch overflow-x-scroll pb-20 pt-4">
                      <div className=" flex h-max w-full max-w-[472px] flex-none snap-center items-center justify-center">
                        <div className=" h-full w-[320px] snap-always rounded-b-full rounded-t-full bg-[#D0CABA] px-12 py-20 text-[#546595] ring-2 ring-[#D0CABA] ring-offset-4 ring-offset-[#546595]">
                          <h1 className={cn(fontTitle, 'text-[40px]')}>2015</h1>
                          <p className=" ">
                            Takdir mempertemukan kami di SMA. Selama 3 tahun,
                            kami selalu satu kelas, membangun persahabatan di
                            tahun pertama. Suatu masalah muncul, membuat kami
                            bermusuhan hingga lulus SMA. Namun sebelum Ujian
                            Nasional, terjadi momen berharga ketika kami saling
                            bermaafan.
                          </p>
                        </div>
                      </div>
                      <div className=" flex w-full max-w-[472px] flex-none snap-center items-center justify-center">
                        <div className=" flex h-full w-[320px] snap-always flex-col justify-center rounded-b-full rounded-t-full bg-[#D0CABA] px-12 py-20 text-[#546595] ring-2 ring-[#D0CABA] ring-offset-4 ring-offset-[#546595]">
                          <h1 className={cn(fontTitle, 'text-[40px]')}>2015</h1>
                          <p className=" ">
                            Takdir mempertemukan kami di SMA. Selama 3 tahun,
                            kami selalu satu kelas, membangun persahabatan di
                            tahun pertama.
                          </p>
                        </div>
                      </div>
                      <div className=" flex h-full w-full max-w-[472px] flex-none snap-center items-center justify-center">
                        <div className=" h-full w-[320px] snap-always rounded-b-full rounded-t-full bg-[#D0CABA] px-12 py-20 text-[#546595] ring-2 ring-[#D0CABA] ring-offset-4 ring-offset-[#546595]">
                          <h1 className={cn(fontTitle, 'text-[40px]')}>2015</h1>
                          <p className=" ">
                            Takdir mempertemukan kami di SMA. Selama 3 tahun,
                            kami selalu satu kelas, membangun persahabatan di
                            tahun pertama. Suatu masalah muncul, membuat kami
                            bermusuhan hingga lulus SMA. Namun sebelum Ujian
                            Nasional, terjadi momen berharga ketika kami saling
                            bermaafan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="gallery">
              <div className=" w-full px-[30px] py-20 ">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className={cn(' text-[40px] leading-tight', fontTitle)}>
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
              <div className=" w-full bg-[#546595] px-8 py-12 text-[#D0CABA]">
                <div className="flex flex-col items-center gap-12 text-center">
                  <div className=" space-y-6">
                    <div className=" space-y-2">
                      <h1
                        className={cn(
                          ' text-center text-[24px] leading-none',
                          fontTitle,
                        )}
                      >
                        Live Streaming
                      </h1>
                      <p className=" text-sm">
                        Silahkan untuk join live streaming
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className=" rounded-none border-black bg-[#D0CABA] text-black"
                    >
                      Menuju Live Streaming
                    </Button>
                  </div>
                  <div className=" space-y-6">
                    <div className=" space-y-2">
                      <h1
                        className={cn(
                          ' text-center text-[24px] leading-none',
                          fontTitle,
                        )}
                      >
                        Filter Instagram
                      </h1>
                      <p className=" text-sm">
                        Bagikan momentmu pakai Instagram Filter dan bagikan
                        Bersama kami
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className=" rounded-none border-black bg-[#D0CABA] text-black"
                    >
                      Link Instagram Filter
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section id="gift">
              <div className=" w-full px-10 py-20 text-[#546595]">
                <h1 className={cn(fontTitle, 'text-center text-[24px]')}>
                  Send Gift
                </h1>

                <RadioGroup
                  defaultValue="transfer"
                  className=" mt-8"
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

                <div className=" relative mt-6 flex w-full flex-col items-start gap-4">
                  <div className=" absolute left-1/2 top-1/2 h-[163px] w-[466px] -translate-x-1/2 -translate-y-1/2 -rotate-[45deg] rounded-[75%] border border-[#546595]" />
                  <div className=" relative z-[2] rounded-[32px] border border-[#546595] px-6 py-8 after:absolute after:left-2 after:top-2 after:h-full after:w-full after:rounded-[32px] after:border after:border-[#546595] after:content-['']">
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
                  <div className=" relative z-[2] ml-auto rounded-[32px] border border-[#546595] px-6 py-8 after:absolute after:left-2 after:top-2 after:h-full after:w-full after:rounded-[32px] after:border after:border-[#546595] after:content-['']">
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
              <div className=" w-full bg-[#546595] px-12 py-20 text-[#D0CABA]">
                <h1 className={cn(' text-center text-[24px] ', fontTitle)}>
                  Wedding Wishes
                </h1>
                <div className=" mt-8 flex flex-col gap-4">
                  <Input
                    className=" rounded-none border-none bg-[#D0CABA]"
                    placeholder="Nama Lengkap"
                  />
                  <Input
                    className=" rounded-none border-none bg-[#D0CABA]"
                    placeholder="Alamat"
                  />
                  <Textarea
                    className=" rounded-none border-none bg-[#D0CABA]"
                    placeholder="Ucapan"
                  />
                  <Button className=" text rounded-none bg-[#D0CABA] text-[#546595] hover:bg-[#D0CABA]/90">
                    Kirim
                  </Button>
                </div>

                <div className=" mt-8 flex flex-col gap-6 ">
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
              <div className=" w-full bg-[#546595] py-6 pb-20 text-center text-[#D0CABA]">
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
