'use client';

import BackgroundMusic from '@/components/theme/shared/background-music';
import InvitationGallery from '@/components/theme/shared/invitation-gallery';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { NAVIGATIONS } from '@/constant/common.constant';
import { josefinSans, meowScript } from '@/constant/font.constant';
import { INVITATION_GALLERIES_FAKER } from '@/constant/invitation-faker.constant';
import useScrollspy from '@/hooks/use-scroll-spy';
import { cn } from '@/lib/utils';
import { Copy } from 'iconsax-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';

export default function GreenCurvaNord() {
  const fontTitle = meowScript.className;

  const activeId = useScrollspy(
    NAVIGATIONS.map((item) => item.target),
    5,
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

  const [showCover, setShowCover] = useState<boolean>(true);
  const [playAudio, setPlayAudio] = useState<boolean>(false);

  return (
    <div
      className={cn(josefinSans.className, `tracking-normal text-[#13077B]`)}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* begin: cover */}
      <div
        className={cn(
          ' fixed inset-0 z-[9999] h-screen w-full transition-all duration-1000',
          { ' -translate-y-full opacity-0': !showCover },
        )}
      >
        <div className=" flex h-full w-full flex-col items-center justify-center bg-[#F5EEE4] p-20">
          <div className=" text-center">
            <h1
              className={cn(
                fontTitle,
                '-translate-x-1/2 text-[56px] leading-none',
              )}
            >
              Monica
            </h1>
            <h1 className={cn(fontTitle, 'text-[56px] leading-none')}>&</h1>
            <h1
              className={cn(
                fontTitle,
                'translate-x-1/2 text-[56px] leading-none',
              )}
            >
              Joy
            </h1>
          </div>
          <div className=" mt-16 text-center text-[#DB6900]">
            <h1 className=" max-w-[256px] font-bold">
              JOYFULLY INVITE YOU TO THEIR WEDDING!
            </h1>
            <p>on</p>

            <p className=" text-sm">12 Desember 2024</p>
          </div>
          <div className=" mt-auto space-y-4 text-center text-[#DB6900]">
            <div>
              <p className=" text-sm">Kepada:</p>
              <p className="  text-sm font-bold">La Gandras</p>
            </div>
            <div className=" mt-6">
              <Button
                className=" rounded-full bg-[#13077B] px-6 hover:bg-[#13077B]/90"
                onClick={() => {
                  setPlayAudio((prev) => !prev);
                  setShowCover((prev) => !prev);
                }}
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
        <div className=" fixed hidden h-screen w-[calc(100%-430px)] flex-1 bg-[url(/images/dummy/dummy-1.jpeg)] bg-cover bg-center lg:block">
          <div className=" flex h-full w-full items-center justify-center bg-[#F5EEE4]/75 p-20">
            <div className="flex flex-col items-center">
              <div className=" text-center">
                <h1
                  className={cn(
                    fontTitle,
                    '-translate-x-1/2 text-[56px] leading-none',
                  )}
                >
                  Monica
                </h1>
                <h1 className={cn(fontTitle, 'text-[56px] leading-none')}>&</h1>
                <h1
                  className={cn(
                    fontTitle,
                    'translate-x-1/2 text-[56px] leading-none',
                  )}
                >
                  Joy
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* end: left */}
        <div className=" flex w-full justify-center bg-white lg:justify-end">
          {/* <div className=" fixed block h-screen  w-full bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center lg:hidden">
            <div className=" h-full w-full bg-[#EBDEC8]/60 backdrop-blur-lg" />
          </div> */}
          <div className=" z-[998] min-h-screen w-full sm:w-[430px]">
            <div className=" fixed bottom-4 right-1/2 z-[999] flex translate-x-1/2 gap-1 rounded-full bg-black/25 p-1 shadow-lg backdrop-blur-md lg:right-[215px]">
              {NAVIGATIONS.map((navigation) => (
                <Button
                  key={navigation.target}
                  size={activeId === navigation.target ? 'default' : 'icon'}
                  className={cn(
                    ' rounded-full bg-black/10 text-[#F5EEE4] transition-all hover:bg-black/15 hover:text-[#F5EEE4]',
                    {
                      'bg-[#13077B] hover:bg-[#13077B]/90':
                        activeId === navigation.target,
                    },
                  )}
                  variant="ghost"
                  onClick={(e) => handleScrollTo(e, navigation.target)}
                >
                  <navigation.icon size={16} />
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
              <div className=" min-h-screen w-full bg-[url(/images/dummy/dummy-14.jpeg)] bg-cover bg-center">
                <div className=" flex h-full min-h-screen w-full flex-col items-center justify-center bg-[#F5EEE4] px-6 py-20">
                  <div className=" text-center">
                    <h1
                      className={cn(
                        fontTitle,
                        '-translate-x-1/2 text-[56px] leading-none',
                      )}
                    >
                      Monica
                    </h1>
                    <h1 className={cn(fontTitle, 'text-[56px] leading-none')}>
                      &
                    </h1>
                    <h1
                      className={cn(
                        fontTitle,
                        'translate-x-1/2 text-[56px] leading-none',
                      )}
                    >
                      Joy
                    </h1>
                  </div>
                  <div className=" mt-16 text-center text-[#DB6900]">
                    <h1 className=" max-w-[256px] font-bold">
                      JOYFULLY INVITE YOU TO THEIR WEDDING!
                    </h1>
                    <p>on</p>

                    <p className=" text-sm">12 Desember 2024</p>
                  </div>
                  <div className=" mt-auto flex items-center justify-center gap-3 ">
                    <div
                      className="flex h-[67px] w-[43px] flex-col items-center justify-center bg-[#13077B] text-center text-sm text-white"
                      style={{
                        maskImage: 'url(/images/dummy/decoration-mask-2.png)',
                        maskSize: '100%',
                        maskRepeat: 'no-repeat',
                      }}
                    >
                      <p className=" text-lg">12</p>
                      <p>Hari</p>
                    </div>
                    <div
                      className="flex h-[67px] w-[43px] flex-col items-center justify-center bg-[#13077B] text-center text-sm text-white"
                      style={{
                        maskImage: 'url(/images/dummy/decoration-mask-2.png)',
                        maskSize: '100%',
                        maskRepeat: 'no-repeat',
                      }}
                    >
                      <p className=" text-lg">12</p>
                      <p>Jam</p>
                    </div>
                    <div
                      className="flex h-[67px] w-[43px] flex-col items-center justify-center bg-[#13077B] text-center text-sm text-white"
                      style={{
                        maskImage: 'url(/images/dummy/decoration-mask-2.png)',
                        maskSize: '100%',
                        maskRepeat: 'no-repeat',
                      }}
                    >
                      <p className=" text-lg">12</p>
                      <p>Menit</p>
                    </div>
                    <div
                      className="flex h-[67px] w-[43px] flex-col items-center justify-center bg-[#13077B] text-center text-sm text-white"
                      style={{
                        maskImage: 'url(/images/dummy/decoration-mask-2.png)',
                        maskSize: '100%',
                        maskRepeat: 'no-repeat',
                      }}
                    >
                      <p className=" text-lg">12</p>
                      <p>Detik</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="quote">
              <div className=" w-full bg-[#13077B] p-8 py-12">
                <p className=" text-center text-sm text-white">
                  &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                  menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                  agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                  menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
                  yang demikian itu benar-benar terdapat tanda-tanda (kebesaran
                  Allah) bagi kaum yang berpikir.&quot;
                </p>
              </div>
            </section>

            <section id="couple">
              <div className=" flex w-full flex-col bg-[#F5EEE4] p-6 py-16">
                <h1
                  className={cn(
                    'text-center text-[24px] font-bold uppercase text-[#DB6900]',
                  )}
                >
                  Celebrate With Us!
                </h1>
                <div className="mt-12 flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className=" h-[210px] w-[150px] -rotate-[3deg] border border-[#13077B] px-2.5 pb-7 pt-4">
                      <div className=" relative h-full w-full">
                        <Image
                          src="/images/dummy/dummy-12.jpeg"
                          fill
                          alt="bride"
                          className=" object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className=" flex-1">
                      <h1 className={cn(fontTitle, 'text-[40px]')}>
                        Monica Geller
                      </h1>
                      <p className=" text-sm text-[#DB6900]">
                        Daughter of Charlie Geller and Betty Geller
                      </p>
                      <div className="mt-8 flex items-center gap-1 text-[#DB6900]">
                        <SiInstagram />
                        <p className="">hornetdeclan</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse gap-4">
                    <div className=" h-[210px] w-[150px] rotate-[3deg] border border-[#13077B] px-2.5 pb-7 pt-4">
                      <div className=" relative h-full w-full">
                        <Image
                          src="/images/dummy/dummy-11.jpeg"
                          fill
                          alt="bride"
                          className=" object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className=" flex-1 text-end">
                      <h1 className={cn(fontTitle, 'text-[40px]')}>
                        Joey Danes
                      </h1>
                      <p className=" text-sm text-[#DB6900]">
                        Son of Luke Danes and Lorelai Danes
                      </p>
                      <div className="mt-8 flex items-center justify-end gap-1 text-[#DB6900]">
                        <SiInstagram />
                        <p className="">rachtaylor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className=" bg-[#F5EEE4] px-12">
              <hr className=" border-t-[3px] border-[#13077B]" />
            </div>

            <section id="gallery">
              <div className=" w-full bg-[#F5EEE4] px-[30px] py-20">
                <div className="flex flex-col text-center">
                  <h1 className={cn(' text-[32px] font-bold text-[#DB6900]')}>
                    a Glimp of Us
                  </h1>
                  <p className=" text-sm">
                    Some memories never leave your bones, like the sweetness of
                    honey. They became part of you.
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

            <div className=" bg-[#F5EEE4] px-12">
              <hr className=" border-t-[3px] border-[#13077B]" />
            </div>

            <section id="event">
              <div className=" w-full bg-[#F5EEE4] p-12">
                <p className=" text-center text-sm">
                  By asking for mercy and blessing Allah Subhanahu Wa
                  Ta&apos;ala, we invite you Sir/Madam/Sister/i to attend the
                  event Our wedding will be held on:
                </p>

                <div className="mt-6 flex flex-col gap-8">
                  <div className=" mr-20 flex flex-col items-end justify-center gap-2 border-r-[1px] border-[#13077B] pr-8 text-end text-sm ">
                    <h1 className={cn('text-3xl', fontTitle)}>Akad</h1>
                    <div className=" text-sm text-[#DB6900]">
                      <p className="">Sunday, 12nd December 2024</p>
                      <p className="">08:00 WIB</p>
                      <p className="">WOT Batu, Bandung</p>
                    </div>
                  </div>
                  <div className=" ml-20 flex flex-col justify-center gap-2 border-l-[1px] border-[#13077B] pl-8 text-sm ">
                    <h1 className={cn('text-3xl', fontTitle)}>Reception</h1>
                    <div className=" text-sm text-[#DB6900]">
                      <p className="">Sunday, 12nd December 2024</p>
                      <p className="">08:00 WIB</p>
                      <p className="">WOT Batu, Bandung</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className=" bg-[#F5EEE4] px-12">
              <hr className=" border-t-[3px] border-[#13077B]" />
            </div>

            <section id="story">
              <div className=" w-full bg-[#F5EEE4]">
                <div className=" w-full px-12 py-20">
                  <h1
                    className={cn(
                      ' text-center text-[64px] font-extrabold',
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

            <section id="gift">
              <div className=" w-full bg-[#13077B] p-8 text-white">
                <h1 className=" text-center font-semibold">
                  WE’D BE HAPPY TO RECEIVE YOUR GIFTS!
                </h1>
              </div>
              <div className=" w-full bg-[#F5EEE4] p-10">
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
                        <p>Send gifts</p>
                        <p className=" font-normal">
                          Kindly send your gifts to address listed
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
                        <p>Money</p>
                        <p className=" font-normal">
                          Kindly transfer it to our account number
                        </p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                <div className=" mt-12 flex w-full flex-col text-[#DB6900]">
                  <div className=" relative ">
                    <div className=" absolute right-0 top-0">
                      <Image
                        src="/images/logo-bca.png"
                        width={84}
                        height={36}
                        className=" object-contain object-center"
                        alt="bca"
                      />
                    </div>
                    <p className="">BCA</p>
                    <div className=" flex items-center gap-1">
                      <p className=" font-semibold">01234567890</p>
                      <Copy size={16} />
                    </div>
                    <p className="">a/n Rachel Taylor</p>
                  </div>
                  <hr className=" my-6 border-[#034405]" />
                  <div className=" relative ">
                    <div className=" absolute right-0 top-0">
                      <Image
                        src="/images/logo-bri.png"
                        width={84}
                        height={36}
                        className=" object-contain object-center"
                        alt="bca"
                      />
                    </div>
                    <p className="">BCA</p>
                    <div className=" flex items-center gap-1">
                      <p className=" font-semibold">01234567890</p>
                      <Copy size={16} />
                    </div>
                    <p className="">a/n Rachel Taylor</p>
                  </div>
                </div>
              </div>
            </section>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15845.53169525584!2d107.488159!3d-6.8446144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e350d877b155%3A0x7c6afead782224d4!2sBorma%20Toserba%20Padalarang!5e0!3m2!1sid!2sid!4v1717595765106!5m2!1sid!2sid"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <section id="wish">
              <div className=" w-full bg-[#13077B] px-12 py-20">
                <h1
                  className={cn(
                    ' text-center text-[40px] text-[#F5EEE4]',
                    fontTitle,
                  )}
                >
                  Wedding Wishes
                </h1>
                <div className=" mt-8 flex flex-col gap-4">
                  <Input
                    className=" rounded-none border-none bg-[#F5EEE4]"
                    placeholder="Nama Lengkap"
                  />
                  <Input
                    className=" rounded-none border-none bg-[#F5EEE4]"
                    placeholder="Alamat"
                  />
                  <Textarea
                    className=" rounded-none border-none bg-[#F5EEE4]"
                    placeholder="Ucapan"
                  />
                  <Button
                    className=" rounded-none border-[#F5EEE4] bg-transparent text-[#F5EEE4]"
                    variant="outline"
                  >
                    Kirim
                  </Button>
                </div>

                <div className=" mt-8 flex flex-col gap-6 text-white">
                  <div className=" space-y-2 border-b pb-2.5">
                    <>
                      <h1 className=" font-bold">Apdul</h1>
                      <p className=" text-sm">di Bandung</p>
                    </>
                    <p className=" text-sm">
                      “Semoga lancar sampai hari H dan menjadi keluarga yang
                      samawa, aamiin..”
                    </p>
                  </div>
                  <div className=" space-y-2 border-b pb-2.5">
                    <>
                      <h1 className=" font-bold">Dilan</h1>
                      <p className=" text-sm">di Bandung</p>
                    </>
                    <p className=" text-sm">
                      “Semoga lancar sampai hari H dan menjadi keluarga yang
                      samawa, aamiin..”
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="footer">
              <div className=" w-full bg-[#F5EEE4] py-6 pb-20 text-center">
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
