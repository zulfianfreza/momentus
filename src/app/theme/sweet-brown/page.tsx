'use client';

import BackgroundMusic from '@/components/theme/shared/background-music';
import InvitationGallery from '@/components/theme/shared/invitation-gallery';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { NAVIGATIONS } from '@/constant/navigation.constant';
import { jost, theNautigal } from '@/constant/font.constant';
import { INVITATION_GALLERIES_FAKER } from '@/constant/invitation-faker.constant';
import useScrollspy from '@/hooks/use-scroll-spy';
import { cn } from '@/lib/utils';
import { Copy } from 'iconsax-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';

export default function GreenCurvaNord() {
  const fontTitle = theNautigal.className;

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
      className={cn(jost.className, `tracking-normal text-white`)}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* begin: cover */}
      <div
        className={cn(
          ' fixed inset-0 z-[9999] h-screen w-full bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center transition-all duration-1000',
          { ' -translate-y-full opacity-0': !showCover },
        )}
      >
        <div className=" flex h-full w-full flex-col items-start justify-center bg-gradient-to-b from-[#5A3521]/80 p-20">
          <div className=" text-start">
            <p className={cn(' text-sm')}>The Wedding of</p>
            <h1 className={cn(fontTitle, 'text-[87px] leading-none')}>
              Declan <br />&<br />
              Aideen
            </h1>
            <p className=" text-sm">12 Desember 2024</p>
          </div>
          <div className=" mt-12">
            <p className=" text-sm">Kepada:</p>
            <p className="  text-sm font-bold">La Gandras</p>
            <div className=" mt-6">
              <Button
                className=" rounded-full bg-[#271B11] px-6 hover:bg-[#271B11]/90"
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
          <div className=" flex h-full w-full items-start justify-center bg-gradient-to-b from-[#5A3521]/60 p-20">
            <div className="flex flex-col items-center">
              <div className=" relative flex flex-col leading-none">
                <h1 className={cn(fontTitle, 'absolute -left-36 text-[133px]')}>
                  D
                </h1>
                <h1
                  className={cn(fontTitle, ' absolute top-[88px] text-[40px]')}
                >
                  &
                </h1>
                <h1
                  className={cn(
                    fontTitle,
                    'absolute -right-36 top-24 text-[133px]',
                  )}
                >
                  A
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* end: left */}
        <div className=" flex w-full justify-center bg-[#EBDEC899] lg:justify-end">
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
                    ' rounded-full bg-black/10 text-[#EBDEC8] transition-all hover:bg-black/15 hover:text-white',
                    {
                      'bg-[#271B11] hover:bg-[#271B11]/90':
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
              <div className=" min-h-screen w-full bg-[url(/images/dummy/dummy-13.jpeg)] bg-cover bg-center">
                <div className=" flex min-h-screen w-full flex-col bg-black/[0.44] px-6 py-20">
                  <div className=" flex flex-col">
                    <p className=" text-sm">The Wedding of</p>
                    <h1 className={cn(' text-[64px] leading-none', fontTitle)}>
                      Declan
                      <br />&<br />
                      Aideen
                    </h1>
                    <p className=" text-sm">12 Desember 2024</p>
                    <div className=" mt-4 flex items-center gap-4 ">
                      <div className="flex flex-col space-y-1 text-center leading-none">
                        <p>12</p>
                        <p>Hari</p>
                      </div>
                      <div className="flex flex-col space-y-1 text-center leading-none">
                        <p>12</p>
                        <p>Jam</p>
                      </div>
                      <div className="flex flex-col space-y-1 text-center leading-none">
                        <p>12</p>
                        <p>Menit</p>
                      </div>
                      <div className="flex flex-col space-y-1 text-center leading-none">
                        <p>12</p>
                        <p>Detik</p>
                      </div>
                    </div>
                  </div>

                  <div className=" mx-auto mt-auto flex h-[152.5px] w-[336px] items-center justify-center rounded-3xl bg-[#5A3521]/60 p-6">
                    <p className=" text-center text-sm">
                      Matius 19:6 &quot;Demikianlah mereka bukan lagi dua,
                      melainkan satu. Karena itu, apa yang telah dipersatukan
                      Allah, tidak boleh diceraikan manusia.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="couple">
              <div className=" w-full bg-[url(/images/dummy/dummy-4.jpeg)] bg-cover bg-center">
                <div className=" relative h-full w-full bg-[#271B11]/75 px-6 py-16 pb-[172px]">
                  <div className=" absolute top-[255px]">
                    <div className=" mt-4 h-[2px] w-[112px] bg-white"></div>
                    <div className=" -mt-4 ml-4 h-[112px] w-[2px] bg-white"></div>
                  </div>
                  <div className=" absolute bottom-[60px] right-[40px]">
                    <div className=" -mb-4 ml-auto h-[112px] w-[2px] bg-white"></div>
                    <div className=" -mr-4 h-[2px] w-[112px] bg-white"></div>
                  </div>
                  <div className=" relative ml-auto h-[256px] w-[228px]">
                    <Image
                      src="/images/dummy/dummy-11.jpeg"
                      fill
                      alt="groom"
                      className=" object-cover object-center"
                    />
                  </div>
                  <div className=" ml-12">
                    <h1 className={cn(fontTitle, 'text-[56px]')}>
                      Declan Hornet
                    </h1>
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
              <div className=" w-full bg-[url(/images/dummy/dummy-3.jpeg)] bg-cover bg-center">
                <div className=" relative h-full w-full bg-[#271B11]/75 px-6 py-16 pb-[172px]">
                  <div className=" absolute right-6 top-[255px]">
                    <div className=" mt-4 h-[2px] w-[112px] bg-white"></div>
                    <div className=" -mt-4 ml-auto mr-4 h-[112px] w-[2px] bg-white"></div>
                  </div>
                  <div className=" absolute bottom-[60px] left-[40px]">
                    <div className=" -mb-4 mr-auto h-[112px] w-[2px] bg-white"></div>
                    <div className=" -ml-4 h-[2px] w-[112px] bg-white"></div>
                  </div>
                  <div className=" relative h-[256px] w-[228px]">
                    <Image
                      src="/images/dummy/dummy-12.jpeg"
                      fill
                      alt="groom"
                      className=" object-cover object-center"
                    />
                  </div>
                  <div className=" mr-12 text-end">
                    <h1 className={cn(fontTitle, 'text-[56px]')}>
                      Aideen Johanson
                    </h1>
                    <div className=" text-sm">
                      <p className="">Putra Sulung dari</p>
                      <p className="">Bapak Chris Johanson</p>
                      <p className="">dan Ibu Susan Johanson</p>
                      <div className="flex items-center justify-end gap-1">
                        <SiInstagram />
                        <p className="">aideenjn</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="story">
              <div className=" w-full bg-[url(/images/dummy/dummy-6.jpeg)] bg-cover bg-center">
                <div className=" w-full bg-[#271B11]/90 px-12 py-20">
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

            <section id="gallery">
              <div className=" w-full bg-[#271B11] px-[30px] py-20 ">
                <div className="flex flex-col text-center">
                  <h1 className={cn(' text-[64px]', fontTitle)}>Our Moment</h1>
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

            <section id="event">
              <div className=" relative flex h-full w-full flex-col items-center justify-center gap-6 bg-[#D8A783] px-12 py-20 text-[#271B11]">
                <div className=" absolute right-10 top-10">
                  <div className=" -mr-4 h-[2px] w-[112px] bg-[#271B11]"></div>
                  <div className=" -mt-4 ml-auto h-[112px] w-[2px] bg-[#271B11]"></div>
                </div>
                <div className=" absolute bottom-10 left-10">
                  <div className=" -mb-4 h-[112px] w-[2px] bg-[#271B11]"></div>
                  <div className=" -ml-4 h-[2px] w-[112px] bg-[#271B11]"></div>
                </div>
                <p className=" text-center text-sm">
                  Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara
                  pernikahan kami yang akan dilaksanakan pada :
                </p>
                <div className=" flex h-[164px] w-[255px] flex-col items-center justify-center  text-center">
                  <h1 className={cn(' text-3xl font-semibold')}>Akad Nikah</h1>
                  <p className=" text-sm">Minggu, 12 Desember 2024</p>
                  <p className=" text-sm">Pukul 08:00 WIB</p>
                  <p className=" text-sm">
                    Tempat : Lapangan Voli RW 10 Perumahan Sukamaju
                  </p>
                </div>
                <div className=" flex h-[164px] w-[255px] flex-col items-center justify-center  text-center">
                  <h1 className={cn(' text-3xl font-semibold')}>Resepsi</h1>
                  <p className=" text-sm">Minggu, 12 Desember 2024</p>
                  <p className=" text-sm">Pukul 11:00 s/d Selesai</p>
                  <p className=" text-sm">
                    Tempat : Lapangan Voli RW 10 Perumahan Sukamaju
                  </p>
                </div>
              </div>
            </section>

            <section id="gift">
              <div className=" w-full bg-[#D8A783] px-10 py-20 pt-0 text-[#271B11]">
                <h1 className={cn(fontTitle, 'text-center text-[64px]')}>
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

                <div className=" mt-6 flex w-full flex-col bg-[#D48C34] p-4">
                  <div className=" relative text-sm">
                    <div className=" absolute right-0 top-0">
                      <Image
                        src="/images/logo-bca-white.png"
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
                  <hr className=" my-6" />
                  <div className=" relative text-sm">
                    <div className=" absolute right-0 top-0">
                      <Image
                        src="/images/logo-bri-white.png"
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

            <section id="wish">
              <div className=" w-full bg-[#271B11] px-12 py-20">
                <h1
                  className={cn(
                    ' text-center text-[64px] text-[#EBDEC8]',
                    fontTitle,
                  )}
                >
                  Wedding Wishes
                </h1>
                <div className=" mt-8 flex flex-col gap-4">
                  <Input
                    className=" rounded-none border-none bg-[#F5D5BE]"
                    placeholder="Nama Lengkap"
                  />
                  <Input
                    className=" rounded-none border-none bg-[#F5D5BE]"
                    placeholder="Alamat"
                  />
                  <Textarea
                    className=" rounded-none border-none bg-[#F5D5BE]"
                    placeholder="Ucapan"
                  />
                  <Button className=" rounded-none bg-[#D48C34] text-[#fff]">
                    Kirim
                  </Button>
                </div>

                <div className=" mt-8 flex flex-col gap-6">
                  <div className=" space-y-2 border-b border-b-[#F5D5BE] pb-2.5 text-[#F5D5BE]">
                    <>
                      <h1 className=" font-bold">Apdul</h1>
                      <p className=" text-sm">di Bandung</p>
                    </>
                    <p className=" text-sm">
                      “Semoga lancar sampai hari H dan menjadi keluarga yang
                      samawa, aamiin..”
                    </p>
                  </div>
                  <div className=" space-y-2 border-b border-b-[#F5D5BE] pb-2.5 text-[#F5D5BE]">
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
              <div className=" w-full bg-[#271B11] py-6 pb-20 text-center">
                <p className=" text-xs text-[#F5D5BE]">Powered by</p>
                <h1 className="">Momentus</h1>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <SiWhatsapp
                    className=" text-[#F5D5BE]"
                    size={12}
                  />
                  <SiInstagram
                    className=" text-[#F5D5BE]"
                    size={12}
                  />
                  <SiFacebook
                    className=" text-[#F5D5BE]"
                    size={12}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
