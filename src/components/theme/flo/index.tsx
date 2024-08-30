'use client';

import BackgroundMusic from '@/components/theme/shared/background-music';
import InvitationGallery from '@/components/theme/shared/invitation-gallery';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { NAVIGATIONS } from '@/constant/common.constant';
import {
  inknutAntiqua,
  italianno,
  jost,
  notable,
  otomanopeeOne,
  poppins,
} from '@/constant/font.constant';
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
import { useParams, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { createFlowerVariant } from '@/utils/animation';
import AnimationWrapper from '@/components/common/animation-wrapper';

type TPageParams = {
  searchParams: {
    active_section: string | undefined;
    show_cover: string | undefined;
  };
  params: {
    slug: string;
  };
};

export default function FloTheme() {
  // hooks
  const params = useParams<{ slug: string }>();
  const searchParams = useSearchParams();

  // search params
  const active_section = searchParams.get('active_section');

  // font title
  const fontTitle = inknutAntiqua.className;

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
    if (active_section) {
      setShowCover(active_section === 'cover' ? true : false);
      const el = document.getElementById(active_section);
      if (el) {
        window.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [active_section]);

  return (
    <div
      className={cn(inknutAntiqua.className, `tracking-normal text-[#668F80]`)}
      onContextMenu={disableRightClick}
    >
      {/* begin: cover */}
      <div
        className={cn(
          ' fixed inset-0 z-[39] hidden h-[100dvh] w-full bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center transition-all duration-1000',
          { ' -translate-y-full opacity-0': !showCover },
        )}
      >
        <div className=" flex h-full w-full flex-col items-center justify-center bg-black/80 p-20">
          <div className=" text-center">
            <p className={cn(' text-sm')}>The Wedding of</p>
            <div className=" relative flex justify-center text-[120px] leading-none">
              <h1 className={cn(fontTitle, '  top-0 ')}>R</h1>
              <h1 className={cn(fontTitle, ' mx-6 mt-[48px] text-[60px]')}>
                &
              </h1>
              <h1 className={cn(fontTitle, '  mt-[72px] ')}>R</h1>
            </div>
            <p className={cn(' text-sm')}>12 Desember 2024</p>
          </div>
          <div className=" mt-auto space-y-4 text-center">
            <div>
              <p className=" text-sm">Kepada:</p>
              <p className="  text-sm font-bold">La Gandras</p>
            </div>
            <div className=" mt-6">
              <Button
                className=" rounded-full border-2 border-[#668F80] bg-transparent px-6 text-[#668F80] hover:bg-black/10"
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
        <div className=" fixed hidden h-screen w-[calc(100%-472px)] flex-1  bg-[url(/images/dummy/dummy-2.jpeg)] bg-cover bg-center lg:flex">
          <div className=" flex h-screen w-full items-end justify-center bg-black/60 pb-12">
            <div className=" text-[96px] font-semibold">Ado & Ayu</div>
          </div>
        </div>
        {/* end: left */}
        <div className=" flex w-full justify-center bg-[#2f2f2f] text-[#668F80] lg:justify-end">
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
                    ' rounded-full bg-[#668F80]/10 text-white transition-all hover:bg-[#668F80]/15 hover:text-white',
                    {
                      'bg-[#668F80] hover:bg-[#668F80]/90':
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
                <div className=" flex min-h-screen w-full flex-col items-center bg-[url(/images/bg/bg-texture-1.jpeg)] bg-cover bg-center px-6 py-14">
                  <div className=" relative ">
                    {/* <div className="  absolute -left-10 bottom-0 z-[2]">
                      <motion.div
                        variants={createFlowerVariant({
                          initial: 1,
                          to: -1,
                          duration: 4,
                        })}
                        animate="animate"
                        className=" relative aspect-[97/220] w-[97px] origin-bottom"
                      >
                        <Image
                          src="/images/decoration/FLW04.png"
                          fill
                          alt=""
                          className=" rotate-[-7deg] object-contain object-center"
                        />
                      </motion.div>
                    </div> */}
                    <AnimationWrapper
                      imageSrc="/images/decoration/FLW04.png"
                      variant={[1, -1, 4]}
                      wrapperClassName="-left-10 bottom-0 z-[2]"
                      motionClassName="aspect-[97/220] w-[97px] origin-bottom"
                      imageClassName=" rotate-[-7deg] "
                    />
                    <AnimationWrapper
                      imageSrc="/images/decoration/FLW02.png"
                      wrapperClassName="-bottom-12 -right-4 z-[3]"
                      motionClassName="h-[184px] w-[146px]"
                      imageClassName="rotate-[-70deg]"
                    />
                    <AnimationWrapper
                      variant={[2, -2, 6]}
                      imageSrc="/images/decoration/FLW06.png"
                      wrapperClassName="-right-8 bottom-0 z-[2]"
                      motionClassName="h-[282px] w-[81px] origin-bottom"
                    />
                    <AnimationWrapper
                      imageSrc="/images/decoration/FLW09.png"
                      wrapperClassName="-bottom-12 -left-8 z-[2]"
                      motionClassName="h-[182px] w-[206px]"
                      imageClassName="rotate-[162deg]"
                    />
                    <div className=" aspect-[293/564] w-[293px] overflow-hidden rounded-t-full bg-[url(/images/decoration/decoration-9.png)] bg-contain bg-center p-3">
                      <div className=" relative h-full w-full overflow-hidden rounded-t-full">
                        <Image
                          src="/images/dummy/dummy-9.jpeg"
                          fill
                          alt=""
                          className=" object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" mt-16 space-y-4 text-center text-xs">
                    <p className="">Wedding Invitation</p>
                    <h1 className=" text-4xl font-semibold">Ado & Ayu</h1>
                    <p className="">10 November 2024</p>
                    <p className="">RPL A 08</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="quote">
              <div className=" relative w-full bg-[url(/images/bg/bg-texture-1.jpeg)] bg-cover bg-center p-12">
                <div className=" mx-auto mt-auto flex w-full items-center justify-center">
                  <p className=" text-center text-sm">
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
              <div className=" flex w-full flex-col items-center gap-10 overflow-hidden bg-[url(/images/bg/bg-texture-1.jpeg)] bg-cover bg-center p-8 py-20">
                <h1 className=" text-[20px]">The Wedding of</h1>
                <div className="flex flex-col items-center gap-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className=" relative">
                      <AnimationWrapper
                        imageSrc="/images/decoration/FLW10.png"
                        variant={[-2, 1, 4]}
                        wrapperClassName="-right-20 bottom-0"
                        motionClassName="aspect-[173/197] w-[173px] origin-left"
                        imageClassName=" rotate-[24deg]"
                      />
                      <AnimationWrapper
                        imageSrc="/images/decoration/FLW11.png"
                        variant={[2, -1, 6]}
                        wrapperClassName="-left-16"
                        motionClassName="aspect-[150/133] w-[150px] origin-right"
                        imageClassName=" rotate-[-67deg]"
                      />
                      <div className=" aspect-[233/318] w-[233px] rounded-t-full bg-[url(/images/decoration/decoration-8.png)] bg-contain bg-center p-3">
                        <div className=" relative h-full w-full overflow-hidden rounded-t-full ">
                          <Image
                            src="/images/dummy/dummy-11.jpeg"
                            fill
                            alt=""
                            className=" object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <h1 className=" text-3xl">Rizqi Adha</h1>
                      <p className=" text-xs">
                        Son of Mr Jordi Alba and Mrs Dina Alba
                      </p>
                      <div className="flex items-center gap-2">
                        <SiInstagram />
                        <p>adoadha_</p>
                      </div>
                    </div>
                  </div>
                  <h1 className=" text-5xl text-[#D6A2AD]">&</h1>
                  <div className="flex flex-col items-center gap-4">
                    <div className=" relative">
                      <AnimationWrapper
                        imageSrc="/images/decoration/FLW10.png"
                        variant={[-3, 1, 8]}
                        wrapperClassName="-left-20 bottom-0"
                        motionClassName="aspect-[173/197] w-[173px] origin-right"
                        imageClassName=" rotate-[-24deg] scale-x-[-1]"
                      />
                      <AnimationWrapper
                        imageSrc="/images/decoration/FLW11.png"
                        variant={[2, -1, 6]}
                        wrapperClassName="-right-16"
                        motionClassName="aspect-[150/133] w-[150px] origin-left"
                        imageClassName=" rotate-[67deg] scale-x-[-1]"
                      />
                      <div className=" aspect-[233/318] w-[233px] rounded-t-full bg-[url(/images/decoration/decoration-8.png)] bg-contain bg-center p-3">
                        <div className=" relative h-full w-full overflow-hidden rounded-t-full ">
                          <Image
                            src="/images/dummy/dummy-12.jpeg"
                            fill
                            alt=""
                            className=" object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <h1 className=" text-3xl">Dian Ayu</h1>
                      <p className=" text-xs">
                        Son of Mr Jordi Alba and Mrs Dina Alba
                      </p>
                      <div className="flex items-center gap-2">
                        <SiInstagram />
                        <p>ayudiaa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="event">
              <div className=" relative w-full overflow-hidden bg-[#4A6670]">
                <div className=" absolute h-full w-full bg-[url(/images/bg/bg-texture-1.jpeg)] bg-cover bg-center mix-blend-multiply" />
                <div className=" relative z-[2] flex w-full flex-col items-center p-8 py-12">
                  <h1 className=" text-center text-[20px] font-semibold text-white">
                    Wedding Event
                  </h1>

                  <div className=" relative mt-7">
                    <AnimationWrapper
                      imageSrc="/images/decoration/FLW03.png"
                      variant={[2, -1, 6]}
                      wrapperClassName="-left-24 top-10"
                      motionClassName="aspect-square w-[256px] "
                      imageClassName=" rotate-[-60deg]"
                    />
                    <AnimationWrapper
                      imageSrc="/images/decoration/FLW08.png"
                      variant={[-2, 2, 4]}
                      wrapperClassName="-right-20 top-10"
                      motionClassName="aspect-square w-[256px] "
                      imageClassName=" rotate-[60deg]"
                    />
                    <AnimationWrapper
                      imageSrc="/images/decoration/FLW09.png"
                      variant={[-2, 1, 4]}
                      wrapperClassName="-left-20 bottom-4"
                      motionClassName="aspect-square w-[296px] origin-right"
                      imageClassName=" rotate-[-100deg]"
                    />
                    <AnimationWrapper
                      imageSrc="/images/decoration/FLW11.png"
                      variant={[-3, 2, 6]}
                      wrapperClassName="-right-20 bottom-4"
                      motionClassName="aspect-square w-[296px] origin-left"
                      imageClassName=" rotate-[-60deg] scale-y-[-1]"
                    />
                    <div className=" flex w-[277px] flex-col items-center gap-7 rounded-b-full rounded-t-full bg-white/40 py-16 backdrop-blur-md">
                      <div className="flex flex-col items-center gap-6 text-center">
                        <p className=" text-sm">Akad Nikah</p>
                        <div className=" space-y-2 text-sm">
                          <p className="">Sabtu, 13 November 2024</p>
                          <p className="">Pukul 09:00 WIB - Selesai</p>
                          <p className="">Shotness Cafe, Padalarang</p>
                        </div>
                        <Button
                          className=" rounded-full border border-[#C3B59F] bg-[#4A6670]"
                          size="sm"
                        >
                          Lihat Lokasi
                        </Button>
                      </div>
                      <div className=" h-[2px] w-[150px] rounded-full bg-white" />
                      <div className="flex flex-col items-center gap-6 text-center">
                        <p className=" text-sm">Akad Nikah</p>
                        <div className=" space-y-2 text-sm">
                          <p className="">Sabtu, 13 November 2024</p>
                          <p className="">Pukul 09:00 WIB - Selesai</p>
                          <p className="">Shotness Cafe, Padalarang</p>
                        </div>
                        <Button
                          className=" rounded-full border border-[#C3B59F] bg-[#4A6670]"
                          size="sm"
                        >
                          Lihat Lokasi
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="countdown">
              <div className=" relative w-full overflow-hidden bg-[url(/images/bg/bg-texture-1.jpeg)] bg-cover bg-center text-[#4A6670]">
                <div className=" absolute -left-16 top-1/2 -translate-y-1/2">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: 9,
                      to: 15,
                      duration: 4,
                    })}
                    animate="animate"
                    className=" relative h-[214px] w-[178px] scale-x-[-1]"
                  >
                    <Image
                      src="/images/decoration/FLW12.png"
                      fill
                      alt=""
                      className=" object-contain object-center"
                    />
                  </motion.div>
                </div>
                <div className=" absolute -right-16 top-1/2 -translate-y-1/2">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: -9,
                      to: -14,
                      duration: 6,
                    })}
                    animate="animate"
                    className=" relative h-[214px] w-[178px] "
                  >
                    <Image
                      src="/images/decoration/FLW12.png"
                      fill
                      alt=""
                      className=" object-contain object-center"
                    />
                  </motion.div>
                </div>
                <div className=" absolute -bottom-8 -left-6 ">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: 21,
                      to: 25,
                      duration: 8,
                    })}
                    animate="animate"
                    className=" relative h-[184px] w-[148px] "
                  >
                    <Image
                      src="/images/decoration/FLW02.png"
                      fill
                      alt=""
                      className=" object-contain object-center"
                    />
                  </motion.div>
                </div>
                <div className=" absolute -bottom-8 -right-6">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: -20,
                      to: -27,
                      duration: 4,
                    })}
                    animate="animate"
                    className=" relative h-[184px] w-[148px]"
                  >
                    <Image
                      src="/images/decoration/FLW02.png"
                      fill
                      alt=""
                      className=" scale-x-[-1] object-contain  object-center"
                    />
                  </motion.div>
                </div>
                <div className=" h-full w-full p-7">
                  <div className=" flex min-h-[216px] w-full flex-col items-center justify-center gap-4 bg-[url(/images/decoration/decoration-7.png)] bg-contain bg-center bg-no-repeat py-12">
                    <h1 className=" text-[20px]">Save The Date</h1>
                    <div className="flex items-center gap-4 text-[12px]">
                      <div className="flex flex-col items-center">
                        <h1 className=" text-[20px]">0</h1>
                        <p>Hari</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <h1 className=" text-[20px]">0</h1>
                        <p>Jam</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <h1 className=" text-[20px]">0</h1>
                        <p>Menit</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <h1 className=" text-[20px]">0</h1>
                        <p>Detik</p>
                      </div>
                    </div>
                    <Button className=" rounded-full border-2 border-[#4A6670] bg-transparent text-[#4A6670]">
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section id="story">
              <div className=" relative w-full overflow-hidden bg-[#4A6670]">
                <div className=" absolute h-full w-full bg-[url(/images/bg/bg-texture-1.jpeg)] bg-cover bg-center mix-blend-multiply" />
                <div className=" relative z-[2] w-full overflow-hidden pt-[156px]">
                  <div className=" absolute -left-20 -top-28">
                    <motion.div
                      variants={createFlowerVariant({
                        initial: 183,
                        to: 178,
                        duration: 8,
                      })}
                      animate="animate"
                      className=" relative aspect-[212/220] w-[232px] "
                    >
                      <Image
                        src="/images/decoration/FLW03.png"
                        fill
                        alt=""
                        className=" scale-x-[-1] object-contain object-center"
                      />
                    </motion.div>
                  </div>
                  <div className=" absolute -top-52">
                    <motion.div
                      variants={createFlowerVariant({
                        initial: -134,
                        to: -137,
                        duration: 4,
                      })}
                      animate="animate"
                      className=" relative aspect-[296/259] w-[316px] "
                    >
                      <Image
                        src="/images/decoration/FLW09.png"
                        fill
                        alt=""
                        className=" object-contain object-center"
                      />
                    </motion.div>
                  </div>
                  <div className=" absolute -top-28 right-[calc(50%-60px)] translate-x-1/2">
                    <motion.div
                      variants={createFlowerVariant({
                        initial: 2,
                        to: -3,
                        duration: 6,
                      })}
                      animate="animate"
                      className=" relative aspect-[169/195] w-[185px]  "
                    >
                      <Image
                        src="/images/decoration/FLW08.png"
                        fill
                        alt=""
                        className=" scale-y-[-1] object-contain object-center"
                      />
                    </motion.div>
                  </div>
                  <div className=" absolute -right-20 -top-[372px]">
                    <motion.div
                      variants={createFlowerVariant({
                        initial: 1,
                        to: -1,
                        duration: 4,
                      })}
                      animate="animate"
                      className=" relative aspect-[182/413] w-[236px] "
                    >
                      <Image
                        src="/images/decoration/FLW04.png"
                        fill
                        alt=""
                        className=" scale-y-[-1] object-contain object-center "
                      />
                    </motion.div>
                  </div>
                  <h1
                    className={cn(
                      ' text-center text-3xl font-extrabold text-[#D0CABA]',
                      fontTitle,
                    )}
                  >
                    Our Story
                  </h1>
                  <div className=" w-full overflow-auto">
                    <div className=" mt-8 flex snap-x snap-mandatory items-stretch overflow-x-scroll pb-20 pt-4">
                      <div className=" relative flex h-max w-full max-w-[472px] flex-none snap-center items-center justify-center">
                        <div className=" relative aspect-[349/609] w-[349px] snap-always rounded-t-full border-2 border-[#D0CABA] p-6 pb-4">
                          <div className=" absolute left-1/2 top-2 aspect-[333/610] w-[333px] -translate-x-1/2 rounded-t-full border-2 border-[#D0CABA]" />
                          <div className=" relative h-full w-full overflow-hidden rounded-t-full">
                            <div className=" absolute bottom-0 z-[2] w-full space-y-2 bg-gradient-to-t from-white via-white to-white/0 p-4 pt-28 text-center">
                              <h1 className="text-sm">First Date</h1>
                              <p className=" text-xs">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas reiciendis illum earum
                                fugiat soluta architecto mollitia nobis iure.
                                Quia impedit laborum quibusdam! Accusamus,
                                totam!
                              </p>
                            </div>
                            <Image
                              src="/images/dummy/dummy-6.jpeg"
                              fill
                              alt=""
                              className=" object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" relative flex h-max w-full max-w-[472px] flex-none snap-center items-center justify-center">
                        <div className=" relative aspect-[349/609] w-[349px] snap-always rounded-t-full border-2 border-[#D0CABA] p-6 pb-4">
                          <div className=" absolute left-1/2 top-2 aspect-[333/610] w-[333px] -translate-x-1/2 rounded-t-full border-2 border-[#D0CABA]" />
                          <div className=" relative h-full w-full overflow-hidden rounded-t-full">
                            <div className=" absolute bottom-0 z-[2] w-full space-y-2 bg-gradient-to-t from-white via-white to-white/0 p-4 pt-28 text-center">
                              <h1 className="text-sm">First Date</h1>
                              <p className=" text-xs">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ad quibusdam commodi
                                laboriosam cum nobis, eligendi, eos iure
                                consequatur aliquam mollitia voluptas quam quae,
                                voluptatem laborum blanditiis officia corrupti
                                in dolores.
                              </p>
                            </div>
                            <Image
                              src="/images/dummy/dummy-6.jpeg"
                              fill
                              alt=""
                              className=" object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" relative flex h-max w-full max-w-[472px] flex-none snap-center items-center justify-center">
                        <div className=" relative aspect-[349/609] w-[349px] snap-always rounded-t-full border-2 border-[#D0CABA] p-6 pb-4">
                          <div className=" absolute left-1/2 top-2 aspect-[333/610] w-[333px] -translate-x-1/2 rounded-t-full border-2 border-[#D0CABA]" />
                          <div className=" relative h-full w-full overflow-hidden rounded-t-full">
                            <div className=" absolute bottom-0 z-[2] w-full space-y-2 bg-gradient-to-t from-white via-white to-white/0 p-4 pt-28 text-center">
                              <h1 className="text-sm">First Date</h1>
                              <p className=" text-xs">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Dolor enim quis vero eos eaque
                                pariatur alias.
                              </p>
                            </div>
                            <Image
                              src="/images/dummy/dummy-6.jpeg"
                              fill
                              alt=""
                              className=" object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="gallery">
              <div className=" relative w-full overflow-hidden bg-[#4A6670] pb-[232px]">
                <div className=" absolute -bottom-24">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: -10,
                      to: -7,
                      duration: 8,
                    })}
                    animate="animate"
                    className=" relative left-0 aspect-[105/285] w-[125px]"
                  >
                    <Image
                      src="/images/decoration/FLW05.png"
                      fill
                      alt=""
                      className=" scale-x-[-1] object-contain object-center"
                    />
                  </motion.div>
                </div>
                <div className=" absolute -bottom-36 left-24">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: -1,
                      to: 2,
                      duration: 6,
                    })}
                    animate="animate"
                    className=" relative aspect-[87/259] w-[107px]"
                  >
                    <Image
                      src="/images/decoration/FLW07.png"
                      fill
                      alt=""
                      className=" object-contain object-center"
                    />
                  </motion.div>
                </div>
                <div className=" absolute -bottom-32 left-1/2 -translate-x-1/2">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: -2,
                      to: 1,
                      duration: 5,
                    })}
                    animate="animate"
                    className=" relative aspect-[97/220] w-[127px]"
                  >
                    <Image
                      src="/images/decoration/FLW04.png"
                      fill
                      alt=""
                      className=" object-contain object-center"
                    />
                  </motion.div>
                </div>
                <div className=" absolute -bottom-44 right-24">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: 2,
                      to: -1,
                      duration: 4,
                    })}
                    animate="animate"
                    className=" relative aspect-[90/314] w-[110px]"
                  >
                    <Image
                      src="/images/decoration/FLW06.png"
                      fill
                      alt=""
                      className=" object-contain object-center"
                    />
                  </motion.div>
                </div>
                <div className=" absolute -bottom-12 -right-6">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: 1,
                      to: -2,
                      duration: 4,
                    })}
                    animate="animate"
                    className=" relative aspect-[106/268] w-[126px]"
                  >
                    <Image
                      src="/images/decoration/FLW01.png"
                      fill
                      alt=""
                      className=" scale-x-[-1] object-contain object-center"
                    />
                  </motion.div>
                </div>
                <div className=" absolute h-full w-full bg-[url(/images/bg/bg-texture-1.jpeg)] bg-cover bg-center mix-blend-multiply" />
                <div className=" relative p-6">
                  <div className="flex flex-col gap-2 text-center">
                    <h1
                      className={cn(' text-[24px] text-[#D0CABA]', fontTitle)}
                    >
                      Portraits
                    </h1>
                  </div>
                  <div className=" mt-8">
                    <InvitationGallery
                      type="grid"
                      galleries={INVITATION_GALLERIES_FAKER}
                    />
                  </div>
                  <div className=" mt-8">
                    <iframe
                      src="https://www.youtube.com/embed/97XNfqGTvpA?si=x-WkpGYuBBvRn5hu"
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className=" aspect-video w-full"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="external">
              <div className=" w-full bg-[url(/images/bg/bg-texture-1.jpeg)] bg-cover bg-center  px-8 py-12 text-[#4A6670]">
                <div className="flex flex-col items-center gap-12 text-center">
                  <div className=" space-y-6">
                    <div className=" space-y-2">
                      <h1
                        className={cn(
                          ' text-center text-lg leading-none',
                          fontTitle,
                        )}
                      >
                        Live Streaming
                      </h1>
                      <p className=" text-xs">
                        Silahkan untuk join live streaming
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className=" rounded-full border-2 border-[#4A6670] bg-transparent text-[#4A6670]"
                    >
                      Menuju Live Streaming
                    </Button>
                  </div>
                  <div className=" space-y-6">
                    <div className=" space-y-2">
                      <h1
                        className={cn(
                          ' text-center text-lg leading-none',
                          fontTitle,
                        )}
                      >
                        Filter Instagram
                      </h1>
                      <p className=" text-xs">
                        Bagikan momentmu pakai Instagram Filter dan bagikan
                        Bersama kami
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className=" rounded-full border-2 border-[#4A6670] bg-transparent text-[#4A6670]"
                    >
                      Link Instagram Filter
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section id="gift">
              <div className=" w-full bg-[url(/images/bg/bg-texture-1.jpeg)] bg-cover bg-center  px-10 py-12 text-[#4A6670]">
                <h1 className={cn(fontTitle, 'text-center text-[24px]')}>
                  We’d Be Happy To Receive Your Gifts
                </h1>

                <RadioGroup
                  defaultValue="transfer"
                  className=" mt-8"
                >
                  <div className="flex space-x-2">
                    <RadioGroupItem
                      value="address"
                      id="address"
                      className=" border-[#668F80] text-transparent data-[state=checked]:border-[4px]"
                    />
                    <Label
                      htmlFor="address"
                      className=" text-xs"
                    >
                      Direct Transfer : You could transfer to account listed.
                    </Label>
                  </div>
                  <div className="flex space-x-2">
                    <RadioGroupItem
                      value="transfer"
                      id="transfer"
                      className=" border-[#668F80] text-transparent data-[state=checked]:border-[4px]"
                    />
                    <Label
                      htmlFor="transfer"
                      className=" text-xs"
                    >
                      Send Gifts : Send gifts to address listed.
                    </Label>
                  </div>
                </RadioGroup>

                <div className=" mt-6 flex flex-col gap-6">
                  <div className=" flex w-full flex-col gap-4 border-[4px] border-[#4A6670] bg-[#668F80] p-6 text-white">
                    <p className=" text-lg">Bank BCA</p>
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
                  <div className=" flex w-full flex-col gap-4 border-[4px] border-[#4A6670] bg-[#668F80] p-6 text-white">
                    <p className=" text-lg">Bank BCA</p>
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
              <div className=" w-full bg-[url(/images/bg/bg-texture-1.jpeg)] bg-cover bg-center  px-10 py-12">
                <h1 className={cn(' text-center text-[24px] ', fontTitle)}>
                  RSVP & Wishes
                </h1>
                <div className=" mt-8 flex flex-col gap-4">
                  <Input
                    className=" rounded-none border-[2px] border-[#4A6670] bg-white"
                    placeholder="Name"
                  />
                  <Input
                    className=" rounded-none border-[2px] border-[#4A6670] bg-white"
                    placeholder="Address"
                  />
                  <RadioGroup
                    defaultValue="transfer"
                    className=" flex"
                  >
                    <div className="flex space-x-2">
                      <RadioGroupItem
                        value="present"
                        id="present"
                        className=" border-[#668F80] text-transparent data-[state=checked]:border-[4px]"
                      />
                      <Label
                        htmlFor="address"
                        className=" text-xs"
                      >
                        Hadir
                      </Label>
                    </div>
                    <div className="flex space-x-2">
                      <RadioGroupItem
                        value="doubtful"
                        id="doubtful"
                        className=" border-[#668F80] text-transparent data-[state=checked]:border-[4px]"
                      />
                      <Label
                        htmlFor="transfer"
                        className=" text-xs"
                      >
                        Ragu-Ragu
                      </Label>
                    </div>
                    <div className="flex space-x-2">
                      <RadioGroupItem
                        value="absent"
                        id="absent"
                        className=" border-[#668F80] text-transparent data-[state=checked]:border-[4px]"
                      />
                      <Label
                        htmlFor="transfer"
                        className=" text-xs"
                      >
                        Tidak Hadir
                      </Label>
                    </div>
                  </RadioGroup>
                  <Textarea
                    className=" rounded-none border-[2px] border-[#4A6670] bg-white"
                    placeholder="Wishes"
                  />
                  <Button className=" text rounded-none bg-[#4A6670] text-white hover:bg-[#4A6670]/90">
                    Send
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
                      <p className=" mt-4 cursor-pointer text-center text-sm hover:underline">
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

            <section id="closing">
              <div className=" relative w-full overflow-hidden bg-[#4A6670] text-white">
                <div className=" absolute -bottom-20 -left-4">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: 1,
                      to: -3,
                      duration: 4,
                    })}
                    animate="animate"
                    className=" relative left-0 aspect-[79/258] w-[79px]"
                  >
                    <Image
                      src="/images/decoration/FLW12.png"
                      fill
                      alt=""
                      className=" object-contain object-center"
                    />
                  </motion.div>
                </div>
                <div className=" absolute -bottom-20 -right-4">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: 3,
                      to: -1,
                      duration: 3,
                    })}
                    animate="animate"
                    className=" relative left-0 aspect-[79/258] w-[79px] scale-x-[-1]"
                  >
                    <Image
                      src="/images/decoration/FLW12.png"
                      fill
                      alt=""
                      className=" object-contain object-center"
                    />
                  </motion.div>
                </div>
                <div className=" absolute -bottom-24 -left-2">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: 1,
                      to: -1,
                      duration: 4,
                    })}
                    animate="animate"
                    className=" relative left-0 aspect-[212/220] w-[212px]"
                  >
                    <Image
                      src="/images/decoration/FLW03.png"
                      fill
                      alt=""
                      className=" object-contain object-center"
                    />
                  </motion.div>
                </div>
                <div className=" absolute -bottom-28 right-6">
                  <motion.div
                    variants={createFlowerVariant({
                      initial: 17,
                      to: 14,
                      duration: 4,
                    })}
                    animate="animate"
                    className=" relative left-0 aspect-[259/228] w-[259px] rotate-[15deg] scale-x-[-1]"
                  >
                    <Image
                      src="/images/decoration/FLW11.png"
                      fill
                      alt=""
                      className=" object-contain object-center"
                    />
                  </motion.div>
                </div>
                <div className=" absolute h-full w-full bg-[url(/images/bg/bg-texture-1.jpeg)] bg-cover bg-center mix-blend-multiply" />
                <div className=" space-y-4 px-10 py-12 pb-[172px] text-center">
                  <h1 className={cn('text-[20px]')}>Thank You</h1>
                  <p className=" text-xs">
                    We would like to thank you for attending all of our wedding
                    events. Hopefully the time given by you all will be a
                    blessing and benefit that will be rewarded by God Almighty.
                    Thank you for all the words given. May we be a happy couple
                    in this world and the hereafter.
                  </p>
                </div>
              </div>
            </section>

            <section id="footer">
              <div className=" w-full bg-white pb-20 pt-4 text-center text-[#4A6670]">
                <p>Copyright © 2024 Powered by majoola.invitaion</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
