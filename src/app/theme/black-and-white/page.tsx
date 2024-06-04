'use client';

import BackgroundMusic from '@/components/theme/shared/background-music';
import InvitationGallery from '@/components/theme/shared/invitation-gallery';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { INVITATION_GALLERIES_FAKER } from '@/constant/faker.constant';
import {
  abhayaLibre,
  italianno,
  jost,
  judson,
  theNautigal,
} from '@/constant/font.constant';
import useScrollspy from '@/hooks/use-scroll-spy';
import { cn } from '@/lib/utils';
import {
  Calendar,
  Copy,
  Edit,
  GalleryFavorite,
  Lovely,
  Magicpen,
} from 'iconsax-react';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';

export default function GreenCurvaNord() {
  const fontTitle = italianno.className;

  const navigations = [
    {
      icon: Lovely,
      label: 'Pasangan',
      target: 'couple',
    },
    {
      icon: Calendar,
      label: 'Acara',
      target: 'event',
    },
    {
      icon: Magicpen,
      label: 'Kisah Cinta',
      target: 'story',
    },
    {
      icon: GalleryFavorite,
      label: 'Galeri',
      target: 'gallery',
    },
    {
      icon: Edit,
      label: 'Ucapan',
      target: 'wish',
    },
  ];

  const activeId = useScrollspy(
    navigations.map((item) => item.target),
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
    <div className={cn(jost.className, `tracking-normal text-black`)}>
      {/* begin: cover */}
      <div
        className={cn(
          ' fixed inset-0 z-[9999] h-screen w-full bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center text-white transition-all duration-1000',
          { ' -translate-y-full opacity-0': !showCover },
        )}
      >
        <div className=" flex h-full w-full flex-col items-center justify-center bg-black/60 p-20">
          <div className=" text-center">
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
            <p className=" max-w-[256px]">
              Kami berharap anda menjadi bagian dari hari istimewa kami
            </p>
            <div className=" mt-6">
              <Button
                className=" rounded-full bg-black px-6 hover:bg-black/90"
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
        <div className=" fixed hidden h-screen w-[calc(100%-430px)] flex-1 bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center text-white lg:block">
          <div className=" flex h-full w-full items-center justify-center bg-gradient-to-b from-black/60 p-20">
            <div className="flex flex-col items-center">
              <h1 className={cn(fontTitle, 'text-[56px]')}>Rachel & Ross</h1>
            </div>
          </div>
        </div>
        {/* end: left */}
        <div className=" flex w-full justify-center bg-white text-black lg:justify-end">
          {/* <div className=" fixed block h-screen  w-full bg-[url(/images/dummy/dummy-7.jpeg)] bg-cover bg-center lg:hidden">
            <div className=" h-full w-full bg-[#EBDEC8]/60 backdrop-blur-lg" />
          </div> */}
          <div className=" z-[998] min-h-screen w-full sm:w-[430px]">
            <div className=" fixed bottom-4 right-1/2 z-[999] flex translate-x-1/2 gap-1 rounded-full bg-black/25 p-1 shadow-lg backdrop-blur-md lg:right-[215px]">
              {navigations.map((navigation) => (
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
                    <h1 className={cn(' text-[64px]', fontTitle)}>
                      Rachel & Ross
                    </h1>
                    <p className=" text-sm">12 Desember 2024</p>
                    <div className=" mt-4 flex items-center justify-center gap-4 ">
                      <div className="flex h-[88px] w-16 flex-col items-center justify-center border border-white text-center">
                        <p>12</p>
                        <p>Hari</p>
                      </div>
                      <div className="flex h-[88px] w-16 flex-col items-center justify-center border border-white text-center">
                        <p>12</p>
                        <p>Jam</p>
                      </div>
                      <div className="flex h-[88px] w-16 flex-col items-center justify-center border border-white text-center">
                        <p>12</p>
                        <p>Menit</p>
                      </div>
                      <div className="flex h-[88px] w-16 flex-col items-center justify-center border border-white text-center">
                        <p>12</p>
                        <p>Detik</p>
                      </div>
                    </div>
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
                  <h1 className={cn(fontTitle, 'text-[56px]')}>The Bride</h1>
                  <div className="flex gap-4">
                    <div className=" relative h-[230px] w-[210px]">
                      <Image
                        src="/images/dummy/dummy-12.jpeg"
                        fill
                        alt="bride"
                        className=" object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h1 className={cn(fontTitle, 'text-[46px] leading-none')}>
                        Rachel Taylor
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
                <div className="flex flex-col">
                  <h1 className={cn(fontTitle, 'text-end text-[56px]')}>
                    The Groom
                  </h1>
                  <div className="flex gap-4">
                    <div className="flex flex-1 flex-col items-end text-end">
                      <h1 className={cn(fontTitle, 'text-[46px] leading-none')}>
                        Ross Chamberlain
                      </h1>
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
                    <div className=" relative h-[230px] w-[210px]">
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

            <section id="story">
              <div className=" w-full bg-[url(/images/dummy/dummy-6.jpeg)] bg-cover bg-center text-white">
                <div className=" w-full bg-black/80 px-12 py-20">
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

            <section id="gift">
              <div className=" w-full px-10 py-20 pt-0 text-[#271B11]">
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
